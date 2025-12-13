
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
        onRedirect('freecourses');
    };

    return (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in-up backdrop-blur-sm"
            style={{ animationDuration: '0.3s' }}
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-xl shadow-2xl w-[90%] max-w-[340px] sm:max-w-md relative transform transition-all duration-300 scale-95 animate-scale-in flex flex-col overflow-hidden">
                
                <button 
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-black/10 hover:bg-black/20 text-white rounded-full p-1.5 transition-all duration-200 z-10 backdrop-blur-md"
                    aria-label="Close popup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Optimized image container for mobile */}
                <div className="w-full h-40 sm:h-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
                    <img 
                        src="https://files.catbox.moe/cticic.png" 
                        alt="Cartoon astronaut floating in space" 
                        className="w-full h-full object-cover object-top" 
                    />
                </div>

                <div className="p-5 text-center">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 leading-tight">
                        The Little Scientist Program 🚀
                    </h2>
                    <p className="text-slate-600 mb-5 text-xs sm:text-sm leading-relaxed">
                        Join our live workshop. Build models & learn from ISRO Tutors.
                    </p>
                    
                    <button 
                        onClick={handleCTAClick}
                        className="w-full bg-[#e40917] hover:bg-[#c10714] text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl text-sm sm:text-base flex items-center justify-center gap-2 group transform active:scale-95"
                    >
                        Check the ₹99 Offer
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                    <div className="text-center mt-3">
                        <button onClick={onClose} className="text-xs text-slate-400 hover:text-slate-600">
                            No thanks, maybe later
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
