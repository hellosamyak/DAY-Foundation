import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/DAY-Foundation/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
