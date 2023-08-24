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
        'theme-background': '#f2f8ff',
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
        // 'theme-accent': {
        //   50: '#efeff6',
        //   100: '#dedeed',
        //   150: '#cecee4',
        //   200: '#bdbddb',
        //   250: '#adadd2',
        //   300: '#9c9cc9',
        //   350: '#8c8cc0',
        //   400: '#7b7bb7',
        //   450: '#6b6bae',
        //   500: '#5b5ba4',
        //   550: '#515194',
        //   600: '#484884',
        //   650: '#3f3f73',
        //   700: '#363663',
        //   750: '#2d2d52',
        //   800: '#242442',
        //   850: '#1b1b31',
        //   900: '#121221'
        // }
      }
    }
  },
  plugins: []
};
