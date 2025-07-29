import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/crisp/",
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@styles": "/src/styles",
    },
  },
});
