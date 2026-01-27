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
        bulltech: {
          blue: '#4EC7E8',
          pink: '#E987B4',
          teal: '#138F9E',
          dark: '#111214',
          neon: '#16FFF0',
          black: '#000000',
          gray: '#2B2B2B',
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        marker: ['var(--font-marker)', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
