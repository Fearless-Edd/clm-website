/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FEFDFC",
        btnColor:"#1D2130",
        foregrround:"#F4F3F3",

      },
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
