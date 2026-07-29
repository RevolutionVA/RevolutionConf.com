/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Exo", defaultTheme.fontFamily.sans],
      },
      colors: {
        revconf: {
          // Brand red, taken from the logo. Used for accents/marks.
          base: "#EA262D",
          // Page background. Darker so white body text clears WCAG AA
          // (6.96:1 vs 4.36:1 on `base`, which fell short of 4.5:1).
          deep: "#B31217",
        },
      },
    },
  },
  plugins: [],
};
