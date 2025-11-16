import React, { useState } from 'react';
import { PageProps } from '../types';

const freeCourses = [
    "Astronomy For Kids (Ages 6-10)",
    "Rocket Science for Kids (Ages 11-17)"
];

// Multi-step form component
export const CertificateFormPage: React.FC<PageProps> = ({ navigate }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        parentEmail: '',
        schoolName: '',
        state: '',
        programName: '',
        dates: '',
        enjoymentRating: '',
        motivation: '',
        consideringEnrollment: '',
        preferredTime: '',
        preferredBudget: '',
        childComment: ''
    });

    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusIsError, setStatusIsError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleRatingChange = (rating: string) => {
        setFormData(prev => ({ ...prev, enjoymentRating: rating }));
    };

    const nextStep = () => {
        // Basic validation before proceeding
        if (currentStep === 1 && (!formData.studentName || !formData.parentName || !formData.parentEmail || !formData.schoolName || !formData.state || !formData.programName || !formData.dates)) {
            setStatusMessage('Please fill in all fields before continuing.');
            setStatusIsError(true);
            return;
        }
        if (currentStep === 2 && !formData.enjoymentRating) {
            setStatusMessage('Please select a rating.');
            setStatusIsError(true);
            return;
        }
        setStatusMessage('');
        setStatusIsError(false);
        setCurrentStep(prev => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.preferredTime || !formData.preferredBudget || !formData.childComment) {
             setStatusMessage('Please fill in all fields to complete the form.');
             setStatusIsError(true);
             return;
        }

        setIsSubmitting(true);
        setStatusIsError(false);
        setStatusMessage('');

        const powerAutomateURL = "https://defaultc4472f3e25c34b5b8e7c381876872e.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/14a61f3d8afc444aada47d8810a93950/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=aiJPLNxrt3uTiUj4oKyM1cjpup1QCiBEHKVpfLasIIY";

        try {
            const response = await fetch(powerAutomateURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ FormType: 'ShortParentFeedback', ...formData })
            });

            if (response.ok) {
                setStatusMessage('✅ Thank you! Your feedback is submitted. Your certificate will be sent shortly.');
                setStatusIsError(false);
                setCurrentStep(5); // Move to a success/thank you step
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

    const totalSteps = 4;
    const progressPercentage = ((currentStep - 1) / totalSteps) * 100;

    const ProgressBar = () => (
        <div className="mb-8">
            <div className="relative h-2 bg-slate-200 rounded-full">
                <div 
                    className="absolute top-0 left-0 h-2 bg-brand-sky rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <div className="text-right text-sm text-slate-500 mt-2">
                Step {currentStep} of {totalSteps}
            </div>
        </div>
    );
    
    const RatingButton: React.FC<{emoji: string, label: string}> = ({ emoji, label }) => {
        const isSelected = formData.enjoymentRating === label;
        return (
             <button
                type="button"
                onClick={() => handleRatingChange(label)}
                className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 ${isSelected ? 'bg-sky-100 border-brand-sky scale-105 shadow-lg' : 'bg-slate-50 border-slate-200 hover:border-slate-400'}`}
            >
                <span className="text-4xl block">{emoji}</span>
                <span className={`mt-2 block font-semibold ${isSelected ? 'text-brand-space' : 'text-slate-700'}`}>{label}</span>
            </button>
        );
    };

    return (
        <section className="py-16 md:py-24 bg-slate-50 animate-fade-in-up">
            <div className="container mx-auto px-6">
                 <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Parent Feedback & Certificate
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        Thanks for joining our free class! Answer a few quick questions to help us improve and get your child's certificate.
                    </p>
                </div>

                <div className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    {currentStep <= totalSteps && <ProgressBar />}
                    
                    <form onSubmit={handleSubmit} noValidate>
                        {statusMessage && (
                            <div className={`p-4 mb-4 rounded-md text-sm whitespace-pre-line text-center ${statusIsError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                {statusMessage}
                            </div>
                        )}
                        
                        {currentStep === 1 && (
                            <div className="space-y-4 animate-fade-in-up">
                                <h2 className="text-2xl font-bold text-slate-800 mb-4">Step 1: The Essentials</h2>
                                <div>
                                    <label htmlFor="studentName" className="block text-sm font-medium mb-1 text-slate-700">Student's Name</label>
                                    <input id="studentName" name="studentName" type="text" value={formData.studentName} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="Your child's full name" />
                                </div>
                                <div>
                                    <label htmlFor="parentName" className="block text-sm font-medium mb-1 text-slate-700">Parent's Name</label>
                                    <input id="parentName" name="parentName" type="text" value={formData.parentName} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="Your full name" />
                                </div>
                                <div>
                                    <label htmlFor="parentEmail" className="block text-sm font-medium mb-1 text-slate-700">Parent's Email</label>
                                    <input id="parentEmail" name="parentEmail" type="email" value={formData.parentEmail} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="Where should we send the certificate?" />
                                </div>
                                <div>
                                    <label htmlFor="schoolName" className="block text-sm font-medium mb-1 text-slate-700">School Name</label>
                                    <input id="schoolName" name="schoolName" type="text" value={formData.schoolName} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="Your child's school" />
                                </div>
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium mb-1 text-slate-700">State</label>
                                    <input id="state" name="state" type="text" value={formData.state} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="e.g., Tamil Nadu" />
                                </div>
                                <div>
                                    <label htmlFor="programName" className="block text-sm font-medium mb-1 text-slate-700">Which free course did your child attend?</label>
                                    <select id="programName" name="programName" value={formData.programName} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                        <option value="">Select a program</option>
                                        {freeCourses.map(course => <option key={course} value={course}>{course}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="dates" className="block text-sm font-medium mb-1 text-slate-700">Which dates did your child attend?</label>
                                    <select id="dates" name="dates" value={formData.dates} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                        <option value="">Select the dates</option>
                                        <option value="14 - 15 Nov 2025">14 - 15 Nov 2025</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        
                        {currentStep === 2 && (
                            <div className="animate-fade-in-up">
                                <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">Step 2: How was it?</h2>
                                <p className="text-center text-slate-600 mb-6">Did your child enjoy the free class?</p>
                                <div className="flex gap-3 sm:gap-4">
                                    <RatingButton emoji="😍" label="Loved it!" />
                                    <RatingButton emoji="😊" label="Liked it" />
                                    <RatingButton emoji="🤔" label="It was okay" />
                                    <RatingButton emoji="😒" label="Not really" />
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                             <div className="space-y-4 animate-fade-in-up">
                                 <h2 className="text-2xl font-bold text-slate-800 mb-4">Step 3: The Big Picture</h2>
                                <div>
                                    <label htmlFor="motivation" className="block text-sm font-medium mb-1 text-slate-700">What motivated you to book the free trial?</label>
                                    <select id="motivation" name="motivation" value={formData.motivation} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                        <option value="">Select a reason</option>
                                        <option>To develop a new skill</option>
                                        <option>My child was interested</option>
                                        <option>To prepare for the future</option>
                                        <option>Recommended by a friend</option>
                                        <option>Just trying something new</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="consideringEnrollment" className="block text-sm font-medium mb-1 text-slate-700">Are you considering enrolling in the full course?</label>
                                    <select id="consideringEnrollment" name="consideringEnrollment" value={formData.consideringEnrollment} onChange={handleChange} className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                        <option value="">Select an option</option>
                                        <option>Yes, definitely!</option>
                                        <option>Maybe, I'm thinking about it.</option>
                                        <option>Not right now.</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        
                        {currentStep === 4 && (
                            <div className="animate-fade-in-up">
                                <h2 className="text-2xl font-bold text-slate-800 mb-4">Step 4: Future Planning</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="preferredTime" className="block text-sm font-medium mb-1 text-slate-700">What's the preferred time for your child's full course? <span className="text-red-500">*</span></label>
                                        <select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                            <option value="">Select a time</option>
                                            <option>Weekdays (Mon-Fri)</option>
                                            <option>Weekends (Sat-Sun)</option>
                                            <option>Flexible</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="preferredBudget" className="block text-sm font-medium mb-1 text-slate-700">What's your preferred budget per month? <span className="text-red-500">*</span></label>
                                        <select id="preferredBudget" name="preferredBudget" value={formData.preferredBudget} onChange={handleChange} required className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                            <option value="">Select a budget</option>
                                            <option value="500-1000">₹500 - ₹1000</option>
                                            <option value="1000-3000">₹1000 - ₹3000</option>
                                            <option value="3000+">₹3000+</option>
                                            <option value="No Preference">No Preference</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="childComment" className="block text-sm font-medium mb-1 text-slate-700">What comment did your child make about the class? <span className="text-red-500">*</span></label>
                                        <textarea id="childComment" name="childComment" rows={3} value={formData.childComment} onChange={handleChange} required className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="e.g., 'That was so cool!', 'When can we build another rocket?'" />
                                    </div>
                                </div>
                                <p className="mt-6 text-sm text-center text-slate-500 bg-slate-100 p-3 rounded-md">
                                    Note: The certificate will be sent to the registered email. If not found, please check your spam/junk folder.
                                </p>
                            </div>
                        )}


                        {currentStep === 5 && ( // Success Step
                             <div className="text-center py-10 animate-fade-in-up">
                                <span className="text-6xl block mb-4">🎉</span>
                                <h2 className="text-2xl font-bold text-brand-space mb-2">
                                    All Done! Thank You!
                                </h2>
                                <p className="text-slate-600">
                                    Your feedback helps us make our programs even better. We've received your details and will email your child's certificate to <span className="font-semibold">{formData.parentEmail}</span> shortly.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => navigate('home')}
                                    className="mt-8 bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg"
                                >
                                    Back to Home
                                </button>
                            </div>
                        )}
                        
                        {currentStep <= totalSteps && (
                            <div className="mt-8 flex justify-between items-center">
                                {currentStep > 1 ? (
                                    <button type="button" onClick={prevStep} className="px-6 py-2 rounded-full text-sm font-medium text-slate-700 bg-slate-200 hover:bg-slate-300">
                                        Back
                                    </button>
                                ) : (
                                    <div></div> // Placeholder to keep "Next" on the right
                                )}

                                {currentStep < totalSteps ? (
                                    <button type="button" onClick={nextStep} className="px-8 py-3 rounded-full font-semibold text-white bg-brand-space hover:bg-blue-800 shadow-md">
                                        Next
                                    </button>
                                ) : (
                                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#e40917] hover:bg-[#c10714] transition-colors text-white font-semibold px-6 py-3 rounded-md shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed">
                                        {isSubmitting ? 'Submitting...' : 'Submit & Get Certificate'}
                                    </button>
                                )}
                            </div>
                        )}

                    </form>
                </div>
            </div>
             {/* Add keyframes for animation */}
            <style>
            {`
                @keyframes fade-in-up {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.5s ease-out forwards;
                }
            `}
            </style>
        </section>
    );
};