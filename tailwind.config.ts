import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryBlack: "#121212",
        secondaryBlack: "#282828",
        main: "#3358E8",
        text: "#A8A8A8",
        textMain: "#ddd",
        btn: "#2F50CF",
        bg: "#3358E8",
        border: "#232429",
      },
      gridTemplateColumns: {
        "card-md": "repeat(auto-fit, minmax(230px, 1fr))",
        "card-sm": "repeat(auto-fit, minmax(200px, 1fr))",
        blog: "repeat(auto-fit, minmax(330px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
