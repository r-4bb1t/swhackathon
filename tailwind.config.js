/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d76e75",
        secondary: {
          light: "#feebdc",
          DEFAULT: "#e5a1a0",
        },
        error: "#ff6b00",
        black: {
          200: "#f6f7f9",
          400: "#dddddd",
          600: "#676767",
          800: "#444444",
          DEFAULT: "#000000",
        },
        White: "#ffffff",
      },
    },
    plugins: [],
  },
};
