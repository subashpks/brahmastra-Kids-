import React from 'react';

interface HeaderProps {
  navigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ navigate, currentPage }) => {
    const navLinkClasses = (page: string) => 
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            currentPage === page 
            ? 'text-brand-space font-bold' 
            : 'text-slate-600 hover:text-brand-space hover:bg-slate-200'
        }`;

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
                        <img src="https://files.catbox.moe/4qngmj.png" alt="Brahmastra Logo" className="h-8 w-auto" />
                    </div>
                    <nav className="hidden md:flex items-center space-x-4">
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate('home')}} className={navLinkClasses('home')}>Home</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate('aeronautics')}} className={navLinkClasses('aeronautics')}>Aeronautics</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate('astronautics')}} className={navLinkClasses('astronautics')}>Astronautics</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate('satellites')}} className={navLinkClasses('satellites')}>Satellites</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate('drones')}} className={navLinkClasses('drones')}>Drones</a>
                    </nav>
                    <div>
                         <a href="#contact" className="bg-brand-sun text-white hover:bg-amber-500 transition-colors font-semibold px-5 py-2.5 rounded-full text-sm shadow-md">
                            Enroll Now
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};