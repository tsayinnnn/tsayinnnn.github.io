import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 Add this
  base: "MyPortfolio/", // 👈 Change this to your repository name
  plugins: [react()],
})