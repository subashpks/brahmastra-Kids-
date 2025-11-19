
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

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ item, navigate }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        studentName: '',
        grade: '',
        schoolName: '',
        city: '',
        parentName: '',
        email: '',
        phone: ''
    });
    const [transactionId, setTransactionId] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusIsError, setStatusIsError] = useState(false);

    const upiId = '9940797779@ybl'; 

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

    const priceAmount = item.price ? item.price.toString().replace(/[^0-9.]/g, '') : '0';
    const upiUrl = `upi://pay?pa=${upiId}&pn=BrahmastraAerospace&am=${priceAmount}&tn=${encodeURIComponent(item.name)}&cu=INR`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        if (Object.values(formData).some(x => x === '')) {
            setStatusMessage('Please fill in all required fields.');
            setStatusIsError(true);
            return;
        }
        setStatusMessage('');
        setStatusIsError(false);
        setCurrentStep(2);
    };

    const handleFinalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!transactionId) {
            setStatusMessage('Please enter the transaction ID.');
            setStatusIsError(true);
            return;
        }
        setIsSubmitting(true);
        
        const powerAutomateURL = "https://defaultc4472f3e25c34b5b8e7c381876872e.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/3ae2a21f31b14c0e817d5aabf7c27b87/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Z-1C7_xjD9crnK7yTVNTZFiuBVkBLxIAYu1IYqWdXvQ";

        try {
             const response = await fetch(powerAutomateURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    FormType: 'CourseBooking',
                    ...formData,
                    CourseName: item.name,
                    Slot: item.slot,
                    Price: item.price,
                    TransactionId: transactionId
                })
            });

            if (response.ok) {
                setStatusMessage('✅ Booking Confirmed! We will contact you shortly.');
                setStatusIsError(false);
                setTimeout(() => navigate('home'), 4000);
            } else {
                throw new Error('Submission failed.');
            }
        } catch (error) {
             setStatusMessage('Error confirming booking. Please try again.');
             setStatusIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                             <label className="block text-sm font-medium text-slate-700 mb-1">Grade / Class <span className="text-red-500">*</span></label>
                                             <select name="grade" value={formData.grade} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none">
                                                <option value="">Select Class</option>
                                                {grades.map(g => <option key={g} value={g}>{g}</option>)}
                                             </select>
                                        </div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">School Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="schoolName" value={formData.schoolName} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none placeholder-slate-500" placeholder="Current school" />
                                        </div>
                                         <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">City / Location <span className="text-red-500">*</span></label>
                                            <input type="text" name="city" value={formData.city} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none placeholder-slate-500" placeholder="e.g. Chennai" />
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-200 my-4"></div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Parent Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="parentName" value={formData.parentName} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none placeholder-slate-500" placeholder="Your name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none placeholder-slate-500" placeholder="Mobile number" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-sky outline-none placeholder-slate-500" placeholder="For booking confirmation" />
                                    </div>

                                    {statusMessage && <div className={`text-sm text-center p-2 rounded ${statusIsError ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'}`}>{statusMessage}</div>}

                                    <button type="submit" className="w-full bg-brand-space text-white font-bold py-3 rounded-full hover:bg-blue-800 transition-all shadow-lg mt-4">
                                        Proceed to Payment
                                    </button>
                                </form>
                            )}

                            {currentStep === 2 && (
                                <div className="animate-fade-in-up">
                                    <div className="flex justify-between items-center mb-6">
                                         <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-space text-white text-sm font-bold">2</span>
                                            Secure Payment
                                         </h3>
                                         <button onClick={() => setCurrentStep(1)} className="text-sm text-brand-space hover:underline">Edit Details</button>
                                    </div>
                                    
                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                                        
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe Logo" className="h-8 mx-auto mb-4" />

                                        <p className="text-slate-700 font-medium mb-4">Scan the QR code with your UPI app (we prefer Phonepe for better processing)</p>
                                        
                                        <div className="bg-white p-3 rounded-xl shadow-sm inline-block mb-4">
                                            <img src={qrCodeUrl} alt="UPI QR Code" className="w-48 h-48 object-contain" />
                                        </div>
                                        
                                        <div className="flex items-center justify-center gap-2 text-sm text-slate-500 bg-white py-1.5 px-3 rounded-full border border-slate-200 w-fit mx-auto">
                                            <span className="font-mono">{upiId}</span>
                                        </div>

                                        <div className="mt-6 md:hidden">
                                            <a href={upiUrl} className="block w-full bg-[#e40917] text-white font-bold py-3 rounded-full shadow-md hover:bg-[#c10714] transition-colors">
                                                Pay {item.price} via UPI App
                                            </a>
                                        </div>
                                    </div>

                                    <form onSubmit={handleFinalSubmit} className="mt-8">
                                        <label className="block text-sm font-bold text-slate-700 mb-2">
                                            Enter Transaction ID / UTR Number <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            value={transactionId} 
                                            onChange={(e) => setTransactionId(e.target.value)} 
                                            required 
                                            className="w-full text-slate-900 bg-white px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-brand-sky focus:ring-0 outline-none font-mono text-lg placeholder-slate-500" 
                                            placeholder="e.g. 3324XXXXXXXX" 
                                        />
                                        <p className="text-xs text-slate-500 mt-2">This helps us verify your payment instantly.</p>
                                        
                                        {statusMessage && <div className={`mt-4 text-sm text-center p-3 rounded-lg ${statusIsError ? 'text-red-700 bg-red-50' : 'text-green-700 bg-green-50'}`}>{statusMessage}</div>}

                                        <button type="submit" disabled={isSubmitting} className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-full text-lg shadow-lg disabled:bg-slate-400 disabled:cursor-not-allowed transition-all">
                                            {isSubmitting ? 'Verifying...' : 'Confirm Booking'}
                                        </button>
                                    </form>
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
