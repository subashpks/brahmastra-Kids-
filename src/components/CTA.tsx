

import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white max-w-2xl mx-auto">
                Ready to Build a Website That Performs?
            </h2>
            <p className="mt-4 text-lg text-slate-200 max-w-xl mx-auto">
                Let's talk about your project. We'll provide a free, no-obligation performance audit of your current site and a clear roadmap for improvement.
            </p>
            <div className="mt-8">
                <a href="#" className="bg-white text-slate-900 hover:bg-slate-200 transition-colors font-semibold px-8 py-3 rounded-full text-lg">
                    Book Your Free Call
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};