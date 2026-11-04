// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 실제 도메인이 정해지면 site 값을 바꿔주세요. (sitemap.xml 주소에 사용됨)
export default defineConfig({
  site: 'https://otbone.pages.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
