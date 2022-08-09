/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {},
    colors: {
      'very-dark-gray': '#2b2b2b',
      'dark-gray': '#969696'
    }
  },
  plugins: [],
}
