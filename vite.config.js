import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/project1-react/',
    plugins: [react()],
    server: {
        historyApiFallback: true, // Chuyển tất cả request về index.html
    },
    build: {
        outDir: 'dist',
    },
});
