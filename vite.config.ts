import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // 解决服务器访问静态资源报错
  server: {
    host: "192.168.31.174", // 通过ip访问
  },
});
