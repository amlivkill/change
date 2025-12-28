
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { GoogleGenAI, Modality } from "@google/genai";

// Audio Decoding Utilities (PCM Raw Data)
function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

interface Message {
  role: 'user' | 'model';
  text: string;
  isAudioLoading?: boolean;
  audioBuffer?: AudioBuffer;
}

const ChatBot: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'hi' | 'en' | null>(() => {
    const saved = localStorage.getItem('chatbot_lang');
    return (saved as 'hi' | 'en') || null;
  });
  const [userRole, setUserRole] = useState<'farmer' | 'donor' | 'general' | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

  // Localization Dictionary
  const labels = useMemo(() => ({
    hi: {
      placeholder: "Apna sawaal yahan likhiye...",
      disclaimer: "Yeh AI sahayak sirf jaankari ke liye hai. Final decisions CHANGE Foundation ki team dwara liye jaate hain.",
      greeting: "Namaste 🙏\nMain CHANGE Foundation ka AI sahayak hoon.\n\nMain aapko in baaton mein madad kar sakta hoon:\n• Volunteering\n• Donation\n• Hamare programs\n• Partnership jaankari",
      stopAudio: "Band karein",
      listen: "Sunein",
      subtitle: "Aapki madad ke liye 24×7",
      actions: [
        { label: "🌾 Kisan madad", msg: "Main kisan hoon, kheti aur yojna ki jaankari chahiye.", role: 'farmer' },
        { label: "🤝 Donor / CSR", msg: "I want information about CSR and impact reporting.", role: 'donor' },
        { label: "🌱 Volunteer", msg: "Main volunteer kaise ban sakta hoon?" },
        { label: "📞 Team se baat", msg: "Mujhe team se baat karni hai." }
      ]
    },
    en: {
      placeholder: "Type your question here...",
      disclaimer: "This AI assistant is for informational purposes only. Final decisions are made by the CHANGE Foundation team.",
      greeting: "Namaste 🙏\nI am the AI Assistant for CHANGE Foundation.\n\nI can help you with:\n• Volunteering opportunities\n• Donations and CSR\n• Our programs\n• Partnership details",
      stopAudio: "Stop",
      listen: "Listen",
      subtitle: "Here to help 24/7",
      actions: [
        { label: "🌾 Farmer Help", msg: "I am a farmer and I need info on crops and schemes.", role: 'farmer' },
        { label: "🤝 Donor / CSR", msg: "I want information about CSR partnership and impact reporting.", role: 'donor' },
        { label: "🌱 Volunteer", msg: "How can I become a volunteer?" },
        { label: "📞 Contact Team", msg: "I want to talk to the team." }
      ]
    }
  }), []);

  // Sync language with localStorage
  const handleSetLanguage = (lang: 'hi' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('chatbot_lang', lang);
    // Reset conversation on language change to ensure context consistency
    setMessages([{ role: 'model', text: labels[lang].greeting }]);
  };

  useEffect(() => {
    if (language && messages.length === 0) {
      setMessages([{ role: 'model', text: labels[language].greeting }]);
    }
  }, [language, labels, messages.length]);

  useEffect(() => {
    const highIntentPages = ['/contact', '/programs', '/programs/farmer-book', '/programs/climate-funds', '/programs/partner-portal'];
    if (highIntentPages.includes(location.pathname)) {
      setIsOpen(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const stopAudio = () => {
    if (sourceNodeRef.current) {
      sourceNodeRef.current.stop();
      sourceNodeRef.current = null;
    }
    setCurrentlyPlaying(null);
  };

  const playVoice = async (index: number, text: string) => {
    if (currentlyPlaying === index) {
      stopAudio();
      return;
    }
    stopAudio();
    
    if (messages[index].audioBuffer) {
      startPlayback(index, messages[index].audioBuffer!);
      return;
    }

    setMessages(prev => prev.map((m, i) => i === index ? { ...m, isAudioLoading: true } : m));
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: text }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        const audioBuffer = await decodeAudioData(
          decodeBase64(base64Audio),
          audioContextRef.current,
          24000,
          1
        );
        setMessages(prev => prev.map((m, i) => i === index ? { ...m, audioBuffer, isAudioLoading: false } : m));
        startPlayback(index, audioBuffer);
      }
    } catch (error) {
      setMessages(prev => prev.map((m, i) => i === index ? { ...m, isAudioLoading: false } : m));
    }
  };

  const startPlayback = (index: number, buffer: AudioBuffer) => {
    if (!audioContextRef.current) return;
    const source = audioContextRef.current.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContextRef.current.destination);
    source.onended = () => setCurrentlyPlaying(null);
    sourceNodeRef.current = source;
    source.start(0);
    setCurrentlyPlaying(index);
  };

  const handleSend = async (customMessage?: string, roleOverride?: 'farmer' | 'donor') => {
    const userText = customMessage || input;
    if (!userText.trim() || isLoading || !language) return;

    if (roleOverride) setUserRole(roleOverride);

    const userMessage = userText.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);
    stopAudio();

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `You are "CHANGE Sahayak", the official AI Assistant of CHANGE Centre for Himalayan Agriculture and Nature Foundation. 

STRICT LANGUAGE RULE:
- Current Preference: ${language === 'hi' ? 'Hindi (Rural/Simple tone)' : 'English (Professional/Clear tone)'}.
- You MUST respond ONLY in the selected language. Do not mix them unless using standard technical terms.

ROLE-BASED MODES:
1. FARMER MODE (Kisan Sahayak):
- Persona: Helpful, respectful, uses simple terms.
- Topics: Rabi/Kharif/Zaid crops, govt schemes, training.
- MANDATORY SAFETY: "Yeh jaankari samanya anubhav par aadharit hai. Beej, dawa aur khad ka final nirnay krishi vibhag se poochkar karein."

2. DONOR/CSR MODE:
- Persona: Data-driven, professional, focuses on impact metrics.
- Focus: Transparency, reaching villages, livelihood metrics.

STRICT BOUNDARIES:
- NO legal/financial advice.
- If unsure: "Is vishay par mere paas poori jankari nahi hai. Kripya humari team se sampark karein." (translated accordingly).`;

      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: { systemInstruction },
      });

      const responseStream = await chat.sendMessageStream({ message: userMessage });
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of responseStream) {
        fullResponse += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', text: fullResponse };
          return newMessages;
        });
      }

      if (isVoiceEnabled) {
        setMessages(prev => {
          const lastIdx = prev.length - 1;
          setTimeout(() => playVoice(lastIdx, fullResponse), 500);
          return prev;
        });
      }
    } catch (error) {
      const errorMsg = language === 'hi' ? 'Maaf kijiye, humare system mein kuch samasya hai.' : 'Sorry, our system is experiencing issues.';
      setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-[360px] md:w-[420px] h-[680px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-500">
          
          {/* Header */}
          <div className="bg-[#1a5d48] dark:bg-emerald-950 p-6 text-white flex justify-between items-center relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                <svg viewBox="0 0 100 100" className="w-8 h-8 fill-white">
                  <path d="M20 70 L40 40 L60 65 L80 35 L90 70 Z" />
                  <circle cx="50" cy="25" r="8" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none mb-1">CHANGE Sahayak</h3>
                <span className="text-[10px] text-emerald-200 uppercase tracking-widest font-bold">
                  {language ? labels[language].subtitle : 'Himalayan NGO AI'}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              {language && (
                <div className="flex bg-black/20 rounded-lg p-1 border border-white/10">
                  <button onClick={() => handleSetLanguage('hi')} className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${language === 'hi' ? 'bg-white text-[#1a5d48]' : 'text-white/60 hover:text-white'}`}>HI</button>
                  <button onClick={() => handleSetLanguage('en')} className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${language === 'en' ? 'bg-white text-[#1a5d48]' : 'text-white/60 hover:text-white'}`}>EN</button>
                </div>
              )}
              <button onClick={() => setIsVoiceEnabled(!isVoiceEnabled)} className={`p-2 rounded-xl transition-all ${isVoiceEnabled ? 'bg-emerald-500/30 text-emerald-200' : 'bg-slate-800/40 text-slate-400'}`}>
                {isVoiceEnabled ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.5c-1.105 0-2 .895-2 2v5c0 1.105.895 2 2 2h2.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM15.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM19 12c0-4.28-2.42-7.99-6-9.82v1.9c2.58 1.56 4.33 4.38 4.33 7.92 0 3.54-1.75 6.36-4.33 7.92v1.9c3.58-1.83 6-5.54 6-9.82z"/></svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.42-7.99-6-9.82v2.09c2.58 1.56 4.33 4.38 4.33 7.92zm-12.44 3H4.5c-1.105 0-2-.895-2-2v-5c0-1.105.895-2 2-2h2.44l4.5-4.5C12.384 1.555 14 2.224 14 3.56v1.94L3.27 16.27 4.56 17.56l13.17-13.17-1.29-1.29L12 7.83V3.56c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5zm5.44 4.5c0 1.336-1.616-2.005-2.56 1.06l-2.04-2.04 4.6-4.6v5.58z"/></svg>
                )}
              </button>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>

          {!language ? (
            /* Language Selection Splash */
            <div className="flex-grow flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-950 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">🌍</div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Bhasha Chunein / Choose Language</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed">Please select your preferred language to continue conversation with CHANGE Sahayak.</p>
              
              <div className="grid grid-cols-1 gap-4 w-full">
                <button 
                  onClick={() => handleSetLanguage('hi')}
                  className="w-full bg-[#1a5d48] hover:bg-emerald-800 text-white p-6 rounded-3xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-all flex items-center justify-between"
                >
                  <span>Hindi (हिन्दी)</span>
                  <span className="text-2xl">🇮🇳</span>
                </button>
                <button 
                  onClick={() => handleSetLanguage('en')}
                  className="w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-6 rounded-3xl font-bold text-lg shadow-lg hover:scale-[1.02] border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-between"
                >
                  <span>English</span>
                  <span className="text-2xl">🇬🇧</span>
                </button>
              </div>
            </div>
          ) : (
            /* Chat Interface */
            <>
              <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-6 bg-slate-50 dark:bg-slate-950 scroll-smooth">
                {messages.map((m, i) => (
                  <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`group relative max-w-[92%] p-5 rounded-[2rem] text-[15px] leading-relaxed shadow-sm transition-all ${
                      m.role === 'user' ? 'bg-[#1a5d48] text-white rounded-tr-none' : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-800 rounded-tl-none'
                    }`}>
                      <div className="whitespace-pre-wrap">{m.text}</div>
                      {m.role === 'model' && m.text && (
                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <button onClick={() => playVoice(i, m.text)} className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl transition-all ${currentlyPlaying === i ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'}`}>
                            {m.isAudioLoading ? <div className="w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div> : currentlyPlaying === i ? <>{labels[language].stopAudio}</> : <>{labels[language].listen}</>}
                          </button>
                        </div>
                      )}
                      {m.role === 'model' && !m.text && isLoading && (
                        <div className="flex gap-2 py-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {!isLoading && (
                  <div className="flex flex-wrap gap-2 pt-2 animate-in fade-in slide-in-from-bottom-2 duration-700">
                    {labels[language].actions.map((action, i) => (
                      <button key={i} onClick={() => handleSend(action.msg, action.role as any)} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2.5 rounded-2xl text-[13px] font-bold text-[#1a5d48] dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all shadow-sm active:scale-95">{action.label}</button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <div className="flex gap-2 bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl shadow-inner focus-within:ring-2 focus-within:ring-emerald-500 transition-all mb-4">
                  <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder={labels[language].placeholder} className="flex-grow bg-transparent px-4 py-3 text-[15px] focus:outline-none dark:text-white" />
                  <button onClick={() => handleSend()} disabled={isLoading || !input.trim()} className="bg-[#1a5d48] dark:bg-emerald-700 text-white p-3.5 rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-40 shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  </button>
                </div>
                <div className="text-center px-4"><p className="text-[10px] text-slate-400 leading-tight font-medium">{labels[language].disclaimer}</p></div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Launcher */}
      <div className="flex flex-col items-end gap-3 group">
        {!isOpen && (
          <div className="bg-white dark:bg-slate-800 text-[#1a5d48] dark:text-emerald-400 px-5 py-2.5 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 text-sm font-bold animate-in fade-in slide-in-from-right-4 duration-700 group-hover:scale-105 transition-transform pointer-events-none">
            {language === 'hi' ? 'Madad chahiye? Poochiye 👋' : (!language ? 'Namaste 👋' : 'Need help? Ask here 👋')}
          </div>
        )}
        <button onClick={() => setIsOpen(!isOpen)} className={`w-18 h-18 md:w-20 md:h-20 rounded-3xl shadow-[0_15px_40px_-10px_rgba(26,93,72,0.4)] flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90 relative overflow-hidden ${isOpen ? 'bg-white dark:bg-slate-800 text-slate-600' : 'bg-[#1a5d48] text-white'}`}>
          {isOpen ? <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg> : <div className="relative"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg><div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#1a5d48] animate-ping"></div></div>}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
