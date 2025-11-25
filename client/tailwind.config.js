/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          lighter: "var(--color-primary-lighter)",
          lightest: "var(--color-primary-lightest)",
          darker: "var(--color-primary-darker)",
          darkest: "var(--color-primary-darkest)",
        },
        red: {
          DEFAULT: "var(--color-red)",
          light: "var(--color-red-light)",
          dark: "var(--color-red-dark)",
        },
        pink: {
          DEFAULT: "var(--color-pink)",
          light: "var(--color-pink-light)",
          dark: "var(--color-pink-dark)",
        },
        indigo: {
          DEFAULT: "var(--color-indigo)",
          light: "var(--color-indigo-light)",
          dark: "var(--color-indigo-dark)",
        },
        teal: {
          DEFAULT: "var(--color-teal)",
          light: "var(--color-teal-light)",
          dark: "var(--color-teal-dark)",
        },
        yellow: {
          DEFAULT: "var(--color-yellow)",
          light: "var(--color-yellow-light)",
          dark: "var(--color-yellow-dark)",
        },
      },
    },
  },

  plugins: [],
};
