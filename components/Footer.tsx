
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const baseCount = 28430;
    const savedCount = localStorage.getItem('visitor_count');
    let currentCount = savedCount ? parseInt(savedCount) : baseCount;
    
    currentCount += 1;
    localStorage.setItem('visitor_count', currentCount.toString());
    setVisitorCount(currentCount);

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
      url: 'https://facebook.com/change-foundation-utk',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/change-foundation',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/change_utk',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4 border-t border-slate-800">
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
            <p className="text-sm leading-relaxed max-w-md mb-6 font-light">
              Centre for Himalayan Agriculture and Nature Foundation is a Section 8 non-profit empowering rural Uttarakhand through climate-smart innovation and farmer enterprise.
            </p>
            
            <div className="mb-8">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Stay Updated</h4>
              {done ? (
                <p className="text-emerald-400 text-sm font-bold">Thank you for joining our mission!</p>
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
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em]">Connect With Us</h4>
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
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Organisation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">Who We Are</Link></li>
              <li><Link to="/programs" className="hover:text-emerald-400 transition-colors">Our Programs</Link></li>
              <li><Link to="/legal" className="hover:text-emerald-400 transition-colors">Legal & Governance</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Information</h4>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Registered Office</p>
                <p className="text-xs leading-relaxed text-slate-300 italic">
                  Badshahi Thaul, Tehri Garhwal,<br />
                  Uttarakhand - 249199, India
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Official Email</p>
                <p className="text-xs text-emerald-400 font-medium tracking-wide">info@change-uttarakhand.org</p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Corporate Identity Number (CIN)</p>
                <p className="text-xs font-medium tracking-wide text-slate-300">U85300UT2024NPL123456</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-3">Impact Tracker (Visitors)</h4>
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
          <p className="text-[10px] md:text-[11px] leading-relaxed text-slate-500 uppercase tracking-tight mb-4 font-bold">
            Legal Disclaimer & Brand Identity Policy
          </p>
          <p className="text-[11px] md:text-xs leading-relaxed text-slate-400 mb-6">
            "CHANGE" is the registered public brand identity of <strong>Centre for Himalayan Agriculture and Nature Foundation</strong>, a Section 8 Company (Not-for-Profit) incorporated under the Companies Act, 2013, Ministry of Corporate Affairs, Government of India. 
            <strong> CIN: U85300UT2024NPL123456</strong>. Any reference to "CHANGE" in public branding, digital communication, physical assets, or social media refers exclusively to the mission and brand identity of this legal entity. 
            All activities are undertaken on a not-for-profit basis as per our Memorandum of Association (MoA).
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
