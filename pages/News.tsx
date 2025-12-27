
import React from 'react';

const News: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-[60vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-slate-900 text-center">News / Updates</h1>
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 text-center">
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            This section provides updates on programs, events, and organisational announcements.
          </p>
          <div className="mt-12 flex justify-center">
             <div className="w-16 h-16 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
          </div>
          <p className="mt-6 text-slate-400 text-sm font-medium uppercase tracking-widest">Updates Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default News;
