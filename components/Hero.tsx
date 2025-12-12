
import React from 'react';
import { PageProps } from '../types';
import { FAQ } from './FAQ';
import { Testimonials } from './Testimonials';
import { GallerySection } from './Gallery';
import { PartnersSection } from './Partners';
import { COURSES_DATA } from '../constants';

// --- Simplified Sub-components ---

const HomeProductCard: React.FC<{ 
    title: string; 
    price: string; 
    description: string; 
    emoji: string; 
    color: string; 
    popular?: boolean;
    onClick: () => void; 
}> = ({ title, price, description, emoji, color, popular, onClick }) => (
    <div 
        onClick={onClick} 
        className={`relative bg-white p-6 rounded-2xl shadow-sm border-t-4 ${color} hover:shadow-xl hover:-translate-y-1 cursor-pointer text-center h-full transition-all`}
    >
        {popular && <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#e40917] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>}
        <div className="text-3xl mb-3">{emoji}</div>
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="text-xl font-extrabold text-brand-space my-1">{price}</p>
        <p className="text-xs text-slate-500 leading-snug">{description}</p>
    </div>
);

const DomainCard: React.FC<{ title: string; emoji: string; color: string; onClick: () => void; }> = ({ title, emoji, color, onClick }) => (
    <div 
        onClick={onClick}
        className={`flex-shrink-0 w-64 bg-white p-4 rounded-xl shadow-sm border-l-4 ${color} mx-4 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all`}
    >
        <span className="text-3xl">{emoji}</span>
        <div>
            <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
            <span className="text-[10px] text-brand-sky font-bold uppercase">Explore</span>
        </div>
    </div>
);

const DomainsMarqueeSection: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
    const marqueeData = [...COURSES_DATA, ...COURSES_DATA];
    return (
        <section className="py-8 bg-slate-50 overflow-hidden border-b border-slate-200">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {marqueeData.map((course, index) => (
                    <DomainCard key={`${course.title}-${index}`} {...course} onClick={() => navigate(course.page)} />
                ))}
            </div>
        </section>
    );
};

const ImpactStat = ({ emoji, number, text }: { emoji: string, number: string, text: string }) => (
    <div className="text-center p-4">
        <div className="text-3xl mb-2">{emoji}</div>
        <div className="text-2xl font-extrabold text-slate-900">{number}</div>
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{text}</div>
    </div>
);

// --- Main Hero Component ---

export const HomePage: React.FC<PageProps> = ({ navigate }) => {
  return (
    <>
      {/* 1. Hero Section - Fast & Punchy */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="inline-block bg-sky-100 text-sky-800 text-xs font-bold px-2 py-1 rounded mb-4">GRADES 3-8</span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Build Rockets. <br/><span className="text-brand-space">Learn Science.</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 font-medium">
                No Textbooks. Just Hands-on Engineering. <br/>
                Trusted by <span className="font-bold text-slate-900">85,000+ Indian Families</span>.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button onClick={() => navigate('courses')} className="bg-[#e40917] hover:bg-[#c10714] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
                  Start Learning
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
                {/* Optimized LCP Image */}
                <img 
                    src="https://files.catbox.moe/cticic.png" 
                    alt="Astronaut" 
                    className="w-64 md:w-80 animate-float" 
                    loading="eager" 
                    fetchPriority="high" 
                />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marquee - Quick Glance at Topics */}
      <DomainsMarqueeSection navigate={navigate} />

      {/* 3. Products - Clear Choices */}
      <section id="products" className="py-16 bg-slate-100">
        <div className="container mx-auto px-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900">Choose Your Path</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <HomeProductCard 
                    title="Little Scientist" 
                    price="₹99" 
                    emoji="🚀" 
                    description="1 Live Workshop. Try it out." 
                    color="border-slate-400" 
                    onClick={() => navigate('freecourses')} 
                />
                <HomeProductCard 
                    title="Rising Scientist" 
                    price="₹1,599" 
                    emoji="🎖️" 
                    description="5 Weeks. Physical Kit. Certification." 
                    color="border-brand-space" 
                    popular 
                    onClick={() => navigate('weekend-rocket-blast-off')} 
                />
                <HomeProductCard 
                    title="Future Scientist" 
                    price="₹7,999" 
                    emoji="👨‍🚀" 
                    description="12 Weeks. 1:1 Mentorship. Elite." 
                    color="border-amber-500" 
                    onClick={() => navigate('advanced-rocketry-workshop')} 
                />
            </div>
        </div>
      </section>

      {/* 4. Impact - Minimal Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">India's Largest Aerospace Community</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t border-slate-100 pt-8">
                <ImpactStat emoji="👨‍👩‍👧‍👦" number="85k+" text="Community" />
                <ImpactStat emoji="🎓" number="30k+" text="Graduates" />
                <ImpactStat emoji="🧑‍🚀" number="3k+" text="Engineers Trained" />
                <ImpactStat emoji="🌍" number="40+" text="Countries" />
                <ImpactStat emoji="🇮🇳" number="10+" text="States" />
                <ImpactStat emoji="🤝" number="6Y" text="Years Trust" />
            </div>
        </div>
      </section>

      {/* 5. Legacy & Trust */}
      <GallerySection />
      <Testimonials />
      <PartnersSection />
      <FAQ />

      {/* 6. Simple Contact CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <button onClick={() => navigate('contact')} className="bg-white text-slate-900 font-bold px-8 py-3 rounded-full hover:bg-slate-200 transition-colors">
                Talk to Us
            </button>
        </div>
      </section>
    </>
  );
};
