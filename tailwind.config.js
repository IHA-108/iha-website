/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hemp: {
          green: "#3E7B4A",
          sand: "#F5E6C5",
          charcoal: "#2E2E2E",
          gold: "#C9A04B"
        }
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    },
  },
  plugins: [],
}
