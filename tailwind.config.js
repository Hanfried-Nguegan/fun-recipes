/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkychoco: "#f9c8da",
      },
      screens: {
        sm: "448px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
