
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Legal & Governance', path: '/legal' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 py-1.5 px-4 text-[10px] md:text-xs text-center font-medium border-b border-slate-100 dark:border-slate-800 transition-colors">
        A Section 8 Company (Not-for-Profit) | Incorporated under the Companies Act, 2013, Government of India
      </div>
      
      <nav className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
               <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="none" stroke={theme === 'dark' ? '#10b981' : '#1a5d48'} strokeWidth="3" />
                  <clipPath id="circleClip">
                    <circle cx="50" cy="50" r="46" />
                  </clipPath>
                  <g clipPath="url(#circleClip)">
                    <rect width="100" height="100" fill={theme === 'dark' ? '#020617' : '#f8fafc'} />
                    <circle cx="50" cy="22" r="10" fill="#facc15" />
                    <path d="M10 70 L35 35 L60 65 L80 45 L95 75 Z" fill={theme === 'dark' ? '#1e293b' : '#334155'} />
                    <path d="M20 80 Q40 40 80 70" stroke="#22c55e" strokeWidth="6" fill="none" opacity="0.6" />
                    <path d="M25 85 Q50 55 85 75" stroke="#f97316" strokeWidth="6" fill="none" opacity="0.6" />
                    <path d="M50 85 V45" stroke="#10b981" strokeWidth="2" fill="none" />
                    <path d="M0 80 Q50 70 100 85 L100 100 L0 100 Z" fill={theme === 'dark' ? '#2d1402' : '#451a03'} />
                  </g>
               </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-emerald-900 dark:text-emerald-400 leading-none tracking-tight">
                CHANGE
              </h1>
              <h2 className="text-[10px] md:text-[11px] font-semibold text-emerald-700/80 dark:text-emerald-500/80 mt-1 uppercase tracking-wider max-w-[180px] md:max-w-none">
                Centre for Himalayan Agriculture and Nature Foundation
              </h2>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.path) 
                    ? 'text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-700 dark:border-emerald-400' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.242 16.242l.707.707M7.758 7.758l.707-.707M12 8a4 4 0 110 8 4 4 0 010-8z" />
                </svg>
              )}
            </button>

            <Link
              to="/contact"
              className="bg-[#1a5d48] dark:bg-emerald-700 hover:bg-emerald-900 dark:hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.242 16.242l.707.707M7.758 7.758l.707-.707M12 8a4 4 0 110 8 4 4 0 010-8z" /></svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-emerald-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-50 dark:border-slate-800 pt-4 animate-in fade-in slide-in-from-top-4 transition-colors">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg ${
                    isActive(link.path) 
                      ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 font-bold' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 block w-full bg-[#1a5d48] dark:bg-emerald-700 text-white text-center py-3 rounded-lg font-bold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
