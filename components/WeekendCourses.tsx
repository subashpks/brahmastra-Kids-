
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

const ProgramCard: React.FC<{ program: any }> = ({ program }) => (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-100">
        <div className="flex justify-between items-start mb-4">
            <span className="bg-brand-sky/10 text-brand-space text-xs font-bold px-3 py-1 rounded-full">
                {program.age}
            </span>
            <span className="text-slate-500 text-xs font-semibold flex items-center">
                {program.date}
            </span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">{program.title}</h3>
        <div className="text-sm text-slate-600 mb-4 whitespace-pre-line flex items-start gap-2">
            <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{program.time}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
            {program.mediums.map((m: string) => (
                <span key={m} className="text-xs border border-slate-200 text-slate-500 px-2 py-1 rounded">
                    {m}
                </span>
            ))}
        </div>
    </div>
);

export const FreeCoursesPage: React.FC<{ activeChild: ChildProfile | null }> = ({ activeChild }) => {
    const [isNri, setIsNri] = useState(false);

    const programs = isNri ? nriPrograms : indianPrograms;

    return (
        <div className="animate-fade-in-up">
            {/* Hero Section */}
            <section className="relative py-12 md:py-20 bg-brand-space text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-sky-200 text-xs font-bold tracking-widest uppercase mb-4">
                        Weekend Special
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                        Free <span className="text-brand-sun">Weekend</span> Workshops
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8">
                        Making rocket science simple, fun, and free for kids.
                    </p>
                    
                    <div className="inline-flex bg-white/10 p-1 rounded-full backdrop-blur-sm">
                        <button 
                            onClick={() => setIsNri(false)}
                            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all ${!isNri ? 'bg-white text-brand-space shadow-lg' : 'text-white hover:bg-white/10'}`}
                        >
                            🇮🇳 Indian Residents
                        </button>
                        <button 
                            onClick={() => setIsNri(true)}
                            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all ${isNri ? 'bg-white text-brand-space shadow-lg' : 'text-white hover:bg-white/10'}`}
                        >
                            🌍 NRI Students
                        </button>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-12 md:py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Upcoming Sessions for {isNri ? 'International Students' : 'Indian Students'}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {programs.map((program, index) => (
                            <ProgramCard key={index} program={program} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Enrollment Form */}
            <EnrollmentForm />

            {/* WhatsApp CTA */}
            <section className="bg-white py-12 border-t border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-slate-600 mb-6">
                        Prefer to get updates on your phone?
                    </p>
                    <a 
                        href="https://whatsapp.com/channel/0029Vb6qN88JuyA4MCaa5K01" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md"
                    >
                        <WhatsAppIcon />
                        Join WhatsApp Channel
                    </a>
                </div>
            </section>
        </div>
    );
};
