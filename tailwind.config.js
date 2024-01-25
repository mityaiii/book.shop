/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "'Raleway', 'sans-serif'",
    },
    extend: {
      colors: {
        primary: '#f9e595',
      },
      gridTemplateColumns: {
        'main': 'repeat(auto-fit, minmax(18rem, 1fr))',
      }
    },
  },
  plugins: [],
});
