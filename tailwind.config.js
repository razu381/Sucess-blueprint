/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "success-primary": {
          100: "#e3effb",
          200: "#c1dff6",
          300: "#8ac5ef",
          400: "#4ca7e4",
          500: "#3498db",
          600: "#176fb2",
          700: "#145990",
          800: "#144c78",
          900: "#164064",
        },
        "success-dark": "#2980b9",
        "success-text": "#2c3e50",
      },
      fontFamily: {
        heading: ["Poppins", "serif"],
        body: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
