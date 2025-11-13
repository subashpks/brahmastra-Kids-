
import React from 'react';

const SparkleIcon = () => (
    <div className="p-3 bg-brand-sky/20 rounded-full mb-4 inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 11.414l-2.293-2.293a1 1 0 010-1.414L11 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5l2.293 2.293a1 1 0 010 1.414L11 11.414l-2.293-2.293a1 1 0 010-1.414L11 5zM19 13l2.293 2.293a1 1 0 010 1.414L19 19.414l-2.293-2.293a1 1 0 010-1.414L19 13z" />
        </svg>
    </div>
);
const BrainIcon = () => (
    <div className="p-3 bg-lime-500/20 rounded-full mb-4 inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    </div>
);
const UsersIcon = () => (
    <div className="p-3 bg-purple-500/20 rounded-full mb-4 inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    </div>
);
const AcademicCapIcon = () => (
    <div className="p-3 bg-amber-500/20 rounded-full mb-4 inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.002z" />
        </svg>
    </div>
);


interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}
const InfoCard: React.FC<InfoCardProps> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {icon}
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{children}</p>
    </div>
);

export const IntroductionPage: React.FC = () => {
    return (
        <section id="philosophy" className="py-16 md:py-24 bg-slate-50 animate-fade-in-up">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Our Guiding Philosophy
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        We don't just teach subjects; we ignite curiosity. Discover the core principles that make our approach to learning unique, effective, and truly inspiring for young minds.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <InfoCard icon={<SparkleIcon />} title="What our program is">
                        Our program is designed to Make, understand, and Stimulate the interest of Kids in Sky sciences.
                    </InfoCard>
                    <InfoCard icon={<BrainIcon />} title="Why it helps kids">
                        We don't give homework videos or PDFs. Our tasks make them search the right way and the right thing. We make them more curious. We don't promise Marks or NEET success. Every kid has their own intelligence level; our intensive small group courses give them space to find their pace and path for life.
                    </InfoCard>
                    <InfoCard icon={<UsersIcon />} title="Why seats are limited">
                        We want to focus on individual kids. Each child will be assigned a Trained Aerospace engineer with a minimum of five years of industry experience. We take time to curate courses, especially for kids, understanding their psychology, language, and what they talk about at their age. We answer their questions in their language and thought process.
                    </InfoCard>
                    <InfoCard icon={<AcademicCapIcon />} title="What they get by joining">
                        They get hands-on experience with Aeronautics and Aerodynamics everywhere—in their hands, room, roads, the fish tank, water bottle, and bathroom bucket. We give them the way to explore scientific theorems by making them question, get answers through their search, and doing by themselves with what is available at home.
                    </InfoCard>
                </div>
            </div>
        </section>
    );
};
