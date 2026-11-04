# 옷본 (otbone)

의류 제작 회사 옷본의 소개 사이트 (Astro + Tailwind CSS, 정적 사이트)

## 개발

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 결과물 생성
```

## 폴더 구조

```
public/                  이미지, 영상 등 그대로 올라가는 파일
src/
  components/
    layout/              Header, Footer (모든 페이지 공통 틀)
    sections/            여러 페이지에서 쓰는 섹션 (CtaSection)
      home/              메인 화면 섹션 (ScrollHero, Statement, ServicesStack, ProcessScroll, PortfolioRows)
    ui/                  작은 부품 (PortfolioCard, FaqList)
  layouts/               페이지 기본 틀 (Layout.astro)
  pages/                 주소 = 파일 이름 (index.astro → /)
  data/                  문구, 연락처, 목록 (site.ts)
  scripts/               공통 스크립트 (scroll.ts: 스크롤 연출 도구)
  styles/                전체 스타일 (global.css)
```

새 페이지를 만들면 그 페이지 전용 섹션은 `components/sections/<페이지이름>/`에 넣습니다.

## Cloudflare Pages 배포

- Build command: `npm run build`
- Build output directory: `dist`

## 자주 바꾸는 것

- 연락처, 문구, 서비스, 포트폴리오, 후기, FAQ: `src/data/site.ts`
- 첫 화면 영상: `public/videos/hero.mp4` 넣기 (권장: 1920x1080, 10~20초, 5MB 이하, H.264, 소리 없음)
- 첫 화면 대표 이미지: 영상 첫 장면 캡처를 `public/images/`에 넣고 `src/data/site.ts`의 `hero.poster` 경로 수정
- 포인트 컬러: `src/styles/global.css`의 `--color-accent`
- 실제 도메인: `astro.config.mjs`의 `site`, `public/robots.txt`의 Sitemap 주소
