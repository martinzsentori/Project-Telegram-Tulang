/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./components/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // Specify the themes you want to use
      "light", // Default light theme
      // You can add more themes here if needed, like "cupcake", "dracula", etc.
    ],
    darkTheme: false, // Disable dark mode
  },
};
