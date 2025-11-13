import React from 'react';

// --- Founder Data ---
const founder = {
    name: 'Subash P. Kuppusamy',
    imageUrl: 'https://files.catbox.moe/gpjimc.png',
    bio: 'The story of Brahmastra is the story of Subash P. Kuppusamy\'s unwavering vision. From his foundational experience with fighter jets at HAL to mentoring thousands of students, his mission has always been clear: to make aerospace education accessible to every household in India and inspire the next generation of innovators.'
};

// --- History Data ---
const historyItems = [
    {
        year: '2019',
        title: 'Founding & Creation of Forum',
        description: 'Brahmastra Aerospace founded with the vision to build a strong aerospace forum and collaborative ecosystem.'
    },
    {
        year: '2019–2021',
        title: 'Nationwide & Global Aerospace Community Building',
        description: 'Built one of India\'s largest aerospace student communities; connected with aerospace engineers across India and the world; engaged 20,000+ students. Widely known as the forum where “every aerospace engineer in India is a student of Brahmastra Aerospace.”'
    },
    {
        year: '2019–2022',
        title: 'Alumni Success Worldwide',
        description: 'Alumni began joining top global aerospace organizations including NASA, ESA, ISRO, HAL, Boeing, Airbus, and other leading institutions.'
    },
    {
        year: '2022',
        title: 'Appointed ISRO Space Tutor',
        description: 'Officially recognized and appointed by ISRO as a Space Tutor, strengthening STEM outreach, space education, and national-level engagement.'
    },
    {
        year: '2023–2025',
        title: 'Appointed US–India Missions Space Tutor',
        description: 'Selected by the US Embassy in India as the US–India Missions "Space Tutor" for 2023, 2024, and 2025, conducting international-level educational and aerospace outreach programs.'
    },
    {
        year: 'Ongoing',
        title: 'Training Support to Indian Armed Forces',
        description: 'Conducted drone-based hands-on training for Indian Armed Forces personnel in Kashmir, focusing on close-combat UAV applications, enhancing tactical drone capabilities.'
    }
];

// --- Team Data ---
const teamMembers = [
    {
        name: 'Rosy Subha Hannah R',
        role: 'Pursuing a Ph.D. in Aerospace Engineering at Karunya University with a specialization in CFD.',
        imageUrl: 'https://placehold.co/200x200/e2e8f0/64748b?text=RH'
    },
    {
        name: 'Aruna Devi TM',
        role: 'Dr. Kalpana Chawla Scholar at the International Space University (France) and an alumnus of the University of Oxford.',
        imageUrl: 'https://placehold.co/200x200/e2e8f0/64748b?text=AD'
    },
    {
        name: 'Basit Nisar Bhat',
        role: 'BTech in Aerospace Engineering from BSA Crescent Institute, specializing in Drones and Aerospace Composite Materials.',
        imageUrl: 'https://placehold.co/200x200/e2e8f0/64748b?text=BNB'
    },
    {
        name: 'Mehreena Lone',
        role: 'BTech in Aerospace Engineering from BSA Crescent Institute, specializing in Drones.',
        imageUrl: 'https://placehold.co/200x200/e2e8f0/64748b?text=ML'
    }
];

const TimelineCard: React.FC<{ item: typeof historyItems[0] }> = ({ item }) => (
    <div className="p-6 bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border-l-4 border-brand-timeline-accent">
        <p className="font-bold text-brand-space mb-1">{item.year}</p>
        <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
        <p className="mt-2 text-slate-600">{item.description}</p>
    </div>
);

const TeamMemberCard: React.FC<{ member: typeof teamMembers[0] }> = ({ member }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-center flex flex-col items-center h-full">
        <img src={member.imageUrl} alt={`Photo of ${member.name}`} className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-slate-100" />
        <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
        <p className="mt-2 text-slate-600 text-sm flex-grow">{member.role}</p>
    </div>
);

export const AboutUsPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Section 1: Our Journey */}
      <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-6">
               <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Our Journey
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">
                        From a spark of an idea to a nationwide movement, this is the story of a journey fueled by passion, expertise, and a commitment to the next generation.
                    </p>
                </div>
                <div className="relative mt-16 max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-3 md:left-1/2 top-0 w-1 h-full bg-slate-200 md:-translate-x-1/2" aria-hidden="true"></div>

                    <div className="space-y-12">
                        {historyItems.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={index} className="relative">
                                    {/* Dot */}
                                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center absolute left-3 top-6 md:left-1/2 -translate-x-1/2 z-10">
                                        <div className="w-4 h-4 bg-brand-space rounded-full"></div>
                                    </div>
                                    
                                    {/* Desktop Grid Layout */}
                                    <div className="hidden md:grid md:grid-cols-2 md:gap-x-16">
                                        {isLeft ? (
                                            <div className="text-right"><TimelineCard item={item} /></div>
                                        ) : (
                                            <div></div> // Spacer
                                        )}
                                        {!isLeft ? (
                                            <div className="text-left"><TimelineCard item={item} /></div>
                                        ) : (
                                            <div></div> // Spacer
                                        )}
                                    </div>
                                    
                                    {/* Mobile Layout */}
                                    <div className="md:hidden pl-10">
                                        <TimelineCard item={item} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
          </div>
      </section>

      {/* Section 2: The Visionary Behind This */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    The Visionary Behind This
                </h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-12 items-center max-w-4xl mx-auto">
                <div className="lg:col-span-2 flex justify-center">
                    <img className="w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-full shadow-2xl border-4 border-brand-sky" src={founder.imageUrl} alt={`Photo of ${founder.name}`} />
                </div>
                <div className="lg:col-span-3 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-brand-space">{founder.name}</h3>
                    <p className="mt-4 text-lg text-slate-600">
                        {founder.bio}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Section 3: Meet the Experts */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Meet the Experts
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                    Our mission is supported by a team of brilliant minds and passionate educators dedicated to shaping the future of aerospace.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};