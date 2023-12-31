/** @type {import('tailwindcss').Config} */
const PRIMARY_ACCENT = "#8B5CF6"
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xs: '100%',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    },
    extend: {
      screens: {
        'xs': '375px',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        bangers: ['var(--font-bangers)'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'primary-accent': PRIMARY_ACCENT,
        'secondary-text': "#A3A3A3",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pulsing": {
          from: { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
          to: { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulsing": "pulsing 2s linear infinite",
      },
      backgroundImage: {
        'gradient-primary': `linear-gradient(45deg, ${PRIMARY_ACCENT}, #0F172A)`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}