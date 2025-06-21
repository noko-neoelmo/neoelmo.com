import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "client"), // 明示的な絶対パスでのルート指定（Vercel対策）
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"), // "@/..." が client/src に解決される
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "client", "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
          motion: ["framer-motion"],
        },
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
      allow: [
        path.resolve(__dirname, "client"), // ← これを追加して、ビルド時のimport範囲を明示
        path.resolve(__dirname, "shared"),
        path.resolve(__dirname, "attached_assets"),
      ],
    },
  },
});
