


import React from 'react';
import { EnrollmentForm } from './Contact';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 1.66.43 3.24 1.21 4.6l-1.36 4.95 5.07-1.33c1.32.75 2.82 1.18 4.38 1.18h.01c5.5 0 9.96-4.49 9.96-10.02S17.5 2.04 12 2.04zM16.51 13.96c-.22-.11-.78-.38-1.02-.43-.24-.05-.42-.08-.59.16-.18.24-.38.43-.47.54-.08.11-.17.13-.33.08-.16-.05-1.02-.37-1.95-1.2-.72-.64-1.21-1.44-1.36-1.68-.15-.24-.02-.38.07-.5.08-.11.17-.28.26-.42.09-.14.12-.24.18-.4.06-.16.03-.29-.02-.39-.05-.11-.59-1.42-.81-1.94-.21-.52-.43-.45-.59-.45-.15 0-.32-.03-.49-.03s-.42 0-1.08.5c-.66.5-1.02 1.23-1.02 2.4s1.05 2.78 1.2 2.97c.15.19 2.11 3.2 5.1 4.48.71.3 1.27.48 1.71.61.73.22 1.39.19 1.9.11.57-.08 1.76-.72 2-1.42.24-.7.24-1.3.17-1.42-.08-.12-.3-.19-.52-.3z"/>
    </svg>
);

const courses = [
    { 
        title: "Astronomy For Kids", 
        age: "Ages 6-10", 
        date: "15th & 16th November", 
        time: "05:30 PM - 06:30 PM IST",
        mediums: ['தமிழ்', 'हिंदी'] 
    },
    { 
        title: "Rocket Science for Kids", 
        age: "Ages 11-17", 
        date: "15th & 16th November", 
        time: "05:30 PM - 06:30 PM IST",
        mediums: ['தமிழ்', 'हिंदी'] 
    }
];

const CourseCard: React.FC<{ course: typeof courses[0] }> = ({ course }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-sun flex-1 flex flex-col">
        <span className="font-bold bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full text-sm self-start">{course.age}</span>
        <h3 className="text-xl font-bold text-slate-800 mt-3 mb-2 flex-grow">{course.title}</h3>
        <p className="text-slate-600 font-medium">{course.date}</p>
        <p className="text-slate-600 font-medium">{course.time}</p>
        <div className="mt-4 border-t border-slate-200 pt-3">
            <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Medium of Instruction:</p>
            <div className="flex gap-2">
                {course.mediums.map(medium => (
                    <span key={medium} className="bg-slate-200 text-slate-700 text-sm font-medium px-3 py-1 rounded-full">{medium}</span>
                ))}
            </div>
        </div>
    </div>
);

const HeroIllustration = () => (
     <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute -top-4 -left-4 w-56 h-56 bg-sky-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute -top-4 -right-4 w-56 h-56 bg-amber-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-56 h-56 bg-green-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <img 
            src="https://files.catbox.moe/kcz5ca.png" 
            alt="A happy child sitting in a homemade cardboard rocket, imagining a space adventure, with planets and stars in the background." 
            className="relative animate-float"
        />
    </div>
);

export const FreeCoursesPage: React.FC = () => {
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="animate-fade-in-up">
            {/* Hero Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                   <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <span className="text-brand-space font-semibold tracking-wider bg-sky-200/50 px-3 py-1 rounded-full">FREE WEEKEND COURSES</span>
                             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mt-4">
                                The Skyway Movement
                            </h1>
                            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                                Join our free, exciting weekend workshops! We turn complex topics like astronomy and rocket science into fun, hands-on adventures for kids and teens across India.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                                <a 
                                    href="#upcoming-courses"
                                    onClick={(e) => handleScrollClick(e, 'upcoming-courses')}
                                    className="bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg"
                                >
                                    View Upcoming Courses
                                </a>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <HeroIllustration />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* What is Skyway Movement Section */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                            What is the Skyway Movement?
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            The Skyway Movement is Brahmastra's commitment to making aerospace education accessible and exciting for every child in India. We believe that by sparking curiosity early, we can inspire the next generation of scientists, engineers, and dreamers. Our free weekly courses are designed to be fun, hands-on, and a launchpad for a lifelong passion for STEM.
                        </p>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section id="upcoming-courses" className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-brand-space max-w-5xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">Upcoming Free Courses</h2>
                        <div className="flex flex-col md:flex-row gap-8 justify-center">
                            {courses.map((course, index) => (
                                <CourseCard key={index} course={course} />
                            ))}
                        </div>
                         <div className="mt-8 text-center">
                             <a 
                                href="#contact"
                                onClick={(e) => handleScrollClick(e, 'contact')}
                                className="inline-block w-full sm:w-auto bg-brand-sun hover:bg-amber-600 transition-colors text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg transform hover:scale-105"
                            >
                                Enroll for Free
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <EnrollmentForm />

            {/* Social Media Prompt */}
            <section className="pt-16 md:pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto bg-slate-100 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-slate-800">Get regular updates and free Activities for your kids</h3>
                         <a 
                            href="https://whatsapp.com/channel/0029Vb6qN88JuyA4MCaa5K01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold px-6 py-2 rounded-full shadow-md"
                        >
                            <WhatsAppIcon />
                            Follow us on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
