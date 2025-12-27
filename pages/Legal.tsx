
import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-slate-900 dark:text-white text-center">Legal & Governance</h1>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 uppercase tracking-wider">Legal Entity</h2>
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Centre for Himalayan Agriculture and Nature Foundation</strong> is a Section 8 Company (Not-for-Profit) incorporated under the Companies Act, 2013, Ministry of Corporate Affairs, Government of India. 
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              All activities are undertaken exclusively for public benefit, and as per our Memorandum of Association (MoA), no dividend or profit distribution is permitted to any member or director.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 uppercase tracking-wider">Governance Structure</h2>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              The <strong>Centre for Himalayan Agriculture and Nature Foundation</strong> is governed by a Board of Directors who serve to fulfill the organization's social objectives. Our governance framework ensures strict adherence to statutory compliance, annual audits, and transparent financial management.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 uppercase tracking-wider">Statutory Principles</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Zero Profit Distribution",
              "Public Benefit Reinvestment",
              "Annual Statutory Audits"
            ].map((item, idx) => (
              <li key={idx} className="bg-emerald-50/50 dark:bg-emerald-900/30 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800 text-center font-bold text-emerald-900 dark:text-emerald-300">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16 pt-8 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Terms & Privacy Disclaimer</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
            <p>
              In all legal contexts and service agreements, <strong>Centre for Himalayan Agriculture and Nature Foundation</strong> is the primary service provider. Any reference to "CHANGE" in public branding, websites, or social media refers exclusively to the brand identity of this legal entity.
            </p>
            <p>
              Donations and payments are processed directly into the bank account of <strong>Centre for Himalayan Agriculture and Nature Foundation</strong>. All receipts for tax exemption purposes will be issued under the legal name as per the Income Tax Act, 1961.
            </p>
          </div>
        </section>

        <section className="pt-8 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Brand Disclosure</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 italic">
            "CHANGE" is the registered public brand identity of Centre for Himalayan Agriculture and Nature Foundation. Use of the brand logo or intellectual property without authorization is strictly prohibited.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;
