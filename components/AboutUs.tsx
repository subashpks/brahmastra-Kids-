
import React from 'react';

const founder = {
    name: 'Subash P. Kuppusamy',
    imageUrl: 'https://files.catbox.moe/gpjimc.png',
    role: 'Ex-Tejas Fighter Jet Engineer | ISRO Space Tutor',
    quickFacts: [
        'Aerospace Engineer (Anna University)',
        'Worked on Tejas Fighter at HAL',
        'Certified Drone Pilot (DGCA)',
        'Trained Indian Armed Forces in UAVs'
    ]
};

const coreValues = [
    { emoji: '🧠', title: 'Curiosity First', text: 'We nurture thinkers, not just toppers.' },
    { emoji: '🛠️', title: 'Hands-On', text: 'No worksheets. Kids build & launch.' },
    { emoji: '👨‍🚀', title: 'Real Mentors', text: 'Taught by actual Aerospace Engineers.' },
    { emoji: '🤝', title: 'Collaboration', text: 'Teamwork over lonely competition.' },
];

export const AboutUsPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* 1. Minimal Header */}
      <section className="py-16 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-6">
               <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                  We Launch Dreams 🚀
               </h1>
               <p className="text-slate-400 max-w-2xl mx-auto">
                  Bridging the gap between textbooks and real rocket science for Indian kids.
               </p>
          </div>
      </section>

      {/* 2. Founder - Profile Card Style */}
      <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8">
                    <img className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md" src={founder.imageUrl} alt={founder.name} />
                    <div className="text-center md:text-left">
                        <span className="text-xs font-bold text-brand-space tracking-wide uppercase">The Founder</span>
                        <h2 className="text-2xl font-bold text-slate-900 mb-1">{founder.name}</h2>
                        <p className="text-slate-600 font-medium mb-4">{founder.role}</p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {founder.quickFacts.map((fact, i) => (
                                <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-slate-700 border border-slate-200">
                                    ✓ {fact}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
      </section>

      {/* 3. Our "Why" - 4 Point Grid */}
       <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-slate-900">Why Brahmastra?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreValues.map(value => (
                        <div key={value.title} className="bg-slate-50 p-6 rounded-xl text-center border border-slate-100">
                            <div className="text-4xl mb-3">{value.emoji}</div>
                            <h3 className="font-bold text-slate-900 mb-1">{value.title}</h3>
                            <p className="text-sm text-slate-600">{value.text}</p>
                        </div>
                    ))}
                </div>
          </div>
       </section>
       
       {/* 4. Timeline/Story - Super Short */}
      <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 text-center max-w-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Journey</h2>
              <div className="space-y-4 text-left">
                  <div className="flex gap-4">
                      <span className="font-bold text-brand-space w-16">2019</span>
                      <p className="text-slate-600 text-sm">Started as a forum to connect students with ISRO scientists.</p>
                  </div>
                  <div className="flex gap-4">
                      <span className="font-bold text-brand-space w-16">2021</span>
                      <p className="text-slate-600 text-sm">Became India's largest aerospace community (85k+ members).</p>
                  </div>
                  <div className="flex gap-4">
                      <span className="font-bold text-brand-space w-16">Today</span>
                      <p className="text-slate-600 text-sm">A full-fledged academy transforming how kids learn science.</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};
