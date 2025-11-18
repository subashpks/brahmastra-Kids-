
import React, { useState } from 'react';
import { PageProps } from '../types';

interface CheckoutPageProps extends PageProps {
    item: {
        name: string;
        slot: string;
        price: string;
    } | null;
}

const CreditCardIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>);
const LockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>);
const SuccessIcon = () => (<svg className="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);


export const CheckoutPage: React.FC<CheckoutPageProps> = ({ item, navigate }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    if (!item) {
        return (
             <div className="py-16 md:py-24 text-center">
                <h1 className="text-2xl font-bold text-slate-700">No item selected for checkout.</h1>
                <button onClick={() => navigate('courses')} className="mt-4 bg-brand-space hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-full">
                    Browse Courses
                </button>
            </div>
        );
    }

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate a payment processing delay
        setTimeout(() => {
            setIsProcessing(false);
            setPaymentSuccess(true);
        }, 2000);
    };

    if (paymentSuccess) {
        return (
            <div className="py-16 md:py-24 animate-fade-in-up">
                <div className="container mx-auto px-6 max-w-lg text-center">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                        <SuccessIcon />
                        <h1 className="text-3xl font-bold text-slate-800 mt-4">Payment Successful!</h1>
                        <p className="text-slate-600 mt-2">Your spot is confirmed. A confirmation email has been sent.</p>
                        <div className="mt-6 text-left bg-slate-50 p-4 rounded-lg border">
                            <h3 className="font-semibold text-slate-700">Booking Summary:</h3>
                            <p className="text-slate-600">{item.name}</p>
                            <p className="text-slate-600">Slot: {item.slot}</p>
                            <p className="font-bold text-slate-800 mt-2">Total Paid: {item.price}</p>
                        </div>
                        <button onClick={() => navigate('home')} className="mt-8 w-full bg-brand-space hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full">
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    

    return (
        <section className="py-16 md:py-24 bg-slate-100 animate-fade-in-up">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Secure Checkout</h1>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Order Summary */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg order-2 lg:order-1 h-fit">
                        <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-4">Order Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold text-slate-700">{item.name}</p>
                                    <p className="text-sm text-slate-500">Slot: {item.slot}</p>
                                </div>
                                <p className="font-semibold text-slate-800">{item.price}</p>
                            </div>
                        </div>
                        <div className="border-t mt-4 pt-4">
                            <div className="flex justify-between items-center font-bold text-lg">
                                <span>Total</span>
                                <span>{item.price}</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg order-1 lg:order-2">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Payment Details</h2>
                        <form className="space-y-4" onSubmit={handlePayment}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input id="email" type="email" required className="w-full bg-slate-50 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="you@example.com" />
                            </div>
                             <div>
                                <label htmlFor="card-number" className="block text-sm font-medium text-slate-700 mb-1">Card Information</label>
                                <div className="relative">
                                    <input id="card-number" type="text" required className="w-full bg-slate-50 pl-4 pr-12 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="0000 0000 0000 0000" />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <CreditCardIcon />
                                    </div>
                                </div>
                            </div>
                             <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="expiry-date" className="block text-sm font-medium text-slate-700 mb-1">Expiry Date</label>
                                    <input id="expiry-date" type="text" required className="w-full bg-slate-50 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="MM / YY" />
                                </div>
                                <div>
                                    <label htmlFor="cvc" className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
                                    <input id="cvc" type="text" required className="w-full bg-slate-50 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="123" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="name-on-card" className="block text-sm font-medium text-slate-700 mb-1">Name on Card</label>
                                <input id="name-on-card" type="text" required className="w-full bg-slate-50 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="Full name as it appears on card" />
                            </div>
                            <div className="pt-4">
                                <button type="submit" disabled={isProcessing} className="w-full bg-[#e40917] hover:bg-[#c10714] transition-colors text-white font-semibold px-6 py-4 rounded-full text-lg shadow-lg disabled:bg-slate-400 disabled:cursor-not-allowed">
                                    {isProcessing ? 'Processing...' : `Pay ${item.price}`}
                                </button>
                            </div>
                            <p className="text-xs text-slate-500 text-center flex items-center justify-center pt-2">
                                <LockIcon /> Secure payment powered by [Your Gateway Here]
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};
