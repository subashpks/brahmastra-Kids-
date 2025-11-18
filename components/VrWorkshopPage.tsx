
import React from 'react';
import { PageProps } from '../types';

// Icons for the program card
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const UserGroupIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>);
const PuzzleIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>);
const CashIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>);

const workshopTags = [
    { icon: <ClockIcon />, text: '1-Day Workshop' },
    { icon: <UserGroupIcon />, text: 'Ages 8-16' },
    { icon: <PuzzleIcon />, text: 'Live & Interactive' },
    { icon: <CashIcon />, text: '₹999/- per participant' },
];

export const VrWorkshopPage: React.FC<PageProps> = ({ navigate }) => {
    return (
        <section className="py-16 md:py-24 bg-slate-100 animate-fade-in-up">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        VR Workshop
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        Step into a new reality! Our one-day immersive workshop lets you explore the wonders of space like never before.
                    </p>
                </div>
                
                <div className="mt-16">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 md:w-56">
                                <img className="aspect-square w-full h-full object-cover" src="https://files.catbox.moe/s5z9yr.png" alt="Child wearing a VR headset looking at a galaxy" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl md:text-4xl font-extrabold text-brand-space">VR Space Exploration</h3>
                                <p className="text-lg text-slate-600">One-Day Immersive Workshop</p>

                                <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 text-sm text-slate-700">
                                    {workshopTags.map(tag => (
                                        <div key={tag.text} className="flex items-center gap-2">
                                            {tag.icon}
                                            <span className="font-medium">{tag.text}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-8">
                                    <button onClick={() => navigate('age')} className="bg-brand-sun hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full text-base shadow-lg transition-colors">
                                        Book Your Spot
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
