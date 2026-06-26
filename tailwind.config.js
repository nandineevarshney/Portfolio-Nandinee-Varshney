/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabinet: ["Cabinet Grotesk", "Syne", "Georgia", "serif"],
        dm: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        brand: "#5634dd",
      },
      maxWidth: {
        page: "1920px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        spinSlow: {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        carouselProgress: {
          "0%":   { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        marquee:  "marquee 28s linear infinite",
        fadeUp:   "fadeUp 0.6s ease forwards",
        spinSlow: "spinSlow 8s linear infinite",
        carouselProgress: "carouselProgress 5s linear forwards",
      },
    },
  },
  plugins: [],
};
