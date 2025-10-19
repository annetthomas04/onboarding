/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emerald': {
          400: '#34d399',
        },
        'cyan': {
          400: '#22d3ee',
        },
        'purple': {
          400: '#c084fc',
        },
        'yellow': {
          400: '#facc15',
        },
        'orange': {
          400: '#fb923c',
        }
      }
    },
  },
  plugins: [],
}
