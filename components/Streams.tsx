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
              Explore Our Learning Streams
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              We call our courses 'Streams' because learning should flow naturally, guided by curiosity. Before we can truly harness tools like AI, we must first understand our place in the cosmos. True innovation begins with asking the fundamental questions: Why are we here? What is our universe? Each stream is a journey into a fascinating area of aerospace and STEM, designed to answer these questions through hands-on, engaging experiences. Pick a stream and let the adventure begin!
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

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white p-10 rounded-2xl shadow-xl max-w-4xl mx-auto border-t-4 border-brand-space">
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
    </section>
  );
};