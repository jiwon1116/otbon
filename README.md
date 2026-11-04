# otban

의류 제작 회사 otban의 소개 사이트 (Astro + Tailwind CSS, 정적 사이트)

## 개발

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 결과물 생성
```

## Cloudflare Pages 배포

- Build command: `npm run build`
- Build output directory: `dist`

## 자주 바꾸는 것

- 연락처, 문구, 서비스, 포트폴리오, 후기, FAQ: `src/data/site.ts`
- 첫 화면 영상: `public/videos/hero.mp4` 넣기 (권장: 1920x1080, 10~20초, 5MB 이하, H.264, 소리 없음)
- 첫 화면 대표 이미지: 영상 첫 장면 캡처를 `public/images/`에 넣고 `src/data/site.ts`의 `hero.poster` 경로 수정
- 포인트 컬러: `src/styles/global.css`의 `--color-accent`
- 실제 도메인: `astro.config.mjs`의 `site`, `public/robots.txt`의 Sitemap 주소
