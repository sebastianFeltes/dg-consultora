// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages URL: https://sebastianFeltes.github.io/dg-consultora/
  site: 'https://sebastianFeltes.github.io',
  base: '/dg-consultora',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});