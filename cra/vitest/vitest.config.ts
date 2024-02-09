/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
 
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      remote: resolve(__dirname, '../remote/src/remoteComponent.jsx'),
      host: resolve(__dirname, '../host/src/hostComponent.jsx'),
    },
  },
});
 