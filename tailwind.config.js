/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A1330",
          900: "#0E1B3D",
          800: "#152A5C",
          700: "#1E3A73",
        },
        ink: "#1F2430",
        accent: {
          DEFAULT: "#2F5FFF",
          dark: "#2347D6",
          light: "#E8EDFF",
        },
        sand: "#F7F8FA",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        prose: "72ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 27, 61, 0.06), 0 1px 0 rgba(15,27,61,0.04)",
      },
    },
  },
  plugins: [],
};
