/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColorStopPositions: {
        33: "33%",
      },
      minHeight: {
        "1/2": "50%",
      },
      screens: {
        xs: "475px",
      },
      spacing: {
        '128': '32rem',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        panettone: {
          100: "#E5DECE",
          200: "#8F846A",
          300: "#5C5442",
          600: "#483D25",
          900: "#3E3215",
        },
        enchilada: {
          100: "#A1ACAE",
          200: "#536467",
          300: "#293639",
          500: "#212F32",
          600: "#18292C",
          900: "#0E2226",
        },
        lilprince: {
          100: "#6F6980",
          200: "#524C62",
          300: "#342F3F",
          600: "#221C31",
          900: "#19112B",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/line-clamp'),
  ],
};
