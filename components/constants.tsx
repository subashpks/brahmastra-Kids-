
import React from 'react';
import { Program, FaqItem, Testimonial, Activity } from './types';

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
        <path d="M46.7 13.3V4c0-1.1-.9-2-2-2s-2 .9-2 2v9.3h-2.8V4c0-1.1-.9-2-2-2s-2 .9-2 2v9.3h-5.8V4c0-1.1-.9-2-2-2s-2 .9-2 2v9.3h-2.8V4c0-1.1-.9-2-2-2s-2 .9-2 2v9.3c-6.1.7-11.2 4.4-13.3 9.9H4c-1.1 0-2 .9-2 2s.9 2 2 2h9.3c.7 6.1 4.4 11.2 9.9 13.3V60c0 1.1.9 2 2 2s2-.9 2-2v-9.3h2.8V60c0 1.1.9 2 2 2s2-.9 2-2v-9.3h5.8V60c0 1.1.9 2 2 2s2-.9 2-2v-9.3h2.8V60c0 1.1.9 2 2 2s2-.9 2-2v-9.3c6.1-.7 11.2 4.4-13.3 9.9H60c1.1 0 2-.9 2-2s-.9-2-2-2h-9.3c-.7-6.1-4.4-11.2-9.9-13.3z" fill="#1e3a8a"/>
        <circle cx="32" cy="32" r="10" fill="#9ca3af"/>
        <circle cx="32" cy="32" r="5" fill="#e0f2fe"/>
    </svg>
);

export const TelescopeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M56.3,47.8l-7.5-7.5-4,4,7.5,7.5a4.2,4.2,0,0,0,6,0,4.2,4.2,0,0,0,0-6Z" fill="#94a3b8"/>
        <path d="M54.9,25.1,38.2,8.4a4.2,4.2,0,0,0-6,0L18.4,22.2a4.2,4.2,0,0,0,0,6l1.4,1.4,11.3-11.3,16,16-11.3,11.3,1.4,1.4a4.2,4.2,0,0,0,6,0L54.9,31.1a4.2,4.2,0,0,0,0-6Z" fill="#475569"/>
        <path d="M28.3,31.7,16.9,43.1a4.2,4.2,0,0,0,0,6l1.4,1.4,11.4-11.4Z" fill="#64748b"/>
        <path d="M12.7,47.3a4.2,4.2,0,0,0-6,0L2.9,51.1a4.2,4.2,0,0,0,0,6l4.2,4.2a4.2,4.2,0,0,0,6,0l4.2-4.2a4.2,4.2,0,0,0,0-6Z" fill="#94a3b8"/>
    </svg>
);

export const MathsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M49,62H15A7,7,0,0,1,8,55V9a7,7,0,0,1,7-7H49a7,7,0,0,1,7,7V55A7,7,0,0,1,49,62Z" fill="#a78bfa"/><rect x="14" y="10" width="36" height="16" fill="#d8b4fe"/><rect x="14" y="32" width="8" height="8" rx="2" ry="2" fill="#ede9fe"/><rect x="24" y="32" width="8" height="8" rx="2" ry="2" fill="#ede9fe"/><rect x="34" y="32" width="8" height="8" rx="2" ry="2" fill="#ede9fe"/><rect x="44" y="32" width="8" height="8" rx="2" ry="2" fill="#c4b5fd"/><rect x="14" y="44" width="8" height="8" rx="2" ry="2" fill="#ede9fe"/><rect x="24" y="44" width="8" height="8" rx="2" ry="2" fill="#ede9fe"/><rect x="34" y="44" width="8" height="8" rx="2" ry="2" fill="#ede9fe"/><rect x="44" y="44" width="8" height="1" rx=".5" ry=".5" fill="#c4b5fd"/></svg>
);
export const PhysicsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx="32" cy="32" r="6" fill="#fb923c"/><path d="M32,6a4,4,0,0,0-4,4V18.3a21.9,21.9,0,0,0-9.5,4.2,4,4,0,0,0-1.8,5.7,22.2,22.2,0,0,0,1.9,2.8,4,4,0,0,0,5.6.2,14.2,14.2,0,0,1,7.8-2.2V6a4,4,0,0,0-4-4Z" fill="#fdba74"/><path d="M32,58a4,4,0,0,0-4-4V45.7a21.9,21.9,0,0,0,9.5-4.2,4,4,0,0,0-1.8-5.7,22.2,22.2,0,0,0-1.9-2.8,4,4,0,0,0-5.6-.2,14.2,14.2,0,0,1-7.8,2.2V58a4,4,0,0,0,4-4Z" fill="#fdba74"/><path d="M58,32a4,4,0,0,0-4-4H45.7a21.9,21.9,0,0,0-4.2-9.5,4,4,0,0,0-5.7-1.8,22.2,22.2,0,0,0-2.8,1.9,4,4,0,0,0-.2,5.6,14.2,14.2,0,0,1,2.2,7.8H58a4,4,0,0,0,4-4Z" fill="#fdba74"/><path d="M6,32a4,4,0,0,0-4-4H18.3a21.9,21.9,0,0,0,4.2,9.5,4,4,0,0,0,5.7-1.8,22.2,22.2,0,0,0,2.8-1.9,4,4,0,0,0,.2-5.6,14.2,14.2,0,0,1-2.2-7.8H6a4,4,0,0,0-4-4Z" fill="#fdba74"/></svg>
);
export const ChemistryIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M45,10H19a2,2,0,0,0-2,2V20.2a.9.9,0,0,0,.3.7L31.8,38H19a2,2,0,0,0-1.2,3.6l12,12A2,2,0,0,0,32,54a2,2,0,0,0,1.4-.6l12-12A2,2,0,0,0,45,41.6V38H32.2L46.7,20.9a.9.9,0,0,0,.3-.7V12A2,2,0,0,0,45,10Z" fill="#2dd4bf"/><path d="M39.6,26.5a4,4,0,1,1-5.7,0,4,4,0,0,1,5.7,0" fill="#a7f3d0"/><path d="M28.4,26.5a4,4,0,1,1-5.7,0,4,4,0,0,1,5.7,0" fill="#a7f3d0"/></svg>
);
export const AstrobiologyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx="32" cy="32" r="26" fill="#bef264"/><path d="M51.1,43.1A25.9,25.9,0,0,1,18.4,56.5,26,26,0,0,0,51.1,43.1Z" fill="#a3e635"/><path d="M49,38a20,20,0,0,0-27-18.9,2,2,0,0,0,1,3.8,16,16,0,0,1,21.6,15.1,2,2,0,0,0,2,2,2,2,0,0,0,2.1-2,2,2,0,0,0-.3-2Z" fill="#d9f99d"/><path d="M29.1,51.8a2,2,0,0,0,2.8-1.2,12.7,12.7,0,0,1-1-6.1,2,2,0,1,0-4,0,16.5,16.5,0,0,0,1.4,7.8,2,2,0,0,0,.8-.5Z" fill="#d9f99d"/></svg>
);

export const CONVERSING_LANGUAGES = ['Tamil', 'English', 'Hindi', 'Kannada', 'Kashmiri', 'Malayalam', 'Telugu'];

export const COURSES_DATA = [
    { 
        title: 'Aeronautics',
        description: 'Learn how things fly, from paper planes to jumbo jets.',
        emoji: '✈️',
        color: 'border-brand-sky',
        page: 'aeronautics',
        isComingSoon: false,
    },
    {
        title: 'Astronomy',
        description: 'Gaze at the stars and unravel the mysteries of the cosmos.',
        emoji: '🔭',
        color: 'border-indigo-500',
        page: 'astronomy',
        isComingSoon: false,
    },
    { 
        title: 'Satellites',
        description: 'Discover the technology that connects our world.',
        emoji: '🛰️',
        color: 'border-brand-space',
        page: 'satellites',
        isComingSoon: false,
    },
    { 
        title: 'Rocket Science',
        description: 'Build rockets and explore the secrets of space travel.',
        emoji: '🚀',
        color: 'border-brand-sun',
        page: 'rocket-science',
        isComingSoon: false,
    },
    { 
        title: 'Astrobiology',
        description: 'Search for life beyond Earth and explore alien worlds.',
        emoji: '👽',
        color: 'border-lime-500',
        page: 'astrobiology',
        isComingSoon: false,
    },
    { 
        title: 'Quantum Physics',
        description: 'Explore the fundamental laws of reality and motion.',
        emoji: '⚛️',
        color: 'border-orange-500',
        page: 'quantum-physics',
        isComingSoon: false,
    },
    { 
        title: 'Molecular Chemistry',
        description: 'Mix, react, and discover the building blocks of matter.',
        emoji: '🧪',
        color: 'border-teal-500',
        page: 'molecular-chemistry',
        isComingSoon: false,
    },
    { 
        title: 'Data Mathematics',
        description: 'Unlock the equations that power the universe.',
        emoji: '🧮',
        color: 'border-purple-500',
        page: 'data-mathematics',
        isComingSoon: false,
    },
];

export const WEEKEND_CAMP_DATA = {
    id: 'weekend-rocket-blast-off',
    courseName: 'Rocket Science: Full-Fledged Course for Kids',
    ageCategory: '6-11 years (Class 1 to 5)',
    sessions: '10 super-fun sessions (Every Saturday & Sunday for 5 weeks)',
    description: 'Double weekend fun! Build real rockets, launch them high, get wet, and become a Junior Rocket Scientist in just 5 weeks!',
    price: '₹3000/-',
    syllabus: [
        { 
            week: 'Weekend 1: The Basics of Blast-Off!', 
            topics: [
                'What is a Rocket? The Big Idea!',
                'Meet Sir Isaac Newton: The Laws of Motion',
                'Action & Reaction: The Balloon Rocket Race!',
                'Storytime: A Trip to the Moon',
                'Designing Our Mission Patch',
                'Learning Rocket Parts: Nose Cone, Fins, Body',
                'Craft Time: Build a Simple Paper Rocket',
                'What is Thrust? The Power of Push!',
                'Team Huddle: What Makes a Good Rocket?',
                'Mission Log: Drawing Our Dream Rocket'
            ] 
        },
        { 
            week: 'Weekend 2: Tiny Rockets, Big Fun!', 
            topics: [
                'Introducing the Straw Rocket!',
                'Aerodynamics: How Rockets Cut Through Air',
                'Building Challenge: The Ultimate Straw Rocket',
                'Launch Time! Measuring Straw Rocket Distance',
                'What is Drag? The Parachute Principle',
                'Craft Time: Create a Paper Helicopter',
                'Experiment: The Great Helicopter Drop',
                'Understanding Spin & Stability',
                'Team Challenge: Helicopter Target Practice',
                'Mission Log: What made my rocket fly far?'
            ]
        },
        { 
            week: 'Weekend 3: Water Power & Parachutes!', 
            topics: [
                'H2-Oh! The Power of Water Rockets',
                'Building the Water Bottle Rocket Body',
                'Designing Fins for Stability',
                "Let's Talk About Pressure!",
                'Safety First: Launch Zone Rules',
                'First Launch! The Water Rocket Splash-Down',
                'What is Gravity? The Egg Drop Challenge',
                'Craft Time: Design Your Own Parachute',
                'Team Experiment: Safest Parachute for an Eggonaut',
                "Mission Log: Sketching our Water Rocket's Flight"
            ]
        },
        { 
            week: 'Weekend 4: Design, Decorate & Test!', 
            topics: [
                'The Art of Rocketry: Decorate Your Water Rocket',
                'Giving Your Rocket a Name and Story',
                'Pre-Flight Checklist: Is Your Rocket Ready?',
                'Understanding the Center of Gravity',
                'Experiment: Balancing Your Rocket',
                'Advanced Fin Design: Does Shape Matter?',
                'Test Launch Session: Making Adjustments',
                'Teamwork: Helping Friends with Their Rockets',
                'Countdown Practice: 10...9...8...',
                'Mission Log: Final Touches & Launch Predictions'
            ]
        },
        { 
            week: 'Weekend 5: MEGA LAUNCH DAY & Graduation!', 
            topics: [
                'Welcome to Launch Day!',
                'Final Safety Briefing',
                'Team by Team: The Official Countdown & Launch!',
                'Measuring Heights: Who Reached the Highest?',
                'Mission Debrief: What We Learned',
                'Photo Op: Posing with our Rockets',
                'Junior Rocket Scientist Award Ceremony',
                'Receiving Your "Junior Rocket Scientist" Badge',
                'Graduation Party: Snacks & Space Stories',
                'Taking Home Our Rockets!'
            ]
        },
    ],
    activities: [
        'Balloon races',
        'Straw rocket fly-off',
        'Water rocket splash launches',
        'Egg parachute drop',
        'Countdown & shout "BLAST OFF!"',
        'Draw your dream rocket',
        'Wear astronaut helmet photos',
        'Take home your rockets + certificate!',
    ],
    matchesSchoolSyllabus: {
        'Science': 'Force, motion, pressure, gravity',
        'EVS': 'Space & planets',
        'Math': 'Measuring height & countdown',
    },
    extraCoolThings: [
        'You BUILD & LAUNCH real rockets (not just read)',
        'Get wet and shout every weekend',
        'Become a real mini scientist',
        'Take home rockets + "Junior Rocket Scientist" badge 🏅',
    ],
};

export const ADVANCED_CAMP_DATA = {
    id: 'advanced-rocketry-workshop',
    courseName: '🛰️ Advanced Rocketry & Propulsion Workshop!',
    ageCategory: '11-16 years (Class 6 to 10)',
    sessions: '10 advanced sessions (Every Saturday & Sunday for 5 weeks)',
    description: 'Go beyond the basics! Design, simulate, and build advanced model rockets, exploring the core principles of real-world space engineering.',
    price: '₹3000/-',
    syllabus: [
        { 
            week: 'Weekend 1: Foundations of Rocket Engineering', 
            topics: [
                "Newton's Laws Revisited: A Deeper Dive",
                'Introduction to Propulsion: Thrust & Specific Impulse',
                'Types of Rocket Engines: Solid vs. Liquid vs. Hybrid',
                'Understanding Thrust-to-Weight Ratio',
                'Intro to Rocket Design Software (OpenRocket)',
                'Designing Your First Digital Rocket Model',
                'The Role of the Center of Pressure & Center of Gravity',
                'Basic Stability Calculations',
                'Safety Protocols for Advanced Rocketry',
                'Mission Log: Defining Your Mission Objective'
            ] 
        },
        { 
            week: 'Weekend 2: Aerodynamics & Structural Design', 
            topics: [
                'Principles of Aerodynamic Lift and Drag',
                'Nose Cone Geometry: Ogive, Conical, Elliptical',
                'Fin Design: Shape, Size, and Number of Fins',
                'Simulating Your Rocket\'s Flight Path',
                'Analyzing Simulation Data: Apogee, Velocity, Stability',
                'Materials for Rocketry: Balsa, Cardboard, Composites',
                'Building a Strong and Lightweight Airframe',
                'Engine Mounting and Centering Techniques',
                'Team Challenge: Design for Maximum Altitude',
                'Mission Log: Finalizing Digital Design and Bill of Materials'
            ]
        },
        { 
            week: 'Weekend 3: Avionics & Payload Integration', 
            topics: [
                'What is Avionics? The Brain of the Rocket',
                'Introduction to Flight Computers and Altimeters',
                'Understanding Sensor Data: Acceleration, Barometric Pressure',
                'Payload Design: What is a satellite? What is a probe?',
                'Challenge: Design a Protective Casing for a Raw Egg Payload',
                'Ejection Charges: How Parachutes Deploy',
                'Calculating Ejection Charge Size',
                'Wiring an Electronics Bay (Simulation/Demo)',
                'Integrating the Payload into the Airframe',
                'Mission Log: Payload Design Blueprint'
            ]
        },
        { 
            week: 'Weekend 4: Recovery Systems & Final Build', 
            topics: [
                'Parachute vs. Streamer Recovery: Pros and Cons',
                'Calculating the Right Parachute Size for a Safe Landing',
                'How to Fold a Parachute for Reliable Deployment',
                'Shock Cords: Absorbing Ejection Force',
                'Building the Engine Mount and Fin Assembly',
                'Assembling the Main Body Tube and Payload Bay',
                'Attaching the Launch Lug and Finishing Touches',
                'Conducting Pre-Flight Safety and Stability Checks',
                'Your Final Rocket: A Complete System',
                'Mission Log: Completing the Pre-Launch Checklist'
            ]
        },
        { 
            week: 'Weekend 5: LAUNCH DAY & Mission Analysis!', 
            topics: [
                'Launch Site Safety Briefing and Roles',
                'Setting up the Launchpad and Igniter System',
                'The Final Countdown: Launching the Advanced Rockets!',
                'Tracking and Recovering Your Rocket',
                'Downloading and Analyzing Flight Data from the Altimeter',
                'Mission Debrief: Comparing Simulations to Real-World Results',
                'Troubleshooting: What if a flight goes wrong?',
                'Advanced Rocket Scientist Award Ceremony',
                'Receiving Your "Rocketry Engineer" Certificate',
                'Next Steps: Competitions and Future Projects'
            ]
        },
    ],
    activities: [
        'Design rockets using OpenRocket simulation software',
        'Build a high-power model rocket from scratch',
        'Integrate a simulated electronics payload',
        'Calculate stability and performance metrics',
        'Launch and recover your own rocket',
        'Analyze real flight data from an altimeter',
        'Design a protective egg payload capsule',
        'Take home your advanced rocket + certificate!',
    ],
    matchesSchoolSyllabus: {
        'Physics': 'Kinematics, Newton\'s Laws, Aerodynamics, Pressure Systems',
        'Math': 'Algebra, Trigonometry (for stability), Data Analysis',
        'Design & Tech': 'CAD/Simulation, Prototyping, Systems Integration',
    },
    extraCoolThings: [
        'Use real engineering software to design & test your rocket before you build',
        'Learn the science behind different types of rocket engines',
        'Understand how flight computers and payloads work',
        'Become a certified "Rocketry Engineer" 🏅',
    ],
};

export const VR_WORKSHOP_DATA = {
    id: 'vr-space-exploration',
    courseName: '🌌 VR Space Exploration Workshop',
    ageCategory: '8-16 years (Class 3 to 10)',
    sessions: '23 November | 9:00 AM - 2:00 PM',
    description: 'Go beyond textbooks! Pilot a spaceship, walk on Mars, and witness the birth of a star in a fully immersive Virtual Reality experience.',
    price: '₹999/-',
    location: 'Clubhouse, Marg Pushpadruma, Kalavakkam, OMR, Thiruporur.',
    slots: [
        { day: '23 November', seats: 20 },
    ],
    syllabus: [ 
        { 
            week: 'Module 1: Interactive Space Fundamentals', 
            topics: [
                'Fun and Interactive Story-based explanation.',
                'What is a Rocket? How does it fly?',
                'What is Space? What is a Satellite?',
                'Where do Satellites revolve?',
                'What is a Drone?',
                'What is the International Space Station?',
                'Plus other related space topics.'
            ] 
        },
        { 
            week: 'Module 2: Immersive VR Experience', 
            topics: [
                'Interactive VR Experience with expert teaching.',
                'Virtual Space Walk.',
                'Tour Inside the International Space Station.',
                'View Outside the International Space Station.',
                'Duration: ~15 Minutes each (changeable as per situation).'
            ]
        },
        { 
            week: 'Module 3: Guidance & Certification', 
            topics: [
                'Doubt Session on any questions.',
                'Career Guidance: Becoming a Scientist, AI Engineer, Pilot, or Astronaut.',
                'Little Astronaut Certificate Ceremony.',
                'Signed by Subash P. Kuppusamy (Official ISRO Space Tutor).'
            ]
        },
    ],
    activities: [
        'Conduct a zero-gravity Space Walk outside the International Space Station',
        'Explore the high-tech interiors of the International Space Station',
        'Learn the science of flight and Pilot a virtual Drone',
        'Take the Commander\'s seat and Pilot a Spaceship',
        'Experience the breathtaking view of Earth from orbit',
        'Get a printed "Virtual Astronaut" certificate!',
    ],
    matchesSchoolSyllabus: {
        'Physics': 'Gravity, orbits, celestial mechanics, light years',
        'EVS/Science': 'Planets, Solar System, stars, galaxies',
        'Technology': 'Introduction to Virtual Reality applications & Drones',
        'Geography': 'Earth\'s rotation, atmosphere, and view from orbit',
        'General Knowledge': 'ISRO missions, Astronaut lives, Space History',
        'Mathematics': 'Speed, Distance, Time, and Scale of the Universe'
    },
    brahmastraExperience: [
        { title: 'Immersive Reality', description: 'Kids don\'t just learn about space; they step inside it. Walking on Mars or floating in the ISS makes concepts unforgettable.' },
        { title: 'Expert-Led Inquiry', description: 'Our ISRO Space Tutors don\'t lecture. They guide exploration, sparking questions and deep thinking.' },
        { title: 'Safe & Inspiring', description: 'We use child-safe VR technology in a monitored environment to ensure a comfortable, awe-inspiring journey.' }
    ],
    mentor: {
        name: 'Subash P. Kuppusamy',
        role: 'Official ISRO Space Tutor',
        image: 'https://files.catbox.moe/gpjimc.png',
        bio: 'Aeronautical Engineer & Founder of Brahmastra Aerospace. With experience on the Tejas fighter jet and a passion for education, Subash mentors future scientists with real-world insights.'
    },
    providedItems: [
        'Access to Premium VR Headsets',
        'Printed "Virtual Astronaut" Certificate',
        'Stationery & Activity Materials',
        'Career Guidance Session'
    ],
    extraCoolThings: [
        'Experience realistic space travel without leaving the room',
        'Understand complex astronomy concepts through immersive visuals',
        'A fully guided, interactive experience with expert mentors',
        'Sparks imagination and a deeper interest in STEM fields',
    ],
};


export const AERONAUTICS_PROGRAMS: Program[] = [
  {
    title: 'Junior Pilot Program',
    ageGroup: 'Ages 5-8',
    description: 'Learn the basics of flight! Build paper airplanes, discover how wings work, and design your first aircraft.',
    icon: '✈️',
  },
  {
    title: 'Aerodynamics Mastery',
    ageGroup: 'Ages 9-15',
    description: 'Dive deep into the forces of flight. Explore lift, drag, thrust, and weight with advanced simulators and model building.',
    icon: '✈️',
  },
];

export const ROCKET_SCIENCE_PROGRAMS: Program[] = [
  {
    title: 'Rocket Racers',
    ageGroup: 'Ages 5-8',
    description: '3... 2... 1... Blast off! Construct and launch your own model rockets while learning about space exploration.',
    icon: '🚀',
  },
  {
    title: 'Orbital Mechanics',
    ageGroup: 'Ages 9-15',
    description: 'Chart a course to the stars. Understand how spacecraft travel, orbit planets, and navigate the vastness of space.',
    icon: '🚀',
  },
];

export const SATELLITES_PROGRAMS: Program[] = [
    {
      title: 'Backyard Constellations',
      ageGroup: 'Ages 5-8',
      description: 'Discover the unseen helpers in the sky. Learn how satellites help us with weather, maps, and talking to friends far away.',
      icon: '🛰️',
    },
    {
      title: 'Satellite Engineering',
      ageGroup: 'Ages 9-15',
      description: 'Design, build, and deploy a virtual satellite. Learn about communication systems, orbits, and data transmission.',
      icon: '🛰️',
    },
  ];
  
export const DATA_MATHEMATICS_PROGRAMS: Program[] = [
    {
      title: 'Data Detectives',
      ageGroup: 'Ages 5-8',
      description: 'Embark on a quest to find patterns in numbers, create cool charts, and solve real-world mysteries using data.',
      icon: '🧮',
    },
    {
      title: 'Algorithm Architects',
      ageGroup: 'Ages 9-15',
      description: 'Learn the logic behind algorithms and use mathematical models to predict outcomes, from game scores to weather patterns.',
      icon: '🧮',
    },
];

export const QUANTUM_PHYSICS_PROGRAMS: Program[] = [
    {
      title: 'Quantum Leap Jr.',
      ageGroup: 'Ages 5-8',
      description: 'Play with the weird and wonderful rules of the quantum world. Discover particles that can be in two places at once!',
      icon: '⚛️',
    },
    {
      title: 'Reality Builders',
      ageGroup: 'Ages 9-15',
      description: 'Journey from the atom to the cosmos, exploring concepts like wave-particle duality, superposition, and quantum entanglement.',
      icon: '⚛️',
    },
];

export const MOLECULAR_CHEMISTRY_PROGRAMS: Program[] = [
    {
      title: 'Molecule Kidz',
      ageGroup: 'Ages 5-8',
      description: 'Mix safe, everyday ingredients to see how molecules bond, react, and create amazing changes you can see!',
      icon: '🧪',
    },
    {
      title: 'Atomic Architects',
      ageGroup: 'Ages 9-15',
      description: 'Dive into the periodic table, build 3D molecules on-screen, and understand the chemical bonds that create everything around us.',
      icon: '🧪',
    },
];

export const ASTROBIOLOGY_PROGRAMS: Program[] = [
    {
      title: 'Alien Hunters',
      ageGroup: 'Ages 5-8',
      description: 'What do aliens look like? Design your own extraterrestrial creatures based on the environments of other planets.',
      icon: '👽',
    },
    {
      title: 'Exoplanet Explorers',
      ageGroup: 'Ages 9-15',
      description: 'Learn how scientists find planets around other stars and determine if they could support life. Analyze real data!',
      icon: '👽',
    },
];

export const ASTRONOMY_PROGRAMS: Program[] = [
    {
      title: 'Star Gazers Club',
      ageGroup: 'Ages 5-8',
      description: 'Learn to identify constellations, discover the planets of our solar system, and understand the phases of the moon.',
      icon: '🔭',
    },
    {
      title: 'Cosmic Voyager',
      ageGroup: 'Ages 9-15',
      description: 'Explore deep-space objects like nebulae and galaxies. Learn about black holes, star life cycles, and the Big Bang theory.',
      icon: '🔭',
    },
];

export const ALL_PROGRAMS = [
    ...AERONAUTICS_PROGRAMS,
    ...ROCKET_SCIENCE_PROGRAMS,
    ...SATELLITES_PROGRAMS,
    ...DATA_MATHEMATICS_PROGRAMS,
    ...QUANTUM_PHYSICS_PROGRAMS,
    ...MOLECULAR_CHEMISTRY_PROGRAMS,
    ...ASTROBIOLOGY_PROGRAMS,
    ...ASTRONOMY_PROGRAMS,
];

export const FREE_PROGRAMS_DATA = [
    { 
        title: "Astronomy For Kids", 
        ageGroup: "Ages 5-8",
    },
    { 
        title: "Rocket Science for Kids", 
        ageGroup: "Ages 9-15",
    }
];

export const ACTIVITIES_DATA: Activity[] = [
    {
        title: "DIY Paper Rocket",
        description: "A fun, hands-on activity to learn the basics of aerodynamics and propulsion. All you need is paper, scissors, and tape!",
        ageGroup: "Ages 5-8",
        icon: '🚀'
    },
    {
        title: "Stargazing Guide",
        description: "A printable guide to help you identify major constellations and planets visible in the night sky this month.",
        ageGroup: "Ages 5-8",
        icon: '🔭'
    },
    {
        title: "Build a Satellite Model",
        description: "Use household items like cardboard boxes, aluminum foil, and plastic bottles to construct your own satellite model.",
        ageGroup: "Ages 9-15",
        icon: '🛰️'
    },
    {
        title: "Wing Design Challenge",
        description: "Experiment with different paper airplane wing shapes and sizes to see how they affect flight distance and stability.",
        ageGroup: "Ages 9-15",
        icon: '✈️'
    }
];


export const FAQ_DATA: FaqItem[] = [
    {
        question: "What is Brahmastra Aerospace Academy?",
        answer: "We are an online learning platform dedicated to teaching children and teenagers about the exciting world of aerospace, including aeronautics, astronautics, satellites, and drones, through fun and interactive courses."
    },
    {
        question: "Who are the courses for?",
        answer: "Our courses are designed for two main age groups: Junior Aviators (ages 5-10) and Senior Innovators (ages 11-15). Each course is tailored to be age-appropriate, engaging, and educational."
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

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "Brahmastra truly speaks the language of kids. My son used to be shy, but now he's asking questions about space I never would have imagined. They answered everything with such patience and excitement.",
    studentName: "Vasudev S.",
    parentName: "Sabarigirisan N.",
    schoolName: "MS Dhoni Global School",
    district: "Hosur",
    state: "Tamil Nadu"
  },
  {
    quote: "The hands-on projects are fantastic. It's not just theory; they're actually building and learning. Zain is always excited to show me what he's made. We've never seen him so engaged in learning.",
    studentName: "Zain A.",
    parentName: "Subeer Abdul Kadhar",
    schoolName: "Velavan Nursery & Primary School",
    district: "Tiruppur",
    state: "Tamil Nadu"
  },
  {
    quote: "The mentors are actual aerospace engineers, and it shows. The depth of knowledge and the passion they bring is incredible. It feels like my child is getting a glimpse into a real-world career.",
    studentName: "Aditya S.",
    parentName: "Arun Singh",
    schoolName: "Orchids The International School",
    district: "Gurugram",
    state: "Haryana"
  },
  {
    quote: "I was worried it would be be another high-pressure class, but it's the complete opposite. The focus on curiosity and collaboration is a breath of fresh air. Harshiv is learning so much without any of the stress.",
    studentName: "Harshiv V.",
    parentName: "Vigneshwaran M.",
    schoolName: "KRM Public School",
    district: "Chennai",
    state: "Tamil Nadu"
  },
  {
    quote: "Seeing my son's confidence grow has been the best part. The small batch size means he gets the attention he needs and isn't afraid to speak up. Highly recommend!",
    studentName: "Dheeran K.",
    parentName: "Nantha Kumar T.",
    schoolName: "Sarvodaya Vidyalaya",
    district: "Tiruppur",
    state: "Tamil Nadu"
  }
];
