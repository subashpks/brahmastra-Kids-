
import React, { useState } from 'react';
import { PageProps } from '../types';
import { ADVANCED_CAMP_DATA } from '../constants';

// Icons for different sections
const LearnIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>);
const SyllabusIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-sun" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>);
const ActivitiesIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>);
const SchoolIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>);
const ExperienceIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const UserGroupIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>);
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const CalendarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>);

const DetailSection: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="py-6 border-t border-slate-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
            {icon}
            <span>{title}</span>
        </h3>
        {children}
    </div>
);

const SyllabusAccordionItem: React.FC<{ item: { week: string, topics: string[] }, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-slate-200">
        <button
            className="w-full flex justify-between items-center text-left py-4"
            onClick={onClick}
            aria-expanded={isOpen}
        >
            <span className="text-lg font-semibold text-slate-800">{item.week}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <svg className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </span>
        </button>
        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
                <ul className="py-4 pr-6 pl-5 list-disc text-slate-600 space-y-2">
                    {item.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export const AdvancedCourseDetailPage: React.FC<PageProps> = ({ navigate }) => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);
    const { 
        courseName, ageCategory, sessions, description, syllabus, 
        activities, matchesSchoolSyllabus, extraCoolThings, price
    } = ADVANCED_CAMP_DATA;
    
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const HeroImage = () => (
        <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
            <div className="absolute -top-4 -left-4 w-48 h-48 bg-brand-sky rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute -top-4 -right-4 w-48 h-48 bg-brand-sun rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 h-48 bg-green-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            <img src="https://files.catbox.moe/r27c2u.png" alt="Cartoon Satellite orbiting a planet" className="relative animate-float" />
        </div>
    );

    return (
        <div className="bg-slate-50">
            {/* New Hero Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                                {courseName}
                            </h1>
                             <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6">
                                <span className="bg-sky-100 text-sky-800 text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <UserGroupIcon /> {ageCategory}
                                </span>
                                <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <UserGroupIcon /> Max 10 Students
                                </span>
                                <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <ClockIcon /> 2 Sessions/Week (Evening)
                                </span>
                                <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <CalendarIcon /> Starts 1st Dec
                                </span>
                            </div>
                            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                                {description}
                            </p>
                            <div className="mt-10">
                                <a
                                    href="#course-details"
                                    onClick={(e) => handleScrollClick(e, 'course-details')}
                                    className="bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg">
                                    Know More
                                </a>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <HeroImage />
                        </div>
                    </div>
                </div>
            </section>
            
            <main id="course-details" className="py-12 md:py-16 bg-white pb-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                        {/* Left Content Column */}
                        <div className="lg:col-span-2">
                            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl shadow-inner">
                                <DetailSection icon={<LearnIcon/>} title="What You'll Learn">
                                    <ul className="space-y-3">
                                        {extraCoolThings.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                <span className="text-slate-700 font-medium text-lg">{item.replace(' 🏅', '')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </DetailSection>
                            </div>

                            <div className="mt-10">
                                <DetailSection icon={<SyllabusIcon/>} title="Week-by-Week Syllabus">
                                    <div>
                                        {syllabus.map((item, index) => (
                                            <SyllabusAccordionItem 
                                                key={item.week}
                                                item={item}
                                                isOpen={openAccordion === index}
                                                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                                            />
                                        ))}
                                    </div>
                                </DetailSection>

                                <DetailSection icon={<ActivitiesIcon/>} title="Hands-On Activities">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                        {activities.map((activity, index) => (
                                            <div key={index} className="flex items-start">
                                                <span className="text-brand-sky font-bold mr-2 mt-1">✓</span>
                                                <p className="text-slate-600">{activity}</p>
                                            </div>
                                        ))}
                                    </div>
                                </DetailSection>

                                <DetailSection icon={<SchoolIcon/>} title="Matches School Syllabus">
                                    <ul className="space-y-2 text-slate-600">
                                        {Object.entries(matchesSchoolSyllabus).map(([subject, topics]) => (
                                            <li key={subject}><strong className="text-slate-700">{subject}:</strong> {topics}</li>
                                        ))}
                                    </ul>
                                </DetailSection>
                                
                                <DetailSection icon={<ExperienceIcon/>} title="The Brahmastra Experience">
                                    <ul className="space-y-3 text-slate-600">
                                        <li className="flex items-start gap-3"><span className="text-pink-500 font-bold mt-1">●</span><div><strong>Fun & Engaging Environment:</strong> We create a supportive space where kids collaborate, share ideas, and celebrate discoveries together.</div></li>
                                        <li className="flex items-start gap-3"><span className="text-pink-500 font-bold mt-1">●</span><div><strong>Learning by Doing:</strong> This is a hands-on class, not a lecture. Kids build, launch, and experiment, making learning unforgettable.</div></li>
                                        <li className="flex items-start gap-3"><span className="text-pink-500 font-bold mt-1">●</span><div><strong>Small Batches, Big Impact:</strong> We keep our class sizes small to ensure every child gets personal attention from our expert engineer mentors.</div></li>
                                    </ul>
                                </DetailSection>
                            </div>
                        </div>

                        {/* Right Sticky Column */}
                        <div className="mt-10 lg:mt-0">
                            <div className="sticky top-24">
                                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                                    <img src="https://files.catbox.moe/r27c2u.png" alt="Cartoon Satellite" className="w-full aspect-square object-cover"/>
                                    <div className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span className="text-slate-700 font-medium">{sessions}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                                <span className="text-slate-700 font-medium">{ageCategory}</span>
                                            </div>
                                             <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                <span className="text-slate-700 font-medium">Online Live Sessions</span>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <button
                                                onClick={() => navigate('checkout', { 
                                                    name: courseName,
                                                    slot: 'Starts 1st Dec | Evening Batch',
                                                    price: price
                                                })} 
                                                className="block w-full text-center bg-[#e40917] text-white hover:bg-[#c10714] transition-colors font-semibold px-6 py-3 rounded-full text-lg shadow-lg"
                                            >
                                                Book Your Spot
                                            </button>
                                            <p className="mt-3 text-xs text-slate-500 text-center">Limited seats available. Secure your spot!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Mobile Sticky Booking Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 lg:hidden z-40 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div>
                    <p className="text-xs text-slate-500">Total Cost</p>
                    <p className="text-xl font-bold text-slate-900">{price}</p>
                </div>
                <button
                    onClick={() => navigate('checkout', { 
                        name: courseName,
                        slot: 'Starts 1st Dec | Evening Batch',
                        price: price
                    })}
                    className="bg-[#e40917] text-white hover:bg-[#c10714] transition-colors font-semibold px-6 py-2.5 rounded-full text-sm shadow-lg"
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};
