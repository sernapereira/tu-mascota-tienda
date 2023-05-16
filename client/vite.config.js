import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webpackConfig from "./webpack.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  configureWebpack: webpackConfig,
});
