import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  resolve: {
    alias: [
      { find: '@params', replacement: '/src/params' },
      { find: '@utils', replacement: '/src/lib/utils' },
      { find: '@store', replacement: '/src/lib/store' },
      { find: '@icons', replacement: '/src/lib/icons' },
      { find: '@assets', replacement: '/src/lib/assets' },
      { find: '@styles', replacement: '/src/lib/styles' },
      { find: '@components', replacement: '/src/lib/components' }
    ]
  }
});
