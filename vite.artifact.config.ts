import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

/*
 * Config temporanea, solo per produrre un'unica pagina HTML autonoma da
 * pubblicare con lo strumento Artifact — non fa parte del deploy reale
 * (Cloudflare Pages usa vite.config.ts + npm run build).
 */
export default defineConfig({
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    viteSingleFile(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist-artifact",
    cssCodeSplit: false,
    rollupOptions: {
      input: fileURLToPath(new URL("./artifact.html", import.meta.url)),
    },
  },
});
