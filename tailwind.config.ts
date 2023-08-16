import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      normal: '1rem',
      md: '1.3rem',
      lg: '1.8rem',
      xl: '2.4rem',
      xxl: '3.6rem',
      xxxl: '5rem'
    },
    colors: {
      white: "#FFFFFF",
      black: '#1E1E1E',
      blue: "#3A62F2",
      lightBlue: "#F4F6FE",
      darkBlue: "#050D2A",
      DarkGray: '#B8B8B8',
      lightGray: "#5E5E5E",
      red: "#E60000",
    },
    extend: {
      screens: {
        'sm': '200px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
export default config
