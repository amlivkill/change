
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    inquiryType: 'General Question',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Simulate API call
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inquiryOptions = [
    "General Question",
    "Partnership",
    "Donation",
    "Volunteer",
    "Carbon Credits",
    "Farmer Support"
  ];

  if (isSubmitted) {
    return (
      <div className="py-20 bg-white dark:bg-slate-950 min-h-[70vh] flex items-center justify-center transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
            <svg className="w-12 h-12 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Message Received!</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Thank you, <span className="text-emerald-700 dark:text-emerald-400 font-bold">{formData.name}</span>. 
            Our team has received your <span className="font-semibold">{formData.inquiryType.toLowerCase()}</span> inquiry and will get back to you within 24-48 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline uppercase tracking-widest text-sm"
          >
            ← Send another message
          </button>
        </div>
      </div>
    );
  }

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

              <div className="relative">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Inquiry Type</label>
                <div className="relative group">
                  <select 
                    required
                    className="w-full bg-white dark:bg-slate-800 px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all appearance-none cursor-pointer pr-12"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                  >
                    {inquiryOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-600 transition-transform group-focus-within:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
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
                className="w-full md:w-auto bg-emerald-800 dark:bg-emerald-600 text-white px-12 py-4 rounded-xl font-bold hover:bg-emerald-900 dark:hover:bg-emerald-500 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-800/10"
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
