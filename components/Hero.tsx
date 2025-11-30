
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
  { emoji: '👨‍👩‍👧‍👦', number: '85,000+', description: "India's Biggest Aerospace Community", color: 'text-brand-space', borderColor: 'border-brand-space' },
  { emoji: '🎓', number: '30,000+', description: 'Students Passed Out in 6 Years', color: 'text-brand-sky', borderColor: 'border-brand-sky' },
  { emoji: '🧑‍🚀', number: '3,000+', description: 'Aerospace Engineers Trained Personally', color: 'text-brand-sun', borderColor: 'border-brand-sun' },
  { emoji: '🌍', number: '40+', description: 'Countries Our Alumni Work In', color: 'text-green-500', borderColor: 'border-green-500' },
  { emoji: '🗺️', number: '10+', description: 'States Served in India', color: 'text-purple-500', borderColor: 'border-purple-500' },
  { emoji: '🤝', number: '6+', description: 'Years of Trust in the Aerospace Community', color: 'text-[#e40917]', borderColor: 'border-[#e40917]' }
];

const StatsSection = () => (
    <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Our Achievements
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {impactStats.map((stat, index) => (
                    <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${stat.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                        <p className="text-4xl mb-4">{stat.emoji}</p>
                        <h3 className={`text-4xl font-extrabold ${stat.color}`}>{stat.number}</h3>
                        <p className="mt-2 text-base text-slate-600">{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const HOME_PRODUCTS = [
    {
        title: "Launch Pad",
        price: "₹199",
        description: "Zero-Risk Entry. 1 Live Fun Session to spark interest.",
        emoji: "🎫",
        color: "border-slate-400",
        link: "freecourses"
    },
    {
        title: "Rising Scientist",
        price: "₹1,599",
        description: "5 Weeks. Physical Kit delivered. Official Mission Medal.",
        emoji: "🎖️",
        color: "border-brand-space",
        popular: true,
        link: "courses"
    },
    {
        title: "Future Scientist",
        price: "₹7,999",
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

const AboutVideoSection = () => {
    const features = [
        {
            icon: (
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-sky-100 text-brand-sky">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                </div>
            ),
            title: 'Real-World Learning',
            description: 'We replace rote learning with hands-on projects that build real skills and turn screen time into skill time.'
        },
        {
            icon: (
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-orange-100 text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>
                </div>
            ),
            title: 'Expert Mentorship',
            description: 'Our mentors are real aerospace engineers who teach kids to think, build, and problem-solve.'
        },
        {
            icon: (
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-lime-100 text-lime-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.854 1.595-2.112a6.002 6.002 0 00-3.845-8.986m0 1.956c.307.073.619.143.938.212a6.001 6.001 0 003.003 9.25m-6.003-7.509a4.502 4.502 0 00.938.212M9.75 18v-.192c0-.983-.658-1.854-1.595-2.112a6.002 6.002 0 013.845-8.986" />
                    </svg>
                </div>
            ),
            title: 'Curiosity-Driven',
            description: 'We don\'t chase marks; we chase "aha!" moments, igniting a genuine passion for innovation.'
        }
    ];

    return (
        <section className="py-16 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl font-extrabold text-brand-space mb-6 font-sans">
                            brahmàstra<span className="text-[#e40917]">.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Brahmastra was born to make aerospace education accessible and replace rote learning with real-world wonder. Here's how we do it:
                        </p>
                        
                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    {feature.icon}
                                    <div className="ml-5">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content (Embed) */}
                    <div className="order-1 lg:order-2 w-full">
                        <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.01] duration-300">
                            <div style={{
                                position: 'relative', 
                                width: '100%', 
                                height: 0, 
                                paddingTop: '54.4117%', // 222 / 408 = 0.544117647...
                                paddingBottom: 0, 
                                overflow: 'hidden',
                                background: 'transparent'
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
                                    title="Brahmastra Experience"
                                >
                                </iframe>
                            </div>
                        </div>
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
              <span className="text-brand-space font-semibold tracking-wider bg-sky-200/50 px-3 py-1 rounded-full">AGES 6-16</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mt-4">
                Launch Your Child's <span className="text-brand-space">Aerospace Journey</span> from Home<span className="text-[#e40917]">.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                Turn screen time into skill time. Our fun, hands-on live courses make learning about planes, rockets, stars, and drones an exciting adventure for every curious mind.
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

      <AboutVideoSection />

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
