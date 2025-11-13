import React from 'react';
import { Course, FaqItem } from './types';

export const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M46 36.1C46 25.2 41.5 12 33 12c-8.5 0-13 13.2-13 24.1 0 5.2.5 9.7 1.2 13.3.2.9 1.3 1.2 1.9.6 4-4.2 8.7-6.5 12.9-6.5s8.9 2.3 12.9 6.5c.6.6 1.7.3 1.9-.6.7-3.6 1.2-8.1 1.2-13.3z" fill="#e5e7eb"/>
        <path d="M33 2c-5.5 0-10 4.5-10 10v10.1c4.5-5.2 9.2-8.1 10-8.1s5.5 2.9 10 8.1V12c0-5.5-4.5-10-10-10z" fill="#ef4444"/>
        <circle cx="33" cy="28" r="5" fill="#60a5fa"/>
        <path d="M26.2 57.8c-2.3-2.1-3.2-5-3.2-7.5 0-1 .1-2 .3-3 3.5 3.3 7.8 5.2 11.7 5.2s8.2-1.9 11.7-5.2c.2 1 .3 2 .3 3 0 2.5-.9 5.4-3.2 7.5-2.6 2.4-5.8 3.8-8.8 3.8-3 .1-6.2-1.3-8.8-3.8z" fill="#ef4444"/>
        <path d="M38 53c-1-1.2-2.5-2-4-2s-3 .8-4 2c-2 2.5-3 5.3-3 8 0 1 .8 2 1.8 2h14.4c1 0 1.8-1 1.8-2 0-2.7-1-5.5-3-8z" fill="#f97316"/>
        <path d="M35 55c-.7-.9-1.6-1.5-2.5-1.5S30.7 54.1 30 55c-1.4 1.8-2.2 3.9-2.2 5.9 0 .6.5 1.1 1.1 1.1h8.2c.6 0 1.1-.5 1.1-1.1.1-2-.6-4.1-2.2-5.9z" fill="#facc15"/>
    </svg>
);

export const PlaneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M58.4 28.3L37.1 18.6c-.9-.4-1.9.4-1.9 1.4v3.3H18.4L11.5 5.9c-.3-.8-1-1.2-1.8-1.2-1.1 0-2 .9-2 2 0 .3 0 .5.1.7l8.6 17.2H5c-1.1 0-2 .9-2 2s.9 2 2 2h11.4l-8.6 17.2c-.1.2-.1.4-.1.7 0 1.1.9 2 2 2 .8 0 1.5-.5 1.8-1.2l6.9-17.4h16.8v3.3c0 .9 1 1.7 1.9 1.4l21.3-9.7c.9-.4.9-1.7 0-2.1z" fill="#3b82f6"/>
        <path d="M35.2 23.3V20c0-.9 1-1.7 1.9-1.4l5.3 2.4v9.3l-24-11H35.2z" fill="#60a5fa"/>
        <path d="M17 26c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.4-3-3-3z" fill="#e0f2fe"/>
    </svg>
);

export const SatelliteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M43.6 2c-1.1 0-2 .9-2 2v8.5c-4.2.9-8 2.8-11.1 5.4-3.1-2.6-6.9-4.5-11.1-5.4V4c0-1.1-.9-2-2-2s-2 .9-2 2v8.5C9 11.5 4.3 15.6 2.4 21.4c-.3.8.1 1.7.9 2l8.5 2.8v11.5l-8.5 2.8c-.8.3-1.2 1.2-.9 2 .6 1.8 1.4 3.6 2.4 5.2 2.3 3.8 5.5 6.9 9.3 9.3 1.6 1 3.4 1.8 5.2 2.4.8.3 1.7-.1 2-.9l2.8-8.5h11.5l2.8 8.5c.3.8 1.2 1.2 2 .9 1.8-.6 3.6-1.4 5.2-2.4 3.8-2.3 6.9-5.5 9.3-9.3 1-1.6 1.8-3.4 2.4-5.2.3-.8-.1-1.7-.9-2l-8.5-2.8V25.8l8.5-2.8c.8-.3 1.2-1.2.9-2C59.7 15.6 55 11.5 48.5 10.5V4c.1-1.1-.8-2-1.9-2z" fill="#475569"/>
        <path d="M46.7 13.3V4c0-1.1-.9-2-2-2s-2 .9-2 2v9.3h-2.8V4c0-1.1-.9-2-2-2s-2 .9-2 2v9.3h-5.8V4c0-1.1-.9-2-2-2s-2 .9-2 2v9.3h-2.8V4c0-1.1-.9-2-2-2s-2 .9-2 2v9.3c-6.1.7-11.2 4.4-13.3 9.9H4c-1.1 0-2 .9-2 2s.9 2 2 2h9.3c.7 6.1 4.4 11.2 9.9 13.3V60c0 1.1.9 2 2 2s2-.9 2-2v-9.3h2.8V60c0 1.1.9 2 2 2s2-.9 2-2v-9.3h5.8V60c0 1.1.9 2 2 2s2-.9 2-2v-9.3h2.8V60c0 1.1.9 2 2 2s2-.9 2-2v-9.3c6.1-.7 11.2-4.4 13.3-9.9H60c1.1 0 2-.9 2-2s-.9-2-2-2h-9.3c-.7-6.1-4.4-11.2-9.9-13.3z" fill="#1e3a8a"/>
        <circle cx="32" cy="32" r="10" fill="#9ca3af"/>
        <circle cx="32" cy="32" r="5" fill="#e0f2fe"/>
    </svg>
);

export const DroneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M51 22.5c-1.4 0-2.5-1.1-2.5-2.5V13c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5z" fill="#6b7280"/>
        <path d="M51 61.5c-1.4 0-2.5-1.1-2.5-2.5V52c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5z" fill="#6b7280"/>
        <path d="M13 22.5c-1.4 0-2.5-1.1-2.5-2.5V13c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5z" fill="#6b7280"/>
        <path d="M13 61.5c-1.4 0-2.5-1.1-2.5-2.5V52c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5z" fill="#6b7280"/>
        <path d="M61.5 51h-7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h7c1.4 0 2.5 1.1 2.5 2.5S62.9 51 61.5 51z" fill="#4b5563"/>
        <path d="M15.5 51h-7C7.1 51 6 49.9 6 48.5S7.1 46 8.5 46h7c1.4 0 2.5 1.1 2.5 2.5S16.9 51 15.5 51z" fill="#4b5563"/>
        <path d="M61.5 13h-7c-1.4 0-2.5-1.1-2.5-2.5S53.1 8 54.5 8h7C62.9 8 64 9.1 64 10.5S62.9 13 61.5 13z" fill="#4b5563"/>
        <path d="M15.5 13h-7C7.1 13 6 11.9 6 10.5S7.1 8 8.5 8h7c1.4 0 2.5 1.1 2.5 2.5S16.9 13 15.5 13z" fill="#4b5563"/>
        <path d="M51 46H13c-5 0-9-4-9-9V27c0-5 4-9 9-9h38c5 0 9 4 9 9v10c0 5-4 9-9 9z" fill="#d1d5db"/>
        <circle cx="32" cy="36" r="10" fill="#4b5563"/>
        <circle cx="32" cy="36" r="4" fill="#ef4444"/>
        <path d="M53.5 2.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" transform="translate(0 4)" fill="#22c55e"/>
        <path d="M10.5 2.5C9.1 2.5 8 1.4 8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" transform="translate(0 4)" fill="#22c55e"/>
    </svg>
);


export const AERONAUTICS_COURSES: Course[] = [
  {
    title: 'Junior Pilot Program',
    ageGroup: 'Ages 5-8',
    description: 'Learn the basics of flight! Build paper airplanes, discover how wings work, and design your first aircraft.',
    icon: <PlaneIcon className="w-8 h-8 text-brand-sky" />,
  },
  {
    title: 'Aerodynamics Mastery',
    ageGroup: 'Ages 9-15',
    description: 'Dive deep into the forces of flight. Explore lift, drag, thrust, and weight with advanced simulators and model building.',
    icon: <PlaneIcon className="w-8 h-8 text-brand-sky" />,
  },
];

export const ASTRONAUTICS_COURSES: Course[] = [
  {
    title: 'Rocket Racers',
    ageGroup: 'Ages 5-8',
    description: '3... 2... 1... Blast off! Construct and launch your own model rockets while learning about space exploration.',
    icon: <RocketIcon className="w-8 h-8 text-brand-sun" />,
  },
  {
    title: 'Orbital Mechanics',
    ageGroup: 'Ages 9-15',
    description: 'Chart a course to the stars. Understand how spacecraft travel, orbit planets, and navigate the vastness of space.',
    icon: <RocketIcon className="w-8 h-8 text-brand-sun" />,
  },
];

export const SATELLITES_COURSES: Course[] = [
    {
      title: 'Backyard Constellations',
      ageGroup: 'Ages 5-8',
      description: 'Discover the unseen helpers in the sky. Learn how satellites help us with weather, maps, and talking to friends far away.',
      icon: <SatelliteIcon className="w-8 h-8 text-brand-space" />,
    },
    {
      title: 'Satellite Engineering',
      ageGroup: 'Ages 9-15',
      description: 'Design, build, and deploy a virtual satellite. Learn about communication systems, orbits, and data transmission.',
      icon: <SatelliteIcon className="w-8 h-8 text-brand-space" />,
    },
  ];
  
  export const DRONES_COURSES: Course[] = [
    {
      title: 'Drone Playground',
      ageGroup: 'Ages 5-8',
      description: 'Take to the skies! Learn to fly mini-drones through obstacle courses and complete fun, aerial challenges safely.',
      icon: <DroneIcon className="w-8 h-8 text-green-500" />,
    },
    {
      title: 'Drone Programming & Cinematography',
      ageGroup: 'Ages 9-15',
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
        answer: "Our courses are designed for three main age groups: Early Learners (ages 5-8), Junior Explorers (ages 9-12), and Young Innovators (ages 13-15). Each course is tailored to be age-appropriate, engaging, and educational."
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