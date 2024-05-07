/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#1BA098",
        "primary-brown": "#D48166",
        "secondary-sky": "#E1F2F7",
        "orange-550": "#ffedac",
      },
    },
  },
  plugins: [],
};
