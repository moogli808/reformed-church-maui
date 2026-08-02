import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.reformedchurchmaui.com',
  trailingSlash: 'always',
  vite: { plugins: [tailwind()] },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('.md')
    })
  ],
  output: 'static',
});
