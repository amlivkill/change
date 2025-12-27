
import React from 'react';
import { Link } from 'react-router-dom';

const Programs: React.FC = () => {
  const specializedPortals = [
    {
      title: "Climate Funds",
      desc: "Verified Carbon Credits & Project Finance. Verra-satyapit, AI + Satellite MRV enabled.",
      link: "/programs/climate-funds",
      icon: "🌱",
      color: "bg-emerald-600"
    },
    {
      title: "Investment Portal",
      desc: "For CSR Teams & ESG Investors. ROI calculations and measurable impact metrics.",
      link: "/programs/partner-portal",
      icon: "💼",
      color: "bg-blue-600"
    },
    {
      title: "Farmer & Community",
      desc: "Resources for farmers: Organic farming, AI tools, and income boost programs.",
      link: "/programs/farmer-community",
      icon: "🌾",
      color: "bg-emerald-500"
    },
    {
      title: "GovTech Portal",
      desc: "Tech-enabled implementation of PM Schemes like NRLM, NREGA, and PM-KISAN.",
      link: "/programs/gov-tech",
      icon: "🏛️",
      color: "bg-indigo-600"
    },
    {
      title: "NGOs & Foundations",
      desc: "Strategic MoU partnerships for collective rural impact and shared resources.",
      link: "/programs/ngo-foundations",
      icon: "🤝",
      color: "bg-red-600"
    }
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Our Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Our Programs & Portals</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive ecosystem of tech-enabled initiatives designed to transform the Himalayan rural economy.
          </p>
          <div className="w-24 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto rounded-full mt-8"></div>
        </header>

        {/* Featured Strategic Initiatives Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
            Strategic Initiatives (2025-26)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Initiative 1: Digital Ecosystem */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col hover:border-emerald-500 transition-all group relative">
              <div className="absolute top-6 right-6 z-10">
                <span className="bg-[#fbbf24] text-[#1a5d48] text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest shadow-md">Flagship</span>
              </div>
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" 
                  alt="FarmerBook"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-10 -mt-20 relative z-10 flex flex-col flex-grow bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center text-emerald-600">
                    <span className="text-xl">📱</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Digital Ecosystem</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">The Fundraising Dashboard</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed font-light">
                  FarmerBook is a transparent ecosystem connecting donors, farmers, and families. Track impact metrics, funding progress, and rural growth in real-time with verified data.
                </p>
                <Link to="/programs/farmer-book" className="mt-auto bg-slate-900 dark:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-base text-center group-hover:bg-emerald-600 transition-colors shadow-xl">
                  Explore Digital Ecosystem →
                </Link>
              </div>
            </div>

            {/* Initiative 2: CSR Strategy */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col hover:border-amber-500 transition-all group relative">
              <div className="absolute top-6 right-6 z-10">
                <span className="bg-emerald-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest shadow-md">Upcoming</span>
              </div>
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" 
                  alt="Livelihood Strategy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-10 -mt-20 relative z-10 flex flex-col flex-grow bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600">
                    <span className="text-xl">🏔️</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">CSR Strategy</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Livelihood Strengthening</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed font-light">
                  A multi-block initiative targeting 10,000 farmers in the Garhwal region. Focused on income growth through climate-smart agriculture and women-led rural enterprises.
                </p>
                <Link to="/programs/himalayan-livelihood-2025" className="mt-auto bg-[#fbbf24] text-[#1a5d48] px-8 py-4 rounded-2xl font-bold text-base text-center hover:bg-amber-500 transition-colors shadow-xl">
                  View Strategy Proposal →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Portals Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
            Specialized Impact Portals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedPortals.map((portal, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col hover:border-emerald-500 transition-all group">
                <div className={`${portal.color} p-8 flex flex-col justify-center items-center text-white h-40`}>
                  <span className="text-5xl mb-2">{portal.icon}</span>
                  <h3 className="text-xl font-bold text-center">{portal.title}</h3>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    {portal.desc}
                  </p>
                  <Link to={portal.link} className="mt-auto border-2 border-slate-900 dark:border-emerald-700 text-slate-900 dark:text-emerald-400 px-6 py-3 rounded-xl font-bold text-sm text-center group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-emerald-700 dark:group-hover:text-white transition-all">
                    Access Portal →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Programs;
