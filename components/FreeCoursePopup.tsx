
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
        <img src={imageUrl} alt={title} className="w-full h-32 sm:h-40 object-cover" />
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
    // Handle backdrop click to close
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in-up backdrop-blur-sm"
            style={{ animationDuration: '0.3s' }}
            onClick={handleBackdropClick}
        >
            {/* Container with max-height for scrolling on small screens */}
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative transform transition-all duration-300 scale-95 animate-scale-in max-h-[90vh] overflow-y-auto scrollbar-hide flex flex-col">
                
                {/* Close Button: Positioned inside the card for better visibility */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-red-500 rounded-full p-2 transition-all duration-200 z-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    aria-label="Close popup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="p-6 sm:p-8 pt-12 sm:pt-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 text-center mb-2">
                        Start Your Adventure!
                    </h2>
                    <p className="text-slate-600 text-center mb-6 text-sm sm:text-base max-w-lg mx-auto">
                        Don't miss out on these exciting opportunities for your child.
                    </p>
                    
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm">
                            <PopupCard 
                                title="Rocket Science Course"
                                date="Our 5-weekend full-fledged course for young innovators."
                                buttonText="Explore Course"
                                onClick={() => onRedirect('courses')}
                                imageUrl="https://files.catbox.moe/knklae.png"
                            />
                        </div>
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
