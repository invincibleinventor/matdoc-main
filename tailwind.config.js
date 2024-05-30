/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#1BA098",
        "primary-brown": "#D48166",
        "secondary-sky": "#E1F2F7",
        "orange-550": "#ffcbae",
        "yellow-550": "#f0be43",
        "green-550": "#5ca65b",
        "violet-550": "#bfcdff",
        "blue-550": "#528ad5",
        "red-550": "#FFACAC",
        "blue-650": "#528ad5",
        "yellow-650": "#f0be43",
        "green-650": "#5ca65b",
      },
      screens: {
        mmd: "928px",
      },
    },
  },
  plugins: [],
};
