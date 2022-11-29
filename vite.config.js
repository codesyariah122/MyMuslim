import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";

export default defineConfig({
  server: {
    port: 3030,
  },

  root: "./src/",
  plugins: [],
});
