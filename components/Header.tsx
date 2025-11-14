
import React, { useState } from 'react';
import { STREAMS_DATA } from '../constants';

interface HeaderProps {
  navigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ navigate, currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutSubMenuOpen, setAboutSubMenuOpen] = useState(false);
    const [isCoursesSubMenuOpen, setCoursesSubMenuOpen] = useState(false);

    const navLinkClasses = (page: string, isParent = false) => 
        `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
            currentPage === page 
            ? 'text-brand-space font-bold' 
            : 'text-slate-600 hover:text-brand-space hover:bg-slate-200'
        } ${isParent ? 'cursor-default' : ''}`;

    const handleMobileNav = (page: string) => {
        navigate(page);
        setIsMenuOpen(false);
        setAboutSubMenuOpen(false);
        setCoursesSubMenuOpen(false);
    };
    
    const ArrowDownIcon = () => (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
    );

    const DesktopNav = () => (
        <nav className="hidden lg:flex items-center space-x-2">
            <a href="#" onClick={(e) => {e.preventDefault(); navigate('home')}} className={navLinkClasses('home')}>Home</a>

            <div className="relative group">
                <div className={navLinkClasses('about-parent', true)}>About Us <ArrowDownIcon/></div>
                <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('about'); }} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Our Story</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('philosophy'); }} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Our Philosophy</a>
                </div>
            </div>

            <div className="relative group">
                <div className={navLinkClasses('courses-parent', true)}>Courses <ArrowDownIcon/></div>
                <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {STREAMS_DATA.map(course => (
                        <a key={course.page} href="#" onClick={(e) => { e.preventDefault(); navigate(course.page); }} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">{course.title}</a>
                    ))}
                </div>
            </div>

            <a href="#" onClick={(e) => {e.preventDefault(); navigate('age')}} className={navLinkClasses('age')}>Age Groups</a>
            <a href="#" onClick={(e) => {e.preventDefault(); navigate('faq')}} className={navLinkClasses('faq')}>FAQ</a>
            <a href="#" onClick={(e) => {e.preventDefault(); navigate('freecourses')}} className={navLinkClasses('freecourses')}>Enroll</a>
            <a href="#" onClick={(e) => {e.preventDefault(); navigate('contact')}} className={navLinkClasses('contact')}>Contact Us</a>
        </nav>
    );
    
    const MobileNav = () => (
         <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-xl animate-fade-in-up transition-all duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('home'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">Home</a>
                
                <button onClick={() => setAboutSubMenuOpen(!isAboutSubMenuOpen)} className="flex justify-between items-center w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">
                    <span>About Us</span> <ArrowDownIcon/>
                </button>
                {isAboutSubMenuOpen && (
                    <div className="pl-4 border-l-2 border-slate-200">
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('about'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-200">Our Story</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('philosophy'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-200">Our Philosophy</a>
                    </div>
                )}
                
                <button onClick={() => setCoursesSubMenuOpen(!isCoursesSubMenuOpen)} className="flex justify-between items-center w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">
                    <span>Courses</span> <ArrowDownIcon/>
                </button>
                {isCoursesSubMenuOpen && (
                    <div className="pl-4 border-l-2 border-slate-200">
                        {STREAMS_DATA.map(course => (
                            <a key={course.page} href="#" onClick={(e) => { e.preventDefault(); handleMobileNav(course.page); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-200">{course.title}</a>
                        ))}
                    </div>
                )}

                <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('age'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">Age Groups</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('faq'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">FAQ</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('freecourses'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">Enroll</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('contact'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">Contact Us</a>
            </div>
        </div>
    );

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
                        <img src="https://files.catbox.moe/4qngmj.png" alt="Brahmastra Logo" className="h-12 w-auto" />
                    </div>
                    
                    <DesktopNav />

                    <div className="lg:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-brand-space hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-sky"
                            aria-label="Main menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && <MobileNav />}
        </header>
    );
};
