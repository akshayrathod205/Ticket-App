/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#f5f5f5",
        page: "#ffffff",
        card: "#f1f1f1",
        "card-hover": "#e1e1e1",
        "default-text": "#333333",
        "blue-accent": "#1a73e8",
        "blue-accent-hover": "#1669d1",
      },
    },
  },
  plugins: [],
};
