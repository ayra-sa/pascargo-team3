import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1400px"
        }
      },
      screens: {
        xs: "480px",
        xxs: "380px",
      },
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)"
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      backgroundImage: {
        "hero": "url('/images/bg-hero.png')",
        "mission": "url('/images/bg-our-mission.png')",
        "second-nav": "url('/order/bg-nav.png')"
      },
      boxShadow: {
        "btn": "0px 4px 4px 0px rgba(0, 0, 0, 0.50)"
      }
    },
  },
  plugins: [],
}
export default config
