
import React from 'react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      date: "May 15, 2024",
      category: "Program Launch",
      title: "Millet Processing Unit Launched in Tehri Garhwal",
      excerpt: "Our new community-led processing unit will benefit over 500 women farmers by adding value to local Mandua and Jhangora crops.",
      image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      date: "April 22, 2024",
      category: "Sustainability",
      title: "Earth Day 2024: 10,000 Saplings Planted",
      excerpt: "As part of our agroforestry mission, CHANGE Foundation successfully completed its Spring plantation drive in collaboration with local SHGs.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      date: "March 10, 2024",
      category: "Partnership",
      title: "Digital Literacy Training for Women-led SHGs",
      excerpt: "Over 200 women farmers were trained in using the FarmerBook app to track their yields and manage direct-to-consumer sales.",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">News & Updates</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
            Latest stories, program updates, and impact reports from our field work in Uttarakhand.
          </p>
          <div className="w-24 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto rounded-full mt-6"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl group">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {item.excerpt}
                </p>
                <Link to="/contact" className="text-emerald-700 dark:text-emerald-400 font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                  Read Full Story <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Callout in News Page */}
        <div className="bg-emerald-900 dark:bg-emerald-950 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Don't miss a single update</h2>
          <p className="text-emerald-100/80 mb-10 max-w-xl mx-auto relative z-10">
            Join 2,000+ partners who receive our monthly brief on rural Himalayan development and sustainability.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-grow px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button className="bg-[#fbbf24] text-[#1a5d48] px-8 py-4 rounded-2xl font-bold hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default News;
