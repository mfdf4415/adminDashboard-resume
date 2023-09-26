const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#0487C8",
      input_bg: "#E6E6E6",
      danger: "#C80200",
      success: "#5CB85C",
      text_bold: "#666666",
      text_light: "#9E9E9E",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      grenn:colors.green,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      stone: colors.warmGray,
      sky: colors.lightBlue,
      neutral: colors.trueGray,
      gray: colors.coolGray,
      slate: colors.blueGray,
      lime: colors.lime,
      rose: colors.rose,
    }
  },
  plugins: [],
}