/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('./public/images/pattern-bg.png')",
      }
    },
    colors: {
      'very-dark-gray': '#2b2b2b',
      'dark-gray': '#969696',
      'light': '#ffffff'
    },
    fontFamily: {
      
    }
  },
  plugins: [],
}