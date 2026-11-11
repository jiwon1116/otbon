import type { ImageMetadata } from 'astro';

// src/assets/factory/ 의 사진을 번호로 꺼내 씀. (예: photo(31) → factory-31.jpg)
// 여기 있는 사진은 빌드할 때 화면 크기별 webp 로 자동 변환되어 가볍게 올라갑니다.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/factory/*.jpg', { eager: true });

export function photo(n: number): ImageMetadata {
  const key = `../assets/factory/factory-${String(n).padStart(2, '0')}.jpg`;
  const file = files[key];
  if (!file) throw new Error(`사진을 찾을 수 없습니다: ${key}`);
  return file.default;
}

// src/assets/sites/ 의 현장 사진 (공장 · 작업실별로 찍은 사진). sitePhoto(3) → site-03.jpg
const sites = import.meta.glob<{ default: ImageMetadata }>('../assets/sites/*.jpg', { eager: true });

export function sitePhoto(n: number): ImageMetadata {
  const key = `../assets/sites/site-${String(n).padStart(2, '0')}.jpg`;
  const file = sites[key];
  if (!file) throw new Error(`사진을 찾을 수 없습니다: ${key}`);
  return file.default;
}
