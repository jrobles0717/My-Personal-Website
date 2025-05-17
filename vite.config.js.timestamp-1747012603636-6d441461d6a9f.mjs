// vite.config.js
import { BundleAnalyzerPlugin } from "file:///Users/jrobles/Documents/Projects/React/my-personal-website/node_modules/webpack-bundle-analyzer/lib/index.js";
import compression from "file:///Users/jrobles/Documents/Projects/React/my-personal-website/node_modules/vite-plugin-compression/dist/index.mjs";
import { defineConfig } from "file:///Users/jrobles/Documents/Projects/React/my-personal-website/node_modules/vite/dist/node/index.js";
import { minify } from "file:///Users/jrobles/Documents/Projects/React/my-personal-website/node_modules/terser/main.js";
import react from "file:///Users/jrobles/Documents/Projects/React/my-personal-website/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    // new BundleAnalyzerPlugin(),
    {
      name: "terser-plugin",
      async transform(code, id) {
        if (id.endsWith(".js")) {
          const minified = await minify(code);
          return minified.code;
        }
      }
    },
    compression({
      algorithm: "gzip",
      ext: ".gz"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvanJvYmxlcy9Eb2N1bWVudHMvUHJvamVjdHMvUmVhY3QvbXktcGVyc29uYWwtd2Vic2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2pyb2JsZXMvRG9jdW1lbnRzL1Byb2plY3RzL1JlYWN0L215LXBlcnNvbmFsLXdlYnNpdGUvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2pyb2JsZXMvRG9jdW1lbnRzL1Byb2plY3RzL1JlYWN0L215LXBlcnNvbmFsLXdlYnNpdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBCdW5kbGVBbmFseXplclBsdWdpbiB9IGZyb20gXCJ3ZWJwYWNrLWJ1bmRsZS1hbmFseXplclwiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IG1pbmlmeSB9IGZyb20gXCJ0ZXJzZXJcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgLy8gbmV3IEJ1bmRsZUFuYWx5emVyUGx1Z2luKCksXG4gICAge1xuICAgICAgbmFtZTogXCJ0ZXJzZXItcGx1Z2luXCIsXG4gICAgICBhc3luYyB0cmFuc2Zvcm0oY29kZSwgaWQpIHtcbiAgICAgICAgaWYgKGlkLmVuZHNXaXRoKFwiLmpzXCIpKSB7XG4gICAgICAgICAgY29uc3QgbWluaWZpZWQgPSBhd2FpdCBtaW5pZnkoY29kZSk7XG4gICAgICAgICAgcmV0dXJuIG1pbmlmaWVkLmNvZGU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wcmVzc2lvbih7XG4gICAgICBhbGdvcml0aG06IFwiZ3ppcFwiLFxuICAgICAgZXh0OiBcIi5nelwiLFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1XLFNBQVMsNEJBQTRCO0FBQ3hZLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsY0FBYztBQUN2QixPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFFTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTSxVQUFVLE1BQU0sSUFBSTtBQUN4QixZQUFJLEdBQUcsU0FBUyxLQUFLLEdBQUc7QUFDdEIsZ0JBQU0sV0FBVyxNQUFNLE9BQU8sSUFBSTtBQUNsQyxpQkFBTyxTQUFTO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
