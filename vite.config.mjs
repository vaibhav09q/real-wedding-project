import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative paths let the finished build travel with its assets.
export default defineConfig({ base: './', plugins: [react()] })
