/** Sumti Traders — Tailwind theme starter
 *  Copy into tailwind.config.js or merge with the project's existing config.
 */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
        brand: {
          firsttouch:      { DEFAULT: '#7a3a2a', cream: '#f0dac7' },
          swarnika:        { DEFAULT: '#8a5028', cream: '#ecdbb7' },
          ft:              { DEFAULT: '#2c2520', cream: '#e8d9b7' },
        },
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
      fontSize: {
        // tracks the design's hero / section / pull / body
        'hero-d':  ['156px', { lineHeight: '0.88', letterSpacing: '-0.02em' }],
        'hero-m':  ['54px',  { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'h2-d':    ['64px',  { lineHeight: '0.95' }],
        'h2-m':    ['38px',  { lineHeight: '0.95' }],
        'pull-d':  ['28px',  { lineHeight: '1.35' }],
        'pull-m':  ['18px',  { lineHeight: '1.35' }],
        'body':    ['14px',  { lineHeight: '1.7' }],
        'body-sm': ['13px',  { lineHeight: '1.6' }],
        'eyebrow': ['11px',  { lineHeight: '1' }],
      },
      borderRadius: {
        card: '0',
        chip: '9999px',
      },
      boxShadow: {
        emboss: 'inset 6px 6px 18px rgba(58,24,32,.08), inset -6px -6px 18px rgba(255,250,235,.7)',
        logo:   '0 8px 22px rgba(58,24,32,.12)',
      },
      animation: {
        spin240: 'spin 240s linear infinite',
        marquee: 'marquee 40s linear infinite',
        fadeup:  'fadeup 0.8s ease both',
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
      backgroundImage: {
        'hairline-gold': 'linear-gradient(90deg, transparent, #8a6d2a 50%, transparent)',
      },
    },
  },
  plugins: [],
};
