
import React from 'react';
import { AERONAUTICS_COURSES } from '../constants';
import { Course, PageProps } from '../types';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-brand-sky">
        <div className="flex items-center gap-4 mb-4">
            {course.icon}
            <span className="font-bold bg-sky-100 text-brand-sky px-2 py-0.5 rounded-full text-sm">{course.ageGroup}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{course.title}</h3>
        <p className="text-slate-600">{course.description}</p>
    </div>
);

export const AeronauticsPage: React.FC<PageProps> = ({ navigate }) => {
  return (
    <section id="aeronautics" className="py-16 md:py-24 animate-fade-in-up">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-sky">
                    Aeronautics: The Science of Flight
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                    Have you ever wondered how a giant metal bird can soar through the clouds? Here, you'll uncover the secrets of flight, from the smallest paper airplane to the fastest jets!
                </p>
            </div>
            <div className="flex justify-center">
                <img src="https://i.postimg.cc/MHyCzgZ5/airplane.png" alt="Cartoon Airplane" className="w-full max-w-sm" />
            </div>
        </div>
        
        <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Your Flight Path</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {AERONAUTICS_COURSES.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
            <div className="mt-12 text-center">
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
    </section>
  );
};
