import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        text: 'text 5s ease infinite',
        typing: 'typing 3.5s steps(10, end)',
        'blink-caret': 'blink-caret .75s step-end infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink-caret': {
          from: { borderColor: 'transparent' },
          to: { borderColor: 'transparent' },
          '50%': { borderColor: 'orange' },
        },
      },
      borderWidth: {
        '2': '2px',
      },
      borderColor: {
        orange: '#FFA500',
      },
      letterSpacing: {
        tighter: '.15em',
      },
      images: {
        unoptimized: true,
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
