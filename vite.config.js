import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";

export default defineConfig({
  server: {
    port: 3030,
  },
  build: {
    outdir: "./src/dist/",
  },
  root: "./src/",
  plugins: [
    inject({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
});
