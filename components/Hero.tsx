

import React from 'react';
import { PageProps } from '../types';
import { FAQ } from './FAQ';
import { Testimonials } from './Testimonials';
import { GallerySection } from './Gallery';
import { PartnersSection } from './Partners';
import { COURSES_DATA } from '../constants';

const AstronautIllustration = () => (
    <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
      <div className="absolute -top-4 -left-4 w-48 h-48 bg-brand-sky rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute -top-4 -right-4 w-48 h-48 bg-brand-sun rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-48 h-48 bg-green-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <img src="https://files.catbox.moe/cticic.png" alt="A friendly cartoon astronaut floating in space with planets in the background" className="relative animate-float" />
    </div>
);

const ContactCta: React.FC<PageProps> = ({ navigate }) => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="bg-slate-50 rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12 lg:p-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Have Questions?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
                        Our team is ready to help with any inquiries. Reach out for more information about our courses, philosophy, or anything else.
                    </p>
                    <div className="mt-8">
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); navigate('contact'); }}
                            className="inline-block bg-brand-space text-white hover:bg-blue-800 transition-colors font-semibold px-8 py-3 rounded-full text-lg shadow-lg">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const impactStats = [
  { emoji: '👨‍👩‍👧‍👦', number: '85,000+', description: "India's Biggest Aerospace Community", color: 'text-brand-space', bgColor: 'bg-blue-100' },
  { emoji: '🎓', number: '30,000+', description: 'Students Passed Out in 6 Years', color: 'text-brand-sky', bgColor: 'bg-sky-100' },
  { emoji: '🧑‍🚀', number: '3,000+', description: 'Aerospace Engineers Trained Personally', color: 'text-brand-sun', bgColor: 'bg-amber-100' },
  { emoji: '🌍', number: '40+', description: 'Countries Our Alumni Work In', color: 'text-green-500', bgColor: 'bg-green-100' },
  { emoji: '🗺️', number: '10+', description: 'States Served in India', color: 'text-purple-500', bgColor: 'bg-purple-100' },
  { emoji: '🤝', number: '6+', description: 'Years of Trust in the Aerospace Community', color: 'text-red-500', bgColor: 'bg-red-100' }
];

const StatsSection = () => (
    <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Our Impact in Numbers
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    We're proud of the community we've built and the minds we've inspired.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {impactStats.map((stat, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 transition-all duration-300 ${stat.bgColor} group-hover:scale-110`}>
                           {stat.emoji}
                        </div>
                        <h3 className={`text-5xl font-extrabold ${stat.color}`}>{stat.number}</h3>
                        <p className="mt-3 text-base text-slate-600 font-medium">{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const HOME_PRODUCTS = [
    {
        title: "Little Scientist",
        price: "₹99/-",
        description: "An expert-led live session to begin their scientist journey.",
        emoji: "🎫",
        color: "border-slate-400",
        link: "freecourses"
    },
    {
        title: "Rising Scientist",
        price: "₹1,599/-",
        description: "5 Weeks. Physical Kit delivered. Official Mission Medal.",
        emoji: "🎖️",
        color: "border-brand-space",
        popular: true,
        link: "courses"
    },
    {
        title: "Future Scientist",
        price: "₹7,999/-",
        description: "Elite Tier. 12 Weeks. 1:1 Mentorship from Founder.",
        emoji: "👨‍🚀",
        color: "border-amber-500",
        link: "courses"
    }
];

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
        className={`relative bg-white p-6 rounded-2xl shadow-md transition-all duration-300 border-t-4 ${color} hover:shadow-xl hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center h-full group`}
    >
        {popular && (
            <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-[#e40917] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
                    Most Popular
                </span>
            </div>
        )}
        <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110 duration-300">{emoji}</div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-2xl font-extrabold text-brand-space mb-2">{price}</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{description}</p>
        <span className="text-sm font-semibold text-brand-sky group-hover:text-brand-space transition-colors flex items-center gap-1">
            View Details 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </span>
    </div>
);

const ProductsServicesSection: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => (
    <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Our Products and Services
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    Start your journey with a simple trial, or dive deep with our comprehensive certification programs.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {HOME_PRODUCTS.map((product, index) => (
                    <HomeProductCard 
                        key={index}
                        {...product}
                        onClick={() => navigate(product.link)}
                    />
                ))}
            </div>
            <div className="mt-12 text-center">
                <button 
                    onClick={() => navigate('courses')}
                    className="bg-brand-space hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md transition-colors"
                >
                    Compare All Plans
                </button>
            </div>
        </div>
    </section>
);

const DomainCard: React.FC<{ title: string; emoji: string; color: string; onClick: () => void; }> = ({ title, emoji, color, onClick }) => (
    <div 
        onClick={onClick}
        // w-72 (288px) and h-[178px] creates a Golden Ratio (approx 1.618)
        className={`flex-shrink-0 w-72 h-[178px] bg-white p-4 rounded-2xl shadow-md border-t-4 ${color} mx-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
    >
        <span className="text-5xl filter drop-shadow-sm mb-1 transform group-hover:scale-110 transition-transform duration-300">{emoji}</span>
        <div className="text-center">
            <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-brand-space transition-colors">{title}</h3>
            <span className="text-xs text-brand-sky font-bold uppercase tracking-wider mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
        </div>
    </div>
);

const DomainsMarqueeSection: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
    // Duplicate the data to create a seamless loop
    const marqueeData = [...COURSES_DATA, ...COURSES_DATA];

    return (
        <section className="py-12 bg-white overflow-hidden border-b border-slate-100">
            <div className="container mx-auto px-6 mb-8 text-center">
                <h2 className="text-2xl font-bold text-slate-900">Explore Our Knowledge Streams</h2>
                <p className="text-sm text-slate-500 mt-2">Swipe to see what your child can master</p>
            </div>
            <div className="relative w-full">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
                    {marqueeData.map((course, index) => (
                        <DomainCard 
                            key={`${course.title}-${index}`} 
                            {...course} 
                            onClick={() => navigate(course.page)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const LegacySection = () => {
    const legacyStats = [
      {
        icon: '🧑‍🚀',
        text: '2 of 4 aerospace engineers in India trained by us',
        color: 'bg-blue-100 text-brand-space'
      },
      {
        icon: '✈️',
        text: '500+ students sent abroad for higher studies',
        color: 'bg-sky-100 text-brand-sky'
      },
      {
        icon: '🌍',
        text: '1,500+ engineers placed worldwide',
        color: 'bg-green-100 text-green-600'
      },
      {
        icon: '💡',
        text: 'Shaping India’s aerospace talent—directly or indirectly',
        color: 'bg-amber-100 text-brand-sun'
      }
    ];

    return (
        <section className="py-16 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Our Legacy
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        We're proud of the community we've built and the impact we've made on India's aerospace landscape.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
                    {/* Canva Embed */}
                    <div className="w-full">
                         <div style={{
                            position: 'relative',
                            width: '100%',
                            height: 0,
                            paddingTop: '56.2500%',
                            paddingBottom: 0,
                            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                            overflow: 'hidden',
                            borderRadius: '8px',
                            willChange: 'transform'
                        }}>
                            <iframe
                                loading="lazy"
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    top: 0,
                                    left: 0,
                                    border: 'none',
                                    padding: 0,
                                    margin: 0
                                }}
                                src="https://www.canva.com/design/DAEcK5gOp6s/view?embed"
                                allowFullScreen={true}
                                allow="fullscreen"
                                title="Brahmastra Aerospace Legacy"
                            >
                            </iframe>
                        </div>
                    </div>
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {legacyStats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4 ${stat.color}`}>
                                    {stat.icon}
                                </div>
                                <p className="font-semibold text-slate-700 leading-snug">{stat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const GlobalCommunitySection = () => {
    const studentData = [
        { country: 'India', users: '12.5K' },
        { country: 'United States', users: '853' },
        { country: 'United Kingdom', users: '629' },
        { country: 'Germany', users: '421' },
        { country: 'Canada', users: '719' },
        { country: 'Singapore', users: '314' },
        { country: 'United Arab Emirates', users: '511' },
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Our Global Community
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Inspiring young minds across the globe. Here's a look at where our students are joining from.
                    </p>
                </div>
                
                <div className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100 grid lg:grid-cols-5 gap-8 items-center">
                    {/* Map */}
                    <div className="lg:col-span-3 w-full">
                        <img src="https://files.catbox.moe/qiy0id.png" alt="World map showing student locations" className="w-full h-auto object-contain rounded-lg" />
                    </div>

                    {/* Data List */}
                    <div className="lg:col-span-2">
                        <div className="flex justify-between items-center border-b-2 border-slate-200 pb-2 mb-4">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Country</h3>
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Students</h3>
                        </div>
                        <ul className="space-y-2">
                            {studentData.map((item, index) => (
                                <li key={index} className="flex justify-between items-center py-2.5 px-3 rounded-md hover:bg-slate-50 transition-colors">
                                    <span className="font-medium text-slate-700 text-sm">{item.country}</span>
                                    <span className="font-bold text-slate-800 text-base w-20 text-right">{item.users}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};


export const HomePage: React.FC<PageProps> = ({ navigate }) => {
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="text-brand-space font-semibold tracking-wider bg-sky-200/50 px-3 py-1 rounded-full">GRADES 3-8</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mt-4">
                Launch Your Child's <span className="text-brand-space">Aerospace Journey</span> from Home<span className="text-[#e40917]">.</span>
              </h1>
              <p className="mt-4 text-xl md:text-2xl font-medium text-slate-700 max-w-xl mx-auto lg:mx-0">
                Where Half of India’s Aerospace Engineers Begin
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                    href="#products" 
                    onClick={(e) => handleScrollClick(e, 'products')}
                    className="bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg">
                  Explore Products
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
                <AstronautIllustration />
            </div>
          </div>
        </div>
      </section>

      <LegacySection />
      
      <GlobalCommunitySection />

      <div id="products">
        <ProductsServicesSection navigate={navigate} />
      </div>

      <DomainsMarqueeSection navigate={navigate} />

      <GallerySection />
      
      <StatsSection />
      
      <Testimonials />

      <PartnersSection />

      <FAQ />

      <ContactCta navigate={navigate} />
    </>
  );
};