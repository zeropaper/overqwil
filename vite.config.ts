/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router', 'react-router-dom'],
          'mantine-hooks': ['@mantine/hooks'],
          'mantine-prism': ['@mantine/prism'],
          'mantine-core': ['@mantine/core'],

          'mantine-core-deps': [
            '@tabler/icons',
            '@mantine/utils',
            'react-textarea-autosize',
          ],
          'mantine-styles': ['@mantine/styles'],
          'radix-ui-react-scroll-area': ['@radix-ui/react-scroll-area'],
          'floating-ui-react-dom-interactions': [
            '@floating-ui/react-dom-interactions',
          ],

          overqwil: ['./src'],
        },
      },
    },
  },
});
