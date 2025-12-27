
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ClimateFunds: React.FC = () => {
  const [credits, setCredits] = useState(1000);
  const [price, setPrice] = useState(15);
  
  const totalCost = credits * price;
  const inrCost = Math.round(totalCost * 83);

  return (
    <div className="min-h-screen bg-emerald-50 dark:bg-slate-950 transition-colors duration-300">
      <header className="bg-emerald-800 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
           <h1 className="text-4xl md:text-6xl font-bold mb-4">Verified Himalayan Carbon Credits</h1>
           <p className="text-xl text-emerald-100 font-light">Verra Verified • AI + Satellite MRV • 10-Year Guarantee • Offtake Guaranteed</p>
           <button className="mt-8 bg-white text-emerald-800 px-8 py-3 rounded-full font-bold shadow-xl hover:bg-emerald-50 transition-colors">Become a Buyer →</button>
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
             {[
               { label: "CO₂ Sequestered", val: "15K+ Tons" },
               { label: "Verification", val: "Verra/VCS" },
               { label: "Contract Period", val: "10 Years" },
               { label: "MRV Technology", val: "AI + Satellite" }
             ].map((s, idx) => (
               <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-800 text-center">
                  <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{s.val}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{s.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl border border-emerald-100 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-emerald-900 dark:text-white mb-8">📊 Carbon Credit Calculator</h2>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-widest">Credit Quantity (Tons CO₂)</label>
                  <input 
                    type="range" min="100" max="10000" step="100" 
                    value={credits} onChange={(e) => setCredits(parseInt(e.target.value))}
                    className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="text-right text-emerald-600 font-bold mt-2">{credits.toLocaleString()} Tons</div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-widest">Credit Type / Price</label>
                  <select 
                    value={price} onChange={(e) => setPrice(parseInt(e.target.value))}
                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value={12}>Standard ($12)</option>
                    <option value={15}>Premium - Verra Verified ($15)</option>
                    <option value={18}>Gold Standard + Community Impact ($18)</option>
                  </select>
                </div>
                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl space-y-4">
                  <div className="flex justify-between"><span>Total Cost:</span><span className="font-bold">${totalCost.toLocaleString()}</span></div>
                  <div className="flex justify-between text-lg text-emerald-700 dark:text-emerald-400 border-t border-emerald-200 dark:border-emerald-800 pt-4">
                    <span className="font-bold">Approx. INR:</span>
                    <span className="font-bold">₹{inrCost.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <button className="w-full bg-emerald-700 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-colors shadow-lg">Submit Offtake Request</button>
              </div>
            </div>

            <div className="space-y-8">
               <div className="bg-emerald-900 text-white p-10 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Why Purchase From CHANGE?</h3>
                  <ul className="space-y-4">
                    {[
                      "VCS (Verified Carbon Standard) compliant",
                      "Real-time satellite MRV verification",
                      "Direct payments to 60%+ smallholder farmers",
                      "Legal contracts with 10-year guarantees",
                      "ESG reporting ready datasets"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-emerald-100">
                        <span className="text-emerald-400 font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl border border-emerald-100 dark:border-slate-800">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Climate Finance Models</h3>
                 <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                       <div className="font-bold text-emerald-700 dark:text-emerald-400">Direct Purchase (Spot)</div>
                       <div className="text-xs text-slate-500 mt-1">Immediate retirement of credits for annual sustainability reports.</div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                       <div className="font-bold text-emerald-700 dark:text-emerald-400">Forward Offtake Agreements</div>
                       <div className="text-xs text-slate-500 mt-1">Lock prices for 5-10 years to ensure long-term net-zero compliance.</div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                       <div className="font-bold text-emerald-700 dark:text-emerald-400">Project Co-Investment</div>
                       <div className="text-xs text-slate-500 mt-1">Invest in new agroforestry plots and receive the resulting credits.</div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClimateFunds;
