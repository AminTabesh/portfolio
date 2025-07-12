module.exports = {
  prefix: "tw-",
  important: true,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: [
        "Vazirmatn",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
      raleway: ["Raleway", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "theme-gray": {
          900: "#0C0C0D",
          800: "#131313",
          700: "#272727",
          400: "#6F6F6F",
          300: "#C8C8C8",
        },
        "theme-green-500": "#5FB9B0",
        "theme-purple-500": "#B292FF",
        "theme-white": "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};
