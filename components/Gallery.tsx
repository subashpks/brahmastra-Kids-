
import React from 'react';

const galleryImages = [
    { src: 'https://files.catbox.moe/knklae.png', alt: 'Rocket Launch' },
    { src: 'https://files.catbox.moe/awo8bd.png', alt: 'VR Workshop' },
    { src: 'https://files.catbox.moe/gpc0v3.png', alt: 'Classroom Session' },
    { src: 'https://files.catbox.moe/r27c2u.png', alt: 'Satellite Model' },
    { src: 'https://files.catbox.moe/90vmnc.png', alt: 'Astrobiology' },
    { src: 'https://files.catbox.moe/v9le4h.png', alt: 'Telescope Observation' }
];

export const GallerySection = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Gallery
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                    Glimpses of our young scientists in action and the exciting world they explore.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((img, index) => (
                    <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group h-64">
                        <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-bold">{img.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
