
import React from 'react';

interface PaymentSuccessPageProps {
    navigate: (page: string) => void;
    transactionData?: {
        paymentId: string;
        courseName: string;
        amount: string;
        studentName?: string;
        parentName?: string;
        phone?: string;
    };
}

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 1.66.43 3.24 1.21 4.6l-1.36 4.95 5.07-1.33c1.32.75 2.82 1.18 4.38 1.18h.01c5.5 0 9.96-4.49 9.96-10.02S17.5 2.04 12 2.04zM16.51 13.96c-.22-.11-.78-.38-1.02-.43-.24-.05-.42-.08-.59.16-.18.24-.38.43-.47.54-.08.11-.17.13-.33.08-.16-.05-1.02-.37-1.95-1.2-.72-.64-1.21-1.44-1.36-1.68-.15-.24-.02-.38.07-.5.08-.11.17-.28.26-.42.09-.14.12-.24.18-.4.06-.16.03-.29-.02-.39-.05-.11-.59-1.42-.81-1.94-.21-.52-.43-.45-.59-.45-.15 0-.32-.03-.49-.03s-.42 0-1.08.5c-.66.5-1.02 1.23-1.02 2.4s1.05 2.78 1.2 2.97c.15.19 2.11 3.2 5.1 4.48.71.3 1.27.48 1.71.61.73.22 1.39.19 1.9.11.57-.08 1.76-.72 2-1.42.24-.7.24-1.3.17-1.42-.08-.12-.3-.19-.52-.3z"/></svg>
);

export const PaymentSuccessPage: React.FC<PaymentSuccessPageProps> = ({ navigate, transactionData }) => {
    
    const getWhatsAppMessage = () => {
        let msg = `Hi, I have completed payment for enrollment.\n`;
        msg += `Course: ${transactionData?.courseName || 'N/A'}\n`;
        
        if (transactionData?.studentName) msg += `Student Name: ${transactionData.studentName}\n`;
        if (transactionData?.parentName) msg += `Parent Name: ${transactionData.parentName}\n`;
        if (transactionData?.phone) msg += `Parent Phone: ${transactionData.phone}\n`;
        
        msg += `Amount: ${transactionData?.amount || 'N/A'}\n`;
        msg += `UTR/Ref: ${transactionData?.paymentId || 'N/A'}\n`;
        msg += `Please verify and confirm my booking.`;
        return msg;
    };

    const whatsappLink = `https://wa.me/919940797779?text=${encodeURIComponent(getWhatsAppMessage())}`;

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-brand-space">
                <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-sky-100 mb-6">
                    <svg className="h-12 w-12 text-brand-space" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Thank You for Initiating Enrollment</h2>
                <p className="text-lg text-slate-600 mb-6">
                     We have received your request for <span className="font-bold text-slate-800">{transactionData?.courseName || 'the course'}</span>.
                </p>
                
                <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left border border-slate-200">
                    <p className="text-sm text-slate-600 mb-2">
                        <span className="font-bold">Next Steps:</span> We will cross-verify your payment details and send you a confirmation email within <span className="font-bold">15 minutes</span>.
                    </p>
                     <p className="text-sm text-slate-600">
                        At this time you will be receiving your acknowledgement from Brahmastra.
                    </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-8 text-left border border-slate-100 shadow-sm">
                    <div className="flex justify-between py-2 border-b border-slate-100">
                        <span className="text-slate-500 text-sm">Transaction ID</span>
                        <span className="text-slate-800 font-mono text-sm">{transactionData?.paymentId || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between py-2">
                         <span className="text-slate-500 text-sm">Amount</span>
                        <span className="text-slate-800 font-bold text-sm">{transactionData?.amount || 'N/A'}</span>
                    </div>
                </div>

                <div className="space-y-3">
                     <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-105"
                    >
                        <WhatsAppIcon />
                        Chat with Support to Speed Up
                    </a>

                    <button 
                        onClick={() => navigate('home')} 
                        className="w-full flex justify-center py-3 px-4 border border-slate-300 rounded-full shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-sky"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};
