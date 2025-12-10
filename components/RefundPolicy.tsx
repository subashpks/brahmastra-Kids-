
import React from 'react';

export const RefundPolicy: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white animate-fade-in-up">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-slate-900">Refund and Cancellation Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
          <p className="mb-4">At Brahmastra Aerospace Academy, we strive to ensure our students and parents have the best learning experience. Please read our cancellation and refund policy carefully.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-800">1. Cancellation Policy</h2>
          <div className="mb-4">
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>For Live Workshops/Webinars:</strong> Cancellations must be made at least 24 hours prior to the scheduled start time of the session to be eligible for a rescheduling or refund.</li>
                <li><strong>For Long-term Courses:</strong> Cancellation requests must be submitted via email within 3 days of enrollment confirmation or before the second session of the course, whichever is earlier.</li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-800">2. Refund Policy</h2>
          <div className="mb-4">
            <p className="mb-2">We offer refunds under the following conditions:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>If a course is cancelled by Brahmastra Aerospace Academy due to unforeseen circumstances, a 100% refund will be issued.</li>
                <li>For cancellations made by the user more than 24 hours before a single-session workshop, a full refund (minus any applicable payment gateway charges) will be processed.</li>
                <li>No refunds will be issued for cancellations made less than 24 hours before a workshop or after the course has commenced (except as noted in the cancellation policy above).</li>
                <li>For digital products or kits that have already been shipped, refunds are only applicable if the product is returned in original condition within 7 days. Shipping costs are non-refundable.</li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-800">3. Processing of Refunds</h2>
          <p className="mb-4">
            Approved refunds will be processed within 5-7 business days. The amount will be credited back to the original method of payment used during the transaction. If you do not receive the refund within this timeframe, please check with your bank or credit card provider.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-800">4. Contact Us</h2>
          <p className="mb-4">If you have any questions regarding our Refund and Cancellation Policy, please contact us at info@brahmastraspace.org or call us at +91 9940797779.</p>
        </div>
      </div>
    </section>
  );
};
