import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    plugins: [react()],base:"/React-Components",
    assetsInclude: ["**/*.jpg", "**/*.JPG"],
  };
});