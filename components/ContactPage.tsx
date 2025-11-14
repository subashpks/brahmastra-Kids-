
import React, { useState } from 'react';

const EmailIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3 flex-shrink-0 text-brand-sky"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg> );
const PhoneIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3 flex-shrink-0 text-brand-sky"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg> );
const LocationIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-brand-sky"><path d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" /><path fillRule="evenodd" d="M12 2.25c-4.142 0-7.5 3.358-7.5 7.5c0 4.694 4.004 9.942 6.84 12.02.428.32 1.006.32 1.434 0 2.836-2.078 6.84-7.326 6.84-12.02 0-4.142-3.358-7.5-7.5-7.5zM12 12.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" /></svg> );

export const ContactPage: React.FC = () => {
    const [statusMessage, setStatusMessage] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [statusIsError, setStatusIsError] = useState<boolean>(false);
    
    // Using InterestForm URL as a placeholder for a general inquiry endpoint
    const powerAutomateURL = "https://defaultc4472f3e25c34b5b8e7c381876872e.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/838d298291ee4785ae07f0c819bd1dba/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=f-Uc_RHJ4wdgUdeLWh5FkNlUGxBiHGNnkINPecDR50M";

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');
        setStatusIsError(false);
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        const name = formData.get('Name') as string;
        const email = formData.get('Email') as string;
        const subject = formData.get('Subject') as string;
        const message = formData.get('Message') as string;
        
        if (!name || !email || !subject || !message) {
             setStatusMessage('Please fill in all required fields.');
             setStatusIsError(true);
             setIsSubmitting(false);
             return;
        }
        
        const data = {
            FormType: 'GeneralInquiry',
            Name: name.trim(),
            Email: email.trim(),
            Subject: subject.trim(),
            Message: message.trim()
        };

        try {
            const response = await fetch(powerAutomateURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatusMessage(`✅ Thank you for your message! We've received your inquiry and will get back to you shortly.`);
                setStatusIsError(false);
                form.reset();
            } else {
                throw new Error('Submission failed. Please try again later.');
            }
        } catch (error: any) {
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
                        Have a question, feedback, or just want to say hello? We'd love to hear from you. Reach out using the details below or fill out our contact form.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
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
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
                        <form className="space-y-4" onSubmit={handleFormSubmit} noValidate>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1 text-slate-700">Your Name <span className="text-red-500">*</span></label>
                                <input type="text" id="name" name="Name" required placeholder="Full name" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-700">Your Email <span className="text-red-500">*</span></label>
                                <input type="email" id="email" name="Email" required placeholder="your.email@example.com" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-slate-700">Subject <span className="text-red-500">*</span></label>
                                <input type="text" id="subject" name="Subject" required placeholder="What is your message about?" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1 text-slate-700">Message <span className="text-red-500">*</span></label>
                                <textarea id="message" name="Message" required rows={4} placeholder="Write your message here..." className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky"></textarea>
                            </div>
                            {statusMessage && (
                                <div className={`p-4 rounded-md text-sm whitespace-pre-line ${statusIsError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                    {statusMessage}
                                </div>
                            )}
                            <div>
                                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-6 py-3 rounded-md shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
