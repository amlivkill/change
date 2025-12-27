
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HimalayanLivelihood: React.FC = () => {
  const [context, setContext] = useState<'problem' | 'solution'>('problem');

  const content = {
    problem: {
      title: "चुनौती (The Crisis)",
      text: "उत्तराखंड की पहाड़ी अर्थव्यवस्था कृषि पर निर्भर है, लेकिन कम उत्पादकता, उच्च पलायन (Migration), बाजार तक पहुंच की कमी और बढ़ती जलवायु परिवर्तनशीलता के कारण यह संकट में है। परिवारों की आय स्थिर है और युवा गांवों से दूर जा रहे हैं।",
      accent: "text-red-600 dark:text-red-400",
      bg: "bg-red-50 dark:bg-red-900/10"
    },
    solution: {
      title: "समाधान (The Solution)",
      text: "CHANGE का उद्देश्य पहाड़ी फसलों (Millet/Pulses), महिला स्वयं सहायता समूहों (SHGs) और ग्राम उद्यमों को मुख्यधारा की अर्थव्यवस्था से जोड़ना है। हम Climate-Smart खेती और डिजिटल मार्केट लिंकेज के माध्यम से स्थायी आय में 20-40% की वृद्धि का लक्ष्य रखते हैं।",
      accent: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/10"
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      {/* Hero Header */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 px-4 transition-colors">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
             <Link to="/programs" className="hover:text-emerald-600 transition-colors">Programs</Link>
             <span>/</span>
             <span className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-[10px]">2025 Initiative</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
             Himalayan Livelihood & <br />
             <span className="text-emerald-700 dark:text-emerald-400">Agriculture Strengthening</span>
          </h1>

          {/* Crisis/Solution Toggle */}
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg flex mb-12 border border-slate-100 dark:border-slate-700">
            <button 
              onClick={() => setContext('problem')}
              className={`flex-1 py-3 px-6 rounded-full font-bold text-sm transition-all ${context === 'problem' ? 'bg-red-600 text-white shadow-md' : 'text-slate-500 hover:text-red-500'}`}
            >
              The Crisis
            </button>
            <button 
              onClick={() => setContext('solution')}
              className={`flex-1 py-3 px-6 rounded-full font-bold text-sm transition-all ${context === 'solution' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500 hover:text-emerald-500'}`}
            >
              The Solution
            </button>
          </div>

          <div className={`p-10 rounded-3xl transition-all duration-500 ${content[context].bg} border border-white/20 dark:border-black/20`}>
             <h2 className={`text-2xl font-bold mb-6 ${content[context].accent}`}>{content[context].title}</h2>
             <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-light italic">
                "{content[context].text}"
             </p>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 px-4 bg-white dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl">
           <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Our Strategy: 5 Core Pillars</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Climate-Smart Demo Plots", icon: "🌱", desc: "50 Model plots demonstrating Mandua, Jhangora, and Pulses cultivation using scientific methods." },
                { title: "Women-led Enterprises", icon: "👩‍🌾", desc: "Activating 3,000+ micro-enterprises focused on processing, packaging, and local food value addition." },
                { title: "Digital Market Linkage", icon: "📱", desc: "CHANGE farmer platform for aggregation, data management, and direct market access." },
                { title: "Post-Harvest Infra", icon: "🏭", desc: "Storage and processing centers to reduce wastage and increase shelf life of produce." },
                { title: "Capacity Building", icon: "🎓", desc: "Training 10,000 farmers in Good Agricultural Practices (GAP) and financial literacy." }
              ].map((pill, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500 transition-colors">
                  <div className="text-4xl mb-4">{pill.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{pill.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{pill.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Budget & Impact Summary */}
      <section className="py-24 px-4 bg-emerald-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Funding Requirement</h2>
              <p className="text-emerald-100/80 mb-8 leading-relaxed">
                We are seeking CSR partners for individual blocks in Tehri and Rudraprayag. Each block intervention runs for 12 months.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-emerald-800 pb-2">
                  <span className="font-bold">Budget per Block</span>
                  <span className="text-amber-400 font-bold">₹37,00,000</span>
                </div>
                <div className="flex justify-between border-b border-emerald-800 pb-2">
                  <span className="font-bold">Families Covered</span>
                  <span className="text-amber-400 font-bold">2,000</span>
                </div>
                <div className="flex justify-between border-b border-emerald-800 pb-2">
                  <span className="font-bold">Women Entrepreneurs</span>
                  <span className="text-amber-400 font-bold">600</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
               <h3 className="text-xl font-bold mb-6 text-emerald-200">Execution Timeline</h3>
               <div className="space-y-6">
                 {[
                   { q: "M1-M3", label: "Mobilization & Group Formation" },
                   { q: "M4-M6", label: "Inputs & Climate-Smart Training" },
                   { q: "M7-M9", label: "Harvesting & Value Addition" },
                   { q: "M10-M12", label: "Market Linkage & Audit" }
                 ].map((t, idx) => (
                   <div key={idx} className="flex gap-4">
                     <div className="w-16 font-bold text-amber-400">{t.q}</div>
                     <div className="text-sm">{t.label}</div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
         <h2 className="text-3xl font-bold mb-8 dark:text-white">Ready to Partner?</h2>
         <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Contact our project management office for the full 40-page concept note and CSR compliance documentation.
         </p>
         <Link to="/contact" className="inline-block bg-emerald-700 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-800 transition-colors shadow-xl">
            Request Full Proposal
         </Link>
      </section>
    </div>
  );
};

export default HimalayanLivelihood;
