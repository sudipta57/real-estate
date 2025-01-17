/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FF9D00",
      },
      fontFamily: {
        abhaya: ['"Abhaya Libre"', 'serif'], // Add Abhaya Libre
      },
    },
  },
  plugins: [],
};
