/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f2f2f2",
        "secondary": "#333333",
        "tertiary": "#555555",
        "quaternary": "#4CAF50",
      },
    },
    screens: {
      'sm': {'max':'640px'},
      'md': {'max':'768px'},
      'lg': {'max':'1024px'},
      'xl': {'max':'1280px'},
      '2xl': {'max':'1536px'},
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};