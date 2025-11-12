
import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [statusMessage, setStatusMessage] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [statusIsError, setStatusIsError] = useState<boolean>(false);

    const powerAutomateURL = "https://defaultc4472f3e25c34b5b8e7c381876872e.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ca6aaae265c24b6cb10156399c1c73b9/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YhQaIBh56G965XhSLcKOTTtABffKfH8X-pT7WJZLUY0";

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
        setStatusMessage('');
        setStatusIsError(false);
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        const name = formData.get('Name') as string;
        const studentSchool = formData.get('StudentSchool') as string;
        const selectedCourse = formData.get('SelectedCourse') as string;
        const email = formData.get('Email') as string;
        const parentPhone = formData.get('ParentPhone') as string;
        const district = formData.get('District') as string;
        const state = formData.get('State') as string;
        const howDidYouHear = formData.get('HowDidYouHear') as string;
        const mediumOfClass = formData.get('MediumOfClass') as string;
        const questions = formData.get('Questions') as string;
        
        if (!name || !studentSchool || !email || !parentPhone || !district || !state || !howDidYouHear || !mediumOfClass || !selectedCourse) {
             setStatusMessage('Please fill in all required fields.');
             setStatusIsError(true);
             setIsSubmitting(false);
             return;
        }
        
        const queryNumber = generateQueryNumber();
        const data = {
            QueryNumber: queryNumber,
            Name: name.trim(),
            StudentSchool: studentSchool.trim(),
            SelectedCourse: selectedCourse,
            Email: email.trim(),
            ParentPhone: parentPhone.trim(),
            District: district.trim(),
            State: state.trim(),
            HowDidYouHear: howDidYouHear,
            MediumOfClass: mediumOfClass,
            Questions: questions.trim()
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

    return (
        <section id="contact" className="py-16 md:py-24 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Enroll for Your Free Weekend Adventure!
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
                            <label htmlFor="selectedCourse" className="block text-sm font-medium mb-1 text-slate-700">Select Course <span className="text-red-500">*</span></label>
                            <select id="selectedCourse" name="SelectedCourse" required defaultValue="" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                <option value="" disabled>Choose a course</option>
                                <option value="Astronomy For Kids (Age 6-11)">Astronomy For Kids (Age 6-11)</option>
                                <option value="Rocket Science for Kids (Age 12-16)">Rocket Science for Kids (Age 12-16)</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-700">Parent's Email <span className="text-red-500">*</span></label>
                            <input type="email" id="email" name="Email" required placeholder="Your email address" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                        </div>
                         <div>
                            <label htmlFor="parentPhone" className="block text-sm font-medium mb-1 text-slate-700">Parent's Phone <span className="text-red-500">*</span></label>
                            <input type="tel" id="parentPhone" name="ParentPhone" required placeholder="10-digit mobile number" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="district" className="block text-sm font-medium mb-1 text-slate-700">District <span className="text-red-500">*</span></label>
                                <input type="text" id="district" name="District" required placeholder="e.g., Chennai" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium mb-1 text-slate-700">State <span className="text-red-500">*</span></label>
                                <input type="text" id="state" name="State" required placeholder="e.g., Tamil Nadu" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
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
                                <option value="Friend or Family">Friend or Family</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="mediumOfClass" className="block text-sm font-medium mb-1 text-slate-700">Preferred medium of class <span className="text-red-500">*</span></label>
                            <select id="mediumOfClass" name="MediumOfClass" required defaultValue="" className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                <option value="" disabled>Select a language</option>
                                <option value="Tamil">Tamil</option>
                                <option value="Hindi">Hindi</option>
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
                                {isSubmitting ? 'Submitting...' : 'Enroll Now'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};