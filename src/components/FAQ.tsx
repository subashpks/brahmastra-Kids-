
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

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

export const FAQ: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Questions? We Have Answers!
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Here are some common questions from parents. If you don't see your question here, feel free to contact us.
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
    );
};