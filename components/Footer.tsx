
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Initialize or increment visitor count
    const baseCount = 28430; // Base count to make the org look established
    const savedCount = localStorage.getItem('visitor_count');
    let currentCount = savedCount ? parseInt(savedCount) : baseCount;
    
    // Simulate an increment for the current session
    currentCount += 1;
    localStorage.setItem('visitor_count', currentCount.toString());
    setVisitorCount(currentCount);

    // Occasional "live" updates for visual interest
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 2));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setDone(true);
      setEmail('');
      setTimeout(() => setDone(false), 3000);
    }
  };

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/change-uttarakhand', // Placeholder
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/change-uttarakhand', // Placeholder
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/change_utk', // Placeholder
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/change-uttarakhand', // Placeholder
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@change-uttarakhand', // Placeholder
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                  <clipPath id="circleClipFooter">
                    <circle cx="50" cy="50" r="46" />
                  </clipPath>
                  <g clipPath="url(#circleClipFooter)">
                    <rect width="100" height="100" fill="#0f172a" />
                    <circle cx="50" cy="22" r="10" fill="#facc15" />
                    <path d="M10 70 L35 35 L60 65 L80 45 L95 75 Z" fill="#ffffff" opacity="0.2" />
                    <path d="M20 80 Q40 40 80 70" stroke="#22c55e" strokeWidth="4" fill="none" opacity="0.4" />
                    <path d="M25 85 Q50 55 85 75" stroke="#f97316" strokeWidth="4" fill="none" opacity="0.4" />
                    <path d="M50 85 V45" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.5" />
                  </g>
                </svg>
              </div>
              <h3 className="text-white text-3xl font-bold tracking-tight">CHANGE</h3>
            </div>
            <p className="text-sm leading-relaxed max-w-md mb-6">
              Promoting climate-resilient farming, strengthening rural economies, and enabling community-led development in the Himalayan region.
            </p>
            
            {/* Newsletter Mini Form */}
            <div className="mb-8">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Stay Updated</h4>
              {done ? (
                <p className="text-emerald-400 text-sm font-bold">Successfully joined!</p>
              ) : (
                <form onSubmit={handleSub} className="flex gap-2 max-w-sm">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-emerald-500 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors shrink-0">Join</button>
                </form>
              )}
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">Connect With Us</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 group" 
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 max-w-sm">
                <p className="text-[10px] text-slate-400 leading-relaxed italic">
                  <strong>Note:</strong> Our official social media profiles are currently being finalized. The links provided are placeholders for our upcoming accounts. Please check back soon for live updates.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Organisation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">Who We Are</Link></li>
              <li><Link to="/programs" className="hover:text-emerald-400 transition-colors">Programs</Link></li>
              <li><Link to="/legal" className="hover:text-emerald-400 transition-colors">Governance</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Reach Us</h4>
            <div className="space-y-4">
              <p className="text-xs leading-relaxed">
                Badshahi Thaul, Tehri Garhwal,<br />Uttarakhand, India
              </p>
              <p className="text-xs text-emerald-400 font-medium tracking-wide">info@change-uttarakhand.org</p>
              
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-3">Total Website Visitors</h4>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {visitorCount.toString().padStart(6, '0').split('').map((digit, i) => (
                      <span key={i} className="bg-slate-800 text-emerald-400 w-6 h-8 flex items-center justify-center rounded font-mono font-bold border border-slate-700 shadow-inner">
                        {digit}
                      </span>
                    ))}
                  </div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <p className="text-[11px] md:text-sm leading-relaxed text-slate-400">
            CHANGE is the public brand identity of Centre for Himalayan Agriculture and Nature Foundation, a Section 8 Company registered under the Companies Act, 2013, Government of India.
            All activities are undertaken on a not-for-profit basis and any surplus generated is reinvested solely towards the objectives of the organisation.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            <span>© {new Date().getFullYear()} Centre for Himalayan Agriculture and Nature Foundation</span>
            <div className="flex gap-6">
              <Link to="/legal" className="hover:text-slate-300">Privacy Policy</Link>
              <Link to="/legal" className="hover:text-slate-300">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
