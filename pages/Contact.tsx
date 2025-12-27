
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Thank you for your message. We will get in touch soon.');
  };

  return (
    <div className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-slate-900 dark:text-white text-center">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest mb-6">Registered Office</h2>
              <p className="text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                Badshahi Thaul, Tehri Garhwal,<br />
                Uttarakhand, India
              </p>
            </div>

            <div>
              <h2 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest mb-6">Email</h2>
              <a href="mailto:info@change-uttarakhand.org" className="text-xl text-emerald-700 dark:text-emerald-300 hover:underline font-medium">
                info@change-uttarakhand.org
              </a>
            </div>

            <div>
              <h2 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest mb-6">Phone</h2>
              <p className="text-xl text-slate-700 dark:text-slate-300 font-medium">
                +91-XXXXXXXXXX
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 transition-colors">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white dark:bg-slate-800 px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white dark:bg-slate-800 px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Organisation (optional)</label>
                <input 
                  type="text" 
                  className="w-full bg-white dark:bg-slate-800 px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                  placeholder="Company or NGO name"
                  value={formData.organisation}
                  onChange={(e) => setFormData({...formData, organisation: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-white dark:bg-slate-800 px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                  placeholder="How can we collaborate?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full md:w-auto bg-emerald-800 dark:bg-emerald-600 text-white px-12 py-4 rounded-xl font-bold hover:bg-emerald-900 dark:hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-800/10"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
