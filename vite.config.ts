import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { fileURLToPath, URL } from 'node:url'
import compression from 'vite-plugin-compression'

import { analyzer } from 'vite-bundle-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    process.env.NODE_ENV !== 'production' && devtools(),

    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),

    viteReact(),
    tailwindcss(),

    process.env.NODE_ENV === 'production' &&
      compression({
        algorithm: 'brotliCompress',
      }),

    analyzer(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    minify: 'esbuild',
    target: 'es2020',
    sourcemap: process.env.NODE_ENV !== 'production',
    cssCodeSplit: process.env.NODE_ENV === 'production',
    cssMinify: process.env.NODE_ENV === 'production',
    assetsInlineLimit: 2048, // 2kb

    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          'react-router': ['@tanstack/react-router'],
          'react-query': ['@tanstack/react-query'],
          'react-table': ['@tanstack/react-table'],
          'react-form': ['@tanstack/react-form'],
          zod: ['zod'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
