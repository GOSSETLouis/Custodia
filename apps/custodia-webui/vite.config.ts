import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteTsConfigPathsPlugin from "vite-tsconfig-paths";

// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default defineConfig({
  server: {
    port: 4200,
    host: true,
    strictPort: true,
  },

  plugins: [
    react(),
    ViteTsConfigPathsPlugin({
      root: "../../",
    }),
  ],
});
