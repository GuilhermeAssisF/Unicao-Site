// postcss.config.mjs

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Correção: Usar o plugin explícito do v3
    'tailwindcss': {},
    'autoprefixer': {},
  },
}

export default config;