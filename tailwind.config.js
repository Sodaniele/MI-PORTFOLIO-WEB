/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // TU NUEVA PALETA MINIMALISTA
        'canvas': '#FAFAFA',       // Blanco roto / Papel (Fondo principal)
        'canvas-dark': '#F4F4F5',  // Un gris muy clarito (Para tarjetas o secciones alternas)
        'ink': '#18181B',          // Negro Carbón (Para títulos y texto principal)
        'ink-light': '#71717A',    // Gris Medio (Para textos secundarios)
        'accent': '#E4E4E7',       // Gris pálido (Para bordes y líneas finas)
      },
      fontFamily: {
        // Aseguramos que Inter sea la fuente por defecto si usas 'font-sans'
        sans: ['Inter', 'sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}