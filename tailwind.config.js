/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily:{
      //   'mukta':['Mukta']
      // },
      colors: {
        primary: "#141414",
        secondary: "",
        third: "",
        header: {
          primary: "#1F1F1F",
          border: "rgba(44, 44, 44, 0.49)",
        },
        button: {
          primary: "#CCF575",
          secondary: "#303030",
        },
        textPrimary: "#FFFFFF",
        textSecondary: "#A7A7A7",
        input: {
          primary: "#202020",
          secondary: "#B8B8B8",
          third: "#707070",
          border: "#424647",
        },
      },
    },
  },
  plugins: [],
};
