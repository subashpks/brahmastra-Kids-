import React from 'react';
import { Course, FaqItem } from './types';

export const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a6 6 0 0 0-7.38-5.84m2.56 5.84L6.16 20.12a6 6 0 0 0 7.38-5.84m-2.56-5.84a6 6 0 0 0-5.84 7.38m5.84-2.56L6.16 6.16a6 6 0 0 0 7.38 5.84m6.16-7.38a6 6 0 0 0-5.84-7.38L9.88 9.88a6 6 0 0 0 7.38 5.84m-5.84-7.38L20.12 17.84a6 6 0 0 0-7.38-5.84Z" />
    </svg>
);

export const PlaneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
);

export const SatelliteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-3.75v3.75m3-2.25v2.25M12 21.75l-3.75-1.5-3.75 1.5V13.5l3.75-1.5L12 13.5l3.75-1.5 3.75 1.5v8.25L12 21.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m12 7.5 3.75-1.5 3.75 1.5v6.75L12 16.5l-3.75-1.5L4.5 9.75v-6.75L12 7.5Z" />
    </svg>
);

export const DroneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path d="M12 18.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Z" />
        <path fillRule="evenodd" d="M22.5 12c0-5.23-4.27-9.5-9.5-9.5S3.5 6.77 3.5 12c0 4.1 2.62 7.59 6.25 8.92.5.19 1 .3 1.5.3h.5c.5 0 1-.11 1.5-.3A9.45 9.45 0 0 0 22.5 12ZM7.5 12a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm-3-2.5a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm15 0a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Z" clipRule="evenodd" />
    </svg>
);

export const AERONAUTICS_COURSES: Course[] = [
  {
    title: 'Junior Pilot Program',
    ageGroup: '6-10',
    description: 'Learn the basics of flight! Build paper airplanes, discover how wings work, and design your first aircraft.',
    icon: <PlaneIcon className="w-8 h-8 text-brand-sky" />,
  },
  {
    title: 'Aerodynamics Mastery',
    ageGroup: '11-17',
    description: 'Dive deep into the forces of flight. Explore lift, drag, thrust, and weight with advanced simulators and model building.',
    icon: <PlaneIcon className="w-8 h-8 text-brand-sky" />,
  },
];

export const ASTRONAUTICS_COURSES: Course[] = [
  {
    title: 'Rocket Racers',
    ageGroup: '6-10',
    description: '3... 2... 1... Blast off! Construct and launch your own model rockets while learning about space exploration.',
    icon: <RocketIcon className="w-8 h-8 text-brand-sun" />,
  },
  {
    title: 'Orbital Mechanics',
    ageGroup: '11-17',
    description: 'Chart a course to the stars. Understand how spacecraft travel, orbit planets, and navigate the vastness of space.',
    icon: <RocketIcon className="w-8 h-8 text-brand-sun" />,
  },
];

export const SATELLITES_COURSES: Course[] = [
    {
      title: 'Backyard Constellations',
      ageGroup: '6-10',
      description: 'Discover the unseen helpers in the sky. Learn how satellites help us with weather, maps, and talking to friends far away.',
      icon: <SatelliteIcon className="w-8 h-8 text-brand-space" />,
    },
    {
      title: 'Satellite Engineering',
      ageGroup: '11-17',
      description: 'Design, build, and deploy a virtual satellite. Learn about communication systems, orbits, and data transmission.',
      icon: <SatelliteIcon className="w-8 h-8 text-brand-space" />,
    },
  ];
  
  export const DRONES_COURSES: Course[] = [
    {
      title: 'Drone Playground',
      ageGroup: '6-10',
      description: 'Take to the skies! Learn to fly mini-drones through obstacle courses and complete fun, aerial challenges safely.',
      icon: <DroneIcon className="w-8 h-8 text-green-500" />,
    },
    {
      title: 'Drone Programming & Cinematography',
      ageGroup: '11-17',
      description: 'Go beyond flying. Program drones for autonomous flight, and learn the art of capturing stunning aerial photos and videos.',
      icon: <DroneIcon className="w-8 h-8 text-green-500" />,
    },
  ];

export const FAQ_DATA: FaqItem[] = [
    {
        question: "What is Brahmastra Aerospace Academy?",
        answer: "We are an online learning platform dedicated to teaching children and teenagers about the exciting world of aerospace, including aeronautics, astronautics, satellites, and drones, through fun and interactive courses."
    },
    {
        question: "Who are the courses for?",
        answer: "Our courses are designed for two main age groups: Junior Explorers (ages 6-10) and Senior Aviators (ages 11-17). Each course is tailored to be age-appropriate, engaging, and educational."
    },
    {
        question: "Are the courses safe?",
        answer: "Absolutely. Safety is our top priority. All activities, especially those involving model rockets or drones, are designed with strict safety guidelines. Online content is moderated and kid-friendly."
    },
    {
        question: "Do we need to buy any special equipment?",
        answer: "Some courses may recommend simple materials like paper and scissors, or optional kits for model building. Any requirements will be clearly listed on the course description page. Many courses can be completed with no extra equipment at all!"
    }
];
