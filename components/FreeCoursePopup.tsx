import React from 'react';

interface FreeCoursePopupProps {
    onClose: () => void;
    onRedirect: (page: string) => void;
}

export const FreeCoursePopup: React.FC<FreeCoursePopupProps> = ({ onClose, onRedirect }) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleCTAClick = () => {
        onRedirect('courses');
    };

    return (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in-up backdrop-blur-sm"
            style={{ animationDuration: '0.3s' }}
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full relative transform transition-all duration-300 scale-95 animate-scale-in flex flex-col overflow-hidden">
                
                <button 
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-red-500 rounded-full p-2 transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    aria-label="Close popup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* The user requested a square size image. `aspect-square` enforces this. */}
                <div className="w-full aspect-square">
                    <img 
                        src="https://files.catbox.moe/cticic.png" 
                        alt="Cartoon astronaut floating in space" 
                        className="w-full h-full object-cover" 
                    />
                </div>

                <div className="p-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-2">
                        Make Your Kid a Rocket Scientist!
                    </h2>
                    <p className="text-slate-600 mb-6 text-base">
                        Explore our hands-on courses and ignite a lifelong passion for space.
                    </p>
                    
                    <button 
                        onClick={handleCTAClick}
                        className="w-full bg-brand-space hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2 group"
                    >
                        Explore Our Products
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                    <div className="text-center mt-6">
                        <button onClick={onClose} className="text-sm text-slate-500 hover:text-slate-700 hover:underline">
                            Maybe later
                        </button>
                    </div>
                </div>
            </div>
            
            <style>
            {`
                @keyframes scale-in {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-scale-in {
                    animation: scale-in 0.3s ease-out forwards;
                }
            `}
            </style>
        </div>
    );
};