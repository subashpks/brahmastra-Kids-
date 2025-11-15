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

export const InterestForm: React.FC = () => {
    const [statusMessage, setStatusMessage] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [statusIsError, setStatusIsError] = useState<boolean>(false);

    const powerAutomateURL = "https://defaultc4472f3e25c34b5b8e7c381876872e.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/838d298291ee4785ae07f0c819bd1dba/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=f-Uc_RHJ4wdgUdeLWh5FkNlUGxBiHGNnkINPecDR50M";

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
        const countryCode = formData.get('CountryCode') as string;
        const phone = formData.get('Phone') as string;
        const schoolName = formData.get('SchoolName') as string;
        const district = formData.get('District') as string;
        const state = formData.get('State') as string;
        const country = formData.get('Country') as string;
        const ageCategory = formData.get('AgeCategory') as string;
        const medium = formData.get('Medium') as string;
        const aboutKid = formData.get('AboutKid') as string;
        
        if (!studentName || !parentName || !email || !phone || !ageCategory || !schoolName || !district || !state || !country || !medium || !aboutKid) {
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
            Phone: `${countryCode} ${phone.trim()}`,
            SchoolName: schoolName.trim(),
            District: district.trim(),
            State: state.trim(),
            Country: country.trim(),
            AgeCategory: ageCategory,
            MediumOfInstruction: medium,
            AboutKid: aboutKid.trim(),
        };

        try {
            const response = await fetch(powerAutomateURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatusMessage(`✅ Thank you! We've received your details. Our experts will review your submission to match your child with a hand-selected learning group. Please wait for a confirmation email from our team.`);
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
                        Every batch is curated—not crowded. Join the waitlist, and our experts will match your child to a hand-selected learning group. Because spaces are limited, you’ll receive a confirmation email only after we review your child’s details.
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
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-700">Parent's Email <span className="text-red-500">*</span></label>
                            <input type="email" id="email" name="Email" required placeholder="Your email address" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                        </div>
                        <div>
                           <label htmlFor="phone" className="block text-sm font-medium mb-1 text-slate-700">Parent's Phone <span className="text-red-500">*</span></label>
                            <div className="flex">
                                <select id="countryCode" name="CountryCode" required className="bg-white text-slate-900 pl-2 pr-1 rounded-l-md border border-r-0 border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                    {countryCodes.map(c => <option key={c.name} value={c.code}>{c.name} ({c.code})</option>)}
                                </select>
                                <input type="tel" id="phone" name="Phone" required placeholder="Mobile number" pattern="\d{7,15}" title="Phone number should be 7 to 15 digits." className="w-full bg-white text-slate-900 px-4 py-2 rounded-r-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                        </div>
                        <div>
                             <label htmlFor="schoolName" className="block text-sm font-medium mb-1 text-slate-700">School Name <span className="text-red-500">*</span></label>
                            <input type="text" id="schoolName" name="SchoolName" required placeholder="Name of the school" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="district" className="block text-sm font-medium mb-1 text-slate-700">District <span className="text-red-500">*</span></label>
                                <input type="text" id="district" name="District" required placeholder="e.g., Chennai" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium mb-1 text-slate-700">State <span className="text-red-500">*</span></label>
                                <input type="text" id="state" name="State" required placeholder="e.g., Tamil Nadu" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium mb-1 text-slate-700">Country <span className="text-red-500">*</span></label>
                                <input type="text" id="country" name="Country" required placeholder="e.g., India" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
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
                            <label htmlFor="medium" className="block text-sm font-medium mb-1 text-slate-700">Mother tongue of the kid <span className="text-red-500">*</span></label>
                            <select id="medium" name="Medium" required defaultValue="" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                <option value="" disabled>Select a language</option>
                                <option value="Tamil">Tamil</option>
                                <option value="English">English</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="aboutKid" className="block text-sm font-medium mb-1 text-slate-700">Tell us about your kid <span className="text-red-500">*</span></label>
                            <textarea id="aboutKid" name="AboutKid" required rows={4} placeholder="What are they curious about? What do they love to do? This helps us tailor the experience for them." className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky"></textarea>
                        </div>
                        {statusMessage && (
                            <div className={`p-4 rounded-md text-sm whitespace-pre-line ${statusIsError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                {statusMessage}
                            </div>
                        )}
                        <div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-[#e40917] hover:bg-[#c10714] transition-colors text-white font-semibold px-6 py-3 rounded-md shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};