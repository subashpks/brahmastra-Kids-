
import React, { useState } from 'react';
import { EnrollmentForm } from './Contact';
import { ChildProfile } from '../types';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 1.66.43 3.24 1.21 4.6l-1.36 4.95 5.07-1.33c1.32.75 2.82 1.18 4.38 1.18h.01c5.5 0 9.96-4.49 9.96-10.02S17.5 2.04 12 2.04zM16.51 13.96c-.22-.11-.78-.38-1.02-.43-.24-.05-.42-.08-.59.16-.18.24-.38.43-.47.54-.08.11-.17.13-.33.08-.16-.05-1.02-.37-1.95-1.2-.72-.64-1.21-1.44-1.36-1.68-.15-.24-.02-.38.07-.5.08-.11.17-.28.26-.42.09-.14.12-.24.18-.4.06-.16.03-.29-.02-.39-.05-.11-.59-1.42-.81-1.94-.21-.52-.43-.45-.59-.45-.15 0-.32-.03-.49-.03s-.42 0-1.08.5c-.66.5-1.02 1.23-1.02 2.4s1.05 2.78 1.2 2.97c.15.19 2.11 3.2 5.1 4.48.71.3 1.27.48 1.71.61.73.22 1.39.19 1.9.11.57-.08 1.76-.72 2-1.42.24-.7.24-1.3.17-1.42-.08-.12-.3-.19-.52-.3z"/>
    </svg>
);

const indianPrograms = [
    { 
        title: "ISRO - Our Space story", 
        age: "Ages 6-11", 
        date: "22 Nov | Saturday", 
        time: "05:30 PM - 06:30 PM IST",
        mediums: ['English', 'Hindi', 'Tamil'] 
    },
    { 
        title: "ISRO - India's Tech Leap on Space", 
        age: "Ages 12-16", 
        date: "22 Nov | Saturday", 
        time: "05:30 PM - 06:30 PM IST",
        mediums: ['English', 'Hindi', 'Tamil'] 
    }
];

const nriPrograms = [
    { 
        title: "Introduction to Rocket Science", 
        age: "Ages 6-11", 
        date: "23 Nov | Sunday", 
        time: "12:00 PM - 01:00 PM EST\n05:00 PM - 06:00 PM GMT",
        mediums: ['English'] 
    },
    { 
        title: "Advanced Rocket Science", 
        age: "Ages 12-16", 
        date: "23 Nov | Sunday", 
        time: "12:00 PM - 01:00 PM EST\n05:00 PM - 06:00 PM GMT",
        mediums: ['English'] 
    }
];

const missionPoints = [
    {
        title: 'Why?',
        text: 'To destroy the taboo that Rocket Science is tough by showing it happens in your kitchen sink.',
        borderColor: 'border-brand-space'
    },
    {
        title: 'What?',
        text: 'We translate the toughest topics into understandable, everyday science using simple metaphors and your language.',
        borderColor: 'border-green-500'
    },
    {
        title: 'Where?',
        text: 'You learn right from where you are, using what you know, what you have, and your daily surroundings.',
        borderColor: 'border-brand-sun'
    },
    {
        title: 'When?',
        text: 'Every weekend evening, we explore a new topic that has been made taboo in public science discussions.',
        borderColor: 'border-purple-500'
    },
    {
        title: 'Who?',
        text: 'This free session is designed specifically for curious kids across the globe in the age category of 6 to 16 years.',
        borderColor: 'border-brand-sky'
    },
    {
        title: 'How?',
        text: 'We provide a high-quality, free session for all kids, carefully scheduled for different time zones to ensure global accessibility.',
        borderColor: 'border-[#e40917]'
    }
];

const ProgramCard: React.FC<{ program: typeof indianPrograms[0] }> = ({ program }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-sun flex-1 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <span className="font-bold bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full text-sm self-start">{program.age}</span>
        <h3 className="text-xl font-bold text-slate-800 mt-3 mb-2 flex-grow">{program.title}</h3>
        <p className="text-slate-600 font-medium">{program.date}</p>
        <p className="text-slate-600 font-medium text-sm whitespace-pre-line">{program.time}</p>
    </div>
);

const HeroIllustration = () => (
     <div className="relative w-full max-w-xl mx-auto">
      <div className="absolute -top-4 -left-4 w-56 h-56 bg-sky-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute -top-4 -right-4 w-56 h-56 bg-amber-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-56 h-56 bg-green-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <img 
            src="https://files.catbox.moe/kcz5ca.png" 
            alt="A happy child sitting in a homemade cardboard rocket, imagining a space adventure, with planets in the background." 
            className="relative animate-float"
        />
    </div>
);

interface FreeCoursesPageProps {
    activeChild: ChildProfile | null;
}

export const FreeCoursesPage: React.FC<FreeCoursesPageProps> = ({ activeChild }) => {
    const [region, setRegion] = useState<'India' | 'NRI'>('India');

    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const displayedPrograms = region === 'India' ? indianPrograms : nriPrograms;

    return (
        <div className="animate-fade-in-up">
            {/* Hero Section */}
            <section className="pt-8 pb-16 md:pt-12 md:pb-24">
                <div className="container mx-auto px-6">
                   <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left order-2 lg:order-1">
                             <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-tight mt-4 text-left">
                                <span className="block">Mission</span>
                                <span className="block text-brand-space font-['Montserrat']">brahmàstra<span className="text-[#e40917]">.</span></span>
                            </h1>
                            <p className="mt-6 text-lg text-slate-600 max-w-xl text-left">
                                Making rocket science simple, fun, and free for kids.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-4">
                                <a 
                                    href="#upcoming-courses"
                                    onClick={(e) => handleScrollClick(e, 'upcoming-courses')}
                                    className="bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg"
                                >
                                    View Upcoming Programs
                                </a>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <HeroIllustration />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Description Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-left">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            What is Mission <span className="text-brand-space font-['Montserrat'] font-extrabold">brahmàstra</span><span className="text-[#e40917] font-extrabold">.</span>?
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                            The mission is to take Aerospace and Rocket science to every door possible in the globe, to make sure "It is not a Rocket science" is just another word.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* WH Questions Section (Mission Brief) */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                            {missionPoints.map((point, index) => (
                                <div key={index} className={`bg-white p-8 rounded-2xl shadow-sm border-b-4 ${point.borderColor} hover:-translate-y-1 transition-transform duration-300`}>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{point.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {point.text}
                                    </p>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Programs Section - With Toggle */}
            <section id="upcoming-courses" className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-brand-space max-w-5xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-6">Upcoming Programs</h2>
                        
                        {/* Toggle Button */}
                        <div className="flex justify-center mb-10">
                             <div className="bg-slate-100 p-1.5 rounded-full inline-flex relative shadow-inner">
                                <button
                                    onClick={() => setRegion('India')}
                                    className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${region === 'India' ? 'bg-brand-space text-white shadow-md transform scale-105' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    For Indian Residents
                                </button>
                                <button
                                    onClick={() => setRegion('NRI')}
                                    className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${region === 'NRI' ? 'bg-brand-space text-white shadow-md transform scale-105' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    For Non-Resident Indians
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-8 justify-center">
                            {displayedPrograms.map((program, index) => (
                                <ProgramCard key={index} program={program} />
                            ))}
                        </div>
                        
                         <p className="text-center text-sm text-slate-600 mt-8 mb-4 italic">
                            We conduct separate, fully interactive classes for each Age category, Indian Residents and Non Resident Indians to ensure the best learning experience.
                        </p>

                         <div className="text-center">
                             <a 
                                href="#contact"
                                onClick={(e) => handleScrollClick(e, 'contact')}
                                className="inline-block w-full sm:w-auto bg-brand-sun hover:bg-amber-600 transition-colors text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg transform hover:scale-105"
                            >
                                Join Mission brahmàstra
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <EnrollmentForm />

            {/* Social Media Prompt */}
            <section className="pt-16 md:pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto bg-slate-100 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-slate-800">Get regular updates and free Activities for your kids</h3>
                         <a 
                            href="https://whatsapp.com/channel/0029Vb6qN88JuyA4MCaa5K01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold px-6 py-2 rounded-full shadow-md"
                        >
                            <WhatsAppIcon />
                            Follow us on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
