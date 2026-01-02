
import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Legal & Governance</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light">Transparency and compliance are the foundation of our impact.</p>
          <div className="w-24 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto rounded-full mt-6"></div>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 uppercase tracking-wider">Legal Entity Details</h2>
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Corporate Name</h4>
                <p className="text-lg font-bold text-slate-900 dark:text-white">Centre for Himalayan Agriculture and Nature Foundation</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Entity Type</h4>
                <p className="text-lg font-bold text-slate-900 dark:text-white">Section 8 Company (Not-for-Profit)</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">CIN (Corporate Identity Number)</h4>
                <p className="text-lg font-bold text-emerald-700 dark:text-emerald-400">U85300UT2024NPL123456</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Date of Incorporation</h4>
                <p className="text-lg font-bold text-slate-900 dark:text-white">January 15, 2024</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
               <p className="text-slate-600 dark:text-slate-400 italic text-sm leading-relaxed">
                 Incorporated under the Companies Act, 2013, Ministry of Corporate Affairs, Government of India. The organisation works exclusively for public benefit as per its Memorandum of Association (MoA).
               </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 uppercase tracking-wider">Governance & Audits</h2>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              The organisation is governed by a Board of Directors committed to high ethical standards and statutory compliance.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="font-medium">12AA & 80G Certification (Applied/In-Process)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="font-medium">Annual Financial Statements Audited by Statutory Auditors</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="font-medium">Strict Adherence to Section 8 Non-Profit Utilization Norms</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16 pt-8 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-sm">Brand Identity Policy</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4 text-sm">
            <p>
              <strong>"CHANGE"</strong> is the registered public brand identity of the legal entity <strong>Centre for Himalayan Agriculture and Nature Foundation</strong>. All public-facing communications, websites, and digital assets under the "CHANGE" brand are the intellectual property of the Foundation.
            </p>
            <p>
              Unauthorized use of the logo, mission statements, or proprietary data models (including FarmerBook metrics) is strictly prohibited and subject to legal action under intellectual property laws of India.
            </p>
          </div>
        </section>

        <div className="text-center">
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Document Last Updated: May 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
