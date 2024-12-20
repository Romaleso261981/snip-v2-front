import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#322D20",
        brown: "#F0E2C9",
        blue: "#F0E2C9",
        darkBrown: "#C5A262",
        white: "#F3F2EE",
        gold: { DEFAULT: "#9F8652", light: "#C3A47E", dark: "#7F7045", },
      },
      fontSize: {
        xxxl: ["40px", { lineHeight: "120%" }],
        xxl: ["32px", { lineHeight: "120%" }],
        xl: ["24px", { lineHeight: "120%" }],
        lg: ["18px", { lineHeight: "140%" }],
        md: ["16px", { lineHeight: "140%" }],
        sm: ["14px", { lineHeight: "120%" }],
        xs: ["12px", { lineHeight: "14.4px" }],
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
