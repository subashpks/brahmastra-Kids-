
import React, { useState } from 'react';
import { PageProps } from '../types';
import { WEEKEND_CAMP_DATA } from '../constants';

const SyllabusItem: React.FC<{ week: string, topics: string[] }> = ({ week, topics }) => (
    <div className="mb-4 border-l-2 border-slate-200 pl-4">
        <h4 className="font-bold text-slate-900">{week}</h4>
        <p className="text-sm text-slate-600 mt-1">{topics.slice(0, 3).join(', ')} + more.</p>
    </div>
);

export const CourseDetailPage: React.FC<PageProps> = ({ navigate }) => {
    const { 
        courseName, ageCategory, sessions, description, syllabus, 
        price
    } = WEEKEND_CAMP_DATA;
    
    return (
        <div className="bg-slate-50 animate-fade-in-up">
            <section className="py-12 bg-white border-b border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="lg:w-2/3">
                            <span className="bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
                                {ageCategory}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
                                {courseName}
                            </h1>
                            <p className="text-slate-600 text-lg mb-6">{description}</p>
                            
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
                                <span className="flex items-center gap-1"><span className="text-brand-sun">📅</span> Starts 1st Dec</span>
                                <span className="flex items-center gap-1"><span className="text-brand-sun">⏰</span> 2 Sessions/Week</span>
                                <span className="flex items-center gap-1"><span className="text-brand-sun">👥</span> Max 10 Students</span>
                            </div>
                        </div>
                        
                        {/* Booking Card - Sticky on Desktop */}
                        <div className="lg:w-1/3 w-full">
                            <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-200 text-center">
                                <p className="text-sm text-slate-500 mb-1">Full Course Fee</p>
                                <div className="text-3xl font-extrabold text-brand-space mb-4">{price}</div>
                                <button
                                    onClick={() => navigate('checkout', { name: courseName, slot: 'Evening Batch', price })} 
                                    className="w-full bg-[#e40917] hover:bg-[#c10714] text-white font-bold py-3 rounded-lg shadow-md transition-transform hover:scale-105"
                                >
                                    Book Now
                                </button>
                                <p className="text-xs text-slate-400 mt-2">100% Refund if not satisfied after Day 1.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <main className="py-12 container mx-auto px-6 max-w-4xl">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">What They Will Learn</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-slate-700 text-sm"><span className="text-green-500 font-bold">✓</span> Build Real Water Rockets</div>
                        <div className="flex items-center gap-2 text-slate-700 text-sm"><span className="text-green-500 font-bold">✓</span> Newton's Laws (Simplified)</div>
                        <div className="flex items-center gap-2 text-slate-700 text-sm"><span className="text-green-500 font-bold">✓</span> Aerodynamics & Stability</div>
                        <div className="flex items-center gap-2 text-slate-700 text-sm"><span className="text-green-500 font-bold">✓</span> Parachute Science</div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Course Syllabus</h3>
                    <div className="space-y-2">
                        {syllabus.map((item, index) => (
                            <SyllabusItem key={index} week={item.week} topics={item.topics} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};
