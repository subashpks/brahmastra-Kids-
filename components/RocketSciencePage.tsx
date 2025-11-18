
import React from 'react';
import { ROCKET_SCIENCE_PROGRAMS } from '../constants';
import { Program, PageProps } from '../types';

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => (
    <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-brand-sun">
        <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{program.icon}</span>
            <span className="font-bold bg-amber-100 text-brand-sun px-2 py-0.5 rounded-full text-sm">{program.ageGroup}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{program.title}</h3>
        <p className="text-slate-600">{program.description}</p>
    </div>
);

export const RocketSciencePage: React.FC<PageProps> = ({ navigate }) => {
  return (
    <section id="rocket-science" className="py-16 md:py-24 animate-fade-in-up">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
                <img src="https://files.catbox.moe/knklae.png" alt="Cartoon Rocket" className="w-full max-w-md" />
            </div>
            <div className="text-center lg:text-left lg:order-1">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-brand-sun">
                    Rocket Science: Journey to the Stars
                </h2>
                <p className="mt-6 text-xl md:text-2xl text-slate-600 max-w-xl mx-auto lg:mx-0">
                    Get ready for an out-of-this-world adventure! Learn what it takes to build powerful rockets, explore distant planets, and become a true space explorer.
                </p>
            </div>
        </div>
        
        <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Available Programs</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {ROCKET_SCIENCE_PROGRAMS.map((program, index) => (
                    <ProgramCard key={index} program={program} />
                ))}
            </div>
            <div className="mt-16 text-center bg-white p-10 rounded-2xl shadow-xl max-w-4xl mx-auto border-t-4 border-brand-sun">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Ready to Launch Your Child's Journey?
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    Every batch is curated—not crowded. Join the waitlist, and our experts will match your child to a hand-selected learning group. Because spaces are limited, you’ll receive a confirmation email only after we review your child’s details.
                </p>
                <div className="mt-8">
                    <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); navigate('age'); }} 
                        className="inline-block bg-[#e40917] text-white hover:bg-[#c10714] transition-colors font-semibold px-10 py-4 rounded-full text-lg shadow-lg transform hover:scale-105"
                    >
                        Join Waitlist
                    </a>
                    <p className="mt-4 text-sm text-slate-500">
                        Limited seats available. Secure your spot!
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};