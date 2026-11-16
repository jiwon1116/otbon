"use client";

/*
  componentry 의 collection-surfer 를 옷본 메인 한 섹션에 맞게 고친 것
  (원본: 페이지 전체를 덮고 5만 px 빈 공간으로 스크롤을 독차지 → 여기선 이 섹션을 지나가는 동안만 화면 고정)
  (원본 검정 배경 → 사이트 크림색 배경, 바로 위 지도(검정)와 구분되게)
  - 사진 카드가 사선으로 깊이 늘어서 있고, 스크롤하면 한 장씩 앞으로 다가옴
  - 마우스를 가까이 가져가면 그 카드가 커짐(magnetic) 또는 떠오름(uplift)
  - 카드 아래 브랜드 이름, 위에 번호
  - 휴대폰은 카드 · 간격을 작게
*/
import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue, useReducedMotion } from "framer-motion";
import React from "react";

export interface CollectionItem {
    id: number;
    image: string;
    title: string;
}

export type CollectionSurferVariant = "magnetic" | "uplift" | "simple";

interface CollectionSurferProps {
    items: CollectionItem[];
    variant?: CollectionSurferVariant;
    /** 왼쪽 위 큰 제목 (두 줄) */
    heading?: [string, string];
    /** 오른쪽 아래 작은 안내 */
    hint?: string;
    /** 카드 한 장 넘기는 데 드는 스크롤 길이(px) */
    scrollPerItem?: number;
}

export function CollectionSurfer({
    items,
    variant = "magnetic",
    heading = ["PARTNERS", "BRANDS"],
    hint = "scroll to surf",
    scrollPerItem = 420,
}: CollectionSurferProps) {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    // 화면 폭에 맞춰 카드 · 간격 크기 (휴대폰은 작게)
    const [k, setK] = React.useState(1);
    React.useEffect(() => {
        const fit = () => setK(window.innerWidth < 640 ? 0.62 : window.innerWidth < 1024 ? 0.8 : 1);
        fit();
        window.addEventListener("resize", fit);
        return () => window.removeEventListener("resize", fit);
    }, []);

    const stepX = 240 * k;
    const stepY = -84 * k;
    const stepZ = -288 * k;
    const last = Math.max(0, items.length - 1);

    // 이 섹션 안에서의 진행도 (섹션 윗변이 화면 위에 닿으면 0, 아랫변이 화면 아래에 닿으면 1)
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
    const smooth = useSpring(scrollYProgress, { mass: 0.1, stiffness: 100, damping: 20 });

    // 첫 카드가 가운데 → 마지막 카드가 가운데로
    const x = useTransform(smooth, [0, 1], [0, -last * stepX]);
    const y = useTransform(smooth, [0, 1], [0, -last * stepY]);
    const z = useTransform(smooth, [0, 1], [0, -last * stepZ]);

    const mouseX = useMotionValue(-10000);
    const mouseY = useMotionValue(-10000);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (variant === "simple") return;
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };
    const handleMouseLeave = () => {
        mouseX.set(-10000);
        mouseY.set(-10000);
    };

    return (
        <div
            ref={sectionRef}
            className="relative w-full bg-[#f5f1e8] text-[#282828]"
            style={{ height: reduce ? "100svh" : `calc(100svh + ${last * scrollPerItem}px)` }}
        >
            <div
                className="sticky top-0 h-svh w-full overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* 제목 */}
                <div className="pointer-events-none absolute left-[6vw] top-[12svh] z-50 sm:top-[14svh]">
                    <p className="mb-4 text-[11px] font-semibold tracking-[0.3em] text-[#2e5b45]">함께한 브랜드</p>
                    <h2 className="text-[clamp(2.4rem,7vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
                        <span className="ml-[4vw] block">{heading[0]}</span>
                        <span className="block">
                            {heading[1]}
                            <span className="relative top-[0.6em] ml-2 align-top text-[0.32em] font-medium tabular-nums opacity-70">
                                ({items.length})
                            </span>
                        </span>
                    </h2>
                </div>

                <div className="absolute bottom-[4svh] right-[6vw] z-50 text-[11px] font-semibold uppercase tracking-[0.25em] opacity-60">
                    {hint}
                </div>

                {/* 3D 장면 */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ perspective: "2000px", perspectiveOrigin: "10% 10%" }}
                >
                    <motion.div className="relative h-0 w-0" style={{ x, y, z, transformStyle: "preserve-3d" }}>
                        {items.map((item, i) => (
                            <Card
                                key={item.id}
                                item={item}
                                i={i}
                                k={k}
                                stepX={stepX}
                                stepY={stepY}
                                stepZ={stepZ}
                                mouseX={mouseX}
                                mouseY={mouseY}
                                scrollSpring={smooth}
                                variant={variant}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function Card({
    item,
    i,
    k,
    stepX,
    stepY,
    stepZ,
    mouseX,
    mouseY,
    scrollSpring,
    variant,
}: {
    item: CollectionItem;
    i: number;
    k: number;
    stepX: number;
    stepY: number;
    stepZ: number;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    scrollSpring: MotionValue<number>;
    variant: CollectionSurferVariant;
}) {
    const ref = React.useRef<HTMLDivElement>(null);

    // 마우스와 카드 가운데 사이 거리
    const distance = useTransform([mouseX, mouseY, scrollSpring], ([x = 0, y = 0]: number[]) => {
        if (!ref.current || variant === "simple") return 400;
        const rect = ref.current.getBoundingClientRect();
        return Math.hypot(x - (rect.left + rect.width / 2), y - (rect.top + rect.height / 2));
    });

    const springScale = useSpring(useTransform(distance, [0, 400], [1.35, 1]), { mass: 0.5, stiffness: 300, damping: 20 });
    const springUplift = useSpring(useTransform(distance, [0, 400], [-100, 0]), { mass: 0.5, stiffness: 300, damping: 20 });

    const transform = useTransform([springScale, springUplift], ([s, u]: number[]) => {
        const scaleValue = variant === "magnetic" ? Number(s) : 1;
        const upliftValue = variant === "uplift" ? Number(u) : 0;
        return `translate3d(${i * stepX}px, ${i * stepY + upliftValue}px, ${i * stepZ}px) rotateY(-50deg) scale(${scaleValue})`;
    });

    const w = 300 * k;
    const h = 400 * k;

    return (
        <motion.div
            ref={ref}
            className="group absolute bg-[#ebe4d6] shadow-[0_30px_60px_-30px_rgba(40,40,40,0.55)]"
            style={{ width: w, height: h, left: -w / 2, top: -h / 2, transform, transformStyle: "preserve-3d" }}
        >
            {/* 번호 */}
            <div className="absolute -left-1 -top-6 font-mono text-xs text-[#282828] opacity-50 transition-opacity group-hover:opacity-100">
                {String(i + 1).padStart(2, "0")}
            </div>

            {/* 사진 */}
            <div className="relative h-full w-full overflow-hidden brightness-90 transition-all duration-300 group-hover:brightness-100">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" draggable={false} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />

            {/* 브랜드 이름 */}
            <div className="absolute -bottom-7 left-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#282828]/60 transition-colors group-hover:text-[#282828]">
                {item.title}
            </div>
        </motion.div>
    );
}
