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
        'custom-pattern': "url('/SVG/plane.svg')",
      },
      fontFamily: {
        fustat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        thin:'300',
        extralight: '100',
        light: '200',
        regular: '500',
        medium: '400',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black:'900'
      }
    },
  },
  plugins: [],
};
export default config;
