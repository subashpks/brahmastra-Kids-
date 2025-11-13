
import React from 'react';
import { PageProps } from '../types';
import { STREAMS_DATA } from '../constants';

const TopicCard: React.FC<{ emoji: string; title: string; description: string; color: string; onClick: () => void; isComingSoon?: boolean; }> = ({ emoji, title, description, color, onClick, isComingSoon }) => (
    <div 
        onClick={!isComingSoon ? onClick : undefined} 
        className={`relative bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 border-t-4 ${color} ${isComingSoon ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-xl hover:-translate-y-2 cursor-pointer'}`}
    >
        {isComingSoon && (
            <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md transform -rotate-12">
                Coming Soon
            </div>
        )}
        <div className="text-4xl mb-4">{emoji}</div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-500">{description}</p>
    </div>
);

export const StreamsPage: React.FC<PageProps> = ({ navigate }) => {
  return (
    <section id="streams" className="py-16 md:py-24 animate-fade-in-up bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              What Will You Discover Today?
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Pick a topic and start your adventure. Each path is filled with exciting projects and amazing facts!
            </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STREAMS_DATA.map((stream) => (
                <TopicCard 
                    key={stream.title}
                    emoji={stream.emoji}
                    title={stream.title}
                    description={stream.description}
                    color={stream.color}
                    onClick={() => navigate(stream.page)}
                    isComingSoon={stream.isComingSoon}
                />
            ))}
        </div>
      </div>
    </section>
  );
};