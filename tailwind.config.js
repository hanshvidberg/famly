const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    ringColor: {
      DEFAULT: "#fef0cd",
    },

    extend: {
      colors: {
        primary: "#fef9ec",
        secondary: "#591ab2",
        tertiary: "#f9f6fe",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
