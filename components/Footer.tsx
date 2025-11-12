import React from 'react';
import { PageProps } from '../types';

// --- SVG Icons for the Footer ---
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.992-.55-1.34L19.5 15.362a2.25 2.25 0 0 0-2.652-.112l-2.29.916a2.25 2.25 0 0 1-2.233-2.233l.916-2.29a2.25 2.25 0 0 0-.112-2.652L10.923 3.5a2.25 2.25 0 0 0-1.34-.55H8.25a2.25 2.25 0 0 0-2.25 2.25Z" />
    </svg>
);
const InstagramIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>);
const FacebookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>);
const XIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.218 3.803 4.65-1.04.283-2.131.333-3.228.125.613 1.942 2.383 3.364 4.493 3.404-1.794 1.407-4.062 2.182-6.516 2.182-.42 0-.833-.024-1.239-.074 2.298 1.474 5.021 2.34 7.948 2.34 9.49 0 14.73-7.858 14.73-14.73 0-.224-.005-.447-.015-.669.992-.72 1.848-1.614 2.53-2.624z"/></svg>);
const LinkedInIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.484 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>);

export const Footer: React.FC<PageProps> = ({ navigate }) => {
    return (
        <footer className="bg-[#1E639E] text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    
                    {/* Column 1: Logo & Socials */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <img 
                            src="https://files.catbox.moe/p929y5.png" 
                            alt="Brahmastra Logo White" 
                            className="h-10 w-auto cursor-pointer" 
                            onClick={() => navigate('home')} 
                        />
                        <p className="text-sm text-slate-300 max-w-xs">
                           Inspiring the next generation of aerospace innovators.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" aria-label="Instagram" className="text-slate-200 hover:text-white"><InstagramIcon /></a>
                            <a href="#" aria-label="Facebook" className="text-slate-200 hover:text-white"><FacebookIcon /></a>
                            <a href="#" aria-label="X" className="text-slate-200 hover:text-white"><XIcon /></a>
                            <a href="#" aria-label="LinkedIn" className="text-slate-200 hover:text-white"><LinkedInIcon /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="hidden md:flex flex-col items-start">
                         <h3 className="text-lg font-semibold mb-4">Explore</h3>
                         <div className="flex flex-col space-y-2 text-sm">
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="text-slate-200 hover:text-white transition-colors">Home</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('aeronautics'); }} className="text-slate-200 hover:text-white transition-colors">Aeronautics</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('astronautics'); }} className="text-slate-200 hover:text-white transition-colors">Astronautics</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('satellites'); }} className="text-slate-200 hover:text-white transition-colors">Satellites</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('drones'); }} className="text-slate-200 hover:text-white transition-colors">Drones</a>
                        </div>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                         <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                         <div className="space-y-3 text-sm text-slate-200">
                            <div className="flex items-center"><EmailIcon /><span>info@brahmastraspace.org</span></div>
                            <div className="flex items-center"><PhoneIcon /><span>9940797779</span></div>
                             <p className="text-xs pt-2 text-slate-400">
                                NCR, NOIDA, UTTARPRADESH<br/>
                                Nanmangalam, Chennai, Tamilnadu.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-600 mt-12 pt-6 text-center text-xs text-slate-400">
                    <p>
                        © {new Date().getFullYear()} Brahmastra Aerospace Academy. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};