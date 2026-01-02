
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Legal from './pages/Legal';
import News from './pages/News';
import Contact from './pages/Contact';
import FarmerBook from './pages/programs/FarmerBook';
import HimalayanLivelihood from './pages/programs/HimalayanLivelihood';
import ClimateFunds from './pages/programs/ClimateFunds';
import PartnerPortal from './pages/programs/PartnerPortal';
import FarmerCommunity from './pages/programs/FarmerCommunity';
import GovTech from './pages/programs/GovTech';
import NGOFoundations from './pages/programs/NGOFoundations';

const PageManager = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Manage Document Title and Description for SEO consistency
    const baseTitle = "CHANGE | Centre for Himalayan Agriculture and Nature Foundation";
    const baseDesc = "Empowering rural Uttarakhand through sustainable agriculture and community development.";
    
    let subTitle = "";
    let subDesc = baseDesc;
    
    switch(pathname) {
      case '/about': 
        subTitle = "Who We Are"; 
        subDesc = "Learn about our vision, mission, and the team behind CHANGE Foundation's Himalayan initiatives.";
        break;
      case '/programs': 
        subTitle = "Our Programs"; 
        subDesc = "Explore our tech-enabled portals for climate funds, farmer communities, and digital ecosystems.";
        break;
      case '/legal': 
        subTitle = "Legal & Governance"; 
        subDesc = "Transparent legal disclosures, Section 8 compliance, and brand governance of CHANGE.";
        break;
      case '/news': 
        subTitle = "News & Updates"; 
        subDesc = "The latest announcements and stories from our field work in Uttarakhand.";
        break;
      case '/contact': 
        subTitle = "Contact Us"; 
        subDesc = "Get in touch for partnerships, donations, or volunteering for Himalayan development.";
        break;
      case '/programs/farmer-book': 
        subTitle = "FarmerBook Dashboard"; 
        subDesc = "Real-time impact tracking and fundraising transparency for Himalayan agricultural growth.";
        break;
      case '/programs/himalayan-livelihood-2025': 
        subTitle = "Himalayan Livelihood Strategy"; 
        subDesc = "Our 2025 roadmap for strengthening rural economies through climate-smart agri-practices.";
        break;
      case '/programs/climate-funds': 
        subTitle = "Climate Funds & Carbon Credits"; 
        subDesc = "Verified Himalayan carbon credits with AI and Satellite MRV technology.";
        break;
      case '/programs/partner-portal':
        subTitle = "CSR & Partner Portal";
        subDesc = "Investment opportunities and ROI metrics for CSR teams and ESG investors.";
        break;
      case '/programs/farmer-community':
        subTitle = "Farmer Community (किसानों का साथी)";
        subDesc = "Digital tools and AI advice for Himalayan farmers and organic certification.";
        break;
      default: 
        subTitle = "Sustainable Agriculture Uttarakhand";
        subDesc = baseDesc;
    }
    
    document.title = `${subTitle} | ${baseTitle}`;
    
    // Dynamically update the meta description tag
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', subDesc);
    }

    // Update OG Title for social sharing consistency
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${subTitle} | CHANGE Foundation`);
    }
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <Router>
        <PageManager />
        <div className="flex flex-col min-h-screen relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About theme={theme} />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/farmer-book" element={<FarmerBook />} />
              <Route path="/programs/himalayan-livelihood-2025" element={<HimalayanLivelihood />} />
              <Route path="/programs/climate-funds" element={<ClimateFunds />} />
              <Route path="/programs/partner-portal" element={<PartnerPortal />} />
              <Route path="/programs/farmer-community" element={<FarmerCommunity />} />
              <Route path="/programs/gov-tech" element={<GovTech />} />
              <Route path="/programs/ngo-foundations" element={<NGOFoundations />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
        </div>
      </Router>
    </div>
  );
};

export default App;
