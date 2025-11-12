import React, { useState } from 'react';

export const InterestForm: React.FC = () => {
    const [statusMessage, setStatusMessage] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [statusIsError, setStatusIsError] = useState<boolean>(false);

    const powerAutomateURL = "https://defaultc4472f3e25c34b5b8e7c381876872e.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ca6aaae265c24b6cb10156399c1c73b9/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YhQaIBh56G965XhSLcKOTTtABffKfH8X-pT7WJZLUY0";

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');
        setStatusIsError(false);
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        const studentName = formData.get('StudentName') as string;
        const parentName = formData.get('ParentName') as string;
        const email = formData.get('Email') as string;
        const phone = formData.get('Phone') as string;
        const ageCategory = formData.get('AgeCategory') as string;
        const stream = formData.get('Stream') as string;
        const medium = formData.get('Medium') as string;
        
        if (!studentName || !parentName || !email || !phone || !ageCategory || !stream || !medium) {
             setStatusMessage('Please fill in all required fields.');
             setStatusIsError(true);
             setIsSubmitting(false);
             return;
        }
        
        const data = {
            FormType: 'InterestWaitlist',
            StudentName: studentName.trim(),
            ParentName: parentName.trim(),
            Email: email.trim(),
            Phone: phone.trim(),
            AgeCategory: ageCategory,
            StreamOfInterest: stream,
            MediumOfInstruction: medium
        };

        try {
            const response = await fetch(powerAutomateURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatusMessage(`✅ Thank you for your interest! We've added you to our waitlist. We'll contact you soon with details about our next batch.`);
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
        <section id="interest-form" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Join Our Waitlist
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        We curate small batches to ensure every child gets focused attention. Express your interest below, and we'll notify you as soon as a spot opens up in your chosen stream!
                    </p>
                </div>
                <div className="mt-12 max-w-2xl mx-auto bg-slate-50 p-8 rounded-xl shadow-lg">
                    <form className="space-y-4" onSubmit={handleFormSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="studentName" className="block text-sm font-medium mb-1 text-slate-700">Student's Name <span className="text-red-500">*</span></label>
                                <input type="text" id="studentName" name="StudentName" required placeholder="Full name" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                            <div>
                                <label htmlFor="parentName" className="block text-sm font-medium mb-1 text-slate-700">Parent's Name <span className="text-red-500">*</span></label>
                                <input type="text" id="parentName" name="ParentName" required placeholder="Full name" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                        </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-700">Parent's Email <span className="text-red-500">*</span></label>
                                <input type="email" id="email" name="Email" required placeholder="Your email address" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-1 text-slate-700">Parent's Phone <span className="text-red-500">*</span></label>
                                <input type="tel" id="phone" name="Phone" required placeholder="10-digit mobile number" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="ageCategory" className="block text-sm font-medium mb-1 text-slate-700">Age Category <span className="text-red-500">*</span></label>
                            <select id="ageCategory" name="AgeCategory" required defaultValue="" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                <option value="" disabled>Select an age group</option>
                                <option value="Early Learners (Ages 5-8)">Early Learners (Ages 5-8)</option>
                                <option value="Junior Explorers (Ages 9-12)">Junior Explorers (Ages 9-12)</option>
                                <option value="Young Innovators (Ages 13-15)">Young Innovators (Ages 13-15)</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="stream" className="block text-sm font-medium mb-1 text-slate-700">Stream of Interest <span className="text-red-500">*</span></label>
                            <select id="stream" name="Stream" required defaultValue="" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                <option value="" disabled>Select a stream</option>
                                <option value="Aeronautics">Aeronautics</option>
                                <option value="Astronautics">Astronautics</option>
                                <option value="Satellites">Satellites</option>
                                <option value="Drones">Drones</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="medium" className="block text-sm font-medium mb-1 text-slate-700">Preferred Medium of Instruction <span className="text-red-500">*</span></label>
                            <select id="medium" name="Medium" required defaultValue="" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                <option value="" disabled>Select a language</option>
                                <option value="Tamil">Tamil</option>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                        </div>
                        {statusMessage && (
                            <div className={`p-4 rounded-md text-sm whitespace-pre-line ${statusIsError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                {statusMessage}
                            </div>
                        )}
                        <div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-6 py-3 rounded-md shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Submitting...' : 'Express Interest'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
