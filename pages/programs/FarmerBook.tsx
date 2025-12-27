
import React from 'react';
import { Link } from 'react-router-dom';

const FarmerBook: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
           <Link to="/programs" className="hover:text-emerald-600 transition-colors">Programs</Link>
           <span>/</span>
           <span className="font-bold text-slate-900 dark:text-white">FarmerBook Dashboard</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">FarmerBook Dashboard</h1>
            <p className="text-emerald-700 dark:text-emerald-400 font-bold uppercase text-xs tracking-widest">A CHANGE Initiative • Seed Round 2024</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-emerald-700 transition-colors">Pitch Deck</button>
            <button className="bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 border border-emerald-600 dark:border-emerald-500 px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors">Financial Model</button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Funds Raised", value: "₹65.2L", trend: "↑ 42% of target", trendUp: true },
            { label: "Target Raise", value: "₹1.5Cr", trend: "Seed Round", trendUp: null },
            { label: "Farmers Onboarded", value: "187", trend: "↑ 24 this month", trendUp: true },
            { label: "Family Subscriptions", value: "1,243", trend: "↑ 18% growth", trendUp: true }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:scale-105">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">{stat.label}</h3>
              <div className="text-3xl font-bold text-emerald-800 dark:text-emerald-400 mb-2">{stat.value}</div>
              {stat.trend && (
                <div className={`text-xs font-bold ${stat.trendUp === true ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                  {stat.trend}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress & Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-8 text-slate-900 dark:text-white">Project Milestones</h3>
              <div className="space-y-8">
                {[
                  { label: "Fundraising Target", progress: "65%", color: "bg-emerald-600" },
                  { label: "Tech Development", progress: "85%", color: "bg-blue-600" },
                  { label: "Operations Setup", progress: "45%", color: "bg-amber-600" }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-slate-700 dark:text-slate-300">{item.label}</span>
                      <span className="text-sm font-bold text-emerald-600">{item.progress}</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: item.progress }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Highlights */}
            <div className="bg-emerald-900 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-bold mb-6">Impact at a Glance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">12+</div>
                  <p className="text-emerald-100/70 text-sm">Villages Covered in Garhwal</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <p className="text-emerald-100/70 text-sm">Target Household Income Rise</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">567</div>
                  <p className="text-emerald-100/70 text-sm">Organic Products Listed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Investor Interest */}
          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-8 text-slate-900 dark:text-white">Investor Interest</h3>
            <div className="space-y-6">
              {[
                { name: "Green Ventures", term: "₹50L", status: "Due Diligence", bg: "bg-emerald-50 dark:bg-emerald-900/30" },
                { name: "AgriTech Angels", term: "₹25L", status: "Signed", bg: "bg-blue-50 dark:bg-blue-900/30" },
                { name: "Growth Fund", term: "₹75L", status: "Negotiation", bg: "bg-amber-50 dark:bg-amber-900/30" }
              ].map((inv, idx) => (
                <div key={idx} className={`${inv.bg} p-6 rounded-2xl border border-white/20 dark:border-black/20`}>
                  <h4 className="font-bold text-slate-900 dark:text-white">{inv.name}</h4>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Term Sheet: {inv.term}</p>
                  <div className="mt-3 inline-block px-3 py-1 bg-white/50 dark:bg-black/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {inv.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-100 dark:border-slate-800">
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">About the FarmerBook Platform</h2>
           <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
             FarmerBook is CHANGE's flagship digital platform designed to bring transparency and efficiency to the Himalayan agricultural supply chain. By creating digital identities for individual farmers and their families, we facilitate direct-to-consumer links, transparent funding, and data-driven decision making.
           </p>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
             {[
               "Direct-to-Family Subscription Model",
               "Real-time soil and yield data logging",
               "Blockchain-verified product origin",
               "Integrated CSR reporting for donors"
             ].map((item, idx) => (
               <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                 {item}
               </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  );
};

export default FarmerBook;
