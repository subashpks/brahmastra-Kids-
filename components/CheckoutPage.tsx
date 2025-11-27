
import React, { useState } from 'react';
import { PageProps } from '../types';

interface CheckoutPageProps extends PageProps {
    item: {
        name: string;
        slot?: string;
        price: string;
    } | null;
}

const grades = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];
const ageCategories = [
    'Junior Scientist (6-11 Yrs)',
    'Senior Scientist (12-16 Yrs)'
];
const emailDomains = ['@gmail.com', '@outlook.com', '@yahoo.com'];

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ item, navigate }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        studentName: '',
        grade: '',
        ageCategory: '',
        schoolName: '',
        city: '',
        parentName: '',
        email: '',
        phone: ''
    });
    const [utrNumber, setUtrNumber] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusIsError, setStatusIsError] = useState(false);

    if (!item) {
         return (
            <div className="py-24 text-center bg-slate-50 min-h-screen">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold text-slate-800">No item selected.</h2>
                    <button onClick={() => navigate('courses')} className="mt-6 bg-brand-space text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-800 transition-colors">Browse Courses</button>
                </div>
            </div>
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        if (name === 'phone') {
            // Allow only numbers and max 10 digits
            const numericValue = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({ ...prev, [name]: numericValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleEmailDomainClick = (domain: string) => {
        setFormData(prev => ({
            ...prev,
            email: prev.email.includes('@') ? prev.email : prev.email + domain
        }));
    };

    // Step 1: Collect Data and move to Payment (Local Validation Only)
    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        if (Object.values(formData).some(x => x === '')) {
            setStatusMessage('Please fill in all required fields.');
            setStatusIsError(true);
            return;
        }
        
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
             setStatusMessage('Please enter a valid 10-digit phone number.');
             setStatusIsError(true);
             return;
        }
        
        // Move to next step without backend call
        setStatusMessage('');
        setStatusIsError(false);
        setCurrentStep(2);
        window.scrollTo(0, 0);
    };

    // Option 2: Handle Manual UPI Verification
    const handleManualPaymentSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        
        if (!utrNumber || utrNumber.length < 4) {
            setStatusMessage('Please enter a valid UTR / Transaction ID.');
            setStatusIsError(true);
            return;
        }

        setIsSubmitting(true);
        setStatusMessage('Verifying payment details...');
        setStatusIsError(false);

        const powerAutomateURL = "https://defaultc4472f3e25c34b5b8e7c381876872e.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/becb42b0752441f983f4abc946770f7c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=r8U7PNPCwG349upoz7rP4hc48uqY0u8nkFIgcc5yvLk";

        try {
             await fetch(powerAutomateURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    FormType: 'CourseBookingConfirmed',
                    ...formData,
                    Price: item.price,
                    TransactionId: utrNumber, // Sending UTR here
                    Status: 'Paid (Manual Verification)'
                })
            });

            navigate('payment-success', {
                paymentId: utrNumber,
                courseName: item.name,
                amount: item.price,
                studentName: formData.studentName,
                parentName: formData.parentName,
                phone: formData.phone
            });

        } catch (error) {
             setStatusMessage('Network error. Please try again or contact support.');
             setStatusIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Generate UPI QR Code
    const cleanPrice = item.price.replace(/[^0-9]/g, '');
    
    // Determine the transaction note (description shown in UPI app)
    let transactionNote = item.name;
    const lowerName = item.name.toLowerCase();

    if (lowerName.includes('vr') || lowerName.includes('virtual') || lowerName.includes('junior astronaut')) {
        transactionNote = "Junior Astronaut, brahmastra 23 Nov";
    } else if (lowerName.includes('advanced rocketry')) {
        transactionNote = "Advanced Rocketry Workshop";
    } else if (lowerName.includes('rocket science')) {
        transactionNote = "Junior Rocketry Camp";
    } else {
        // Default: Remove emojis and special chars for safety in banking apps, trim to 50 chars
        transactionNote = item.name.replace(/[^\w\s-]/g, '').trim().substring(0, 50);
    }

    // UPI String format: upi://pay?pa=UPI_ID&pn=NAME&am=AMOUNT&cu=INR
    const upiLink = `upi://pay?pa=brahmastra97779@cnrb&pn=Brahmastra Aerospace&am=${cleanPrice}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

    return (
        <section className="py-12 md:py-20 bg-slate-50 min-h-screen animate-fade-in-up">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        <span className="font-['Montserrat'] text-brand-space">brahmàstra<span className="text-[#e40917]">.</span></span> Secure Checkout
                    </h1>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
                    
                    {/* Left Column: Forms */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${currentStep === 1 ? 'bg-brand-space text-white' : 'bg-green-100 text-green-700'}`}>1</span>
                                Student & Parent Details
                            </h2>
                            
                            {currentStep === 1 && (
                                <form onSubmit={handleNextStep} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Student Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none placeholder-slate-500" placeholder="Child's full name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Age Category <span className="text-red-500">*</span></label>
                                            <select name="ageCategory" value={formData.ageCategory} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none">
                                                <option value="">Select Category</option>
                                                {ageCategories.map(c => <option key={c} value={c}>{c}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                             <label className="block text-sm font-medium text-slate-700 mb-1">Grade / Class <span className="text-red-500">*</span></label>
                                             <select name="grade" value={formData.grade} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none">
                                                <option value="">Select Class</option>
                                                {grades.map(g => <option key={g} value={g}>{g}</option>)}
                                             </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">School Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="schoolName" value={formData.schoolName} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none placeholder-slate-500" placeholder="Current school" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">City / Location <span className="text-red-500">*</span></label>
                                        <input type="text" name="city" value={formData.city} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none placeholder-slate-500" placeholder="e.g. Chennai" />
                                    </div>

                                    <div className="border-t border-slate-200 my-4"></div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Parent Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="parentName" value={formData.parentName} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none placeholder-slate-500" placeholder="Your name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                                            <input 
                                                type="tel" 
                                                name="phone" 
                                                value={formData.phone} 
                                                onChange={handleInputChange} 
                                                required 
                                                pattern="[0-9]{10}"
                                                maxLength={10}
                                                className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none placeholder-slate-500" 
                                                placeholder="10-digit mobile number" 
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none placeholder-slate-500" placeholder="For booking confirmation" />
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

                                    {statusMessage && <div className={`text-sm text-center p-2 rounded ${statusIsError ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'}`}>{statusMessage}</div>}

                                    <button type="submit" disabled={isSubmitting} className="w-full bg-brand-space text-white font-bold py-3 rounded-full hover:bg-blue-800 transition-all shadow-lg mt-4 disabled:bg-slate-400">
                                        Proceed to Payment
                                    </button>
                                </form>
                            )}

                            {currentStep === 2 && (
                                <div className="animate-fade-in-up">
                                    <div className="flex justify-between items-center mb-6">
                                         <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-space text-white text-sm font-bold">2</span>
                                            Scan & Verify Payment
                                         </h3>
                                         <button onClick={() => setCurrentStep(1)} className="text-sm text-brand-space hover:underline">Edit Details</button>
                                    </div>
                                    
                                    <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 text-center">
                                        
                                        <div className="mb-6 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                            <img 
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/460px-PhonePe_Logo.svg.png?20210407195407" 
                                                alt="PhonePe" 
                                                className="h-8 mx-auto mb-2"
                                            />
                                            <p className="text-sm font-bold text-slate-800">Use PhonePe for Faster Transactions</p>
                                            <p className="text-xs text-slate-500 mt-2 leading-relaxed max-w-md mx-auto">
                                                We use PhonePe QR and auto-validation. As payment gateways charge 3% extra on the total value, we use this method to help you save money.
                                            </p>
                                        </div>

                                        <p className="text-slate-600 mb-4 font-medium">
                                            Scan this QR code using any UPI App (GPay, PhonePe, Paytm) to pay <span className="text-slate-900 font-bold">{item.price}</span>.
                                        </p>
                                        
                                        <div className="flex justify-center mb-6">
                                            <div className="bg-white p-2 rounded-lg shadow-md border border-slate-200">
                                                <img src={qrCodeUrl} alt="UPI QR Code" className="w-48 h-48 md:w-64 md:h-64" />
                                            </div>
                                        </div>
                                        
                                        <div className="text-sm text-slate-500 mb-8">
                                            <p>UPI ID: <strong className="text-slate-700 font-mono select-all">brahmastra97779@cnrb</strong></p>
                                            <p>Name: <strong className="text-slate-700">Brahmastra Aerospace</strong></p>
                                        </div>

                                        {/* Verification Section */}
                                        <div className="max-w-md mx-auto space-y-4 text-left">
                                            <div className="bg-yellow-50 p-6 rounded-xl border-2 border-dashed border-brand-sun shadow-lg relative overflow-hidden animate-fade-in-up">
                                                 <label className="block text-lg font-extrabold text-slate-900 mb-3 text-center uppercase tracking-wide">
                                                     👇 Enter UTR / Reference Number 👇
                                                 </label>
                                                <input 
                                                    type="text" 
                                                    value={utrNumber} 
                                                    onChange={(e) => setUtrNumber(e.target.value)} 
                                                    required 
                                                    placeholder="e.g. 4312xxxxxxxx" 
                                                    className="w-full bg-white text-slate-900 px-4 py-4 border-2 border-slate-300 rounded-lg focus:ring-4 focus:ring-brand-sun/50 focus:border-brand-sun outline-none text-center font-mono text-xl tracking-widest font-bold placeholder-slate-400 transition-all shadow-inner"
                                                />
                                                <p className="text-xs text-slate-600 mt-2 text-center font-medium">
                                                    This number is found in your Payment App History.
                                                </p>
                                            </div>

                                            {statusMessage && <div className={`text-sm text-center p-3 rounded-md font-medium ${statusIsError ? 'text-red-700 bg-red-100' : 'text-green-700 bg-green-100'}`}>{statusMessage}</div>}

                                            <button 
                                                onClick={() => handleManualPaymentSubmit()}
                                                disabled={isSubmitting}
                                                className="w-full bg-green-600 hover:bg-green-700 text-white font-extrabold py-5 rounded-full text-xl shadow-xl transition-all transform hover:scale-[1.02] disabled:bg-slate-400 animate-pulse-fomo border-4 border-green-500/30"
                                            >
                                                {isSubmitting ? 'Verifying...' : '✅ CLICK TO VERIFY & SUBMIT'}
                                            </button>
                                            <p className="text-xs text-slate-500 mt-3 text-center italic">
                                                Note: We will verify your UTR and our Official team will contact you immediately.
                                            </p>
                                            
                                            <div className="mt-6 pt-4 border-t border-slate-200 text-center">
                                                 <a 
                                                    href="https://wa.me/919940797779?text=Hi,%20I%20need%20help%20with%20payment%20verification."
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-green-600 transition-colors font-medium"
                                                 >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 1.66.43 3.24 1.21 4.6l-1.36 4.95 5.07-1.33c1.32.75 2.82 1.18 4.38 1.18h.01c5.5 0 9.96-4.49 9.96-10.02S17.5 2.04 12 2.04zM16.51 13.96c-.22-.11-.78-.38-1.02-.43-.24-.05-.42-.08-.59.16-.18.24-.38.43-.47.54-.08.11-.17.13-.33.08-.16-.05-1.02-.37-1.95-1.2-.72-.64-1.21-1.44-1.36-1.68-.15-.24-.02-.38.07-.5.08-.11.17-.28.26-.42.09-.14.12-.24.18-.4.06-.16.03-.29-.02-.39-.05-.11-.59-1.42-.81-1.94-.21-.52-.43-.45-.59-.45-.15 0-.32-.03-.49-.03s-.42 0-1.08.5c-.66.5-1.02 1.23-1.02 2.4s1.05 2.78 1.2 2.97c.15.19 2.11 3.2 5.1 4.48.71.3 1.27.48 1.71.61.73.22 1.39.19 1.9.11.57-.08 1.76-.72 2-1.42.24-.7.24-1.3.17-1.42-.08-.12-.3-.19-.52-.3z"/></svg>
                                                    <span>Payment Issues? Reach us on WhatsApp</span>
                                                 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Order Summary</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Course</p>
                                    <p className="text-brand-space font-bold leading-tight">{item.name}</p>
                                </div>
                                {item.slot && (
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold">Selected Slot</p>
                                        <p className="text-slate-700 font-medium">{item.slot}</p>
                                    </div>
                                )}
                                <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold">Total</p>
                                        <p className="text-xs text-slate-400">(Incl. taxes)</p>
                                    </div>
                                    <p className="text-3xl font-extrabold text-slate-900">{item.price}</p>
                                </div>
                            </div>
                            
                            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                                    <p className="text-xs text-yellow-800 leading-relaxed">
                                        <strong>Limited Seats:</strong> Your spot is reserved for 10 minutes. Please complete payment to confirm.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
