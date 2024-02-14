/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        container: "58rem",
        paragraph: "23.5rem",
        title: "21.62rem",
        input: "23.5rem",
        button: "23.5rem",
        "success-container": "31.5rem",
      },
      height: {
        button: "3.5rem",
        "success-container": "32.5rem",
      },
      padding: {
        container: "1.5rem",
        formContainer: "4rem 4rem 4rem 2.5rem",
        input: "1rem 1.5rem",
        successContainer: "4rem",
      },
      borderRadius: {
        container: "2.25rem",
        input: "0.5rem",
      },
      fontSize: {
        h1: "3.5rem",
        p: "1rem",
        label: "0.75rem",
        button: "1rem",
      },
      fontWeight: {
        regular: "400",
        bold: "700",
      },
      gap: {
        list: "1rem",
        1: "1rem",
      },
      margin: {
        list: "0 0 0.62rem 0",
        form: "0 0 1.5rem 0",
        label: "0 0 0.5rem 0",
        iconSuccess: "0 0 2.5rem 0",
        successTitle: "0 0 1.5rem 0",
      },
      lineHeight: {
        title: "100%",
        label: "150%",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        button: "0px 16px 32px 0px",
      },
    },
    colors: {
      transparent: "transparent",
      "dark-navy": "#242742",
      white: "#FFF",
      gray: "rgba(25, 24, 43, 0.25)",
      red: "#FF6155",
      "gradient-start": "#FF6A3A 0%",
      "gradient-end": "#FF527B 100%",
      boxShadow: "rgba(255, 97, 85, 0.50)",
      "bg-input-error": "rgba(255, 97, 85, 0.15)",
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
