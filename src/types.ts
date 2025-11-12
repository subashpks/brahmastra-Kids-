import React from 'react';

export interface Course {
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
  navigate: (page: string) => void;
}