import React, { useState } from 'react';

// --- Philosophy Data from Differentiators ---
const whatWeDoData = [
    {
        emoji: '💡',
        title: 'Fair Price, Priceless Mentorship',
        description: 'We believe every child deserves access to real experts. Our pricing makes high-quality STEM education accessible, providing genuine aerospace engineers as mentors without the hefty price tag.',
        color: 'border-orange-500',
    },
    {
        emoji: '🌱',
        title: 'We Nurture Thinkers, Not Toppers',
        description: 'Instead of chasing ranks, we chase "aha!" moments. We build a deep passion for learning and critical thinking—the true markers of long-term success, far beyond any report card.',
        color: 'border-brand-sun',
    },
    {
        emoji: '✂️',
        title: 'We Build, We Don\'t Bore',
        description: 'Forget endless worksheets. Our kids learn by doing—launching rockets, designing wings, and solving real-world problems. This hands-on approach makes learning stick and turns screen time into skill time.',
        color: 'border-green-500',
    },
    {
        emoji: '👩‍🏫',
        title: 'Q: Why Small Groups?',
        description: 'A: Because every child is unique. In a small group, there\'s no "back bench." Our mentors can focus on individual needs, answer every curious question, and tailor the pace so your child builds confidence, free from the pressure to keep up or fit in.',
        color: 'border-purple-500',
    },
    {
        emoji: '🤝',
        title: 'Collaboration Over Competition',
        description: 'The greatest scientific breakthroughs come from teamwork. We create a supportive space where children share ideas, celebrate each other\'s discoveries, and learn that working together is more powerful than competing alone.',
        color: 'border-teal-500',
    },
    {
        emoji: '✨',
        title: 'We Ignite Curiosity, Not False Hope',
        description: 'We promise something more valuable than a guaranteed rank: a genuine spark of curiosity. We teach your child how to think, problem-solve, and explore—skills that empower them to become self-reliant learners for life.',
        color: 'border-brand-sky',
    },
];

const whatWeDontDoData = [
    {
        emoji: '💰',
        title: 'We Don’t Overcharge',
        description: "We understand the sacrifices parents make for quality education. Our goal is to provide top-tier mentorship from real aerospace engineers at a fair price, without compromise."
    },
    {
        emoji: '📉',
        title: 'We Don’t Join the "Rat Race"',
        description: "In a world of intense pressure for marks and ranks, we focus on what truly matters: your child's unique curiosity. We build a foundation for lifelong success, not just exam performance."
    },
    {
        emoji: '📚',
        title: 'We Don’t Believe in "Busy Work"',
        description: "Your family's time is valuable. We replace boring PDFs and rote homework with engaging, hands-on projects that teach critical thinking and real-world skills."
    },
    {
        emoji: '👥',
        title: 'We Don’t Use a One-Size-Fits-All Model',
        description: "Peer pressure often forces children into the same mold. We celebrate individuality. Our small groups ensure we can tailor the experience to your child's unique learning style, pace, and interests."
    },
    {
        emoji: '🏆',
        title: 'We Don’t Foster Unhealthy Competition',
        description: "We believe collaboration drives innovation. Our supportive environment encourages kids to share ideas and celebrate discoveries together, building teamwork skills instead of stressful rivalry."
    },
    {
        emoji: '🎯',
        title: 'We Don’t Promise "Guaranteed Toppers"',
        description: "We don't sell unrealistic dreams of guaranteed ranks. Instead, we promise something more valuable: to awaken your child's inner scientist, teach them how to think critically, and build a genuine passion for learning that lasts a lifetime."
    }
];

const InfoCard: React.FC<{ card: { emoji: string; title: string; description: string; color?: string; } }> = ({ card }) => (
    <div className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 ${card.color || 'border-red-500'} flex flex-col`}>
        <div className="text-4xl mb-4">{card.emoji}</div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
        <p className="text-slate-600 flex-grow">{card.description}</p>
    </div>
);

// --- Founder Data ---
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

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- History Data ---
const historyItems = [
    {
        year: '2019',
        title: 'Founding & Creation of Forum',
        description: 'Brahmastra Aerospace founded with the vision to build a strong aerospace forum and collaborative ecosystem.',
        emoji: '💡'
    },
    {
        year: '2019–2021',
        title: 'Nationwide & Global Aerospace Community Building',
        description: 'Built one of India\'s largest aerospace student communities; connected with aerospace engineers across India and the world; engaged 20,000+ students. Widely known as the forum where “every aerospace engineer in India is a student of Brahmastra Aerospace.”',
        emoji: '🌐'
    },
    {
        year: '2019–2022',
        title: 'Alumni Success Worldwide',
        description: 'Alumni began joining top global aerospace organizations including NASA, ESA, ISRO, HAL, Boeing, Airbus, and other leading institutions.',
        emoji: '🎓'
    },
    {
        year: '2022',
        title: 'Appointed ISRO Space Tutor',
        description: 'Officially recognized and appointed by ISRO as a Space Tutor, strengthening STEM outreach, space education, and national-level engagement.',
        emoji: '🛰️'
    },
    {
        year: '2023–2025',
        title: 'Appointed US–India Missions Space Tutor',
        description: 'Selected by the US Embassy in India as the US–India Missions "Space Tutor" for 2023, 2024, and 2025, conducting international-level educational and aerospace outreach programs.',
        emoji: '🤝'
    },
    {
        year: 'Ongoing',
        title: 'Training Support to Indian Armed Forces',
        description: 'Conducted drone-based hands-on training for Indian Armed Forces personnel in Kashmir, focusing on close-combat UAV applications, enhancing tactical drone capabilities.',
        emoji: '🛡️'
    }
];

const JourneyCard: React.FC<{ item: typeof historyItems[0] }> = ({ item }) => (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-8 border-brand-space min-h-[475px] flex flex-col justify-center text-center items-center transition-all duration-300">
        <p className="text-6xl mb-4">{item.emoji}</p>
        <p className="text-4xl md:text-5xl font-extrabold text-brand-space mb-4">{item.year}</p>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{item.title}</h3>
        <p className="mt-4 text-slate-600 text-lg leading-relaxed">{item.description}</p>
    </div>
);

export const AboutUsPage: React.FC = () => {
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  const handleNextHistory = () => {
      setCurrentHistoryIndex(prev => Math.min(prev + 1, historyItems.length - 1));
  };

  const handlePrevHistory = () => {
      setCurrentHistoryIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="animate-fade-in-up">
      {/* Section 1: Introduction */}
      <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
               <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        About Us
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        Brahmastra was born to make aerospace education accessible and replace rote learning with real-world wonder.
                    </p>
                </div>
          </div>
      </section>

      {/* Section 2: Our Journey */}
      <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
               <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Our Journey
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        From a spark of an idea to a nationwide movement. Click through our timeline to see our major milestones.
                    </p>
                </div>
                <div className="relative mt-16 max-w-3xl mx-auto">
                    <div key={currentHistoryIndex} className="animate-pop-in">
                        <JourneyCard item={historyItems[currentHistoryIndex]} />
                    </div>

                    <div className="flex justify-between items-center mt-8">
                        <button 
                            onClick={handlePrevHistory} 
                            disabled={currentHistoryIndex === 0}
                            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white shadow-md hover:bg-slate-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Previous milestone"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            Prev
                        </button>
                        
                        <div className="flex gap-2">
                            {historyItems.map((_, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => setCurrentHistoryIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentHistoryIndex ? 'bg-brand-space' : 'bg-slate-300 hover:bg-slate-400'}`}
                                    aria-label={`Go to milestone ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button 
                            onClick={handleNextHistory} 
                            disabled={currentHistoryIndex === historyItems.length - 1}
                            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white shadow-md hover:bg-slate-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Next milestone"
                        >
                            Next
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
          </div>
      </section>

      {/* Section 3: Our Philosophy */}
      <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                        Our Philosophy
                    </h2>
                    <p className="mt-6 text-lg text-slate-600">
                        We believe in a different approach to learning—one that puts curiosity first and builds confidence for life.
                    </p>
                </div>

                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
                       ✅ What We Do Instead
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whatWeDoData.map((card) => (
                            <InfoCard key={card.title} card={card} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
                        ❌ What We Don’t Do
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {whatWeDontDoData.map((card) => (
                           <InfoCard key={card.title} card={card} />
                        ))}
                    </div>
                </div>
            </div>
      </section>

      {/* Section 4: The Visionary Behind This */}
      <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Meet the Founder
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Meet the visionary founder and chief mentor behind Brahmastra Aerospace.
                    </p>
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
