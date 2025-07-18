// This file exports TypeScript types and interfaces used throughout the project for better type safety.

export interface ButtonProps {
    label: string;
    onClick: () => void;
}

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
}

export interface Testimonial {
    id: number;
    name: string;
    feedback: string;
}