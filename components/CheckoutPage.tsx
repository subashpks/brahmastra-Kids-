
import React, { useState, useMemo } from 'react';
import { PageProps } from '../types';

interface CheckoutPageProps extends PageProps {
    item: {
        name: string;
        slot: string;
        price: string;
    } | null;
}

const SuccessIcon = () => (<svg className="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const UPIIcon = () => (<svg className="w-16 h-auto" viewBox="0 0 256 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.16 35.84V64H41.04V40.24L32.12 47.96L28.16 43.4L43.8 28.52H47.16V35.84Z" fill="#595959"/><path d="M78.653 28.5199H84.133V63.9999H78.653V28.5199Z" fill="#595959"/><path d="M125.13 28.52C130.65 28.52 134.45 30.6 136.53 34.76L131.53 37.6C130.09 35 127.89 33.68 125.01 33.68C120.65 33.68 117.45 36.88 117.45 41.24C117.45 45.6 120.65 48.8 125.01 48.8C127.89 48.8 130.09 47.48 131.53 44.88L136.53 47.72C134.45 51.88 130.65 53.96 125.13 53.96C117.01 53.96 111.33 48.6 111.33 41.24C111.33 33.88 117.01 28.52 125.13 28.52Z" fill="#F4721D"/><path d="M166.42 28.52C172.46 28.52 176.62 33.04 176.62 39.4V64H170.5V40.4C170.5 36.6 168.3 34.48 165.22 34.48C162.14 34.48 160.22 36.6 160.22 40.4V64H154.1V39.4C154.1 33.04 158.26 28.52 164.42 28.52Z" fill="#F4721D"/><path d="M190.009 28.5199H207.609V33.6799H196.129V43.8399H206.289V48.9999H196.129V63.9999H190.009V28.5199Z" fill="#005A9C"/><path d="M228.314 28.52C235.914 28.52 241.034 33.8 241.034 41.24C241.034 48.68 235.914 53.96 228.314 53.96H219.834V64H213.714V28.52H228.314ZM228.314 48.8C232.474 48.8 234.914 45.6 234.914 41.24C234.914 36.88 232.474 33.68 228.314 33.68H219.834V48.8H228.314Z" fill="#005A9C"/></svg>);


export const CheckoutPage: React.FC<CheckoutPageProps> = ({ item, navigate }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({ parentName: '', studentName: '', email: '', phone: '' });
    const [transactionId, setTransactionId] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusIsError, setStatusIsError] = useState(false);
    
    const upiId = 'q021454639@ybl';
    const powerAutomateURL = 'https://defaultc4472f3e25c34b5b8e7c381876872e.ac.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/f7377038e1244e8392176ddc7c64c8d2/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XW2VdIKb7o_sB7E54N3n1Lg3v4f6c5sJ7j9r8kL5n6o';

    const priceAmount = useMemo(() => {
        if (!item?.price) return '0.00';
        return parseFloat(item.price.replace(/[^0-9.]/g, '')).toFixed(2);
    }, [item]);

    const upiUrl = useMemo(() => {
        if (!item) return '';
        const params = new URLSearchParams({
            pa: upiId,
            pn: 'Brahmastra Aerospace',
            am: priceAmount,
            cu: 'INR',
            tn: `Booking for ${item.name} - ${item.slot}`
        });
        return `upi://pay?${params.toString()}`;
    }, [item, priceAmount]);

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;

    if (!item) {
        // ... (same as before)
    }

    const handleDetailsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { parentName, studentName, email, phone } = formData;
        if (parentName && studentName && email && phone) {
            setCurrentStep(2);
            setStatusMessage('');
            setStatusIsError(false);
        } else {
            setStatusMessage('Please fill in all details.');
            setStatusIsError(true);
        }
    };
    
    const handleFinalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!transactionId) {
            setStatusMessage('Please enter the UPI Transaction ID.');
            setStatusIsError(true);
            return;
        }

        setIsSubmitting(true);
        setStatusMessage('Confirming your booking...');
        setStatusIsError(false);

        const submissionData = {
            FormType: 'PaidBooking',
            ...formData,
            transactionId: transactionId.trim(),
            courseName: item.name,
            courseSlot: item.slot,
            amountPaid: item.price,
        };

        try {
            const response = await fetch(powerAutomateURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submissionData)
            });
            if (!response.ok) throw new Error('Booking confirmation failed.');
            setCurrentStep(3); // Success
        } catch (error) {
            setStatusMessage('There was an error confirming your booking. Please contact support.');
            setStatusIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="py-16 md:py-24 bg-slate-100 animate-fade-in-up min-h-[calc(100vh-128px)]">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                    {currentStep === 1 && (
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 text-center">Secure Checkout</h1>
                            <div className="my-6 bg-slate-50 p-4 rounded-lg border">
                                <h3 className="font-bold text-slate-800 text-lg mb-2">Booking Summary</h3>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold text-slate-700">{item.name}</p>
                                        <p className="text-sm text-slate-500">Slot: {item.slot}</p>
                                    </div>
                                    <p className="font-bold text-slate-800 text-lg">{item.price}</p>
                                </div>
                            </div>
                            <form onSubmit={handleDetailsSubmit} className="space-y-4">
                                <h2 className="text-xl font-bold text-slate-800 border-t pt-6">Attendee Details</h2>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Parent's Name</label>
                                    <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required className="w-full bg-slate-50 px-4 py-3 rounded-md border border-slate-300" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Student's Name</label>
                                    <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required className="w-full bg-slate-50 px-4 py-3 rounded-md border border-slate-300" />
                                </div>
                                 <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Parent's Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-50 px-4 py-3 rounded-md border border-slate-300" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Parent's Phone</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-slate-50 px-4 py-3 rounded-md border border-slate-300" />
                                </div>
                                {statusMessage && statusIsError && <p className="text-red-600 text-sm">{statusMessage}</p>}
                                <button type="submit" className="w-full bg-brand-space hover:bg-blue-800 text-white font-semibold py-3 rounded-full text-lg shadow-lg">Proceed to Payment</button>
                            </form>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div>
                             <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 text-center">Complete Your Payment</h1>
                            <div className="text-center my-6">
                                <UPIIcon />
                            </div>
                            <div className="text-center bg-slate-50 p-6 rounded-lg border max-w-md mx-auto">
                                <p className="text-slate-600">Scan the QR code with your UPI app or click the button below.</p>
                                <img src={qrCodeUrl} alt="UPI QR Code" className="mx-auto my-4 rounded-lg shadow-md" />
                                <a href={upiUrl} className="inline-block w-full bg-[#e40917] hover:bg-[#c10714] text-white font-semibold py-3 rounded-full text-lg shadow-lg">
                                    Pay {item.price} with UPI App
                                </a>
                                <p className="text-xs text-slate-500 mt-2">UPI ID: {upiId}</p>
                            </div>
                            <form onSubmit={handleFinalSubmit} className="mt-8 max-w-md mx-auto">
                                <label className="block text-sm font-bold text-slate-700 mb-2 text-center">After paying, enter the Transaction ID to confirm your booking.</label>
                                <input type="text" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} required className="w-full text-center bg-slate-50 px-4 py-3 rounded-md border border-slate-300" placeholder="Enter UPI Transaction ID here" />
                                {statusMessage && <p className={`text-sm text-center mt-2 ${statusIsError ? 'text-red-600' : 'text-blue-600'}`}>{statusMessage}</p>}
                                <button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full text-lg shadow-lg disabled:bg-slate-400">
                                    {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                                </button>
                                <button type="button" onClick={() => setCurrentStep(1)} className="w-full mt-3 text-sm text-slate-600 hover:underline">Go Back</button>
                            </form>
                        </div>
                    )}

                    {currentStep === 3 && (
                         <div className="text-center py-10">
                            <SuccessIcon />
                            <h1 className="text-3xl font-bold text-slate-800 mt-4">Booking Confirmed!</h1>
                            <p className="text-slate-600 mt-2">Your spot is secured. A confirmation email with all the details has been sent to <span className="font-semibold">{formData.email}</span>.</p>
                            <div className="mt-6 text-left bg-slate-50 p-4 rounded-lg border max-w-sm mx-auto">
                                <h3 className="font-semibold text-slate-700">Booking Summary:</h3>
                                <p className="text-slate-600">{item.name} ({item.slot})</p>
                                <p className="text-slate-600">Student: {formData.studentName}</p>
                                <p className="font-bold text-slate-800 mt-2">Total Paid: {item.price}</p>
                            </div>
                            <button onClick={() => navigate('home')} className="mt-8 w-full max-w-sm bg-brand-space hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full">
                                Back to Home
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
