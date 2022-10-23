import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";


// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log(loadEnv(mode, process.cwd()).VITE_APP_BASE_URL);
  return defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: loadEnv(mode, process.cwd()).VITE_APP_BASE_API,
          ws: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
