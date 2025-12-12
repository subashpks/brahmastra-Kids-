
import React, { useState } from 'react';

const EmailIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3 flex-shrink-0 text-brand-sky"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg> );
const PhoneIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3 flex-shrink-0 text-brand-sky"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg> );
const LocationIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-brand-sky"><path d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" /><path fillRule="evenodd" d="M12 2.25c-4.142 0-7.5 3.358-7.5 7.5c0 4.694 4.004 9.942 6.84 12.02.428.32 1.006.32 1.434 0 2.836-2.078 6.84-7.326 6.84-12.02 0-4.142-3.358-7.5-7.5-7.5zM12 12.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" /></svg> );

// Supabase Configuration
const SUPABASE_URL = 'https://hlhqaldxbohjeszblmks.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsaHFhbGR4Ym9oamVzemJsbWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTA0MTcsImV4cCI6MjA4MDM2NjQxN30.cqQbaw1ZTpm48sbFYt3Fgyp7hG4SzRcYfNqtGmCKNmw';
const TABLE_NAME = 'customer_queries';
const POWER_AUTOMATE_URL = "https://defaultc4472f3e25c34b5b8e7c381876872e.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ca6aaae265c24b6cb10156399c1c73b9/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YhQaIBh56G965XhSLcKOTTtABffKfH8X-pT7WJZLUY0";

declare global {
    interface Window {
        supabase: any;
    }
}

export const ContactPage: React.FC = () => {
    const [statusMessage, setStatusMessage] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [statusIsError, setStatusIsError] = useState<boolean>(false);

    const generateQueryNumber = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hour = String(now.getHours()).padStart(2, '0');
        const minute = String(now.getMinutes()).padStart(2, '0');
        const second = String(now.getSeconds()).padStart(2, '0');
        const ms = String(now.getMilliseconds()).padStart(3, '0');
        return `Q${year}${month}${day}${hour}${minute}${second}${ms}`;
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('Submitting...');
        setStatusIsError(false);
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        const name = formData.get('Name') as string;
        const email = formData.get('Email') as string;
        const organisation = formData.get('Organisation') as string;
        const service = formData.get('Service') as string;
        const query = formData.get('Query') as string;
        
        if (!name || !email || !service || !query) {
             setStatusMessage('Please fill in all required fields.');
             setStatusIsError(true);
             setIsSubmitting(false);
             return;
        }

        const queryNumber = generateQueryNumber();
        const timestamp = new Date().toISOString();

        const dbData = {
            query_number: queryNumber,
            name: name.trim(),
            email: email.trim(),
            organisation: organisation ? organisation.trim() : null,
            service: service,
            query: query.trim(),
            created_at: timestamp
        };

        const powerAutomateData = {
            QueryNumber: queryNumber,
            Name: name.trim(),
            Email: email.trim(),
            Organisation: organisation ? organisation.trim() : '',
            Service: service,
            Query: query.trim()
        };

        try {
            // 1. Insert into Supabase
            if (window.supabase) {
                const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                const { error } = await supabaseClient
                    .from(TABLE_NAME)
                    .insert([dbData]);

                if (error) {
                    console.error('Supabase error:', error);
                    // We continue even if DB fails, to try sending email via Power Automate
                }
            } else {
                console.warn('Supabase client not loaded');
            }

            // 2. Trigger Power Automate
            const response = await fetch(POWER_AUTOMATE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(powerAutomateData)
            });

            if (response.ok) {
                setStatusMessage(`✅ Thank you! Your query has been submitted.\nYour Query Number: ${queryNumber}`);
                setStatusIsError(false);
                form.reset();
            } else {
                // If Power Automate fails but Supabase succeeded, it's still partially successful, 
                // but for user feedback we'll be cautious.
                console.warn('Power Automate warning:', response.statusText);
                setStatusMessage(`✅ Thank you! Your query has been recorded.\nYour Query Number: ${queryNumber}`);
            }

        } catch (error: any) {
            console.error('Submission Error:', error);
            setStatusMessage(`❌ Error submitting form: ${error.message}`);
            setStatusIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact-page" className="py-16 md:py-24 bg-slate-50 animate-fade-in-up">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Get in Touch
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        Have a question about our services or need assistance? Fill out the form below and we'll get back to you with a query number for tracking.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-xl shadow-lg h-fit">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
                        <div className="space-y-6 text-slate-700">
                            <div className="flex items-center"><EmailIcon /><span>info@brahmastraspace.org</span></div>
                            <div className="flex items-center"><PhoneIcon /><span>9940797779</span></div>
                            <div className="flex items-start">
                                <LocationIcon />
                                <div>
                                    <p className="font-semibold">Our Locations:</p>
                                    <p className="mt-1">NCR, NOIDA, UTTARPRADESH</p>
                                    <p>Nanmangalam, Chennai, Tamilnadu.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Query</h2>
                        <form className="space-y-4" onSubmit={handleFormSubmit} noValidate>
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold mb-1 text-slate-700">Name <span className="text-red-500">*</span></label>
                                <input type="text" id="name" name="Name" required placeholder="Your full name" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold mb-1 text-slate-700">Email <span className="text-red-500">*</span></label>
                                <input type="email" id="email" name="Email" required placeholder="Your email address" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>

                            <div>
                                <label htmlFor="organisation" className="block text-sm font-bold mb-1 text-slate-700">Organisation</label>
                                <input type="text" id="organisation" name="Organisation" placeholder="Your organisation (optional)" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-bold mb-1 text-slate-700">Service Interested In <span className="text-red-500">*</span></label>
                                <select id="service" name="Service" required defaultValue="" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                    <option value="" disabled>Select a service</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Drone Pilot License">Drone Pilot License</option>
                                    <option value="Kids Workshop">Kids Workshop</option>
                                    <option value="Others">Others (mention in query)</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="query" className="block text-sm font-bold mb-1 text-slate-700">Query <span className="text-red-500">*</span></label>
                                <textarea id="query" name="Query" required rows={4} placeholder="Write your query here..." className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky"></textarea>
                            </div>

                            {statusMessage && (
                                <div className={`p-4 rounded-md text-sm whitespace-pre-line font-medium ${statusIsError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                    {statusMessage}
                                </div>
                            )}
                            
                            <div>
                                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-space hover:bg-blue-800 transition-colors text-white font-bold text-lg px-6 py-3 rounded-md shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
