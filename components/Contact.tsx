
import React, { useState } from 'react';

const emailDomains = ['@gmail.com', '@outlook.com', '@yahoo.com'];
const validGrades = ['Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'];

export const EnrollmentForm: React.FC = () => {
    const [statusMessage, setStatusMessage] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [statusIsError, setStatusIsError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

    // Updated Power Automate Trigger URL
    const powerAutomateURL = "https://defaultc4472f3e25c34b5b8e7c381876872e.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/027838bfd84d4d9cbe3e757dda521ed1/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=PG1HiVeW17zNK9NTnqBXTCiVOghBSd0jNDzLaHYQMwE";

    const generateQueryNumber = () => {
        const now = new Date();
        return `Q${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getMilliseconds()).padStart(3, '0')}`;
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
        
        // Simple validation
        const requiredFields = ['StudentName', 'StudentGrade', 'StudentSchool', 'ParentName', 'District', 'State', 'HowDidYouHear', 'AttendedBefore'];
        const isEmpty = requiredFields.some(field => !formData.get(field));
        
        if (isEmpty || !email) {
             setStatusMessage('Please fill in all required fields marked with *.');
             setStatusIsError(true);
             setIsSubmitting(false);
             return;
        }
        
        const queryNumber = generateQueryNumber();
        const data = {
            FormType: 'FreeCourseEnrollment',
            QueryNumber: queryNumber,
            StudentName: formData.get('StudentName') as string,
            StudentGrade: formData.get('StudentGrade') as string,
            StudentSchool: formData.get('StudentSchool') as string,
            ParentName: formData.get('ParentName') as string,
            Email: email.trim(),
            District: formData.get('District') as string,
            State: formData.get('State') as string,
            HowDidYouHear: formData.get('HowDidYouHear') as string,
            AttendedBefore: formData.get('AttendedBefore') as string,
            SelectedProgram: formData.get('SelectedProgram') as string,
        };

        try {
            const response = await fetch(powerAutomateURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatusMessage(`✅ Thank you! Your enrollment is confirmed.\nReference ID: ${queryNumber}`);
                setStatusIsError(false);
                form.reset();
                setEmail('');
                window.scrollTo(0, 0);
            } else {
                throw new Error('Server error. Please try again later.');
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
        <section id="enrollment-form" className="py-16 md:py-24 bg-slate-50 animate-fade-in-up">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Successful Payment
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-4">
                        Final Step: Student Details
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Please fill out these details so we can send the meeting link and materials to the right person.
                    </p>
                </div>
                <div className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-space">
                    <form className="space-y-5" onSubmit={handleFormSubmit} noValidate>
                        
                        {/* Student Details */}
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">Student Details</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="studentName" className="block text-sm font-bold mb-1 text-slate-700">Children Name <span className="text-red-500">*</span></label>
                                    <input type="text" id="studentName" name="StudentName" required placeholder="Full name of the child" className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky transition-all" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="studentGrade" className="block text-sm font-bold mb-1 text-slate-700">Children Grade <span className="text-red-500">*</span></label>
                                        <select id="studentGrade" name="StudentGrade" required defaultValue="" className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky transition-all">
                                            <option value="" disabled>Select Class</option>
                                            {validGrades.map(g => (
                                                <option key={g} value={g}>{g}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="studentSchool" className="block text-sm font-bold mb-1 text-slate-700">School <span className="text-red-500">*</span></label>
                                        <input type="text" id="studentSchool" name="StudentSchool" required placeholder="Current School Name" className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky transition-all" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Confirmed Program Display */}
                         <div>
                            <label htmlFor="selectedProgram" className="block text-sm font-bold mb-1 text-slate-700">Confirmed Program</label>
                            <div className="w-full bg-green-50 text-green-900 px-4 py-3 rounded-lg border border-green-200 font-medium flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                {availableProgram}
                            </div>
                            <input type="hidden" name="SelectedProgram" value={availableProgram} />
                        </div>

                        {/* Parent Details */}
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">Parent Details</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="parentName" className="block text-sm font-bold mb-1 text-slate-700">Parent Name <span className="text-red-500">*</span></label>
                                    <input type="text" id="parentName" name="ParentName" required placeholder="Parent / Guardian Name" className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky transition-all" />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold mb-1 text-slate-700">Parent Email <span className="text-red-500">*</span></label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="Email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required 
                                        placeholder="Meeting link will be sent here" 
                                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky transition-all" 
                                    />
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {emailDomains.map(domain => (
                                            <button
                                                key={domain}
                                                type="button"
                                                onClick={() => handleEmailDomainClick(domain)}
                                                className="px-2 py-1 text-xs font-medium text-brand-space bg-blue-50 hover:bg-blue-100 rounded border border-blue-200 transition-colors"
                                            >
                                                {domain}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Location Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="district" className="block text-sm font-bold mb-1 text-slate-700">District <span className="text-red-500">*</span></label>
                                <input type="text" id="district" name="District" required placeholder="e.g., Chennai" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky transition-all" />
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-bold mb-1 text-slate-700">State <span className="text-red-500">*</span></label>
                                <input type="text" id="state" name="State" required placeholder="e.g., Tamil Nadu" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky transition-all" />
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="howDidYouHear" className="block text-sm font-bold mb-1 text-slate-700">How did you hear about us? <span className="text-red-500">*</span></label>
                                <select id="howDidYouHear" name="HowDidYouHear" required defaultValue="" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky transition-all">
                                    <option value="" disabled>Select an option</option>
                                    <option value="WhatsApp">WhatsApp</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Friend or Family">Friend or Family</option>
                                    <option value="School">School</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="attendedBefore" className="block text-sm font-bold mb-1 text-slate-700">Attended Before? <span className="text-red-500">*</span></label>
                                <select id="attendedBefore" name="AttendedBefore" required defaultValue="" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky transition-all">
                                    <option value="" disabled>Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>

                        {statusMessage && (
                            <div className={`p-4 rounded-lg text-sm font-medium whitespace-pre-line text-center ${statusIsError ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                                {statusMessage}
                            </div>
                        )}
                        
                        <div className="pt-4">
                            <button type="submit" disabled={isSubmitting} className="w-full bg-brand-space hover:bg-blue-800 transition-all text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg disabled:bg-slate-400 disabled:cursor-not-allowed transform hover:scale-[1.02]">
                                {isSubmitting ? 'Confirming Enrollment...' : 'Complete Enrollment'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
