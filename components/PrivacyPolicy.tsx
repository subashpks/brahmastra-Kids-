
import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white animate-fade-in-up">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-slate-900">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
          <p className="mb-4">Last updated: November 2024</p>
          <p className="mb-4">Brahmastra Aerospace Academy operates the website brahmastraspace.org. This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-800">1. Information Collection and Use</h2>
          <p className="mb-4">While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Name of student and parent</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Postal address</li>
            <li>School and educational details</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-800">2. Log Data</h2>
          <p className="mb-4">Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-800">3. Cookies</h2>
          <p className="mb-4">Cookies are files with small amounts of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-800">4. Security</h2>
          <p className="mb-4">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-800">5. Changes to This Privacy Policy</h2>
          <p className="mb-4">This Privacy Policy is effective as of November 2024 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-slate-800">6. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at info@brahmastraspace.org.</p>
        </div>
      </div>
    </section>
  );
};
