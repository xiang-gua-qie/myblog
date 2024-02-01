import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    legacy({
      targets: ["defaults", "not IE 11"], //这里是做兼容IE的，后面解释
    }),
  ],
  build: {
    minify: "terser", // 启用 terser 压缩
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
        entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
        assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },

  server: {
    proxy: {
      "/weatherapi": {
        target: "https://restapi.amap.com/v3",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(RegExp(`^/weatherapi`), ""),
      },
      "/citycodeapi": {
        target: "https://restapi.amap.com/v3",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(RegExp(`^/citycodeapi`), ""),
      },
    },
  },
  resolve: {
    // 实际路径转换
    alias: {
      "@": path.resolve("./src"),
    },
  },
  esbuild: {},
});
