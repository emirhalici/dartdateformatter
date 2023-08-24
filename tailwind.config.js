/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Manrope', 'Poppins', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      colors: {
        // https://realtimecolors.com/?colors=0a121c-f2f8ff-1a47a7-daebff-4e4e8d
        // https://realtimecolors.com/?colors=f2f8ff-0a121c-1a47a7-001e41-a6a6ce
        'theme-text': '#0a121c',
        'theme-background': '#b4cae4',
        'theme-primary': {
          50: '#ecf2f8',
          100: '#dae4f1',
          150: '#c7d7eb',
          200: '#b4cae4',
          250: '#a1bcdd',
          300: '#8fafd6',
          350: '#7ca2d0',
          400: '#447abb',
          500: '#3d6da9',
          600: '#2f5583',
          700: '#294970',
          800: '#1b314b',
          900: '#0e1825'
        },
        'theme-accent': colors.slate
      }
    }
  },
  plugins: []
};
