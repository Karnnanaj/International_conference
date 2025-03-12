/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // Include all JS, JSX, TS, and TSX files in the src folder
    "./public/index.html",           // Include the index.html in case you're using it
  ],
  theme: {
    extend: {
      screens: {
        mobile: "425px",             // Custom breakpoint for mobile
        tablet: "800px",             // Custom breakpoint for tablet
        pc: "1200px", 

        mobiled: { max: "425px" },    // Custom breakpoint for mobile
        tabletd: { max: "1200px",min:"425px" },   // Custom breakpoint for tablet
        pcd: { min: "1200px" },              // Custom breakpoint for pc
      },
      fontFamily: {
        defmono: ["Inconsolata", "monospace"],  // Custom font family for defmono
        defgridlr: ["IBM Plex Mono", "monospace"], // Custom font family for defgridlr
      },
    },
  },
  plugins: [],
};
