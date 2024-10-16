import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,   
      screens: {
        'lg': '1030px',
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--inter)", ...defaultTheme.fontFamily.sans], 
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },

  },
  plugins: [],
};
export default config;
