import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom: "0 0 10px #c4c4c4",
      },
      textShadow: {
        custom: '2px 12px 26px 3px rgba(6, 181, 221, .3)'
      }
    },
  },
  plugins: [],
};
export default config;
