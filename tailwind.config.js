const plugin = require("tailwindcss/plugin")
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#ffe5d1",
          100: "#ffd4b1",
          200: "#ffba87",
          300: "#ff9e5b",
          400: "#ff8435",
          500: "#ff6a12",
          600: "#e65910",
          700: "#cc480e",
          800: "#b33a0c",
          900: "#992f0b",
        },
      },
      fontFamily: {
        futura: ['var(--futura-font)', ...fontFamily.sans]
      },
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"])
    }),
  ],
}
