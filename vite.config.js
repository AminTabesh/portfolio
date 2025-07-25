import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/",
  plugins: [vue()],
  optimizeDeps: {
    include: ["@vueuse/core", "@vueuse/motion"],
  },
});
