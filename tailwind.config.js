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
        "yellow-550": "#ffedac",
        "green-550": "#b1e58e",
        "violet-550": "#bfcdff",
        "blue-550": "#b0ddff",
        "red-550": "#FFACAC",
      },
    },
  },
  plugins: [],
};
