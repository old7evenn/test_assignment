/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "650px", max: "1024px" },
      sm_custom: { min: "360px", max: "767px" },

      md: { min: "768px", max: "1023px" },
      md_custom: { min: "1025px", max: "1169px" },

      lg: { min: "1024px" },
      lg_custom: { min: "1170px" },
    },
    extend: {
      colors: {},
      maxWidth: {
        "screen-xl": "1170px",
      },
      backgroundImage: {
        "custom-image": "url('../background.png')",
      },
      fontFamily: {
        body: ["Nunito"],
      },
      spacing: {
        "avatar-sz": "clamp(12rem, 25vw + 1px, 22rem)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}