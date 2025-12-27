
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Namaste! I am your CHANGE AI assistant. How can I help you explore our Himalayan initiatives today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the official AI assistant for CHANGE (Centre for Himalayan Agriculture and Nature Foundation), a Section 8 Not-for-Profit based in Badshahi Thaul, Tehri Garhwal, Uttarakhand.

Your Persona: Professional, warm, helpful, and deeply knowledgeable about the Himalayan rural economy and sustainable development.

Your Knowledge Scope:
1. MISSION: Empowering rural Uttarakhand through sustainable agriculture, climate-resilient farming, and community-led enterprises.
2. PROGRAMS & PORTALS:
   - FarmerBook: Our flagship digital platform for supply chain transparency, connecting farmers directly to consumers and donors.
   - Climate Funds: Providing Verra-verified Carbon Credits and project finance using AI + Satellite MRV technology.
   - Partner Portal: Facilitating CSR and ESG investments with measurable ROI and impact tracking.
   - Farmer Community: Empowering local farmers with organic certification, contract farming, and AI-driven advisory tools.
   - GovTech: Assisting government departments in the tech-enabled implementation of schemes like NRLM, NREGA, and PM-KISAN.
   - NGO Foundations: Building strategic MoU partnerships for collective rural impact.
3. CONTEXT: Strictly stick to CHANGE's work and the context of Uttarakhand/Himalayas. If asked about unrelated topics, politely guide the conversation back to how CHANGE might address such challenges in a rural or agricultural context.
4. TONE: Use "Namaste" for greetings. Be encouraging to potential donors and implementation partners.

Response Format: Keep responses concise and use bullet points where helpful. Direct users to relevant sections of the website (e.g., "Visit our Climate Funds portal for details on carbon credits").`,
        },
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
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'I apologize, I am experiencing a connection issue. Please try again or reach us at info@change-uttarakhand.org.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[420px] h-[550px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#1a5d48] dark:bg-emerald-900 p-5 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm">CHANGE Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-emerald-200 uppercase tracking-widest font-semibold">Active Now</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/10 p-2 rounded-full transition-colors relative z-10"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div 
            ref={scrollRef} 
            className="flex-grow overflow-y-auto p-5 space-y-5 bg-slate-50 dark:bg-slate-950 scroll-smooth"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#1a5d48] text-white rounded-tr-none shadow-md' 
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                  {m.role === 'model' && m.text === '' && isLoading && (
                    <div className="flex gap-1 py-1">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How can I help with our programs?"
                className="flex-grow px-5 py-3 bg-slate-100 dark:bg-slate-800 dark:text-white rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all border-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-[#1a5d48] dark:bg-emerald-700 text-white p-3 rounded-2xl hover:bg-emerald-900 dark:hover:bg-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-900/20"
              >
                <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <span className="text-[9px] text-slate-400 dark:text-slate-600 uppercase tracking-tighter font-bold">CHANGE AI Portal</span>
              <span className="text-[9px] text-slate-300 dark:text-slate-700">•</span>
              <span className="text-[9px] text-slate-400 dark:text-slate-600 uppercase tracking-tighter font-bold text-center">Verified Responses</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 group overflow-hidden relative ${
          isOpen ? 'bg-slate-100 dark:bg-slate-800 text-slate-600' : 'bg-[#1a5d48] text-white'
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        <div className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-8 h-8 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
