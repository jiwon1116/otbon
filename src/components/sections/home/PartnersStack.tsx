// 함께한 브랜드: 겹쳐 쌓인 사진 카드 (LayeredStack, pinned = 스크롤로 펼침). 카드 아래 크림색 띠에 브랜드 이름 · 번호
import { LayeredStack } from '../../ui/layered-stack';

export interface PartnerCard { image: string; name: string; num: string }

export default function PartnersStack({ items }: { items: PartnerCard[] }) {
  return (
    <LayeredStack pinned className="pt-grid-cards mx-auto">
      {items.map((it) => (
        <figure key={it.name} className="m-0 flex flex-col bg-[#faf6ee] p-1.5 shadow-[0_20px_36px_-22px_rgba(40,40,40,0.55)] sm:p-2">
          <img src={it.image} alt={`${it.name} 룩`} draggable={false} className="aspect-[3/4] w-full object-cover" />
          <figcaption className="flex items-baseline justify-between gap-1 px-0.5 pt-2 sm:px-1 sm:pt-2.5">
            <span className="truncate text-[8.5px] font-semibold tracking-[0.04em] text-[#282828] sm:text-[12px] sm:tracking-[0.16em]">{it.name}</span>
            <span className="text-[9px] font-semibold tabular-nums text-[#6e685e] sm:text-[11px]">{it.num}</span>
          </figcaption>
        </figure>
      ))}
    </LayeredStack>
  );
}
