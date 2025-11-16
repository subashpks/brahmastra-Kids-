
import React from 'react';
import { ASTROBIOLOGY_COURSES } from '../constants';
import { Course, PageProps } from '../types';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-lime-500">
        <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{course.icon}</span>
            <span className="font-bold bg-lime-100 text-lime-600 px-2 py-0.5 rounded-full text-sm">{course.ageGroup}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{course.title}</h3>
        <p className="text-slate-600">{course.description}</p>
    </div>
);

export const AstrobiologyPage: React.FC<PageProps> = ({ navigate }) => {
  return (
    <section id="astrobiology" className="py-16 md:py-24 animate-fade-in-up">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
                <img src="https://files.catbox.moe/90vmnc.png" alt="Cartoon depiction of astrobiology concepts" className="w-full max-w-md" />
            </div>
            <div className="text-center lg:text-left lg:order-1">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-lime-600">
                    Astrobiology: The Search for Life Beyond Earth
                </h2>
                <p className="mt-6 text-xl md:text-2xl text-slate-600 max-w-xl mx-auto lg:mx-0">
                    Are we alone in the universe? Explore strange new worlds, learn what life needs to survive, and join the ultimate cosmic detective story to search for aliens.
                </p>
            </div>
        </div>
        
        <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Your Extraterrestrial Expedition</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {ASTROBIOLOGY_COURSES.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
            <div className="mt-16 text-center bg-white p-10 rounded-2xl shadow-xl max-w-4xl mx-auto border-t-4 border-lime-500">
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
