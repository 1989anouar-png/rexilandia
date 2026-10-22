import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const here = (path: string) => fileURLToPath(new URL(path, import.meta.url));

/** Empaqueta la misma RexApp para el WebView de Android. No toca el servidor web. */
export default defineConfig({
  root: here("./android-shell"),
  publicDir: here("./public"),
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": here("./src") },
  },
  build: {
    outDir: here("./android/app/src/main/assets"),
    emptyOutDir: true,
    assetsDir: "pack",
    sourcemap: false,
  },
});
