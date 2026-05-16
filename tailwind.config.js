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
          900: "var(--c-bg)",
          800: "var(--c-surface)",
          700: "var(--c-surface-2)",
          400: "var(--c-text-muted)",
          300: "var(--c-text-sub)",
        },
        "theme-green-500": "var(--c-green)",
        "theme-purple-500": "var(--c-purple)",
        "theme-white": "var(--c-text)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};
