
import React, { useState } from 'react';

const FarmerCommunity: React.FC = () => {
  const [soil, setSoil] = useState('');
  const [showAdvice, setShowAdvice] = useState(false);
  const [land, setLand] = useState(5);
  const [trees, setTrees] = useState(100);

  const carbonIncome = Math.round((land * 2 + trees * 0.1) * 15 * 83);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <header className="bg-emerald-700 text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
           <h1 className="text-4xl md:text-6xl font-bold mb-4">किसानों का साथी</h1>
           <p className="text-xl text-emerald-100 font-light">ऑर्गेनिक खेती • AI सलाह • कार्बन क्रेडिट से आय • महिला सशक्तिकरण</p>
           <button className="mt-8 bg-white text-emerald-800 px-8 py-3 rounded-full font-bold shadow-xl hover:bg-emerald-50 transition-colors">अभी जुड़ें →</button>
        </div>
      </header>

      {/* Farmer Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold dark:text-white mb-4 tracking-tight">🤖 AI कृषि सलाहकार (Digital Tools)</h2>
            <p className="text-slate-500">उन्नत तकनीक के साथ हिमालयी खेती को बनाएं लाभदायक।</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Crop Advisor */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border-t-4 border-emerald-500">
               <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">🌾 फसल सुझाव</h3>
               <div className="space-y-4">
                  <select 
                    onChange={(e) => setSoil(e.target.value)}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm border-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">मिट्टी का प्रकार चुनें</option>
                    <option value="loam">दोमत मिट्टी (Loam)</option>
                    <option value="clay">चिकनी मिट्टी (Clay)</option>
                    <option value="hill">पहाड़ी मिट्टी (Himalayan Soil)</option>
                  </select>
                  <button 
                    onClick={() => soil && setShowAdvice(true)}
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors"
                  >सुझाव प्राप्त करें</button>
                  {showAdvice && (
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl text-sm border border-emerald-100 animate-in fade-in duration-500">
                       <div className="font-bold text-emerald-800 dark:text-emerald-400">सुझाई गई फसलें:</div>
                       <p className="text-slate-600 dark:text-slate-300 mt-1 italic">मंडुआ, झंगोरा, राजमा और जैविक हल्दी की खेती आपके क्षेत्र के लिए उपयुक्त है।</p>
                    </div>
                  )}
               </div>
            </div>

            {/* Carbon Calculator for Farmers */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border-t-4 border-orange-500">
               <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">💰 कार्बन आय गणना</h3>
               <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">भूमि (हेक्टेयर)</label>
                    <input type="number" value={land} onChange={(e) => setLand(parseInt(e.target.value) || 0)} className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl mt-1" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">पेड़ों की संख्या</label>
                    <input type="number" value={trees} onChange={(e) => setTrees(parseInt(e.target.value) || 0)} className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl mt-1" />
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-center">
                    <div className="text-xs text-orange-600 dark:text-orange-400 font-bold uppercase">संभावित वार्षिक आय</div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">₹{carbonIncome.toLocaleString('en-IN')}</div>
                  </div>
               </div>
            </div>

            {/* Program Links */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border-t-4 border-blue-500">
               <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">🚀 हमारे कार्यक्रम</h3>
               <ul className="space-y-3">
                 {[
                   { t: "अनुबंध खेती", i: "🤝" },
                   { t: "ऑर्गेनिक प्रमाणन", i: "📜" },
                   { t: "महिला SHG सहायता", i: "👩‍🌾" },
                   { t: "कौशल विकास", i: "🎓" }
                 ].map((p, i) => (
                   <li key={i} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
                      <span>{p.i}</span>
                      <span className="font-bold text-sm">{p.t}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="bg-red-600 text-white py-12 text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-2xl font-bold mb-2">🚨 उत्तराखंड जलवायु आपातकाल (Climate Alert)</h2>
           <p className="text-red-100 italic">2025 में 2000+ आपदा घटनाएँ रिपोर्ट की गई हैं। अपने गाँव को जलवायु-लचीला बनाने के लिए CHANGE से जुड़ें।</p>
        </div>
      </section>
    </div>
  );
};

export default FarmerCommunity;
