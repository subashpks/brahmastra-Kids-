
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

const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
);


export const Header: React.FC<HeaderProps> = ({ navigate, currentPage, isLoggedIn, onLogout, currentUser, activeChild }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClasses = (page: string) => 
        `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
            currentPage === page 
            ? 'text-brand-space font-bold' 
            : 'text-slate-600 hover:text-brand-space hover:bg-slate-200'
        }`;

    const handleMobileNav = (page: string) => {
        navigate(page);
        setIsMenuOpen(false);
    };
    
    const DesktopNav = () => (
        <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-2">
                <a href="#" onClick={(e) => {e.preventDefault(); navigate('about')}} className={navLinkClasses('about')}>About Us</a>
                <a href="#" onClick={(e) => {e.preventDefault(); navigate('courses')}} className={navLinkClasses('courses')}>Products</a>
                <a href="#" onClick={(e) => {e.preventDefault(); navigate('contact')}} className={navLinkClasses('contact')}>Contact</a>
            </nav>

            {isLoggedIn && currentUser ? (
                <div className="flex items-center space-x-2">
                    {activeChild && (
                       <span className="text-sm font-medium text-slate-500 hidden xl:block border-l pl-3 ml-1">
                           Viewing for: <span className="font-bold text-brand-space">{activeChild.name}</span>
                       </span>
                    )}
                    <a href="#" onClick={(e) => {e.preventDefault(); navigate('dashboard')}} className={navLinkClasses('dashboard')}>Dashboard</a>
                    <a href="#" onClick={(e) => {e.preventDefault(); onLogout()}} aria-label="Logout" className="p-2 rounded-full text-sm font-medium transition-colors text-slate-600 hover:text-brand-space hover:bg-slate-200">
                        <LogoutIcon />
                    </a>
                </div>
            ) : (
                <button
                    onClick={() => navigate('courses')}
                    className="bg-[#e40917] hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-px active:translate-y-0"
                >
                    Join Now
                </button>
            )}
        </div>
    );
    
    const MobileNav = () => (
         <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-xl animate-fade-in-up transition-all duration-300 max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('about'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">About Us</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('courses'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">Products</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMobileNav('contact'); }} className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">Contact</a>
                
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
                    <div className="px-4 pt-3 pb-2">
                        <button
                            onClick={() => handleMobileNav('courses')}
                            className="w-full bg-[#e40917] hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-lg text-base transition-colors shadow-md"
                        >
                            Join Now
                        </button>
                    </div>
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
