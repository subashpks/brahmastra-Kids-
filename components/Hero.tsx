import React from 'react';
import { PageProps } from '../types';
import { PlaneIcon, RocketIcon, SatelliteIcon, DroneIcon } from '../constants';

const AstronautIllustration = () => (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
      <div className="absolute -top-4 -left-4 w-48 h-48 bg-brand-sky rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute -top-4 -right-4 w-48 h-48 bg-brand-sun rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-48 h-48 bg-green-300 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <img src="https://files.catbox.moe/vwlnrr.png" alt="Illustration of a child wearing an astronaut helmet looking at a holographic solar system" className="relative animate-float" />
    </div>
);


const TopicCard: React.FC<{ icon: React.ReactNode; title: string; description: string; color: string; onClick: () => void }> = ({ icon, title, description, color, onClick }) => (
    <div onClick={onClick} className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-t-4 ${color}`}>
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-500">{description}</p>
    </div>
);


export const HomePage: React.FC<PageProps> = ({ navigate }) => {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="text-brand-space font-semibold tracking-wider bg-sky-200/50 px-3 py-1 rounded-full">AGES 6-17</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mt-4">
                Explore the Universe From Your Room
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                Blast off on an adventure! Our fun, hands-on courses make learning about planes, rockets, stars, and drones an exciting journey for every curious mind.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#faq" className="bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg">
                  Choose Your Mission
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
                <AstronautIllustration />
            </div>
          </div>
        </div>
      </section>

      <section id="topics" className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    What Will You Discover Today?
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                    Pick a topic and start your adventure. Each path is filled with exciting projects and amazing facts!
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <TopicCard 
                    icon={<PlaneIcon className="w-10 h-10 text-brand-sky"/>}
                    title="Aeronautics"
                    description="Learn how things fly, from paper planes to jumbo jets."
                    color="border-brand-sky"
                    onClick={() => navigate('aeronautics')}
                />
                 <TopicCard 
                    icon={<RocketIcon className="w-10 h-10 text-brand-sun"/>}
                    title="Astronautics"
                    description="Build rockets and explore the secrets of space travel."
                    color="border-brand-sun"
                    onClick={() => navigate('astronautics')}
                />
                 <TopicCard 
                    icon={<SatelliteIcon className="w-10 h-10 text-brand-space"/>}
                    title="Satellites"
                    description="Discover the technology that connects our world."
                    color="border-brand-space"
                    onClick={() => navigate('satellites')}
                />
                 <TopicCard 
                    icon={<DroneIcon className="w-10 h-10 text-green-500"/>}
                    title="Drones"
                    description="Pilot the future and see the world from a new angle."
                    color="border-green-500"
                    onClick={() => navigate('drones')}
                />
            </div>
        </div>
      </section>
    </>
  );
};