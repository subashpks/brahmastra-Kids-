
import React from 'react';

interface FreeCoursePopupProps {
    onClose: () => void;
    onRedirect: () => void;
}

export const FreeCoursePopup: React.FC<FreeCoursePopupProps> = ({ onClose, onRedirect }) => {
    return (
        <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in-up"
            style={{ animationDuration: '0.3s' }}
        >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative transform transition-all duration-300 scale-95 animate-scale-in">
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-lg text-slate-500 hover:text-slate-800 hover:rotate-90 transition-transform duration-300"
                    aria-label="Close popup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="p-8 text-center">
                    <img 
                        src="https://files.catbox.moe/kcz5ca.png" 
                        alt="Child in a cardboard rocket" 
                        className="w-48 h-auto mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold text-brand-space mb-2">
                        Your Weekend Adventure Awaits!
                    </h2>
                    <p className="text-slate-600 mb-6">
                        Discover the wonders of space with our FREE hands-on weekend courses for kids and teens.
                    </p>
                    <button
                        onClick={onRedirect}
                        className="w-full bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg"
                    >
                        Explore Free Courses
                    </button>
                </div>
            </div>
            {/* Add keyframes for animation in a style tag or directly in tailwind.config */}
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
