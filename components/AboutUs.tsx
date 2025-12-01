
import React from 'react';

const founder = {
    name: 'Subash P. Kuppusamy',
    imageUrl: 'https://files.catbox.moe/gpjimc.png',
    bio: 'An Aerospace Engineer from Anna University, Subash P. Kuppusamy\'s unwavering vision began with foundational experience on the Tejas Fighter Aircraft at Hindustan Aeronautics Limited (HAL). From mentoring thousands of students to training the armed forces, his mission is to make aerospace education accessible and inspire the next generation of innovators.',
    achievements: [
        'Aerospace Engineer from Anna University',
        'Worked on Tejas Fighter Aircraft at HAL, Bangalore',
        'DGCA Certified Drone Pilot (Medium & Small)',
        'Trained Indian Armed Forces in UAV applications in Kashmir',
        'Appointed ISRO Space Tutor',
    ]
};

const impactStats = [
  { emoji: '👨‍👩‍👧‍👦', number: '85,000+', description: "India's Biggest Aerospace Community", color: 'text-brand-space', bgColor: 'bg-blue-100' },
  { emoji: '🎓', number: '30,000+', description: 'Students Passed Out in 6 Years', color: 'text-brand-sky', bgColor: 'bg-sky-100' },
  { emoji: '🧑‍🚀', number: '3,000+', description: 'Aerospace Engineers Trained Personally', color: 'text-brand-sun', bgColor: 'bg-amber-100' },
  { emoji: '🌍', number: '40+', description: 'Countries Our Alumni Work In', color: 'text-green-500', bgColor: 'bg-green-100' },
  { emoji: '🗺️', number: '10+', description: 'States Served in India', color: 'text-purple-500', bgColor: 'bg-purple-100' },
  { emoji: '🤝', number: '6+', description: 'Years of Trust in the Aerospace Community', color: 'text-red-500', bgColor: 'bg-red-100' }
];

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const AboutUsPage: React.FC = () => {
    const CuriosityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
    const HandsOnIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.136a1.76 1.76 0 011.171-2.274l.113-.037a1.76 1.76 0 001.313-2.386l-.114-.343a1.76 1.76 0 01.343-1.857l.114-.114a1.76 1.76 0 012.489 0l.114.114a1.76 1.76 0 01.343 1.857l-.114.343a1.76 1.76 0 001.313 2.386l.113.037a1.76 1.76 0 011.17 2.274l-2.147 6.136a1.76 1.76 0 01-3.417-.592z" /></svg>;
    const MentorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
    const SmallGroupIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    const CollaborationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    const AccessibleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01V5M12 20v-1m0 1v.01M12 18v-1m0-1v-5m-6 4H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2h-2" /></svg>;

    const coreValues = [
        { icon: <CuriosityIcon />, title: 'Curiosity First', description: 'We nurture thinkers, not toppers. We chase "aha!" moments and build a deep passion for learning.', color: 'text-orange-500 bg-orange-50' },
        { icon: <HandsOnIcon />, title: 'Learning by Doing', description: 'Forget worksheets. Kids learn by building, launching, and solving real problems, turning screen time into skill time.', color: 'text-green-500 bg-green-50' },
        { icon: <MentorIcon />, title: 'Expert Mentorship', description: 'Our mentors are real aerospace engineers who provide priceless guidance and inspiration.', color: 'text-sky-500 bg-sky-50' },
        { icon: <SmallGroupIcon />, title: 'Small Groups, Big Impact', description: 'No "back bench." We focus on individual needs and build confidence in a pressure-free environment.', color: 'text-purple-500 bg-purple-50' },
        { icon: <CollaborationIcon />, title: 'Collaboration Over Competition', description: 'We foster teamwork and shared discovery, because the greatest breakthroughs come from working together.', color: 'text-teal-500 bg-teal-50' },
        { icon: <AccessibleIcon />, title: 'Fair & Accessible', description: 'We believe every child deserves access to real experts, making top-tier STEM education affordable.', color: 'text-pink-500 bg-pink-50' }
    ];

  return (
    <div className="animate-fade-in-up">
      {/* 1. Hero Section */}
      <section className="relative py-24 md:py-32 bg-slate-800 text-white overflow-hidden">
          <div className="absolute inset-0">
              <img src="https://files.catbox.moe/k4q3i9.png" alt="Kids learning about rockets" className="w-full h-full object-cover opacity-20"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
               <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                  Our Mission: <br />To Launch a Million Dreams
               </h1>
               <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                  We are a team of passionate aerospace engineers dedicated to making high-quality space education accessible, engaging, and inspiring for every child.
               </p>
          </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                      <span className="text-brand-space font-semibold tracking-wider bg-sky-100 px-3 py-1 rounded-full text-sm">THE BRAHMASTRA STORY</span>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-4">From a Forum to a Movement</h2>
                      <div className="mt-6 text-slate-600 leading-relaxed space-y-4">
                          <p>Brahmastra began in 2019 not as a company, but as a community. Our founder, an aerospace engineer himself, saw a gap: brilliant young minds in India lacked access to real-world aerospace knowledge and mentorship.</p>
                          <p>What started as an online forum to connect students with professionals quickly grew into India's largest aerospace community. We realized that the hunger for knowledge was immense, but the traditional system wasn't feeding it. Rote learning and a focus on marks were killing the very curiosity that fuels innovation.</p>
                          <p>So, we decided to change that. We built Brahmastra Aerospace Academy to be everything we wished for as kids: a place where questions are celebrated, learning is hands-on, and mentors are actual rocket scientists. Our mission is to go beyond textbooks and ignite a genuine, lifelong passion for science and engineering.</p>
                      </div>
                  </div>
                  <div className="flex justify-center">
                      <img src="https://files.catbox.moe/gpjimc.png" alt="Founder of Brahmastra Aerospace" className="rounded-full w-80 h-80 object-cover shadow-2xl border-8 border-white"/>
                  </div>
              </div>
          </div>
      </section>
      
      {/* 3. Impact Stats */}
      <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                      Our Impact in Numbers
                  </h2>
                  <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                      We're proud of the community we've built and the minds we've inspired.
                  </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {impactStats.map((stat, index) => (
                      <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 transition-all duration-300 ${stat.bgColor} group-hover:scale-110`}>
                             {stat.emoji}
                          </div>
                          <h3 className={`text-5xl font-extrabold ${stat.color}`}>{stat.number}</h3>
                          <p className="mt-3 text-base text-slate-600 font-medium">{stat.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. Core Values */}
       <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
               <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our Core Values</h2>
                    <p className="mt-4 text-lg text-slate-600">These are the principles that guide everything we do.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreValues.map(value => (
                        <div key={value.title} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className={`inline-flex p-3 rounded-full ${value.color}`}>
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">{value.title}</h3>
                            <p className="text-slate-600">{value.description}</p>
                        </div>
                    ))}
                </div>
          </div>
       </section>
       
      {/* 5. Meet the Founder */}
      <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Meet the Founder
                    </h2>
                </div>
                <div className="grid lg:grid-cols-5 gap-12 items-center max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
                    <div className="lg:col-span-2 flex justify-center">
                        <img className="w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-full shadow-2xl border-4 border-brand-sky" src={founder.imageUrl} alt={`Photo of ${founder.name}`} />
                    </div>
                    <div className="lg:col-span-3 text-center lg:text-left">
                        <h3 className="text-3xl font-bold text-brand-space">
                             <a 
                                href={`https://chatgpt.com/?q=${encodeURIComponent("who is Subash P Kuppusamy give me a detailed Explaination on him")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {founder.name}
                            </a>
                        </h3>
                        <p className="mt-4 text-slate-600">
                            {founder.bio}
                        </p>
                        <ul className="mt-6 space-y-3">
                            {founder.achievements.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckIcon />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};
