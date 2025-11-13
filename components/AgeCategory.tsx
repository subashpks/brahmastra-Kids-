
import React from 'react';
import { InterestForm } from './InterestForm';
import { PageProps } from '../types';

const categories = [
    {
        emoji: '🧩',
        title: 'Early Learners',
        age: 'Ages 5–8',
        standard: '1st–3rd Standard',
        traits: 'Curious, imaginative, visual learners',
        focus: 'Story-based learning, crafts, fun science',
        color: 'border-sky-400'
    },
    {
        emoji: '🚀',
        title: 'Junior Explorers',
        age: 'Ages 9–12',
        standard: '4th–6th Standard',
        traits: 'Logical, team players, eager to explore',
        focus: 'DIY kits, model rockets, creative experiments',
        color: 'border-amber-400'
    },
    {
        emoji: '🧠',
        title: 'Young Innovators',
        age: 'Ages 13–15',
        standard: '7th–9th Standard',
        traits: 'Analytical, independent thinkers',
        focus: 'Coding, aerospace fundamentals, career guiding',
        color: 'border-green-500'
    }
];

const CategoryCard: React.FC<{ category: typeof categories[0] }> = ({ category }) => (
    <div className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 ${category.color}`}>
        <div className="text-4xl mb-4">{category.emoji}</div>
        <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
        <p className="font-semibold text-brand-space">{category.age} ({category.standard})</p>
        <div className="mt-4 border-t pt-4">
            <p className="text-slate-600"><span className="font-semibold">Traits:</span> {category.traits}</p>
            <p className="text-slate-600 mt-2"><span className="font-semibold">Focus:</span> {category.focus}</p>
        </div>
    </div>
);


export const AgeCategoryPage: React.FC<PageProps> = ({ navigate }) => {
  return (
    <>
        <section id="age-category" className="py-16 md:py-24 animate-fade-in-up bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
                 <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Tailored for Every Stage of Curiosity
                </h1>
                <p className="mt-6 text-lg text-slate-600">
                  We believe in nurturing passion at the right pace. Our programs are designed to match your child's developmental stage, ensuring they get the most engaging and effective learning experience. Find the perfect launchpad for their journey below.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map(cat => <CategoryCard key={cat.title} category={cat} />)}
            </div>
            <div className="mt-16 text-center max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-space">
                <h2 className="text-2xl font-bold text-slate-800">Why Choose Brahmastra?</h2>
                <p className="mt-4 text-slate-600">
                    We believe in a different approach to learning—one that puts curiosity first and builds confidence for life. 
                    Before you join, learn about what makes us unique.
                </p>
                <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); navigate('philosophy'); }} 
                    className="mt-6 inline-block bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg"
                >
                  Discover Our Philosophy
                </a>
            </div>
          </div>
        </section>
        <InterestForm />
    </>
  );
};
