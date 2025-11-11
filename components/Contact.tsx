import React from 'react';

export const Contact: React.FC = () => {

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const query = (form.elements.namedItem('query') as HTMLInputElement).value;
        if (name && email && query) {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Have a question about our courses or want to enroll your child? Send us a message, and we'll get back to you as soon as possible!
                    </p>
                </div>
                <div className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <form className="space-y-4" onSubmit={handleFormSubmit} noValidate>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1 text-slate-700">Name <span className="text-red-500">*</span></label>
                            <input type="text" id="name" name="name" required className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-700">Email <span className="text-red-500">*</span></label>
                            <input type="email" id="email" name="email" required className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                        </div>
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium mb-1 text-slate-700">Service Interested In <span className="text-red-500">*</span></label>
                            <select id="service" name="service" required className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                <option>Select a service</option>
                                <option>Aeronautics Courses</option>
                                <option>Astronautics Courses</option>
                                <option>Satellites Courses</option>
                                <option>Drones Courses</option>
                                <option>Internship</option>
                                <option>Other</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="query" className="block text-sm font-medium mb-1 text-slate-700">Query <span className="text-red-500">*</span></label>
                            <textarea id="query" name="query" rows={4} required placeholder="Write your query here..." className="w-full bg-slate-50 text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-6 py-3 rounded-md shadow-md">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
