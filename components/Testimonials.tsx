
import React, { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { PageProps } from '../types';

// New Testimonials Component
const QuoteIcon = () => (
    <svg className="w-10 h-10 text-slate-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.333 22.583c0-4.083 2.167-6.25 6.25-6.25v-4.167c-6.917 0-10.417 3.5-10.417 10.417v4.167h8.333v-4.167H9.333zm12.5 0c0-4.083 2.167-6.25 6.25-6.25v-4.167c-6.917 0-10.417 3.5-10.417 10.417v4.167h8.333v-4.167h-4.166z"></path>
    </svg>
);

export const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    };

    useEffect(() => {
        const sliderInterval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(sliderInterval);
    }, [nextSlide]);

    return (
        <section className="py-16 md:py-24 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        What Parents Are Saying
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        We're proud to have inspired so many young minds. Here's what some of our parents have to share about their experience.
                    </p>
                </div>

                <div className="mt-12 relative max-w-3xl mx-auto">
                    <div className="overflow-hidden relative h-72 md:h-64">
                        {TESTIMONIALS_DATA.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                aria-hidden={index !== currentIndex}
                            >
                                <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col justify-center text-center">
                                    <div className="absolute top-4 left-4 opacity-50"><QuoteIcon /></div>
                                    <blockquote className="relative z-10">
                                        <p className="text-slate-700 italic text-lg">"{testimonial.quote}"</p>
                                    </blockquote>
                                    <footer className="mt-4 relative z-10">
                                        <p className="font-bold text-brand-space">{testimonial.parentName}</p>
                                        <p className="text-sm text-slate-500">
                                            Parent of {testimonial.studentName}
                                        </p>
                                        {testimonial.schoolName && (
                                            <p className="text-xs text-slate-400 mt-1">
                                                {testimonial.schoolName}, {testimonial.district}, {testimonial.state}
                                            </p>
                                        )}
                                    </footer>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Navigation Arrows */}
                    <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-slate-200 transition-colors z-20" aria-label="Previous testimonial">
                        <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-slate-200 transition-colors z-20" aria-label="Next testimonial">
                        <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {TESTIMONIALS_DATA.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-brand-space' : 'bg-slate-300 hover:bg-slate-400'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
