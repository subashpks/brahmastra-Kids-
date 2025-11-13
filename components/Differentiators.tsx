import React from 'react';
import { PageProps } from '../types';

// Data for the "What We Do Instead" section
const whatWeDoData = [
    {
        emoji: '✨',
        title: 'Curiosity, Not Rote Learning',
        description: 'We spark a love for discovery. Our goal is to make your child ask "why" and "how," not just memorize facts.',
        color: 'border-brand-sky',
    },
    {
        emoji: '✂️',
        title: 'Hands-On Sky Science',
        description: "Kids build, experiment, and learn aerodynamics using simple materials found right at home. It's practical, fun, and safe.",
        color: 'border-green-500',
    },
    {
        emoji: '🌱',
        title: 'Skills for the Future',
        description: 'Beyond science, we build research skills, problem-solving abilities, and the confidence to explore new ideas independently.',
        color: 'border-brand-sun',
    },
    {
        emoji: '👩‍🏫',
        title: 'Expert Mentors, Small Groups',
        description: 'Every child gets personal attention from a trained aerospace engineer. We keep groups small to focus on individual growth.',
        color: 'border-purple-500',
    },
    {
        emoji: '💡',
        title: 'Science in Everyday Life',
        description: "They'll see aerodynamics in a water bottle and physics in the playground. We turn everyday objects into scientific lessons.",
        color: 'border-teal-500',
    },
    {
        emoji: '🎟️',
        title: 'Accessible & Valuable',
        description: 'Sessions range from ₹300–₹600, varying by age and course. Each is led by an aerospace engineer, ensuring top-quality mentorship.',
        color: 'border-orange-500',
    }
];

// Data for the "What We Don't Do" section
const whatWeDontDoData = [
    {
        emoji: '💰',
        title: 'We Don’t Overcharge',
        description: "Quality education shouldn't be a luxury. Our pricing is transparent and fair, making top-tier aerospace mentorship accessible to more families."
    },
    {
        emoji: '📉',
        title: 'We Don’t Push Marks or Ranks',
        description: "True learning isn't about test scores. We focus on igniting a child's curiosity and passion, which builds a foundation for lifelong success, not just exam performance."
    },
    {
        emoji: '📚',
        title: 'We Don’t Dump Homework',
        description: "Learning happens through doing, not just reading. We replace boring PDFs with hands-on projects that teach real-world skills and critical thinking."
    },
    {
        emoji: '👥',
        title: 'We Don’t Treat All Kids the Same',
        description: "Every child is unique. Our small groups and expert mentors allow us to tailor the experience to each child's individual learning style, pace, and interests."
    },
    {
        emoji: '🏆',
        title: 'We Don’t Stress with Competition',
        description: "Collaboration, not conflict, drives innovation. We foster a supportive environment where kids learn from each other and celebrate collective discoveries."
    }
];

const InfoCard: React.FC<{ card: { emoji: string; title: string; description: string; color?: string; } }> = ({ card }) => (
    <div className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 ${card.color || 'border-red-500'} flex flex-col`}>
        <div className="text-4xl mb-4">{card.emoji}</div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
        <p className="text-slate-600 flex-grow">{card.description}</p>
    </div>
);

export const Differentiators: React.FC<PageProps> = ({ navigate }) => {
    return (
        <section className="py-16 md:py-24 bg-slate-50 animate-fade-in-up">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Our Philosophy
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        We believe in a different approach to learning—one that puts curiosity first and builds confidence for life.
                    </p>
                </div>

                {/* What We Don't Do Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
                        ❌ What We Don’t Do
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {whatWeDontDoData.map((card) => (
                           <InfoCard key={card.title} card={card} />
                        ))}
                    </div>
                </div>

                {/* What We Do Instead Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
                       ✅ What We Do Instead
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whatWeDoData.map((card) => (
                            <InfoCard key={card.title} card={card} />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); navigate('age'); }} 
                        className="inline-block bg-[#e40917] text-white hover:bg-[#c10714] transition-colors font-semibold px-10 py-4 rounded-full text-lg shadow-lg transform hover:scale-105"
                    >
                        Join Waitlist
                    </a>
                    <p className="mt-4 text-sm text-slate-500">
                        Limited seats and limited batches — secure your child’s spot early.
                    </p>
                </div>
            </div>
        </section>
    );
};
