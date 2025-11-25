
import React from 'react';
import { PageProps } from '../types';
import { FAQ } from './FAQ';
import { Testimonials } from './Testimonials';

const AstronautIllustration = () => (
    <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
      <div className="absolute -top-4 -left-4 w-48 h-48 bg-brand-sky rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute -top-4 -right-4 w-48 h-48 bg-brand-sun rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-48 h-48 bg-green-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <img src="https://files.catbox.moe/vwlnrr.png" alt="A friendly cartoon astronaut floating in space with planets in the background" className="relative animate-float" />
    </div>
);

const WhatsAppCta: React.FC = () => (
    <section className="bg-white pb-16 md:pb-0">
        <div className="container mx-auto px-6">
            <div className="bg-slate-50 rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                    Get regular updates and free Activities for your kids
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                    Join our WhatsApp channel for the latest news on upcoming courses, free workshops, and fun aerospace activities.
                </p>
                <div className="mt-8">
                    <a 
                        href="https://whatsapp.com/channel/0029Vb6qN88JuyA4MCaa5K01" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-500 text-white hover:bg-green-600 transition-colors font-semibold px-8 py-3 rounded-full text-lg shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 1.66.43 3.24 1.21 4.6l-1.36 4.95 5.07-1.33c1.32.75 2.82 1.18 4.38 1.18h.01c5.5 0 9.96-4.49 9.96-10.02S17.5 2.04 12 2.04zM16.51 13.96c-.22-.11-.78-.38-1.02-.43-.24-.05-.42-.08-.59.16-.18.24-.38.43-.47.54-.08.11-.17.13-.33.08-.16-.05-1.02-.37-1.95-1.2-.72-.64-1.21-1.44-1.36-1.68-.15-.24-.02-.38.07-.5.08-.11.17-.28.26-.42.09-.14.12-.24.18-.4.06-.16.03-.29-.02-.39-.05-.11-.59-1.42-.81-1.94-.21-.52-.43-.45-.59-.45-.15 0-.32-.03-.49-.03s-.42 0-1.08.5c-.66.5-1.02 1.23-1.02 2.4s1.05 2.78 1.2 2.97c.15.19 2.11 3.2 5.1 4.48.71.3 1.27.48 1.71.61.73.22 1.39.19 1.9.11.57-.08 1.76-.72 2-1.42.24-.7.24-1.3.17-1.42-.08-.12-.3-.19-.52-.3z"/></svg>
                        Follow on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </section>
);


const ContactCta: React.FC<PageProps> = ({ navigate }) => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="bg-slate-50 rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12 lg:p-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Have Questions?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
                        Our team is ready to help with any inquiries. Reach out for more information about our courses, philosophy, or anything else.
                    </p>
                    <div className="mt-8">
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); navigate('contact'); }}
                            className="inline-block bg-brand-space text-white hover:bg-blue-800 transition-colors font-semibold px-8 py-3 rounded-full text-lg shadow-lg">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const SparkleIcon = () => (
    <div className="p-3 bg-brand-sky/20 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 11.414l-2.293-2.293a1 1 0 010-1.414L11 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5l2.293 2.293a1 1 0 010 1.414L11 11.414l-2.293-2.293a1 1 0 010-1.414L11 5zM19 13l2.293 2.293a1 1 0 010 1.414L19 19.414l-2.293-2.293a1 1 0 010-1.414L19 13z" />
        </svg>
    </div>
);
const AcademicCapIcon = () => (
    <div className="p-3 bg-amber-500/20 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.002z" />
        </svg>
    </div>
);
const BrainIcon = () => (
    <div className="p-3 bg-lime-500/20 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    </div>
);

const AboutSection = () => (
    <section id="about-brahmastra" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-space font-['Montserrat']">
                        brahmàstra<span className="text-[#e40917]">.</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Brahmastra was born to make aerospace education accessible and replace rote learning with real-world wonder. Here's how we do it:
                    </p>
                    <ul className="mt-6 space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0"><SparkleIcon /></div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-800">Real-World Learning</h4>
                                <p className="text-slate-600 mt-1">We replace rote learning with hands-on projects that build real skills and turn screen time into skill time.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0"><AcademicCapIcon /></div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-800">Expert Mentorship</h4>
                                <p className="text-slate-600 mt-1">Our mentors are real aerospace engineers who teach kids to think, build, and problem-solve.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0"><BrainIcon /></div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-800">Curiosity-Driven</h4>
                                <p className="text-slate-600 mt-1">We don't chase marks; we chase "aha!" moments, igniting a genuine passion for innovation.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="order-1 lg:order-2 animate-fade-in-up">
                     <div className="relative w-full h-0 pb-[54.4118%] shadow-lg rounded-lg overflow-hidden">
                         <iframe 
                            loading="lazy" 
                            className="absolute top-0 left-0 w-full h-full border-0"
                            src="https://www.canva.com/design/DAEcK5gOp6s/view?embed" 
                            allowFullScreen
                            allow="fullscreen">
                          </iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const impactStats = [
  { emoji: '👨‍👩‍👧‍👦', number: '85,000+', description: "India's Biggest Aerospace Community", color: 'text-brand-space', borderColor: 'border-brand-space' },
  { emoji: '🎓', number: '30,000+', description: 'Students Passed Out in 6 Years', color: 'text-brand-sky', borderColor: 'border-brand-sky' },
  { emoji: '🧑‍🚀', number: '3,000+', description: 'Aerospace Engineers Trained Personally', color: 'text-brand-sun', borderColor: 'border-brand-sun' },
  { emoji: '🌍', number: '40+', description: 'Countries Our Alumni Work In', color: 'text-green-500', borderColor: 'border-green-500' },
  { emoji: '🗺️', number: '10+', description: 'States Served in India', color: 'text-purple-500', borderColor: 'border-purple-500' },
  { emoji: '🤝', number: '6+', description: 'Years of Trust in the Aerospace Community', color: 'text-[#e40917]', borderColor: 'border-[#e40917]' }
];

const StatsSection = () => (
    <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Our Impact
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {impactStats.map((stat, index) => (
                    <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${stat.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                        <p className="text-4xl mb-4">{stat.emoji}</p>
                        <h3 className={`text-4xl font-extrabold ${stat.color}`}>{stat.number}</h3>
                        <p className="mt-2 text-base text-slate-600">{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const WhoTeachesSection = () => {
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

    return (
        <section className="py-16 md:py-24 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Who Teaches Your Child?
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
    );
};


export const HomePage: React.FC<PageProps> = ({ navigate }) => {
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="text-brand-space font-semibold tracking-wider bg-sky-200/50 px-3 py-1 rounded-full">AGES 6-16</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mt-4">
                Launch Your Child's <span className="text-brand-space">Aerospace Journey</span> from Home<span className="text-[#e40917]">.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                Turn screen time into skill time. Our fun, hands-on live courses make learning about planes, rockets, stars, and drones an exciting adventure for every curious mind.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                    href="#about-brahmastra" 
                    onClick={(e) => handleScrollClick(e, 'about-brahmastra')}
                    className="bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg">
                  Explore Now
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
                <AstronautIllustration />
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <WhoTeachesSection />
      
      <StatsSection />
      
      <Testimonials />

      <FAQ />

      <WhatsAppCta />

      <ContactCta navigate={navigate} />
    </>
  );
};
