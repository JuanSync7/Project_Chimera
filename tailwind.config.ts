import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'],
        headline: ['var(--font-inter)', 'sans-serif'],
        code: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      boxShadowColor: { 
        primary: 'hsl(var(--primary))',
        accent: 'hsl(var(--accent))',
        yellow: { // Assuming Tailwind's yellow-500 is close to #eab308
          500: '#eab308', 
        },
        lime: { // Assuming Tailwind's lime-500 is close to #84cc16
          500: '#84cc16',
        },
        green: { // Assuming Tailwind's green-600 is close to #16a34a
            600: '#16a34a',
        },
        rose: { // Assuming Tailwind's rose-500 is close to #f43f5e
            500: '#f43f5e',
        },
        violet: { // Assuming Tailwind's violet-500 is close to #8b5cf6
            500: '#8b5cf6',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }], // 12px (default)
        'sm': ['0.9296875rem', { lineHeight: '1.328125rem' }], // ~15px (was 14px)
        'base': ['1.0625rem', { lineHeight: '1.59375rem' }],   // 17px (was 16px)
        'lg': ['1.1953125rem', { lineHeight: '1.85625rem' }],  // ~19px (was 18px)
        'xl': ['1.328125rem', { lineHeight: '1.85625rem' }],  // ~21px (was 20px)
        '2xl': ['1.59375rem', { lineHeight: '2.125rem' }],   // ~25.5px (was 24px)
        '3xl': ['1.9921875rem', { lineHeight: '2.38671875rem' }], // ~31.8px (was 30px)
        '4xl': ['2.38671875rem', { lineHeight: '2.65625rem' }],   // ~38.1px (was 36px)
        '5xl': ['3.1875rem', { lineHeight: '1' }],        // 51px (was 48px)
        '6xl': ['3.984375rem', { lineHeight: '1' }],      // ~63.75px (was 60px)
        '7xl': ['4.78125rem', { lineHeight: '1' }],       // ~76.5px (was 72px)
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
