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
    },
    opacity: {
      36: ".36",
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
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
