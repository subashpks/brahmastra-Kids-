

import React from 'react';

const Logo: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex items-center justify-center gap-2 text-slate-400">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        <span className="font-semibold text-lg">{name}</span>
    </div>
);

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-sm font-semibold text-slate-500 tracking-widest uppercase mb-8">
          TRUSTED BY LEADING COMPANIES
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          <Logo name="Innovate Inc" />
          <Logo name="QuantumLeap" />
          <Logo name="Stellar Solutions" />
          <Logo name="Apex Dynamics" />
          <Logo name="Zenith Corp" />
        </div>
      </div>
    </section>
  );
};