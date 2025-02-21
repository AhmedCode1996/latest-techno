import { defineConfig } from "vite";

import TurboConsole from "unplugin-turbo-console/vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import checker from "vite-plugin-checker";
import removeConsole from "vite-plugin-remove-console";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    TurboConsole(),
    checker({
      typescript: true,
      // eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
    }),
    removeConsole(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
