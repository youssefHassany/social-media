/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 300ms ease-in-out',
      }
    },
  },
  plugins: [],
}