
import React from 'react';
import { PageProps } from '../types';

export const Differentiators: React.FC<PageProps> = ({ navigate }) => {
    const comparison = [
        { feature: "Goal", traditional: "Marks & Ranks", us: "Curiosity & Skills" },
        { feature: "Method", traditional: "Rote Learning", us: "Hands-on Building" },
        { feature: "Teachers", traditional: "General Tutors", us: "Real Aero Engineers" },
        { feature: "Class Size", traditional: "Crowded (40+)", us: "Small Groups (Max 15)" },
        { feature: "Outcome", traditional: "Exam Pass", us: "Lifelong Passion" },
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50 animate-fade-in-up">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        The <span className="text-brand-space">Brahmastra</span> Difference
                    </h1>
                    <p className="mt-3 text-slate-600">Why parents choose us over normal tuition.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
                    <div className="grid grid-cols-3 bg-slate-900 text-white py-4 px-6 text-sm md:text-base font-bold text-center">
                        <div className="text-left">Feature</div>
                        <div className="opacity-70">Traditional Class</div>
                        <div className="text-brand-sky">Brahmastra Way</div>
                    </div>
                    {comparison.map((row, idx) => (
                        <div key={idx} className="grid grid-cols-3 py-4 px-6 border-b border-slate-100 items-center text-center text-sm md:text-base hover:bg-slate-50 transition-colors">
                            <div className="text-left font-bold text-slate-800">{row.feature}</div>
                            <div className="text-slate-500">{row.traditional}</div>
                            <div className="font-bold text-brand-space flex items-center justify-center gap-2">
                                <span className="hidden md:inline text-green-500">✔</span> {row.us}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button 
                        onClick={() => navigate('courses')} 
                        className="bg-[#e40917] hover:bg-[#c10714] text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform hover:scale-105"
                    >
                        Join the Revolution
                    </button>
                </div>
            </div>
        </section>
    );
};
