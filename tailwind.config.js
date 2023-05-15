/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1180px",
      // => @media (min-width: 1400px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Muslich: ["Mulish", "sans-serif"],
        MediumPoppins: ["Poppins", "sans-serif"],
        InterSemiBold: ["Inter", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        LexendDeca: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        "custom-apple-color": "#223548",
        "custom-apple-hover": "#ebecef",
        "custom-apple-sidebar": "#DDE0E5",
      },
      boxShadow: {
        custom: "0rem 0.0625rem 0.0625rem #1f21241a",
        customMedium: "0rem 0.0625rem 0.0625rem #1f21241a",
      },
    },
  },
  plugins: [],
};
