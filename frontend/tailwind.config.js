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
        btnColor:"#BE1E2D",
      },
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
