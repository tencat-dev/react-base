import {defineConfig} from 'vite'
import {devtools} from '@tanstack/devtools-vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import {tanstackRouter} from '@tanstack/router-plugin/vite'
import {fileURLToPath, URL} from 'node:url'
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    process.env.NODE_ENV !== "production" && devtools(),

    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),

    viteReact(),
    tailwindcss(),

    process.env.NODE_ENV === "production" && compression({
      algorithm: "brotliCompress"
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    minify: "esbuild",
    target: "es2020",
    sourcemap: process.env.NODE_ENV !== "production",
    cssCodeSplit: process.env.NODE_ENV === "production",
    cssMinify: process.env.NODE_ENV === "production",
    assetsInlineLimit: 2048, // 2kb

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("@tanstack/react-router")) return "react-router";
            if (id.includes("@tanstack/react-query")) return "react-query";
            if (id.includes("@tanstack/react-table")) return "react-table";
            if (id.includes("@tanstack/react-form")) return "react-form";
            if (id.includes("zod")) return "zod";
            if (id.includes("lucide-react")) return "icons";
            return "vendor";
          }
        },
      },
    },
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
})
