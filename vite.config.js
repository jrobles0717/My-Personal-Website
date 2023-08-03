import compression from "vite-plugin-compression";
import { defineConfig } from "vite";
import { minify } from "terser";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
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
      algorithm: "gzip", // Set the compression algorithm (gzip, brotli)
      ext: ".gz", // Specify the compressed file extension
    }),
  ],
});
