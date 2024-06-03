/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#0C8D90',
        cream: '#E8E3C3',
        mustard: '#DEA937',
        orange: '#CE4A1C',
        brown: '#4E3B2B',
      },
      fontFamily: {
        vt323: ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
}
