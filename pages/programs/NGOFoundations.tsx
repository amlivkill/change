
import React from 'react';

const NGOFoundations: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <header className="bg-red-800 text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
           <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Strategic NGO Partnerships</h1>
           <p className="text-xl text-red-100 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
             Collective Impact • Shared Resources • Measurable Outcomes. Partner with CHANGE to scale your rural mission in Uttarakhand.
           </p>
           <button className="bg-white text-red-900 px-12 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-all">Sign MoU Today →</button>
        </div>
      </header>

      {/* Why Partner */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <h2 className="text-3xl font-bold mb-16 dark:text-white">Why Collaborate?</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { t: "Accelerated Impact", d: "Leverage our existing infrastructure, team, and tech to launch your programs instantly.", i: "🚀" },
               { t: "Resource Sharing", d: "Share field teams, training modules, and logistics to focus on your core expertise.", i: "🤝" },
               { t: "Measurable Results", d: "AI-driven impact measurement and real-time dashboards for transparent reporting.", i: "📊" }
             ].map((f, i) => (
               <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl border-t-4 border-red-600 transition-all hover:-translate-y-2">
                  <div className="text-5xl mb-6">{f.i}</div>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">{f.t}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.d}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Partnership Models</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "Implementation Partner", d: "You design & fund — we execute on ground in 100+ villages.", i: "🎯" },
                { t: "Resource Partner", d: "Share hubs, field staff, and data platforms on a cost-sharing basis.", i: "🧩" },
                { t: "Monitoring Partner", d: "Use our AI+Satellite MRV tools to measure your own program's impact.", i: "📊" }
              ].map((m, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 text-center">
                   <div className="text-4xl mb-4">{m.i}</div>
                   <h4 className="text-xl font-bold text-red-700 dark:text-red-400 mb-3">{m.t}</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400">{m.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
           <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Partner Voices</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { q: "We partnered with CHANGE for a 6-month natural farming pilot. Their tech-enabled approach sped up our reporting by 70%.", a: "Suman Sharma, Green Himalaya Foundation" },
                { q: "We had the funds but lacked rural reach. CHANGE helped us scale to 120 villages with zero overhead setup.", a: "Rajiv Mehta, Executive Director, BVS" }
              ].map((t, i) => (
                <div key={i} className="bg-red-50 dark:bg-red-900/10 p-10 rounded-3xl border-l-8 border-red-600 italic">
                   <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">"{t.q}"</p>
                   <p className="text-sm font-bold text-red-800 dark:text-red-400">— {t.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-20 bg-red-900 text-white text-center">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div><div className="text-4xl font-bold">37+</div><div className="text-xs uppercase tracking-widest mt-2 text-red-200">NGO Partners</div></div>
              <div><div className="text-4xl font-bold">₹4.2 Cr</div><div className="text-xs uppercase tracking-widest mt-2 text-red-200">Shared Funding</div></div>
              <div><div className="text-4xl font-bold">280%</div><div className="text-xs uppercase tracking-widest mt-2 text-red-200">Impact Growth</div></div>
              <div><div className="text-4xl font-bold">99%</div><div className="text-xs uppercase tracking-widest mt-2 text-red-200">MoU Renewal</div></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default NGOFoundations;
