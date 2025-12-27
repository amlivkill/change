
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const focusAreas = [
    "Sustainable & Natural Agriculture",
    "Farmer Collectivisation & Value Chains",
    "Women-Led Rural Enterprises",
    "Skill Development & Capacity Building",
    "Conservation & Renewable Energy Facilitation",
    "Technology for Good (AI & Digital Tools)",
    "Climate Action & Biodiversity"
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      caption: "Himalayan Terrace Farming",
      category: "Sustainability"
    },
    {
      url: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&q=80&w=800",
      caption: "Community Training Session",
      category: "Capacity Building"
    },
    {
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
      caption: "Organic Harvest",
      category: "Natural Farming"
    },
    {
      url: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800",
      caption: "Women's Enterprise Group",
      category: "Livelihoods"
    },
    {
      url: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&q=80&w=800",
      caption: "Renewable Energy Installation",
      category: "Conservation"
    },
    {
      url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800",
      caption: "Smart Irrigation Monitoring",
      category: "Technology"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 bg-[#1a5d48] dark:bg-emerald-950 text-white overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Uttarakhand Mountains" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a5d48] dark:to-emerald-950"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="mb-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 p-2">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20 70 L40 40 L60 65 L80 35 L90 70 Z" fill="#fff" />
                  <circle cx="50" cy="25" r="8" fill="#fbbf24" />
                </svg>
             </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Empowering Rural Uttarakhand through Sustainable Agriculture and Community Enterprise
          </h2>
          <p className="text-lg md:text-xl text-emerald-100/90 mb-10 leading-relaxed font-light max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-700">
            CHANGE is the public brand identity of Centre for Himalayan Agriculture and Nature Foundation, a Section 8 Company working on sustainable agriculture, rural livelihoods, and community-led development in Uttarakhand.
          </p>
          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Link to="/contact" className="bg-[#fbbf24] text-[#1a5d48] px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-colors shadow-lg">
              Contact Us
            </Link>
            <Link to="/programs" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/20 transition-colors">
              Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Strategic Pillars Section */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Digital Ecosystem & CSR Strategy</h2>
            <div className="w-24 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Digital Ecosystem Feature */}
            <div className="group bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl hover:border-emerald-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-emerald-600/20">
                  📱
                </div>
                <div>
                  <h4 className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest">Digital Ecosystem</h4>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The Fundraising Dashboard</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                FarmerBook provides complete supply chain transparency, connecting high-altitude farmers directly to global consumers and donors. A real-time monitoring system for rural growth.
              </p>
              <Link to="/programs/farmer-book" className="inline-flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-400 group-hover:gap-4 transition-all">
                Explore Dashboard <span className="text-xl">→</span>
              </Link>
            </div>

            {/* CSR Strategy Feature */}
            <div className="group bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl hover:border-amber-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <div className="bg-amber-500 text-white text-[10px] font-bold px-6 py-1 rotate-45 translate-x-6 translate-y-4 uppercase tracking-widest shadow-md">
                  Upcoming
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-amber-500/20">
                  🏔️
                </div>
                <div>
                  <h4 className="text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-widest">CSR Strategy</h4>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Livelihood Strengthening</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Our upcoming 2025 initiative to strengthen Himalayan livelihoods through climate-smart agriculture and women-led rural value chains. Targeted impact for 10,000 farmers.
              </p>
              <Link to="/programs/himalayan-livelihood-2025" className="inline-flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400 group-hover:gap-4 transition-all">
                View Strategy <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white uppercase tracking-wider">Our Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-start group hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-500 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900 rounded-xl flex items-center justify-center mr-6 group-hover:bg-[#1a5d48] group-hover:text-white transition-colors shrink-0">
                   <span className="font-bold text-emerald-800 dark:text-emerald-300 group-hover:text-white">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 leading-tight pt-2">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work in Pictures Gallery */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-widest mb-2">Visual Impact</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Our Work in Pictures</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg cursor-pointer border border-slate-100 dark:border-slate-800">
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-1">{img.category}</span>
                  <h4 className="text-white text-xl font-bold">{img.caption}</h4>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 dark:bg-black/40 backdrop-blur-md rounded-full px-3 py-1 text-[10px] text-white font-bold uppercase tracking-tighter sm:hidden">
                  {img.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Highlights Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-widest mb-2">Updates & Media</div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Stay Connected</h2>
            </div>
            <Link to="/news" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline hidden md:block">View All News →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Slot 1: Feature Card */}
            <div className="group bg-emerald-900 dark:bg-emerald-950 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative flex flex-col min-h-[400px]">
              <div className="absolute inset-0 opacity-40">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Sustainability" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent"></div>
              <div className="relative mt-auto p-8">
                <span className="bg-emerald-500 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest mb-4 inline-block">Partner Highlight</span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Empowering Women in Agri-Tech</h3>
                <p className="text-emerald-100/80 text-sm mb-6 font-light">How digital literacy is transforming high-altitude farming practices in Tehri Garhwal.</p>
                <Link to="/about" className="text-[#fbbf24] font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">Read Story →</Link>
              </div>
            </div>

            {/* Slot 2: Campaign Card */}
            <div className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative flex flex-col min-h-[400px] border border-slate-200 dark:border-slate-700">
               <div className="p-8 flex flex-col h-full">
                 <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#fbbf24] transition-colors duration-300">
                   <svg className="w-8 h-8 text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">Seed Bank Initiative 2024</h3>
                 <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">We are building community-managed seed banks to preserve indigenous Himalayan crop varieties. Join our mission as a donor.</p>
                 <div className="mt-auto">
                   <Link to="/contact" className="w-full bg-[#1a5d48] dark:bg-emerald-700 text-white py-4 rounded-2xl font-bold block text-center group-hover:bg-emerald-900 dark:hover:bg-emerald-600 transition-colors shadow-md">Support Our Mission</Link>
                 </div>
               </div>
            </div>

            {/* Slot 3: YouTube Feature */}
            <div className="group bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative flex flex-col min-h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors z-10">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-300 cursor-pointer">
                  <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800" alt="YouTube Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent z-20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  </div>
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">YouTube Feature</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">Stories from the Soil</h3>
              </div>
            </div>

            {/* Slot 4: X (Twitter) Pulse */}
            <div className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative flex flex-col min-h-[400px] border border-slate-200 dark:border-slate-700">
              <div className="p-8 flex flex-col h-full bg-[#f7f9f9] dark:bg-slate-900/50">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1a5d48] dark:bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">C</div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">CHANGE Uttarakhand</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">@change_foundation</p>
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-slate-900 dark:text-white fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                      Delighted to announce our new partnership for renewable energy solutions in Tehri Garhwal. Sustainable hills start here! 🏔️✨ #SustainableHimalayas #GreenAgri
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-tighter">2 hours ago</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 flex gap-6 border-t border-slate-200 dark:border-slate-700">
                   <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-bold">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                     <span>1.2K</span>
                   </div>
                   <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-bold">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                     <span>342</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-emerald-50 dark:bg-emerald-950 relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="leaf-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                 <path d="M50 20 Q60 50 50 80 Q40 50 50 20" fill="#065f46" />
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
           </svg>
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 dark:text-white mb-6 tracking-tight">Stay Informed, Join the CHANGE</h2>
          <p className="text-lg text-emerald-700/80 dark:text-emerald-400/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter for quarterly updates on field activities, farmer stories, and rural enterprise news from the heart of Uttarakhand.
          </p>
          
          {isSubscribed ? (
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-emerald-800 animate-in zoom-in duration-300">
               <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                 </svg>
               </div>
               <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Thank you for joining!</h3>
               <p className="text-slate-600 dark:text-slate-400">You've been successfully added to our newsletter mailing list.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto bg-white dark:bg-slate-900 p-2 rounded-2xl md:rounded-full shadow-lg border border-emerald-100 dark:border-emerald-800 transition-colors">
              <input 
                required
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 rounded-full text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 border-none bg-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-[#1a5d48] dark:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-900 transition-colors shadow-md"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="text-[10px] text-emerald-600/60 dark:text-emerald-500/60 mt-6 uppercase tracking-widest font-bold">Privacy first. We never share your data.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#1a5d48] dark:bg-emerald-950 text-white text-center relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <p className="text-2xl md:text-4xl font-light mb-12 leading-relaxed tracking-tight">
            Collaborate with us as a <span className="text-[#fbbf24] font-bold underline">donor</span>, <span className="text-[#fbbf24] font-bold underline">CSR partner</span>, or implementation partner.
          </p>
          <Link to="/contact" className="inline-block bg-[#fbbf24] text-[#1a5d48] px-12 py-5 rounded-full text-xl font-extrabold hover:bg-yellow-400 transition-all hover:scale-105 shadow-2xl shadow-black/20 uppercase tracking-widest">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
