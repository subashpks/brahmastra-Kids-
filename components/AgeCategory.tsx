
import React, { useState } from 'react';
import { InterestForm } from './InterestForm';
import { PageProps } from '../types';
import { WEEKEND_CAMP_DATA, ADVANCED_CAMP_DATA } from '../constants';

const categories = [
    {
        emoji: '🚀',
        title: 'Junior Aviators',
        age: 'Ages 6-11',
        standard: '1st–5th Standard',
        traits: 'Curious, imaginative, hands-on learners',
        focus: 'Story-based learning, DIY kits, fun experiments',
        color: 'border-sky-400'
    },
    {
        emoji: '🧠',
        title: 'Senior Innovators',
        age: 'Ages 12-16',
        standard: '7th–11th Standard',
        traits: 'Analytical, logical, future-focused',
        focus: 'Coding, aerospace fundamentals, career guiding',
        color: 'border-green-500'
    }
];

const FAQ_DATA = [
    {
        question: "Why do we have to join a waitlist?",
        answer: "Because every child is unique. We keep our batches small so there's no 'back bench.' This allows our mentors—who are real aerospace engineers—to focus on individual needs, answer every curious question, and tailor the pace so your child builds confidence, free from pressure."
    },
    {
        question: "What is the Brahmastra way of learning?",
        answer: "We chase 'aha!' moments, not marks. We replace boring homework with hands-on projects, like designing wings and launching rockets. We foster collaboration over competition and ignite a genuine spark of curiosity, teaching children how to think, problem-solve, and become self-reliant learners for life."
    },
    {
        question: "Do we have to buy expensive kits for learning?",
        answer: "No. We believe aerospace engineering starts with everyday wonders, like a room fan or a water bottle. Our courses teach children to explore scientific principles by using what's available at home. We focus on igniting resourcefulness and creativity, not on expensive equipment."
    },
    {
        question: "Who will be teaching my child?",
        answer: "Your child will be mentored by trained aerospace engineers with a minimum of five years of industry experience. We provide access to real experts who can share their passion and real-world knowledge, not just standard tutors."
    },
    {
        question: "Is this another high-pressure, competitive class?",
        answer: "Absolutely not. In a world focused on the 'rat race,' we create a supportive space where children share ideas, celebrate each other's discoveries, and learn that working together is more powerful than competing alone. Our goal is to build teamwork skills and a love for learning, free from stress."
    },
    {
        question: "What's Brahmastra's pricing?",
        answer: "Our courses are priced affordably between ₹300 and ₹500 per Session. We believe in providing access to high-quality mentorship from real aerospace engineers without a hefty price tag, making top-tier STEM education accessible to more families."
    },
    {
        question: "How long is the waitlist period?",
        answer: "The wait time varies depending on the course and age group, but we typically open new batches every 30 to 45 days. Joining the waitlist ensures you'll be the first to know when a spot becomes available, as our small group sizes fill up quickly."
    },
    {
        question: "Why do you use mother-tongue learning?",
        answer: "Complex scientific concepts are best understood when explained in a language a child is most comfortable with. Learning in their mother tongue removes language barriers, allowing children to grasp difficult ideas more intuitively and build a stronger, deeper foundation in the subject."
    },
    {
        question: "Why only Hindi and Tamil? What about other regional languages?",
        answer: "We've started with Hindi and Tamil to ensure the highest quality of instruction and curriculum in these languages. We are actively working on expanding to other regional languages and will be coming to your state soon! Our goal is to make aerospace education accessible to every child in India, in the language they understand best."
    },
    {
        question: "Does Brahmastra work for NRI Students?",
        answer: "Yes, we curate our Syllabus from NASA, ESA, ISRO Learning Programs and STEAM methodology. We have worked with the US Government in India for their STEAM Mission. We make separate batches for the US, Canada, Middle East, Malaysia, Singapore, Japan, Australia and NZ."
    }
];

const CategoryCard: React.FC<{ category: typeof categories[0] }> = ({ category }) => (
    <div className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 ${category.color}`}>
        <div className="text-4xl mb-4">{category.emoji}</div>
        <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
        <p className="font-semibold text-brand-space">{category.age} ({category.standard})</p>
        <div className="mt-4 border-t pt-4">
            <p className="text-slate-600"><span className="font-semibold">Traits:</span> {category.traits}</p>
            <p className="text-slate-600 mt-2"><span className="font-semibold">Focus:</span> {category.focus}</p>
        </div>
    </div>
);

const FeaturedCourseCard: React.FC<{ course: any; onClick: () => void; color: string }> = ({ course, onClick, color }) => (
    <div className={`bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 border-t-4 ${color}`}>
        <div className="flex justify-between items-start mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${color.includes('sky') ? 'bg-sky-100 text-sky-800' : 'bg-green-100 text-green-800'}`}>
                {course.ageCategory.split('(')[0]}
            </span>
            <span className="text-brand-space font-bold text-sm">{course.price}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{course.courseName}</h3>
        <div className="text-sm text-slate-500 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            {course.sessions}
        </div>
        <p className="text-slate-600 text-sm mb-6 line-clamp-3">{course.description}</p>
        <button 
            onClick={onClick}
            className="w-full bg-slate-800 hover:bg-brand-space transition-colors text-white font-semibold py-3 rounded-lg text-sm"
        >
            View Details
        </button>
    </div>
);

const FaqItemComponent: React.FC<{
    item: { question: string; answer: string };
    isOpen: boolean;
    onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-200">
            <button
                className="w-full flex justify-between items-center text-left py-5"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-slate-800">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pb-5 text-slate-600 pr-6">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

export const AgeCategoryPage: React.FC<PageProps> = ({ navigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleToggle = (index: number) => {
      setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
        <section id="age-category" className="py-16 md:py-24 animate-fade-in-up bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
                 <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Tailored for Every Stage of Curiosity
                </h1>
                <p className="mt-6 text-lg text-slate-600">
                  We believe in nurturing passion at the right pace. Our programs are designed to match your child's developmental stage, ensuring they get the most engaging and effective learning experience.
                </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {categories.map(cat => <CategoryCard key={cat.title} category={cat} />)}
            </div>

            {/* New Section: Upcoming Batches */}
            <div className="mt-20 border-t border-slate-200 pt-16">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">Limited Seats</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Upcoming Batches Starting 1st Dec
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Explore our featured courses for this month. Secure your spot before they fill up!
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <FeaturedCourseCard 
                        course={WEEKEND_CAMP_DATA} 
                        color="border-sky-400"
                        onClick={() => navigate('weekend-rocket-blast-off')}
                    />
                    <FeaturedCourseCard 
                        course={ADVANCED_CAMP_DATA} 
                        color="border-green-500"
                        onClick={() => navigate('advanced-rocketry-workshop')}
                    />
                </div>
            </div>

          </div>
        </section>

        <section id="waitlist-faq" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Your Questions Answered
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Here’s a little more about our unique approach before you join the waitlist.
                    </p>
                </div>
                <div className="mt-12 max-w-3xl mx-auto">
                    {FAQ_DATA.map((item, index) => (
                        <FaqItemComponent
                            key={index}
                            item={item}
                            isOpen={openFaq === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>

        <InterestForm />
    </>
  );
};
