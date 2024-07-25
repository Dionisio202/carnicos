/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#191716',
        'custom-red': '#441A1D',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #441A1D, #000000)',
      }
    },
  },
  plugins: [],
}