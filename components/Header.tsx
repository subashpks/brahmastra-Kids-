import React, { useState } from 'react';

interface HeaderProps {
  navigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ navigate, currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClasses = (page: string) => 
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            currentPage === page 
            ? 'text-brand-space font-bold' 
            : 'text-slate-600 hover:text-brand-space hover:bg-slate-200'
        }`;
    
    const mobileNavLinkClasses = (page: string) => 
        `block w-full text-center px-4 py-3 rounded-md text-lg font-medium transition-colors ${
            currentPage === page
            ? 'bg-brand-space text-white'
            : 'text-slate-700 hover:bg-slate-200'
        }`;

    const handleMobileNav = (page: string) => {
        navigate(page);
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
                        <img src="https://files.catbox.moe/4qngmj.png" alt="Brahmastra Logo" className="h-12 w-auto" />
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-4">
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate('home')}} className={navLinkClasses('home')}>Home</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate('about')}} className={navLinkClasses('about')}>About Us</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate('age')}} className={navLinkClasses('age')}>Age Category</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate('streams')}} className={navLinkClasses('streams')}>Streams</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate('freecourses')}} className={navLinkClasses('freecourses')}>Free Courses</a>
                    </nav>

                    <div className="hidden lg:block">
                         <a href="#" onClick={(e) => { e.preventDefault(); navigate('age'); }} className="bg-[#e40917] text-white hover:bg-[#c10714] transition-colors font-semibold px-5 py-2.5 rounded-full text-sm shadow-md">
                            Join Waitlist
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-brand-space hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-sky"
                            aria-label="Main menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-xl animate-fade-in-up transition-all duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('home') }} className={mobileNavLinkClasses('home')}>Home</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('about') }} className={mobileNavLinkClasses('about')}>About Us</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('age') }} className={mobileNavLinkClasses('age')}>Age Category</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('streams') }} className={mobileNavLinkClasses('streams')}>Streams</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('freecourses') }} className={mobileNavLinkClasses('freecourses')}>Free Courses</a>
                        <div className="pt-4 px-2">
                             <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('age'); }} className="block w-full text-center bg-[#e40917] text-white hover:bg-[#c10714] transition-colors font-semibold px-5 py-3 rounded-full shadow-md">
                                Join Waitlist
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};