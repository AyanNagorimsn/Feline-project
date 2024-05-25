/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // All these variable values are in Index.css
      // To use them 'text-primary, bg-primaryLight, border-black etc'
      primary: "var(--primary)",
      primaryLight: "var(--primaryLight)",
      black: "var(--black)",
      white: "var(--white)",
      whitebg: "var(--whitebg)",
      grey: "var(--grey)",

      extend: {},
    },

    fontFamily: {
      // To use them 'font-cool, font-inter'
      cool: "var(--font-cool)",
      inter: "var(--font-inter)",
    },
  },
  plugins: [],
};
