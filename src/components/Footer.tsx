import React from 'react';
import { PageProps } from '../types';

// --- SVG Icons for the Footer ---
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 flex-shrink-0">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 flex-shrink-0">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
);
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
      <path d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
      <path fillRule="evenodd" d="M12 2.25c-4.142 0-7.5 3.358-7.5 7.5c0 4.694 4.004 9.942 6.84 12.02.428.32 1.006.32 1.434 0 2.836-2.078 6.84-7.326 6.84-12.02 0-4.142-3.358-7.5-7.5-7.5zM12 12.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
    </svg>
);
const InstagramIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.012 7.053.072 2.695.272.273 2.69.073 7.052.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.988 15.667 24 15.26 24 12s-.012-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>);
const FacebookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z"/></svg>);
const XIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>);
const LinkedInIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>);


export const Footer: React.FC<PageProps> = ({ navigate }) => {
    return (
        <footer className="bg-[#22A7F0] text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    
                    {/* Column 1: Logo & Socials */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <img 
                            src="https://files.catbox.moe/p929y5.png" 
                            alt="Brahmastra Logo" 
                            className="h-16 w-auto cursor-pointer" 
                            onClick={() => navigate('home')} 
                        />
                        <p className="text-sm max-w-xs">
                           Inspiring the next generation of aerospace innovators.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.instagram.com/brahmastra.ltd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-opacity hover:opacity-75"><InstagramIcon /></a>
                            <a href="https://www.facebook.com/brahmasrtaspace" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-opacity hover:opacity-75"><FacebookIcon /></a>
                            <a href="https://x.com/brahmastrakids" target="_blank" rel="noopener noreferrer" aria-label="X" className="transition-opacity hover:opacity-75"><XIcon /></a>
                            <a href="https://www.linkedin.com/company/brahmastraspace/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-opacity hover:opacity-75"><LinkedInIcon /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                         <h3 className="text-lg font-semibold mb-4">Explore</h3>
                         <div className="flex flex-col space-y-2 text-sm">
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="transition-opacity hover:opacity-75">Home</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('philosophy'); }} className="transition-opacity hover:opacity-75">Our Philosophy</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('about'); }} className="transition-opacity hover:opacity-75">About Us</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('freecourses'); }} className="transition-opacity hover:opacity-75">Free Courses</a>
                        </div>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                         <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                         <div className="space-y-3 text-sm">
                            <div className="flex items-center"><EmailIcon /><span>info@brahmastraspace.org</span></div>
                            <div className="flex items-center"><PhoneIcon /><span>9940797779</span></div>
                             <div className="flex items-start">
                                <LocationIcon />
                                <p className="text-sm">
                                    NCR, NOIDA, UTTARPRADESH<br/>
                                    Nanmangalam, Chennai, Tamilnadu.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-12 pt-6 text-center text-xs">
                    <p>
                        © {new Date().getFullYear()} Brahmastra Aerospace Academy. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
