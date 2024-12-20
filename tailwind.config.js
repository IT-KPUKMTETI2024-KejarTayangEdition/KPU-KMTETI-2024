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
        'main-pattern' : "url('../common/constant/background-pattern.svg')",
        'landing-top' : "url(../common/constant/landing-page/top.svg)",
        'landing-bottom' : "url(../common/constant/landing-page/bottom.svg)",
        'committee-acara' : "url(../common/constant/about/committee/acara.svg)",
        'committee-dmd' : "url(../common/constant/about/committee/dmd.svg)",
        'committee-it' : "url(../common/constant/about/committee/it.svg)",
        'committee-perkap' : "url(../common/constant/about/committee/perkap.svg)",
        'committee-ph' : "url(../common/constant/about/committee/ph.svg)",
        'committee-pr' : "url(../common/constant/about/committee/pr.svg)",
      },
      colors: {
        "primary-light": "rgb(253 214 166)",
        "primary-dark": "rgb(245 180 107)",
        "secondary-darkred": "rgb(37 18 5)",
        "secondary-purple": "rgb(53 34 70)",
        "background-dark": "rgb(25 0 2)",
        "text-light": "rgb(252 252 252)",
        "text-dark": "rgb(29 29 33)",
        "placeholder-blue": "rgb(35 62 81)",
        "placeholder-skyblue": "rgb(42 161 224)",
        "error-red": "rgb(150 0 9)",
        "woodbrown": "rgb(101 49 17)",
      },
      keyframes: {
        "fly-lr": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-r-to-l" : {
          from: {
            transform: "translateX(100%)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "slide-l-to-r" : {
          from: {
            transform: "translateX(-100%)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "1"
          },
        },
        "spin-custom" : {
          from: {transform: "rotate(0deg)"},
          to: {transform: "rotate(360deg)"}
        }
      },
      animation: {
        "fly-in": "fly-lr 0.3s ease-in-out",
        "in-slide-r-to-l" : "slide-r-to-l 0.7s ease-in-out",
        "in-slide-l-to-r" : "slide-l-to-r 0.7s ease-in-out",
        "spin-custom-speed" : "spin-custom 4s linear infinite"
      },
      screens: {
        'mobile-s' : '320px',
        'mobile-m' : '375px',
        'mobile-l' : '420px',
        'mobile-l-tablet' : '594px',
        'tablet' : '768px',
        'laptop' : '1024px'
      }
    },
  },
  plugins: [],
};
