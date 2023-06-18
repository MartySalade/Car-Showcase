/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        black: "#2B2C35",
        white: "#FFFFFF",
        "white-grey": "#F5F8FF",
        "primary-blue": "#2B59FF",
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/assets/images/pattern.png')",
        "hero-bg": "url('/assets/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
