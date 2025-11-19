
import React from 'react';
import { PageProps } from '../types';
import { COURSES_DATA } from '../constants';

const TopicCard: React.FC<{ emoji: string; title: string; description: string; color: string; onClick: () => void; isComingSoon?: boolean; }> = ({ emoji, title, description, color, onClick, isComingSoon }) => (
    <div 
        onClick={!isComingSoon ? onClick : undefined} 
        className={`relative bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 border-t-4 ${color} ${isComingSoon ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-xl hover:-translate-y-2 cursor-pointer'}`}
    >
        {isComingSoon && (
            <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md transform -rotate-12">
                Coming Soon
            </div>
        )}
        <div className="text-4xl mb-4">{emoji}</div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-500">{description}</p>
    </div>
);

// Icons for the new program card
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const CalendarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>);
const PuzzleIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>);
const CashIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>);


const programTags = [
    { icon: <ClockIcon />, text: '10 Interactive Sessions' },
    { icon: <CalendarIcon />, text: '5 weekends' },
    { icon: <PuzzleIcon />, text: '5 Activities' },
    { icon: <CashIcon />, text: '₹300/- per Session' },
];

export const CoursesPage: React.FC<PageProps> = ({ navigate }) => {
    return (
        <section className="py-16 md:py-24 bg-slate-100 animate-fade-in-up">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Our Courses
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        Explore our range of programs designed to spark curiosity and build real skills in aerospace and beyond.
                    </p>
                </div>
                
                {/* Current Programs Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
                        Current Programs
                    </h2>
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:grid md:grid-cols-3 md:items-center">
                            <div className="md:col-span-1">
                                <img className="aspect-square w-full h-full object-cover" src="https://files.catbox.moe/gpc0v3.png" alt="Rocket Science course illustration" />
                            </div>
                            <div className="md:col-span-2 px-6 pt-0 pb-6 md:p-8 text-center md:text-left">
                                <h3 className="text-3xl md:text-4xl font-extrabold text-brand-space">Rocket Science</h3>
                                <p className="text-lg text-slate-600">Full-Fledged Course for Kids</p>

                                <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 text-sm text-slate-700 justify-start">
                                    {programTags.map(tag => (
                                        <div key={tag.text} className="flex items-center gap-2">
                                            {tag.icon}
                                            <span className="font-medium">{tag.text}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <button onClick={() => navigate('weekend-rocket-blast-off')} className="bg-brand-sky hover:bg-sky-600 text-white font-semibold px-5 py-2.5 rounded-full text-base shadow-md transition-colors">
                                        Junior Camp (6-11 Yrs)
                                    </button>
                                    <button onClick={() => navigate('advanced-rocketry-workshop')} className="bg-brand-space hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-full text-base shadow-md transition-colors">
                                        Advanced Workshop (11-16 Yrs)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Courses Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
                        All Courses
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {COURSES_DATA.map(course => (
                            <TopicCard 
                                key={course.title}
                                emoji={course.emoji}
                                title={course.title}
                                description={course.description}
                                color={course.color}
                                onClick={() => navigate(course.page)}
                                isComingSoon={course.isComingSoon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
