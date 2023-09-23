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
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
      },
      // backgroundImage: {
      //   "hero": "url('')"
      // }
    },
  },
  plugins: [],
}
export default config
