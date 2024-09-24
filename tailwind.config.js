/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        thin: "0.05px",
        "thin-md": "0.1px",
      },
      colors: {
        retroBg: "#e4e1ce",
        retroText: "#4f4f4f",
        retroHighlight: "#61bb46",
        Yellop: "#F6AE2D",
        Orango: "#FF8700",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        retro: ['"Press Start 2P"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
