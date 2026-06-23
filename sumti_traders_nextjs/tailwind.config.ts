import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          paper:  '#faf3e0',
          base:   '#f5ebd1',
          warm:   '#efe1be',
          sand:   '#e6d4a8',
          deep:   '#d4bd87',
          shadow: '#c7a866',
        },
        ink: {
          DEFAULT: '#1a1612',
          soft:    '#3a322a',
          muted:   '#6b5e4f',
        },
        gold: {
          DEFAULT: '#8a6d2a',
          soft:    '#a3863f',
        },
        burgundy: '#3a1820',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        thin:    ['Italiana', '"Cormorant Garamond"', 'serif'],
        script:  ['"Pinyon Script"', 'cursive'],
        body:    ['Manrope', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        caps:    ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
        caps:    '0.26em',
        wider:   '0.28em',
        decor:   '0.3em',
      },
      animation: {
        'spin-slow': 'spin 240s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'fadeup': 'fadeup 0.8s ease both',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to':   { transform: 'translateX(-50%)' },
        },
        fadeup: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
