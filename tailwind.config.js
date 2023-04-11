/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      colors: {
        lavender: {
          light: "hsl(236, 72%, 79%)",
          dark: "hsl(237, 63%, 64%)",
        },
        grayishBlue: {
          veryLight: "hsl(240, 78%, 98%)",
          light: "hsl(234, 14%, 74%)",
          DEFAULT: "hsl(233, 13%, 49%)",
          dark: "hsl(232, 13%, 33%)",
        },
      },
    },
  },
  plugins: [],
};
