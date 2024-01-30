import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const CustomStyle = plugin(function ({addUtilities}) {
  addUtilities({
    ".rotate-y-180" : {
      transform : "rotateY(180deg)"
    },
    ".preserve-3d" : {
      transformStyle : "preserve-3d"
    },
    ".perspective-1000" : {
      perspective : "1000px"
    },
    ".backface-hidden" : {
      backfaceVisibility : "hidden",
    }
  })
}) 

const config: Config = {
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
    },
  },
  plugins: [CustomStyle],
};

export default config;
