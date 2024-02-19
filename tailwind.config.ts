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
        typing: 'typing 3.5s steps(183), blink 0.5s infinite',
      },
      keyframes: {
        blink: {
          from: { 'border-right-color': 'transparent' },
          to: { 'border-right-color': 'black' },
        },
        typing: {
          from: {
            width: '0',
          },
          to: {
            width: '10ch',
          },
        },
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
