
import React from 'react';

interface AboutProps {
  theme?: 'light' | 'dark';
}

const About: React.FC<AboutProps> = ({ theme }) => {
  return (
    <div className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Who We Are</h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            CHANGE is the public brand identity of Centre for Himalayan Agriculture and Nature Foundation, a Section 8 Company incorporated under the Companies Act, 2013. The organisation works exclusively on a not-for-profit basis for public benefit, primarily in the Himalayan and hill regions of Uttarakhand.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-10 rounded-2xl border border-emerald-100 dark:border-emerald-800">
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-4 uppercase tracking-wider">Vision</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              To enable sustainable, resilient, and self-reliant rural communities through agriculture, enterprise, and conservation-linked development.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Mission</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              To strengthen farmer livelihoods, promote sustainable agriculture practices, facilitate rural enterprises, and support community-led development through structured, compliant, and scalable interventions.
            </p>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-b-2 border-emerald-600 dark:border-emerald-500 pb-4 inline-block">Area of Work</h2>
          <ul className="space-y-6">
            {[
              "Sustainable agriculture and natural farming",
              "Rural enterprise and value addition",
              "Women and youth capacity building",
              "Renewable energy and conservation facilitation",
              "Technology for Good: AI and digital automation for farm productivity and governance",
              "Climate Action: Carbon sequestration and Himalayan biodiversity protection"
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1.5 w-5 h-5 bg-emerald-600 dark:bg-emerald-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xl font-medium text-slate-800 dark:text-slate-200">{point}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
