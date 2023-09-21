/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#57B846",
      input_bg: "#E6E6E6",
      danger: "#C80200"
    }
  },
  plugins: [],
}