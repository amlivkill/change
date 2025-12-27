
import React from 'react';

const GovTech: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <header className="bg-indigo-900 text-white py-24 px-4 text-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
           <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">CHANGE GovTech Portal</h1>
           <p className="text-xl text-indigo-200 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
             Tech-Enabled Implementation of PM Schemes: NRLM, NREGA, PM-KISAN & Natural Farming with AI + Satellite Monitoring.
           </p>
           <button className="bg-white text-indigo-900 px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-indigo-50 transition-all">Initiate MoU →</button>
        </div>
      </header>

      {/* Scheme Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Supported Schemes & Services</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { t: "PM-KISAN", d: "Beneficiary verification, payment tracking & de-duplication.", i: "🌾" },
               { t: "NRLM (DAY-NRLM)", d: "SHG formation, CLF monitoring, and bank linkage.", i: "👩‍🌾" },
               { t: "NREGA", d: "Work allotment, wage tracking & GPS quality audit.", i: "🔨" },
               { t: "Natural Farming", d: "Input tracking, organic certification & market link.", i: "🌿" }
             ].map((s, idx) => (
               <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border-t-4 border-indigo-600">
                  <div className="text-4xl mb-4">{s.i}</div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{s.t}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.d}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
           <h3 className="text-2xl font-bold text-center mb-12 text-indigo-400 tracking-widest uppercase">Real-Time MIS Dashboard Demo</h3>
           <div className="bg-black rounded-3xl p-8 font-mono text-sm border border-indigo-500/30 shadow-2xl overflow-x-auto">
              <div className="flex gap-2 mb-2 text-slate-500 border-b border-slate-800 pb-2">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-1">
                <div className="text-emerald-400">$ change-govtech --scheme nrlm --district "Tehri"</div>
                <div className="text-white">✅ Loading real-time data from 87 villages...</div>
                <div className="text-indigo-400">📊 SHGs Formed: 1,240 | Bank Linkage: ₹8.2 Cr</div>
                <div className="text-white">📈 Progress: 92% | Pending Actions: 3 Blocks</div>
                <div className="text-emerald-400">$ export --format pdf --quarter q1-2025</div>
                <div className="text-white">📁 Report saved: nrlm_tehri_q1_2025.pdf</div>
              </div>
           </div>
           <p className="text-center mt-6 text-slate-400 text-xs italic">*CLI representation. Actual dashboard features a modern graphical UI.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { t: "Speed", d: "Report generation reduced from days to minutes with auto-syncing field apps.", c: "text-green-600" },
               { t: "Transparency", d: "End-to-end audit trail with GPS and satellite proof for all field activities.", c: "text-blue-600" },
               { t: "Impact", d: "Data-driven decision making ensures budgets are utilized for maximum rural benefit.", c: "text-indigo-600" }
             ].map((b, i) => (
               <div key={i} className="text-center p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                  <h4 className={`text-2xl font-bold mb-4 ${b.c}`}>{b.t}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{b.d}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default GovTech;
