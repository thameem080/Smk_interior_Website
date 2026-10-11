/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#4C2D19',
          tan: '#CBB078',
          cream: '#F5EFE3',
          dark: '#171311',
          accent: '#B77B52',
          surface: '#FFFFFF',
          'surface-warm': '#EDE4D6',
          muted: '#5A524C',
          primary: '#1F1916'
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Manrope"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', '"Fira Code"', 'monospace'],
        display: ['"Cinzel"', 'serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        'xs': ['0.8125rem', { lineHeight: '1.25rem' }],
        'sm': ['0.9375rem', { lineHeight: '1.5rem' }],
        'base': ['1.0625rem', { lineHeight: '1.75rem' }],
        'lg': ['1.1875rem', { lineHeight: '1.75rem' }],
        'xl': ['1.375rem', { lineHeight: '2rem' }],
        '2xl': ['1.625rem', { lineHeight: '2.25rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.5rem', { lineHeight: '3rem' }],
        '5xl': ['3.25rem', { lineHeight: '3.75rem' }],
        '6xl': ['4rem', { lineHeight: '4.5rem' }],
        '7xl': ['5rem', { lineHeight: '5.25rem' }],
        '8xl': ['6rem', { lineHeight: '6.25rem' }],
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'bezel': 'inset 0 1px 1px rgba(255, 255, 255, 0.25), 0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'bezel-dark': 'inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      transitionTimingFunction: {
        'fluid': 'cubic-bezier(0.32, 0.72, 0, 1)',
      }
    },
  },
  plugins: [],
}
