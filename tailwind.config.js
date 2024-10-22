/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
        third: "",
        header: {
          primary: "#1F1F1F",
          border: "rgba(44, 44, 44, 0.49)",
        },
        buttonColor: {
          primary: "#CCF575",
        },
      },
    },
  },
  plugins: [],
};
