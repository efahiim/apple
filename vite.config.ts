import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@constants': path.resolve(__dirname, './src/constants/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@interfaces': path.resolve(__dirname, './src/interfaces/'),
    }
  }
});
