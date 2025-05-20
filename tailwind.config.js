/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bae0ff',
          300: '#7cc7ff',
          400: '#36aeff',
          500: '#0095ff',
          600: '#0077ff',
          700: '#0059d1',
          800: '#004baf',
          900: '#003c8c',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      boxShadow: {
        'chat': '0 8px 32px rgba(124, 58, 237, 0.12)',
        'message': '0 4px 12px rgba(124, 58, 237, 0.08)',
        'glow': '0 0 20px rgba(124, 58, 237, 0.2)',
      },
      animation: {
        'bounce-slow': 'bounce 1.5s infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};