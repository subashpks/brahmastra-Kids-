
import React from 'react';

interface FreeCoursePopupProps {
    onClose: () => void;
    onRedirect: (page: string) => void;
}

const PopupCard: React.FC<{
    title: string;
    date: string;
    buttonText: string;
    onClick: () => void;
    imageUrl: string;
}> = ({ title, date, buttonText, onClick, imageUrl }) => (
    <div className="flex flex-col rounded-lg overflow-hidden bg-slate-50 border border-slate-200 w-full transition-transform hover:scale-[1.02] duration-200">
        <img src={imageUrl} alt={title} className="hidden sm:block w-full h-32 sm:h-40 object-cover" />
        <div className="p-4 text-center flex-grow flex flex-col">
            <h3 className="text-lg font-bold text-brand-space leading-tight">{title}</h3>
            <p className="text-sm text-slate-500 mt-2 mb-4 flex-grow">{date}</p>
            <button
                onClick={onClick}
                className="mt-auto w-full bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-4 py-2.5 rounded-full text-sm shadow-md"
            >
                {buttonText}
            </button>
        </div>
    </div>
);

export const FreeCoursePopup: React.FC<FreeCoursePopupProps> = ({ onClose, onRedirect }) => {
    return (
        <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in-up backdrop-blur-sm"
            style={{ animationDuration: '0.3s' }}
        >
            {/* Container with max-height for scrolling on small screens */}
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative transform transition-all duration-300 scale-95 animate-scale-in max-h-[90vh] overflow-y-auto scrollbar-hide">
                
                {/* Close Button: Inside on mobile (top-3), Outside on Desktop (sm:-top-4) */}
                <button 
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:-top-4 sm:-right-4 bg-white sm:bg-white rounded-full p-2 shadow-lg text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all duration-300 z-50 border border-slate-100 sm:border-none"
                    aria-label="Close popup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="p-5 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 text-center mb-2">
                        Start Your Adventure!
                    </h2>
                    <p className="text-slate-600 text-center mb-6 text-sm sm:text-base max-w-lg mx-auto">
                        Don't miss out on these exciting opportunities for your child.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6">
                        <PopupCard 
                            title="VR Space Exploration Workshop"
                            date="23 November | 9:00 AM - 2:00 PM. Venue: Clubhouse, Marg Pushpadruma, OMR."
                            buttonText="Explore VR Workshop"
                            onClick={() => onRedirect('vr-workshop')}
                            imageUrl="https://files.catbox.moe/awo8bd.png"
                        />
                        <PopupCard 
                            title="Rocket Science: Full-Fledged Course for Kids"
                            date="Our 5-weekend full-fledged course for young innovators."
                            buttonText="Explore Course"
                            onClick={() => onRedirect('weekend-rocket-blast-off')}
                            imageUrl="https://files.catbox.moe/knklae.png"
                        />
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
                /* Hide scrollbar for Chrome, Safari and Opera */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}
            </style>
        </div>
    );
};
