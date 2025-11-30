
import React from 'react';

const PARTNERS = [
    { name: 'ISRO', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg' },
    { name: 'US Embassy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Seal_of_an_Embassy_of_the_United_States_of_America.svg/1280px-Seal_of_an_Embassy_of_the_United_States_of_America.svg.png' },
    { name: 'HAL', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Hindustan_Aeronautics_Limited_Logo.svg/2560px-Hindustan_Aeronautics_Limited_Logo.svg.png' },
    { name: 'University of Sydney', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/The_University_of_Sydney_Logo.svg/2560px-The_University_of_Sydney_Logo.svg.png' },
    { name: 'NIT Srinagar', logo: 'https://upload.wikimedia.org/wikipedia/en/2/24/National_Institute_of_Technology%2C_Srinagar_Logo.png' },
    { name: 'Skill India', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Skill_India.png' },
    { name: 'ASSOCHAM', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ASSOCHAM_New_Logo.jpg' },
    { name: 'Ministry of MSME', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/MSME_logo_%28colour%29.svg/500px-MSME_logo_%28colour%29.svg.png' },
    { name: 'OCF Avadi', logo: 'https://upload.wikimedia.org/wikipedia/en/9/97/Ordnance_Clothing_Factory_logo.jpg' },
    { name: 'Indian Coast Guard', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Indian_Coast_Guard_Logo.svg/1280px-Indian_Coast_Guard_Logo.svg.png' },
];

export const PartnersSection = () => {
    // Duplicate data to create seamless loop
    const marqueePartners = [...PARTNERS, ...PARTNERS];

    return (
        <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Our Partners
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                    Collaborating with leading organizations to bring the best aerospace education to your child.
                </p>
            </div>
            
            <div className="relative w-full">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                    {marqueePartners.map((partner, index) => (
                        <div 
                            key={`${partner.name}-${index}`} 
                            className="flex-shrink-0 mx-6 w-48 h-32 bg-white rounded-xl shadow-md flex items-center justify-center p-6 hover:shadow-lg transition-all duration-300 border border-slate-100 group"
                        >
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="max-w-full max-h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                                title={partner.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
