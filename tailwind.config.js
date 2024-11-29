/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                blue: {
                    50: '#f0f8ff',
                    100: '#dceeff',
                    200: '#b8dfff',
                    300: '#8accff',
                    400: '#5ab3ff',
                    500: '#2a9aff', // Primary blue
                    600: '#0073e6',
                    700: '#005bb5',
                    800: '#003f8a',
                    900: '#002766',
                },
                red: {
                    50: '#fff5f5',
                    100: '#ffe3e3',
                    200: '#ffbdbd',
                    300: '#ff9b9b',
                    400: '#f86a6a',
                    500: '#ef4e4e', // Primary red
                    600: '#e12d39',
                    700: '#cf1124',
                    800: '#ab091e',
                    900: '#8a041a',
                },
                gray: {
                    50: '#f9fafb',
                    100: '#f4f5f7',
                    200: '#e5e7eb',
                    300: '#d2d6dc',
                    400: '#9fa6b2',
                    500: '#6b7280', // Neutral gray
                    600: '#4b5563',
                    700: '#374151',
                    800: '#252f3f',
                    900: '#161e2e',
                },
                white: '#ffffff',
                black: '#000000',
            },
        },
    },
    plugins: [],
}
