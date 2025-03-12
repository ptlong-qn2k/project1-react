import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/project1-react/',
    plugins: [react()],
    build: {
        outDir: 'dist', // Đổi từ 'dist' thành 'build'
    },
});
