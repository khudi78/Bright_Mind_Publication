import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()],
  // css: {
  //   transformer: "postcss", // ⬅ force fallback
  // },
  // base:"/BMP-frontend/",
})
