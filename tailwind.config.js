/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        extralight: 200,
        thin: 100,
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      colors: {
        basicwhite: "#FFFFFF",
        basicblack: "#1F1F1F",
        primary: "#246EDE",
        "auths-border": "#ccc",
        "login-input": "#eeeeee",
      },
    },
  },
  plugins: [],
};
