import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myteal: "#446161", // custom color name
      },
      borderColor: {
        myteal: "#446161",
      },
    },
  },
  plugins: [],
};

export default config;
