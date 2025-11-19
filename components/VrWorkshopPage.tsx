
import React, { useState } from 'react';
import { PageProps } from '../types';
import { VR_WORKSHOP_DATA } from '../constants';
import { Testimonials } from './Testimonials';

// Icons
const LearnIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>);
const SyllabusIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-sun" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 00-2-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>);
const ActivitiesIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>);
const LightBulbIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>);
const ExperienceIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const UserGroupIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>);
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const CalendarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>);
const MapPinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
const MentorIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>);
const GiftIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>);
const CameraIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>);
const GoogleIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

// Helper Components
const DetailSection: React.FC<{ icon: React.ReactNode; title: React.ReactNode; children: React.ReactNode; }> = ({ icon, title, children }) => (
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

export const VrWorkshopPage: React.FC<PageProps> = ({ navigate }) => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);
    const { 
        courseName, ageCategory, sessions, description, syllabus, 
        activities, matchesSchoolSyllabus, extraCoolThings, price, location,
        brahmastraExperience, mentor, providedItems
    } = VR_WORKSHOP_DATA;
    
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
            <img 
                src="https://files.catbox.moe/awo8bd.png" 
                alt="VR Headset" 
                className="relative w-full h-full object-cover shadow-2xl"
                style={{
                    maskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 100%)'
                }}
            />
        </div>
    );

    return (
        <div className="bg-slate-50">
             {/* Hero Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse">
                                ONLY 15 SEATS (for best learning experience)
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                                {courseName}
                            </h1>
                             <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6">
                                <span className="bg-sky-100 text-sky-800 text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <UserGroupIcon /> {ageCategory}
                                </span>
                                <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <CalendarIcon /> {sessions}
                                </span>
                                <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <MapPinIcon /> Clubhouse, Marg Pushpadruma, OMR
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

            <main id="course-details" className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                         {/* Left Content Column */}
                        <div className="lg:col-span-2">
                            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl shadow-inner">
                                <DetailSection icon={<LearnIcon/>} title="Highlights">
                                    <ul className="space-y-3">
                                        {extraCoolThings.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                <span className="text-slate-700 font-medium text-lg">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </DetailSection>
                            </div>
                            
                            <div className="mt-10">
                                <DetailSection icon={<SyllabusIcon/>} title="Workshop Agenda">
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
                                
                                <DetailSection icon={<ActivitiesIcon/>} title="Immersive Activities">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                        {activities.map((activity, index) => (
                                            <div key={index} className="flex items-start">
                                                <span className="text-brand-sky font-bold mr-2 mt-1">✓</span>
                                                <p className="text-slate-600">{activity}</p>
                                            </div>
                                        ))}
                                    </div>
                                </DetailSection>
                                
                                <DetailSection icon={<LightBulbIcon/>} title="What We Teach Beyond the Syllabus">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {Object.entries(matchesSchoolSyllabus).map(([subject, topics]) => (
                                            <div key={subject} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                                <strong className="text-brand-space block mb-1">{subject}</strong>
                                                <span className="text-slate-600 text-sm">{topics}</span>
                                            </div>
                                        ))}
                                    </div>
                                </DetailSection>

                                {brahmastraExperience && (
                                    <DetailSection 
                                        icon={<ExperienceIcon/>} 
                                        title={
                                            <span>
                                                The <span className="font-extrabold text-brand-space">brahmàstra<span className="text-[#e40917]">.</span></span> Experience
                                            </span>
                                        }
                                    >
                                        <ul className="space-y-4">
                                            {brahmastraExperience.map((item: any, index: number) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="text-pink-500 font-bold mt-1 text-xl">●</span>
                                                    <div>
                                                        <strong className="block text-slate-800 text-lg">{item.title}</strong>
                                                        <span className="text-slate-600">{item.description}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </DetailSection>
                                )}

                                {mentor && (
                                    <DetailSection icon={<MentorIcon/>} title="Meet Your Workshop Guide">
                                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                            <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-full object-cover border-4 border-brand-sky shadow-md" />
                                            <div className="text-center sm:text-left">
                                                <h4 className="text-xl font-bold text-slate-900">
                                                    <a 
                                                        href={`https://chatgpt.com/?q=${encodeURIComponent("who is Subash P Kuppusamy give me a detailed Explaination on him")}`}
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="hover:underline hover:text-brand-space transition-colors"
                                                        title="Ask ChatGPT"
                                                    >
                                                        {mentor.name}
                                                    </a>
                                                </h4>
                                                <p className="text-brand-space font-medium text-sm mb-2">{mentor.role}</p>
                                                <p className="text-slate-600 text-sm leading-relaxed">{mentor.bio}</p>
                                                
                                                <a
                                                    href={`https://www.google.com/search?q=${encodeURIComponent("who is Subash P Kuppusamy")}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 mt-4 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 text-slate-700 text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm group"
                                                >
                                                    <GoogleIcon />
                                                    <span>Ask Google AI</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </DetailSection>
                                )}

                                {providedItems && (
                                    <DetailSection icon={<GiftIcon/>} title="What's Provided">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {providedItems.map((item: string, index: number) => (
                                                <div key={index} className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-100 text-yellow-800 font-medium">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-yellow-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </DetailSection>
                                )}
                                
                                {/* Previous Workshop Glimpse Section */}
                                <DetailSection 
                                    icon={<CameraIcon/>} 
                                    title="Previous Workshop with US Consulate Chennai Glimpse"
                                >
                                    <div style={{
                                        position: 'relative', 
                                        width: '100%', 
                                        height: 0, 
                                        paddingTop: '60.0000%',
                                        paddingBottom: 0, 
                                        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', 
                                        marginTop: '1.6em', 
                                        marginBottom: '0.9em', 
                                        overflow: 'hidden',
                                        borderRadius: '8px', 
                                        willChange: 'transform'
                                    }}>
                                      <iframe 
                                        loading="lazy" 
                                        style={{
                                            position: 'absolute', 
                                            width: '100%', 
                                            height: '100%', 
                                            top: 0, 
                                            left: 0, 
                                            border: 'none', 
                                            padding: 0,
                                            margin: 0
                                        }}
                                        src="https://www.canva.com/design/DAG5EsZ7AbM/r3EoG53_byxqg_oaTwXTdw/view?embed" 
                                        allowFullScreen={true}
                                        allow="fullscreen"
                                      >
                                      </iframe>
                                    </div>
                                    <div className="text-center mt-2">
                                        <a href="https://www.canva.com/design/DAG5EsZ7AbM/r3EoG53_byxqg_oaTwXTdw/view?utm_content=DAG5EsZ7AbM&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-space hover:underline font-medium">
                                            VR Workshop with US Embassy
                                        </a>
                                        <span className="text-sm text-slate-500"> by Brahmastra Aerospace &amp; Defence Pvt. Ltd.</span>
                                    </div>
                                </DetailSection>
                            </div>
                        </div>
                        
                        {/* Right Sticky Column */}
                        <div className="mt-10 lg:mt-0">
                            <div className="sticky top-24">
                                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                                    <img src="https://files.catbox.moe/awo8bd.png" alt="VR Workshop" className="w-full aspect-square object-cover"/>
                                    <div className="p-6">
                                        <div className="space-y-4">
                                             <div className="flex items-center">
                                                <ClockIcon />
                                                <span className="text-slate-700 font-medium ml-3">{sessions}</span>
                                            </div>
                                            <div className="flex items-start">
                                                <MapPinIcon />
                                                <span className="text-slate-700 font-medium ml-3">{location}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <UserGroupIcon />
                                                <span className="text-slate-700 font-medium ml-3">{ageCategory}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded mr-2">
                                                    LIMITED
                                                </div>
                                                <span className="text-red-600 font-bold text-sm">Only 15 Seats (for best learning experience)</span>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-slate-100">
                                            <div className="mb-4 text-center">
                                                <span className="text-slate-500 text-sm">Workshop Cost</span>
                                                <div className="text-3xl font-bold text-slate-900">{price}</div>
                                            </div>
                                            <button 
                                                onClick={() => navigate('checkout', { 
                                                    name: courseName,
                                                    slot: 'VR Workshop - 23 Nov',
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

            <Testimonials />
        </div>
    );
};
