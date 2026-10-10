import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jichangjiance.com',
  output: 'static',
  integrations: [sitemap({
    filter: (page) => !page.endsWith('/search/')
  })],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed'
    }
  }
});
