/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        crimson: "var(--font-crimson-text)",
        barlow: "var(--font-barlow-condensed)",
      },
      colors: {
        palette: {
          50: "#eaeaea",
          100: "#acaba9",
          200: "#75706f",
          300: "#2c2c2c",
          400: "#121212",
        },
      },
    },
  },
  plugins: [],
};
