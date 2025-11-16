
import React, { useState } from 'react';
import { User, ChildProfile } from '../types';

interface HeaderProps {
  navigate: (page: string) => void;
  currentPage: string;
  isLoggedIn: boolean;
  onLogout: () => void;
  currentUser: User | null;
  activeChild: ChildProfile | null;
}

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
);


export const Header: React.FC<HeaderProps> = ({ navigate, currentPage, isLoggedIn, onLogout, currentUser, activeChild }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutSubMenuOpen, setAboutSubMenuOpen] = useState(false);

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
    };
    
    const ArrowDownIcon = () => (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
    );

    const DesktopNav = () => (
        <nav className="hidden lg:flex items-center space-x-2">
            <div className="relative group">
                <div className={navLinkClasses('about-parent', true)}>About Us <ArrowDownIcon/></div>
                <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('about'); }} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Our Journey</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('philosophy'); }} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Our Philosophy</a>
                </div>
            </div>

            <a href="#" onClick={(e) => {e.preventDefault(); navigate('streams')}} className={navLinkClasses('streams')}>Streams</a>
            <a href="#" onClick={(e) => {e.preventDefault(); navigate('freecourses')}} className={navLinkClasses('freecourses')}>Free Courses</a>

            {isLoggedIn && currentUser ? (
                <>
                    {activeChild && (
                       <span className="text-sm font-medium text-slate-500 hidden xl:block border-l pl-3 ml-1">
                           Viewing for: <span className="font-bold text-brand-space">{activeChild.name}</span>
                       </span>
                    )}
                    <a href="#" onClick={(e) => {e.preventDefault(); navigate('dashboard')}} className={navLinkClasses('dashboard')}>Dashboard</a>
                    <a href="#" onClick={(e) => {e.preventDefault(); onLogout()}} aria-label="Logout" className="p-2 rounded-full text-sm font-medium transition-colors text-slate-600 hover:text-brand-space hover:bg-slate-200">
                        <LogoutIcon />
                    </a>
                </>
            ) : (
                <>
                    {/*
                    <a href="#" onClick={(e) => {e.preventDefault(); navigate('login')}} aria-label="Sign In / Sign Up" className={`p-2 rounded-full text-sm font-medium transition-colors ${currentPage === 'login' || currentPage === 'signup' ? 'text-brand-space bg-slate-200' : 'text-slate-600 hover:text-brand-space hover:bg-slate-200'}`}>
                        <UserIcon />
                    </a>
                    */}
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('age'); }} className="ml-2 inline-block bg-[#e40917] hover:bg-[#c10714] transition-colors text-white font-semibold px-5 py-2 rounded-full text-sm shadow-md">
                        Join Waitlist
                    </a>
                </>
            )}
        </nav>
    );
    
    const MobileNav = () => (
         <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-xl animate-fade-in-up transition-all duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button onClick={() => setAboutSubMenuOpen(!isAboutSubMenuOpen)} className="flex justify-between items-center w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">
                    <span>About Us</span> <ArrowDownIcon/>
                </button>
                {isAboutSubMenuOpen && (
                    <div className="pl-4 border-l-2 border-slate-200">
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('about'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-200">Our Journey</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('philosophy'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-200">Our Philosophy</a>
                    </div>
                )}
                
                <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('streams'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">Streams</a>

                <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('freecourses'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">Free Courses</a>
                
                <div className="border-t border-slate-200 my-2"></div>

                {isLoggedIn && currentUser ? (
                    <>
                        <div className="px-4 py-3">
                            <span className="block text-base font-medium text-slate-800">Welcome, {currentUser.name}!</span>
                             {activeChild && (
                                <span className="block text-sm font-medium text-slate-500">
                                    Viewing for: <span className="font-bold text-brand-space">{activeChild.name}</span>
                                </span>
                            )}
                        </div>
                        <div className="border-t border-slate-200 my-1"></div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('dashboard'); }} className="flex items-center w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">
                            Dashboard
                        </a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); setIsMenuOpen(false); }} className="flex items-center w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">
                            <LogoutIcon />
                            <span className="ml-3">Logout</span>
                        </a>
                    </>
                ) : (
                    <>
                        {/*
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('login'); }} className="flex items-center w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">
                            <UserIcon />
                            <span className="ml-3">Sign In / Sign Up</span>
                        </a>
                        */}
                        <div className="p-2">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('age'); }} className="block w-full text-center px-4 py-3 rounded-md text-base font-medium text-white bg-[#e40917] hover:bg-[#c10714]">Join Waitlist</a>
                        </div>
                    </>
                )}
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
