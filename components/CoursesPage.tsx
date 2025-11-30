
import React from 'react';
import { PageProps } from '../types';
import { COURSES_DATA } from '../constants';

const PRODUCTS_LIST = [
    {
        title: "Launch Pad",
        price: "₹199/-",
        description: "Zero-Risk Entry. 1 Live Fun Session to spark interest.",
        emoji: "🎫",
        color: "border-slate-400",
        link: "freecourses",
        features: [
            "1 Live Interactive Session (90 Mins)",
            "Taught by Real Aerospace Engineers",
            "Digital Certificate of Participation",
            "Direct Q&A with ISRO Tutors",
            "No Equipment Needed (Household items)",
            "Fun, Story-based Learning",
            "Low Commitment, High Value"
        ]
    },
    {
        title: "Rising Scientist",
        price: "₹1,599/-",
        description: "5 Weeks. Physical Kit delivered. Official Mission Medal.",
        emoji: "🎖️",
        color: "border-brand-space",
        popular: true,
        link: "weekend-rocket-blast-off",
        features: [
            "5-Week Comprehensive Course (10 Sessions)",
            "Physical Activity Kit Delivered to Home",
            "Official 'Junior Scientist' Mission Medal",
            "Weekly Hands-on Projects & Experiments",
            "Small Batch Size (Max 15 Students)",
            "Lifetime Access to Alumni Community",
            "Personalised Feedback from Mentors",
            "Graduation Ceremony & Certificate"
        ]
    },
    {
        title: "Future Scientist",
        price: "₹7,999/-",
        description: "Elite Tier. 12 Weeks. 1:1 Mentorship from Founder.",
        emoji: "👨‍🚀",
        color: "border-amber-500",
        link: "advanced-rocketry-workshop",
        features: [
            "12-Week Advanced Intensive Program",
            "1:1 Mentorship with Founder (Subash P.)",
            "Advanced Research Projects & Simulations",
            "Career Guidance & College Counseling",
            "Opportunity to Publish Research Paper",
            "Letter of Recommendation for Colleges",
            "Exclusive Access to Guest Lectures",
            "Personalized Career Roadmap",
            "Priority Support & Doubt Clearing"
        ]
    }
];

const ProductCard: React.FC<{ 
    title: string; 
    price: string; 
    description: string; 
    emoji: string; 
    color: string; 
    popular?: boolean;
    features: string[];
    onClick: () => void; 
}> = ({ title, price, description, emoji, color, popular, features, onClick }) => (
    <div 
        className={`relative bg-white p-8 md:p-10 rounded-3xl shadow-lg transition-all duration-300 border-t-8 ${color} hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full border border-slate-100`}
    >
        {popular && (
            <div className="absolute -top-5 left-0 right-0 flex justify-center">
                <span className="bg-[#e40917] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg uppercase tracking-wide transform scale-110">
                    Most Popular
                </span>
            </div>
        )}
        <div className="text-center mb-8">
            <div className="text-6xl mb-6 inline-block filter drop-shadow-sm">{emoji}</div>
            <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{title}</h3>
            <p className="text-4xl font-extrabold text-brand-space mb-4">{price}</p>
            <p className="text-slate-600 font-medium text-base leading-relaxed">{description}</p>
        </div>
        
        <div className="bg-slate-50 -mx-8 md:-mx-10 -mb-10 p-8 md:p-10 rounded-b-3xl flex-grow flex flex-col border-t border-slate-100">
             <div className="mb-8 flex-grow">
                <ul className="space-y-4 text-left">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-base text-slate-700 font-medium">
                            <div className={`mt-1 mr-3 p-1 rounded-full flex-shrink-0 ${popular ? 'bg-green-100 text-green-600' : 'bg-slate-200 text-slate-600'}`}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <span className="leading-snug">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button 
                onClick={(e) => { e.stopPropagation(); onClick(); }}
                className={`w-full text-center py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] ${popular ? 'bg-brand-space text-white hover:bg-blue-800' : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'}`}
            >
                View Details 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
    </div>
);

const TopicCard: React.FC<{ emoji: string; title: string; description: string; color: string; onClick: () => void; isComingSoon?: boolean; }> = ({ emoji, title, description, color, onClick, isComingSoon }) => (
    <div 
        onClick={!isComingSoon ? onClick : undefined} 
        className={`relative bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 border-t-4 ${color} ${isComingSoon ? 'opacity-70' : 'hover:shadow-md hover:-translate-y-1 cursor-pointer group'} h-full flex flex-col border border-slate-100`}
    >
        {isComingSoon && (
            <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md transform -rotate-12 z-10">
                Coming Soon
            </div>
        )}
        <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110 duration-300 inline-block">{emoji}</div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-brand-space transition-colors">{title}</h3>
        <p className="text-slate-500 text-xs leading-relaxed flex-grow">{description}</p>
    </div>
);

export const CoursesPage: React.FC<PageProps> = ({ navigate }) => {
    const handleScrollToProducts = () => {
        const element = document.getElementById('products-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Duplicate data to create a seamless loop
    const marqueeCourses = [...COURSES_DATA, ...COURSES_DATA];

    return (
        <div className="animate-fade-in-up bg-slate-50">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left order-2 lg:order-1">
                      <span className="text-brand-space font-semibold tracking-wider bg-sky-100 px-3 py-1 rounded-full text-sm">LEVEL UP</span>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mt-4">
                        Build the Future Scientist of <span className="text-brand-space">Your Family</span>
                      </h1>
                      <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                        From a single spark of curiosity to a full-fledged scientific journey. Select the plan that fits your child's passion and watch them soar.
                      </p>
                      <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <button 
                            onClick={handleScrollToProducts}
                            className="bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg">
                          View All Plans
                        </button>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="absolute -top-4 -left-4 w-48 h-48 bg-brand-sky rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob"></div>
                            <div className="absolute -top-4 -right-4 w-48 h-48 bg-brand-sun rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-48 h-48 bg-green-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                            <img src="https://files.catbox.moe/cticic.png" alt="Astronaut" className="relative animate-float z-10 w-full h-auto" />
                        </div>
                    </div>
                  </div>
                </div>
            </section>

            {/* Products Grid (Main) */}
            <section id="products-section" className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            Our Programs
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Flexible learning paths designed for every young explorer.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {PRODUCTS_LIST.map((product, index) => (
                            <ProductCard 
                                key={index}
                                {...product}
                                onClick={() => navigate(product.link)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Knowledge Streams Marquee */}
            <section className="py-16 bg-white overflow-hidden border-t border-slate-100">
                <div className="container mx-auto px-6 mb-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-900">Explore Our Knowledge Streams</h2>
                    <p className="text-sm text-slate-500 mt-2">Swipe to see all topics</p>
                </div>
                <div className="relative w-full">
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4 items-stretch">
                        {marqueeCourses.map((course, index) => (
                            <div key={`${course.title}-${index}`} className="mx-4 w-72 flex-shrink-0">
                                <TopicCard 
                                    emoji={course.emoji}
                                    title={course.title}
                                    description={course.description}
                                    color={course.color}
                                    onClick={() => navigate(course.page)}
                                    isComingSoon={course.isComingSoon}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
