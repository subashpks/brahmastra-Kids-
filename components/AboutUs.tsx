
import React from 'react';

export const AboutUsPage: React.FC = () => {
  return (
    <section id="about-us" className="py-16 md:py-24 animate-fade-in-up bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          About Us
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Welcome to Brahmastra Aerospace Academy! We are a passionate team of educators and aerospace enthusiasts dedicated to making the wonders of space and flight accessible to every child. Our mission is to spark curiosity and inspire the next generation of innovators, scientists, and explorers through engaging, hands-on learning experiences.
        </p>
      </div>
    </section>
  );
};
