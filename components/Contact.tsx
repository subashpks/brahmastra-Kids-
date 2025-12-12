
import React, { useState } from 'react';

const countryCodes = [
    { name: 'India', code: '+91' },
    { name: 'USA', code: '+1' },
    { name: 'Canada', code: '+1' },
    { name: 'UK', code: '+44' },
    { name: 'Australia', code: '+61' },
    { name: 'Singapore', code: '+65' },
    { name: 'UAE', code: '+971' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Qatar', code: '+974' },
    { name: 'Japan', code: '+81' },
    { name: 'New Zealand', code: '+64' },
    { name: 'Malaysia', code: '+60' },
];

const emailDomains = ['@gmail.com', '@outlook.com', '@yahoo.com'];

export const EnrollmentForm: React.FC = () => {
    const [statusMessage, setStatusMessage] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [statusIsError, setStatusIsError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

    const powerAutomateURL = "https://defaultc4472f3e25c34b5b8e7c381876872e.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/2e14c8e5b9d84358b5b3e065682d141d/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=nfMN8qKf73-sBOSjgh5zICbnX1EmGNEAG0pgO56Wth4";

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

    const handleEmailDomainClick = (domain: string) => {
        setEmail(prev => prev.includes('@') ? prev : prev + domain);
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');
        setStatusIsError(false);
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        const name = formData.get('Name') as string;
        const studentSchool = formData.get('StudentSchool') as string;
        const selectedProgram = formData.get('SelectedProgram') as string;
        // const email = formData.get('Email') as string; // Using state instead
        const countryCode = formData.get('CountryCode') as string;
        const parentPhone = formData.get('ParentPhone') as string;
        const country = formData.get('Country') as string;
        const state = formData.get('State') as string;
        const howDidYouHear = formData.get('HowDidYouHear') as string;
        const questions = formData.get('Questions') as string;
        const attendedBefore = formData.get('AttendedBefore') as string;
        
        if (!name || !studentSchool || !email || !parentPhone || !country || !state || !howDidYouHear || !selectedProgram || !attendedBefore) {
             setStatusMessage('Please fill in all required fields.');
             setStatusIsError(true);
             setIsSubmitting(false);
             return;
        }
        
        const queryNumber = generateQueryNumber();
        const data = {
            FormType: 'FreeCourseEnrollment',
            QueryNumber: queryNumber,
            Name: name.trim(),
            StudentSchool: studentSchool.trim(),
            SelectedProgram: selectedProgram,
            Email: email.trim(),
            ParentPhone: `${countryCode} ${parentPhone.trim()}`,
            Country: country.trim(),
            State: state.trim(),
            HowDidYouHear: howDidYouHear,
            Questions: questions.trim(),
            AttendedBefore: attendedBefore
        };

        try {
            const response = await fetch(powerAutomateURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatusMessage(`✅ Thank you! Your enrollment is confirmed.\nYour Query Number: ${queryNumber}`);
                setStatusIsError(false);
                form.reset();
                setEmail('');
            } else {
                const errText = await response.text();
                console.error("Power Automate error response:", errText);
                throw new Error('Submission failed. Please try again later.');
            }
        } catch (error: any) {
            setStatusMessage(`❌ Error submitting form: ${error.message}`);
            setStatusIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const availableProgram = "(Grades 3-8) How to Become a Pilot? ✈️";

    return (
        <section id="contact" className="py-16 md:py-24 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Join Mission <span className="text-brand-space font-['Montserrat']">brahmàstra</span><span className="text-[#e40917]">.</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Fill out the form below to secure your child's spot in our upcoming free aerospace course. We can't wait to see you!
                    </p>
                </div>
                <div className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <form className="space-y-4" onSubmit={handleFormSubmit} noValidate>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1 text-slate-700">Student's Name <span className="text-red-500">*</span></label>
                            <input type="text" id="name" name="Name" required placeholder="Full name" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                        </div>
                        <div>
                            <label htmlFor="studentSchool" className="block text-sm font-medium mb-1 text-slate-700">Student's School <span className="text-red-500">*</span></label>
                            <input type="text" id="studentSchool" name="StudentSchool" required placeholder="Name of the school" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                        </div>
                        
                         <div>
                            <label htmlFor="selectedProgram" className="block text-sm font-medium mb-1 text-slate-700">Program <span className="text-red-500">*</span></label>
                            <div className="w-full bg-slate-100 text-slate-800 px-4 py-3 rounded-md border border-slate-200 font-medium">
                                {availableProgram}
                            </div>
                            <input type="hidden" name="SelectedProgram" value={availableProgram} />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-700">Parent's Email <span className="text-red-500">*</span></label>
                            <input 
                                type="email" 
                                id="email" 
                                name="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                                placeholder="Your email address" 
                                className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" 
                            />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {emailDomains.map(domain => (
                                    <button
                                        key={domain}
                                        type="button"
                                        onClick={() => handleEmailDomainClick(domain)}
                                        className="px-2 py-1 text-xs font-medium text-brand-space bg-sky-50 hover:bg-sky-100 rounded-md border border-sky-200 transition-colors"
                                    >
                                        {domain}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                           <label htmlFor="parentPhone" className="block text-sm font-medium mb-1 text-slate-700">Parent's Phone <span className="text-red-500">*</span></label>
                            <div className="flex">
                                <select id="countryCode" name="CountryCode" required className="bg-slate-50 text-slate-900 pl-2 pr-1 rounded-l-md border border-r-0 border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                    {countryCodes.map(c => <option key={c.name} value={c.code}>{c.name} ({c.code})</option>)}
                                </select>
                                <input type="tel" id="parentPhone" name="ParentPhone" required placeholder="Mobile number" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-r-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium mb-1 text-slate-700">Country <span className="text-red-500">*</span></label>
                                <input type="text" id="country" name="Country" required placeholder="e.g., India" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium mb-1 text-slate-700">Region / State <span className="text-red-500">*</span></label>
                                <input type="text" id="state" name="State" required placeholder="e.g., Tamil Nadu" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="attendedBefore" className="block text-sm font-medium mb-1 text-slate-700">Did you attend our class before? <span className="text-red-500">*</span></label>
                            <select id="attendedBefore" name="AttendedBefore" required defaultValue="" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                <option value="" disabled>Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="howDidYouHear" className="block text-sm font-medium mb-1 text-slate-700">How did you hear about us? <span className="text-red-500">*</span></label>
                            <select id="howDidYouHear" name="HowDidYouHear" required defaultValue="" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                <option value="" disabled>Select an option</option>
                                <option value="WhatsApp">WhatsApp</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Instagram">Instagram</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="X (formerly Twitter)">X (formerly Twitter)</option>
                                <option value="Tamil Sangam">Tamil Sangam</option>
                                <option value="Friend or Family">Friend or Family</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="questions" className="block text-sm font-medium mb-1 text-slate-700">Any specific questions? (optional)</label>
                            <textarea id="questions" name="Questions" rows={3} placeholder="Write your questions here..." className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky"></textarea>
                        </div>
                        {statusMessage && (
                            <div className={`p-4 rounded-md text-sm whitespace-pre-line ${statusIsError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                {statusMessage}
                            </div>
                        )}
                        <div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-6 py-3 rounded-md shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Enroll Now' : 'Enroll Now'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
