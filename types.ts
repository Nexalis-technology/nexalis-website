import React from 'react';

export type CursorType = 'default' | 'text' | 'hover' | 'button';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
