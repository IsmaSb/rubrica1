import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Agrega esta importación

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Configura alias para manejar archivos .jsx
      '/@/': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx'], // Agrega '.jsx' a las extensiones manejadas
  },
});
