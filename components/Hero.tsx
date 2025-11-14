

import React from 'react';
import { PageProps } from '../types';
import { STREAMS_DATA } from '../constants';
import { FAQ } from './FAQ';

const AstronautIllustration = () => (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
      <div className="absolute -top-4 -left-4 w-48 h-48 bg-brand-sky rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute -top-4 -right-4 w-48 h-48 bg-brand-sun rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-48 h-48 bg-green-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <img src="https://files.catbox.moe/vwlnrr.png" alt="A friendly cartoon astronaut floating in space with planets in the background" className="relative animate-float" />
    </div>
);


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

const ContactCta: React.FC<PageProps> = ({ navigate }) => (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-brand-space to-brand-sky rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full" aria-hidden="true"></div>
                <div className="absolute -bottom-16 -right-5 w-48 h-48 bg-white/10 rounded-full" aria-hidden="true"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto">
                        Have Questions?
                    </h2>
                    <p className="mt-4 text-lg text-slate-200 max-w-xl mx-auto">
                        Our team is ready to help with any inquiries. Reach out for more information about our courses, philosophy, or anything else.
                    </p>
                    <div className="mt-8">
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); navigate('contact'); }}
                            className="bg-white text-brand-space hover:bg-slate-200 transition-colors font-semibold px-8 py-3 rounded-full text-lg shadow-lg">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


export const HomePage: React.FC<PageProps> = ({ navigate }) => {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="text-brand-space font-semibold tracking-wider bg-sky-200/50 px-3 py-1 rounded-full">AGES 5-15</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mt-4">
                Explore the Universe From Your Room
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                Blast off on an adventure! Our fun, hands-on courses make learning about planes, rockets, stars, and drones an exciting journey for every curious mind.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); navigate('courses'); }} 
                    className="bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg">
                  Choose Your Mission
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
                <AstronautIllustration />
            </div>
          </div>
        </div>
      </section>

      <section id="topics" className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    What Will You Discover Today?
                </h2>
                <p className="mt-4 text-lg text-slate-600">
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
      
      <ContactCta navigate={navigate} />

      <FAQ />
    </>
  );
};
