/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-grey": "#f4f4f5"
      },
      borderRadius: {
        "radius": "0.5rem"
      },
      boxShadow: {
        "input": "#5199fd 0px 0px 0px 1px"
      }
    },
  },
  plugins: [],
};