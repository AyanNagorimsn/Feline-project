/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // To use them 'text-primary, bg-primaryLight, border-black etc'
      primary: "var(--primary)",
      primaryLight: "var(--primaryLight)",
      black: "var(--black)",
      white: "var(--white)",
      whitebg: "var(--whitebg)",
      extend: {},
    },
  },
  plugins: [],
};
