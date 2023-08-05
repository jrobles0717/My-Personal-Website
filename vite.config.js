import compression from "vite-plugin-compression";
import { defineConfig } from "vite";
import { minify } from "terser";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "terser-plugin",
      async transform(code, id) {
        if (id.endsWith(".js")) {
          const minified = await minify(code);
          return minified.code;
        }
      },
    },
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
});
