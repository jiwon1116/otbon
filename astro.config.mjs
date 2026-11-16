// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// 실제 도메인이 정해지면 site 값을 바꿔주세요. (sitemap.xml 주소에 사용됨)
export default defineConfig({
  site: 'https://otbon.co.kr',
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
    // 개발 서버에서 React 부품(함께한 브랜드 캐러셀)이 바로 뜨도록 미리 묶어 둠
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'three', 'gsap', 'framer-motion'],
    },
  },
});