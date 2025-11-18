import React from 'react';

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface ChildProfile {
    id: number;
    name: string;
    ageCategory: string; // e.g., 'Early Learners (Ages 5-8)'
}

export interface Activity {
  title: string;
  description: string;
  ageGroup: string; // e.g., 'Ages 5-8'
  icon: string;
}

export interface Program {
  title: string;
  ageGroup: string;
  description: string;
  icon: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageProps {
  // FIX: Allow navigate function to accept an optional data argument to match its implementation in App.tsx.
  navigate: (page: string, data?: any) => void;
}

export interface Testimonial {
    quote: string;
    studentName: string;
    parentName: string;
    schoolName?: string;
    district?: string;
    state?: string;
}