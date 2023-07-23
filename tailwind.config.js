/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

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
        white: "#ffffff",
      },
    },
    fontSize: {
      h1: {
        fontSize: "22px",
        lineHeight: "34px",
        fontWeight: "700",
      },
      h2: {
        fontSize: "20px",
        fontWeight: "600",
      },

      "subtitle-lg": {
        fontSize: "18px",
        lineHeight: "28px",
        fontWeight: "600",
      },
      "subtitle-bold": {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "600",
      },
      subtitle: {
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400",
      },

      "body-lg": {
        fontSize: "17px",
        fontWeight: "400",
      },
      "body-bold": {
        fontSize: "17px",
        fontWeight: "700",
      },
      body: {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "400",
      },

      "caption-sm": {
        fontSize: "10px",
        lineHeight: "16px",
        fontWeight: "400",
      },
      caption: {
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: "600",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d76e75",
          secondary: "#e5a1a0",
          accent: "#feebdc",
          error: "#ff6b00",
        },
      },
    ],
  },
  plugins: [daisyui],
};
