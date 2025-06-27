// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { // Manter a chave 'extend' para a v3
      colors: {
        'custom-amarelo': '#FADA7A',
        'custom-creme': '#FFFBDE',
        'custom-azul-medio': '#0D5EA6',
        'custom-azul-escuro': '#0065F8',
        'custom-azul-card': "#A7E6FF",
        'custom-azul-text-card': "#161179",
      },
    },
  },
  plugins: [],
}
export default config