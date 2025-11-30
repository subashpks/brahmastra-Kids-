
import React, { useState } from 'react';
import { EnrollmentForm } from './Contact';
import { ChildProfile } from '../types';

// Icons
const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-sun" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

const UserGroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const RocketLaunchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 1.66.43 3.24 1.21 4.6l-1.36 4.95 5.07-1.33c1.32.75 2.82 1.18 4.38 1.18h.01c5.5 0 9.96-4.49 9.96-10.02S17.5 2.04 12 2.04zM16.51 13.96c-.22-.11-.78-.38-1.02-.43-.24-.05-.42-.08-.59.16-.18.24-.38.43-.47.54-.08.11-.17.13-.33.08-.16-.05-1.02-.37-1.95-1.2-.72-.64-1.21-1.44-1.36-1.68-.15-.24-.02-.38.07-.5.08-.11.17-.28.26-.42.09-.14.12-.24.18-.4.06-.16.03-.29-.02-.39-.05-.11-.59-1.42-.81-1.94-.21-.52-.43-.45-.59-.45-.15 0-.32-.03-.49-.03s-.42 0-1.08.5c-.66.5-1.02 1.23-1.02 2.4s1.05 2.78 1.2 2.97c.15.19 2.11 3.2 5.1 4.48.71.3 1.27.48 1.71.61.73.22 1.39.19 1.9.11.57-.08 1.76-.72 2-1.42.24-.7.24-1.3.17-1.42-.08-.12-.3-.19-.52-.3z"/>
    </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const upcomingPrograms = [
    { 
        subDomain: "🚀 Space Exploration",
        title: "How Can We Visit Space? 🚀", 
        age: "Ages 6-11", 
        date: "29 Nov | Saturday", 
        time: "05:30 PM - 06:30 PM IST",
    },
    { 
        subDomain: "🚀 Space Exploration",
        title: "What Are Famous Space Missions? 🛰️", 
        age: "Ages 12-16", 
        date: "29 Nov | Saturday", 
        time: "05:30 PM - 06:30 PM IST",
    }
];

const ProgramCard: React.FC<{ program: any }> = ({ program }) => {
    const scrollToForm = () => {
        const form = document.getElementById('enrollment-form');
        if (form) form.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
            <div className="mb-4">
                <span className="text-sm font-bold text-brand-space tracking-wide uppercase block mb-1">{program.subDomain}</span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">{program.title}</h3>
            </div>
            
            <div className="flex justify-between items-center mb-6">
                <span className="bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-sky-200">
                    {program.age}
                </span>
                <span className="flex items-center text-slate-500 text-xs font-bold">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    LIVE
                </span>
            </div>
            
            <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-brand-sun mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {program.date}
                </div>
                <div className="flex items-center text-slate-600 text-sm whitespace-pre-line">
                    <svg className="w-5 h-5 text-brand-sun mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {program.time}
                </div>
            </div>

            <button 
                onClick={scrollToForm}
                className="w-full bg-[#e40917] hover:bg-[#c10714] text-white font-bold py-3 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 group"
            >
                Secure Slot
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </button>
        </div>
    );
};

export const FreeCoursesPage: React.FC<{ activeChild: ChildProfile | null }> = ({ activeChild }) => {
    const handleScrollToForm = () => {
        const form = document.getElementById('enrollment-form');
        if (form) form.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="animate-fade-in-up">
            
            {/* 1. Hero Section */}
            <section className="py-20 md:py-28 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform translate-x-20 hidden lg:block"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-sky/10 rounded-full filter blur-3xl opacity-50"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
                                Take the First Step of Your Child Towards <span className="text-brand-space">Space</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl font-medium text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                An Online, Fun, Weekend Activity designed to spark the scientist within.
                            </h2>
                            
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-bold text-sm">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Online Live
                                </span>
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-bold text-sm">
                                    🚀 Weekend Fun
                                </span>
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-bold text-sm">
                                    ✂️ Activity Based
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button 
                                    onClick={handleScrollToForm}
                                    className="bg-[#e40917] hover:bg-[#c10714] text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 text-lg"
                                >
                                    Get Launch Pad Pass - ₹199
                                </button>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                             <div className="relative w-full max-w-md">
                                <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-blob"></div>
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                                <img src="https://files.catbox.moe/cticic.png" alt="Astronaut" className="relative z-10 animate-float w-full h-auto drop-shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Perks Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                            Why Choose the <span className="text-brand-space font-['Montserrat']">Launch Pad</span>?
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
                            <div className="mx-auto bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <StarIcon />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">A Confident First Step</h3>
                            <p className="text-slate-600 leading-relaxed">A low-cost, high-value way to see if your child loves space science before committing to a full course.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
                            <div className="mx-auto bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <RocketLaunchIcon />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">Fun, Hands-On Learning</h3>
                            <p className="text-slate-600 leading-relaxed">No boring lectures. We use everyday items to build simple models and do cool experiments.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
                            <div className="mx-auto bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <UserGroupIcon />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">Real Science Made Simple</h3>
                            <p className="text-slate-600 leading-relaxed">Complex rocket science concepts simplified into stories and activities kids actually understand.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Deliverables Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
                                What's Inside the Pass?
                            </h2>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="mt-1"><CheckCircleIcon /></div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-slate-800">90 Minutes Live Session</h4>
                                        <p className="text-slate-600">Interactive learning with quizzes and activities.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1"><CheckCircleIcon /></div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-slate-800">Direct Q&A with Experts</h4>
                                        <p className="text-slate-600">Your child can ask any space question to our ISRO tutors.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1"><CheckCircleIcon /></div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-slate-800">No Equipment Needed</h4>
                                        <p className="text-slate-600">All activities use simple household items (paper, tape, bottles).</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1"><CheckCircleIcon /></div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-slate-800">Official Digital Certificate</h4>
                                        <p className="text-slate-600">A proud achievement to show friends and family.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-space/5 rounded-3xl transform rotate-3"></div>
                            <div className="relative bg-white border-2 border-brand-space/10 rounded-3xl p-8 shadow-xl text-center">
                                <div className="w-20 h-20 bg-brand-space rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg">
                                    🏆
                                </div>
                                <h3 className="text-2xl font-bold text-brand-space mb-2">Certificate of Achievement</h3>
                                <p className="text-slate-600 mb-6">
                                    Every participant receives a personalized digital certificate signed by ISRO Space Tutors.
                                </p>
                                <div className="inline-block bg-slate-100 text-slate-500 text-xs px-3 py-1 rounded">
                                    Sent via Email after session
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Who Will Teach */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6 text-center max-w-4xl mx-auto">
                    <span className="text-brand-space font-bold tracking-wider uppercase text-sm mb-2 block">Our Mentors</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                        Mentored by Real Rocket Scientists
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-10">
                        Our mentors aren't just teachers; they are <span className="font-bold text-slate-800">Aerospace Engineers</span> & <span className="font-bold text-slate-800">ISRO Registered Space Tutors</span> who have worked on real jets, drones, and space missions. They bring real-world passion to every class.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-slate-200">
                            <span className="text-xl">👨‍🚀</span>
                            <span className="font-bold text-slate-700">Real Engineers</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-slate-200">
                            <span className="text-xl">🛰️</span>
                            <span className="font-bold text-slate-700">ISRO Tutors</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-slate-200">
                            <span className="text-xl">🎓</span>
                            <span className="font-bold text-slate-700">5+ Years Exp</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Next Program Section */}
            <section id="upcoming-sessions" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Upcoming Launch Pad Session</h2>
                        <p className="text-lg text-slate-600 mt-4">Select your child's age group to book.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {upcomingPrograms.map((program, index) => (
                            <ProgramCard key={index} program={program} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Enrollment Form Section */}
            <div id="enrollment-form" className="relative pb-20 bg-slate-50 pt-20">
                <div className="container mx-auto px-6 text-center mb-8">
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Secure Your Launch Pad Slot
                    </h2>
                    <p className="mt-4 text-slate-600 text-lg">Fill the form to book your ₹199 Launch Pad Pass.</p>
                </div>
                <EnrollmentForm />
            </div>

            {/* WhatsApp CTA */}
            <section className="bg-slate-900 py-16 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions?</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Join our community or chat with us for more details.
                    </p>
                    <a 
                        href="https://whatsapp.com/channel/0029Vb6qN88JuyA4MCaa5K01" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-lg"
                    >
                        <WhatsAppIcon />
                        Join WhatsApp Channel
                    </a>
                </div>
            </section>
        </div>
    );
};
