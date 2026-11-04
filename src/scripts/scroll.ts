// 스크롤 연출이 함께 쓰는 도구.
// 스크롤/리사이즈마다 등록된 함수를 한 프레임에 한 번만 실행해서 버벅임을 줄임.

const frameSubs = new Set<() => void>();
const resizeSubs = new Set<() => void>();
let ticking = false;
let bound = false;

const run = () => {
  ticking = false;
  frameSubs.forEach((fn) => fn());
};

const request = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(run);
};

const bind = () => {
  if (bound) return;
  bound = true;
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', () => {
    resizeSubs.forEach((fn) => fn());
    request();
  });
  // 웹폰트가 늦게 로드되면 글자 크기가 바뀌므로 다시 잼
  document.fonts?.ready.then(() => {
    resizeSubs.forEach((fn) => fn());
    request();
  });
};

/** 스크롤할 때마다 실행. measure는 화면 크기가 바뀔 때만 실행 */
export function onScrollFrame(render: () => void, measure?: () => void) {
  bind();
  if (measure) {
    resizeSubs.add(measure);
    measure();
  }
  frameSubs.add(render);
  render();
}

/** 움직임 모드인지(Layout의 head 스크립트가 <html>에 .motion을 붙임) */
export const motionOn = () => document.documentElement.classList.contains('motion');

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** 긴 섹션 안에 sticky 화면이 있을 때: 섹션 윗변이 화면 위에 닿으면 0, 아랫변이 화면 아래에 닿으면 1 */
export function stickyProgress(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const range = r.height - window.innerHeight;
  return range > 0 ? clamp01(-r.top / range) : 0;
}

/** 요소가 화면을 지나가는 정도: 아래에서 막 보이기 시작하면 0, 위로 다 빠져나가면 1 */
export function passProgress(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight;
  return clamp01((vh - r.top) / (vh + r.height));
}
