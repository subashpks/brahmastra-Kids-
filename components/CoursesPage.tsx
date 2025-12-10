

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

const PhilosophyCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center transition-transform duration-300 hover:-translate-y-1">
        <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-slate-200">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

// Icons for the philosophy section
const QuestionIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-sun" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const BulbIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>);
const LanguageIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>);

// Icons for the new program card tags
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const CalendarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>);
const PuzzleIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>);
const CashIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>);
const UserGroupIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>);

const programTags = [
    { icon: <UserGroupIcon />, text: 'Grades 3-8' },
    { icon: <ClockIcon />, text: 'Starts 1st Dec' },
    { icon: <CalendarIcon />, text: '2 Sessions/Week' },
    { icon: <CashIcon />, text: '₹300/- per Session' },
];

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
            {/* Header Section */}
            <section className="py-20 md:py-28 bg-white relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                <div className="container mx-auto px-6 relative">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-brand-space/10 text-brand-space px-4 py-1.5 rounded-full text-sm font-bold mb-8 uppercase tracking-wide">
                             Handpicked for the Curious
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
                            We curate <span className="text-brand-space">Hard Topics</span>. <br/>
                            Explained through <span className="text-[#e40917]">Everyday Science</span>.
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Our courses are handpicked for kids who have more curiosity and doubts. We connect complex concepts with everyday examples (like fans & water bottles) and make them understandable in their own language.
                        </p>
                        <div className="mb-12">
                            <a 
                                href="#current-courses" 
                                onClick={(e) => { e.preventDefault(); handleScrollToProducts() }}
                                className="bg-brand-space text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-800 transition-all inline-block hover:-translate-y-1"
                            >
                                Know Current Courses
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                        <PhilosophyCard 
                            icon={<QuestionIcon />}
                            title="For the 'Why?' Kids"
                            description="Designed for children who have more questions than answers. We cherish every doubt and spark deep curiosity."
                        />
                        <PhilosophyCard 
                            icon={<BulbIcon />}
                            title="Everyday Science"
                            description="We decode Rocket Science using simple things found in your kitchen and living room, making learning relatable."
                        />
                        <PhilosophyCard 
                            icon={<LanguageIcon />}
                            title="In Their Language"
                            description="Complex concepts taught in the language they think in (Tamil, Hindi, English), ensuring 100% understanding."
                        />
                    </div>
                </div>
            </section>

            {/* Featured Live Cohort Section */}
            <section id="current-courses" className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Current Courses</h2>
                        <div className="flex items-center justify-center gap-3">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">Live Now: Featured Cohort</span>
                        </div>
                    </div>
                    
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden text-white group">
                        <div className="md:grid md:grid-cols-2">
                            <div className="relative h-72 md:h-auto overflow-hidden">
                                <div className="absolute inset-0 bg-brand-space/20 z-10"></div>
                                <img 
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                                    src="https://files.catbox.moe/gpc0v3.png" 
                                    alt="Rocket Science course" 
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
                                    <span className="bg-brand-sun text-slate-900 text-xs font-bold px-3 py-1 rounded mb-3 inline-block">BESTSELLER</span>
                                    <h3 className="text-3xl font-bold leading-tight">Rocket Science</h3>
                                </div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold mb-4 text-white">Rocket Science For Kids</h3>
                                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                                    A full-fledged course where kids build real rockets, understand propulsion through balloons, and learn aerodynamics from folding paper.
                                </p>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-10">
                                    {programTags.map(tag => (
                                        <div key={tag.text} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                            <span className="text-brand-sky bg-white/10 p-1.5 rounded-full">{tag.icon}</span>
                                            <span>{tag.text}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button 
                                        onClick={() => navigate('weekend-rocket-blast-off')} 
                                        className="bg-brand-sky hover:bg-sky-500 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105 text-center"
                                    >
                                        Junior Scientist (6-11 Yrs)
                                    </button>
                                    <button 
                                        onClick={() => navigate('advanced-rocketry-workshop')} 
                                        className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition-all text-center"
                                    >
                                        Senior Scientist (12-16 Yrs)
                                    </button>
                                </div>
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
