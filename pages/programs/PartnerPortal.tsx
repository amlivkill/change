
import React, { useState } from 'react';

const PartnerPortal: React.FC = () => {
  const [land, setLand] = useState(100);
  const carbonInvestment = land * 50000;
  const credits = land * 5;
  const annualIncome = credits * 1200;
  const roi = (annualIncome / carbonInvestment) * 100;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <header className="bg-blue-800 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
           <h1 className="text-4xl md:text-6xl font-bold mb-4">CSR & Investment Portal</h1>
           <p className="text-xl text-blue-100 font-light">ESG Funding • Carbon Finance • Rural Growth • Tech Enablement</p>
           <button className="mt-8 bg-white text-blue-800 px-8 py-3 rounded-full font-bold shadow-xl hover:bg-blue-50 transition-colors">Partner With Us →</button>
        </div>
      </header>

      {/* Impact Stats */}
      <section className="py-12 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
             {[
               { label: "Farmer Income", val: "₹2.1 Cr+" },
               { label: "CO₂ Sequestered", val: "15K Tons" },
               { label: "Market Value", val: "₹8.5 Cr" },
               { label: "Fund Efficiency", val: "98%" }
             ].map((s, idx) => (
               <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800 text-center">
                  <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">{s.val}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{s.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold dark:text-white mb-4">📈 Projected ROI Calculator</h2>
            <p className="text-slate-500">Estimate your financial + social returns before partnering.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carbon ROI */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-2">🌳 Carbon ROI</h3>
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase">Land Area (Hectares)</label>
                  <input 
                    type="range" min="10" max="500" step="10" 
                    value={land} onChange={(e) => setLand(parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600 mt-2"
                  />
                  <div className="text-right font-bold text-slate-700 dark:text-white text-sm mt-1">{land} Ha</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl space-y-3">
                  <div className="flex justify-between text-xs"><span>Investment:</span><span className="font-bold">₹{carbonInvestment.toLocaleString('en-IN')}</span></div>
                  <div className="flex justify-between text-xs"><span>Annual Income:</span><span className="font-bold text-emerald-600">₹{annualIncome.toLocaleString('en-IN')}</span></div>
                  <div className="flex justify-between text-sm border-t border-slate-200 dark:border-slate-700 pt-3">
                    <span className="font-bold">Estimated ROI:</span>
                    <span className="font-bold text-blue-600">{roi.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Agri Processing */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-bold text-orange-600 mb-6 flex items-center gap-2">🏭 Agri Unit</h3>
              <p className="text-sm text-slate-500 mb-6 italic">Investment in processing Jhangora, Rajma, and Honey.</p>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                  <div className="text-xs font-bold text-slate-400 mb-1">Scale: Medium</div>
                  <div className="flex justify-between text-sm"><span>Investment:</span><span className="font-bold">₹50 Lakh</span></div>
                  <div className="flex justify-between text-sm mt-2"><span>Annual Rev:</span><span className="font-bold text-orange-600">₹20 Lakh</span></div>
                </div>
                <div className="text-center font-bold text-blue-700 p-2">Payback: 2.5 Years</div>
              </div>
            </div>

            {/* Solar Microgrid */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2">⚡ Solar Grid</h3>
              <p className="text-sm text-slate-500 mb-6 italic">Powering rural enterprises and local irrigation.</p>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                  <div className="text-xs font-bold text-slate-400 mb-1">Scale: 3 Villages</div>
                  <div className="flex justify-between text-sm"><span>Investment:</span><span className="font-bold">₹75 Lakh</span></div>
                  <div className="flex justify-between text-sm mt-2"><span>Annual Savings:</span><span className="font-bold text-blue-600">₹18 Lakh</span></div>
                </div>
                <div className="text-center font-bold text-blue-700 p-2">Annual ROI: 24%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Forms */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <h2 className="text-3xl font-bold mb-8">Ready to Impact Uttarakhand?</h2>
           <p className="text-blue-100 mb-12 leading-relaxed">Our team handles full implementation, monitoring, and compliance reporting (80G, CSR-1). Let's build a sustainable Himalayan economy together.</p>
           <button className="bg-white text-blue-900 px-12 py-4 rounded-full font-bold hover:scale-105 transition-transform">Request Partnership Deck</button>
        </div>
      </section>
    </div>
  );
};

export default PartnerPortal;
