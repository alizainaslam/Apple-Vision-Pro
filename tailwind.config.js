/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        custom: "rgb(29, 29, 31)",
      },
      colors: {
        primaryColor: "rgb(255, 255, 255)",
        optionalColor: "#e8e8ed",
      },
    },
  },
  plugins: [],
};
