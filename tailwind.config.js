/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["autumn", "night"],
    darkTheme: "night",
  },
  plugins: [require("daisyui")],
};
