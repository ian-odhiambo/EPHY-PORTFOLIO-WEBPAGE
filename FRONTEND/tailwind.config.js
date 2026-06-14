/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          amber: "#ffb703",
          purple: "#6d28d9",
          dark: "#0b0b0b",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          " -apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
        ],
        display: ["Playfair Display", "serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
