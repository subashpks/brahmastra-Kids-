import React from 'react';
import { PageProps } from '../types';

// Data for the "What We Do Instead" section
const whatWeDoData = [
    {
        emoji: '💡',
        title: 'Fair Price, Priceless Mentorship',
        description: 'We believe every child deserves access to real experts. Our pricing makes high-quality STEM education accessible, providing genuine aerospace engineers as mentors without the hefty price tag.',
        color: 'border-orange-500',
    },
    {
        emoji: '🌱',
        title: 'We Nurture Thinkers, Not Toppers',
        description: 'Instead of chasing ranks, we chase "aha!" moments. We build a deep passion for learning and critical thinking—the true markers of long-term success, far beyond any report card.',
        color: 'border-brand-sun',
    },
    {
        emoji: '✂️',
        title: 'We Build, We Don\'t Bore',
        description: 'Forget endless worksheets. Our kids learn by doing—launching rockets, designing wings, and solving real-world problems. This hands-on approach makes learning stick and turns screen time into skill time.',
        color: 'border-green-500',
    },
    {
        emoji: '👩‍🏫',
        title: 'Q: Why Small Groups?',
        description: 'A: Because every child is unique. In a small group, there\'s no "back bench." Our mentors can focus on individual needs, answer every curious question, and tailor the pace so your child builds confidence, free from the pressure to keep up or fit in.',
        color: 'border-purple-500',
    },
    {
        emoji: '🤝',
        title: 'Collaboration Over Competition',
        description: 'The greatest scientific breakthroughs come from teamwork. We create a supportive space where children share ideas, celebrate each other\'s discoveries, and learn that working together is more powerful than competing alone.',
        color: 'border-teal-500',
    },
    {
        emoji: '✨',
        title: 'We Ignite Curiosity, Not False Hope',
        description: 'We promise something more valuable than a guaranteed rank: a genuine spark of curiosity. We teach your child how to think, problem-solve, and explore—skills that empower them to become self-reliant learners for life.',
        color: 'border-brand-sky',
    },
];

// Data for the "What We Don't Do" section
const whatWeDontDoData = [
    {
        emoji: '💰',
        title: 'We Don’t Overcharge',
        description: "We understand the sacrifices parents make for quality education. Our goal is to provide top-tier mentorship from real aerospace engineers at a fair price, without compromise."
    },
    {
        emoji: '📉',
        title: 'We Don’t Join the "Rat Race"',
        description: "In a world of intense pressure for marks and ranks, we focus on what truly matters: your child's unique curiosity. We build a foundation for lifelong success, not just exam performance."
    },
    {
        emoji: '📚',
        title: 'We Don’t Believe in "Busy Work"',
        description: "Your family's time is valuable. We replace boring PDFs and rote homework with engaging, hands-on projects that teach critical thinking and real-world skills."
    },
    {
        emoji: '👥',
        title: 'We Don’t Use a One-Size-Fits-All Model',
        description: "Peer pressure often forces children into the same mold. We celebrate individuality. Our small groups ensure we can tailor the experience to your child's unique learning style, pace, and interests."
    },
    {
        emoji: '🏆',
        title: 'We Don’t Foster Unhealthy Competition',
        description: "We believe collaboration drives innovation. Our supportive environment encourages kids to share ideas and celebrate discoveries together, building teamwork skills instead of stressful rivalry."
    },
    {
        emoji: '🎯',
        title: 'We Don’t Promise "Guaranteed Toppers"',
        description: "We don't sell unrealistic dreams of guaranteed ranks. Instead, we promise something more valuable: to awaken your child's inner scientist, teach them how to think critically, and build a genuine passion for learning that lasts a lifetime."
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
                        Our Philosophy, Our Mission, Our <span className="text-brand-space">brahmàstra</span><span className="text-[#e40917]">.</span>
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