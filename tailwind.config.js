/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        1: "4rem 4rem 4rem 2.5rem",
      },
      fontWeight: {
        regular: "400",
        bold: "700",
      },
      boxShadow: {
        1: "0px 16px 32px 0px",
      },
    },
    colors: {
      transparent: "transparent",
      darkNavy: "#242742",
      white: "#FFF",
      gray: "rgba(25, 24, 43, 0.25)",
      red: "#FF6155",
      gradientStart: "#FF6A3A 0%",
      gradientEnd: "#FF527B 100%",
      boxShadow: "rgba(255, 97, 85, 0.50)",
      error: "rgba(255, 97, 85, 0.15)",
    },

    screens: {
      sm: "500px",
      md: "980px",
      lg: "1024px",
    },
  },
  plugins: [],
};
