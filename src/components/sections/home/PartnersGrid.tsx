// 함께한 브랜드 격자: 화면 폭에 따라 사진 칸 크기를 바꿔서 FisheyeInfiniteGrid 에 넘김
// (PC 는 크게 · 글자도 또렷하게, 휴대폰은 작게 해서 한 화면에 여러 장)
import { useEffect, useState } from 'react';
import { FisheyeInfiniteGrid, type FisheyeGridItem } from '../../ui/fisheye-infinite-grid';

export default function PartnersGrid({ items }: { items: FisheyeGridItem[] }) {
  const [w, setW] = useState(300);
  useEffect(() => {
    const fit = () => setW(window.innerWidth < 640 ? 170 : window.innerWidth < 1024 ? 230 : 300);
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return (
    <FisheyeInfiniteGrid
      items={items}
      theme="light"
      tileWidth={w}
      tileHeight={Math.round(w * 1.25)}
      gap={10}
      aria-label="함께한 브랜드 사진"
      className="h-full w-full"
    />
  );
}
