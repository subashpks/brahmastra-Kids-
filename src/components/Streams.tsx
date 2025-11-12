

import React from 'react';

export const StreamsPage: React.FC = () => {
  return (
    <section id="streams" className="py-16 md:py-24 animate-fade-in-up bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Our Learning Streams
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Dive into our specialized streams of learning. Whether you're fascinated by the mechanics of flight, the vastness of space, or the technology that connects our world, we have a path for you. Our streams include Aeronautics, Astronautics, Satellites, and Drones.
        </p>
      </div>
    </section>
  );
};