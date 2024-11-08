/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-pattern' : "url('../common/constant/background-pattern.svg')"
      },
      colors: {
        "primary-light": "rgb(253 214 166)",
        "primary-dark": "rgb(245 180 107)",
        "secondary-darkred": "rgb(37 18 5)",
        "secondary-purple": "rgb(53 34 70)",
        "background-dark": "rgb(25 0 2)",
        "text-light": "rgb(252 252 252)",
        "text-dark": "rgb(29 29 33)"
      },
      keyframes: {
        "fly-lr": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "fly-in": "fly-lr 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
