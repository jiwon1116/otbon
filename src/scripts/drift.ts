import { onScrollFrame, motionOn, passProgress } from './scroll';

// [data-drift-scope] 안의 [data-drift="left" | "right"] 줄을
// 스크롤에 맞춰 옆으로 흘려보냄. 움직임 모드가 아니면 아무것도 안 함(옆으로 넘겨서 봄)
export function initDrift(scope: HTMLElement | null) {
  if (!scope || !motionOn()) return;
  const rows = [...scope.querySelectorAll<HTMLElement>('[data-drift]')];
  let distances: number[] = [];

  onScrollFrame(
    () => {
      const p = passProgress(scope);
      rows.forEach((row, i) => {
        const t = row.dataset.drift === 'right' ? 1 - p : p;
        row.style.transform = `translate3d(${-distances[i] * t}px, 0, 0)`;
      });
    },
    () => {
      distances = rows.map((row) => Math.max(0, row.scrollWidth - window.innerWidth));
    },
  );
}
