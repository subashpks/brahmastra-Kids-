
import React from 'react';
import { PHYSICS_COURSES } from '../constants';
import { Course } from '../types';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-orange-500">
        <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{course.icon}</span>
            <span className="font-bold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-sm">{course.ageGroup}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{course.title}</h3>
        <p className="text-slate-600">{course.description}</p>
    </div>
);

export const PhysicsPage: React.FC = () => {
  return (
    <section id="physics" className="py-16 md:py-24 animate-fade-in-up">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-orange-600">
                    Physics: Unlocking the Laws of Reality
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                    Why do things fall down and not up? How does light travel? Dive into the world of forces, energy, and motion to understand how the universe truly works.
                </p>
            </div>
            <div className="flex justify-center">
                <img src="https://i.postimg.cc/SRvL0hP6/physics.png" alt="Cartoon depiction of physics concepts" className="w-full max-w-sm" />
            </div>
        </div>
        
        <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Your Quantum Quest</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {PHYSICS_COURSES.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
