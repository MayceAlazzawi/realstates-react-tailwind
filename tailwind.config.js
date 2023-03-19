/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // extend: {
    colors: {
      mint: "#8DD3BB",
      darkGreen: "#112211",
      LightMint: "#CDEAE1",
      salmon: "#FF8682",
      gray: " #79747E",
    },
    opacity: {
      36: ".36",
    },
    fontFamily: {
      body: ["Montserrat"],
    },
    backgroundImage: {
      hero: "url('./assets/images/hero0.png')",
      hero1: "url('./assets/images/hero1.png')",
    },
    // },
  },
  plugins: [],
};
