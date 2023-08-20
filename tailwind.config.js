/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-dark': `linear-gradient(to bottom right, ${theme(
          'colors.gray.700'
        )}, ${theme('colors.gray.900')})`,
        'gradient-light': `linear-gradient(to bottom right, ${theme(
          'colors.neutral.100'
        )}, ${theme('colors.blue.200')})`
      })
    }
  },
  plugins: []
};
