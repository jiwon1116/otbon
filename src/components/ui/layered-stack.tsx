"use client";

// componentry 의 layered-stack.
// (옷본 수정)
//  - pinned: 마우스 올리기 대신 스크롤로 펼침. 가장 가까운 [data-pin] 섹션(화면이 고정되는 긴 섹션)을 지나가는 정도에 맞춰
//    처음엔 가운데 쌓여 있다가 → 스크롤하면 제자리(격자)로 펼쳐짐, 되돌리면 다시 쌓임
//  - pinned 가 아닐 때: 휴대폰 · 태블릿(마우스 없음 또는 1024px 미만)은 쌓지 않고 처음부터 펼쳐 둠

import { type ComponentPropsWithoutRef, useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "../../lib/utils";

export type LayeredStackProps = ComponentPropsWithoutRef<"div"> & { pinned?: boolean };

// (옷본 수정) 쌓기 · 펼치기는 마우스가 있는 넓은 화면(1024px 이상)에서만. 그 밖에는 처음부터 펼친 격자
const stackable = () => window.matchMedia("(hover: hover) and (min-width: 1024px)").matches;

export const LayeredStack = ({ children, className, pinned = false, ...props }: LayeredStackProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // ---- pinned: 스크롤 진행도에 맞춰 쌓임 ↔ 펼침 ----
    useEffect(() => {
        if (!pinned) return;
        const container = containerRef.current;
        const section = container?.closest<HTMLElement>("[data-pin]");
        if (!container || !section) return;
        const cards = Array.from(container.children) as HTMLElement[];
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // 카드마다 쌓였을 때 기울기 (매번 같게)
        const tilt = cards.map((_, i) => [-7, 5, -3, 8, -9, 3, -5, 6][i % 8]);
        let offsets: { x: number; y: number }[] = [];
        const measure = () => {
            offsets = cards.map((card) => ({
                x: container.clientWidth / 2 - card.offsetWidth / 2 - card.offsetLeft,
                y: container.clientHeight / 2 - card.offsetHeight / 2 - card.offsetTop,
            }));
        };
        const smooth = (t: number) => t * t * (3 - 2 * t);
        let raf = 0;
        const render = () => {
            raf = 0;
            const r = section.getBoundingClientRect();
            const range = Math.max(1, r.height - window.innerHeight);
            const p = Math.min(1, Math.max(0, -r.top / range));
            // 앞 20% 는 쌓인 채로 머물고, 20~70% 동안 펼쳐지고, 뒤 30% 는 펼친 채로 머묾
            const t = reduce ? 1 : smooth(Math.min(1, Math.max(0, (p - 0.2) / 0.5)));
            cards.forEach((card, i) => {
                // 카드마다 살짝 늦게 출발해서 차례로 펼쳐지는 느낌
                const ti = Math.min(1, Math.max(0, t * 1.25 - i * 0.035));
                gsap.set(card, {
                    x: offsets[i].x * (1 - ti),
                    y: offsets[i].y * (1 - ti),
                    rotate: tilt[i] * (1 - ti),
                    zIndex: 100 - i,
                });
            });
        };
        const request = () => { if (!raf) raf = requestAnimationFrame(render); };
        measure();
        render();
        const ro = new ResizeObserver(() => { measure(); request(); });
        ro.observe(container);
        window.addEventListener("scroll", request, { passive: true });
        return () => {
            ro.disconnect();
            window.removeEventListener("scroll", request);
            cancelAnimationFrame(raf);
        };
    }, [pinned]);

    const isStacked = useRef(true);
    const isHovered = useRef(false);

    const stackCards = useCallback((animate = true) => {
        const container = containerRef.current;
        if (!container) return;

        isStacked.current = true;
        const cards = Array.from(container.children) as HTMLElement[];

        cards.forEach((card) => {
            gsap.killTweensOf(card);
        });

        cards.forEach((card, i) => {
            const offsetX = container.clientWidth / 2 - card.offsetWidth / 2 - card.offsetLeft;
            const offsetY = container.clientHeight / 2 - card.offsetHeight / 2 - card.offsetTop;

            if (!animate) {
                gsap.set(card, {
                    x: offsetX,
                    y: offsetY,
                    rotate: gsap.utils.random(-10, 10),
                    zIndex: 100 - i,
                });
                return;
            }

            gsap.to(card, {
                x: offsetX,
                y: offsetY,
                rotate: gsap.utils.random(-10, 10),
                zIndex: 100 - i,
                duration: 0.8,
                ease: "expo.out",
                overwrite: true,
            });
        });
    }, []);

    const resetCards = useCallback((animate = true) => {
        const container = containerRef.current;
        if (!container) return;

        isStacked.current = false;
        const cards = Array.from(container.children) as HTMLElement[];

        if (!animate) {
            cards.forEach((card, i) => {
                gsap.killTweensOf(card);
                gsap.set(card, {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    zIndex: 100 - i,
                });
            });
            return;
        }

        gsap.to(cards, {
            x: 0,
            y: 0,
            zIndex: (i: number) => 100 - i,
            duration: 0.8,
            rotate: 0,
            ease: "expo.out",
            stagger: {
                amount: 0.1,
                from: "start",
            },
            overwrite: true,
        });
    }, []);

    useEffect(() => {
        if (pinned) return;
        const container = containerRef.current;
        if (!container) return;

        // Initial z-index setup
        const cards = Array.from(container.children) as HTMLElement[];
        cards.forEach((card, i) => {
            gsap.set(card, { zIndex: 100 - i });
        });

        // (옷본 수정) 휴대폰 · 태블릿은 쌓지 않고 펼친 채로
        if (stackable()) stackCards();
        else resetCards(false);

        // Re-sync hover/stack state on resize to avoid stale hover visuals after layout shifts.
        const ro = new ResizeObserver(() => {
            const container = containerRef.current;
            if (!container) return;

            isHovered.current = container.matches(":hover");

            if (isHovered.current || !stackable()) {
                resetCards(false);
            } else {
                stackCards(false);
            }
        });
        ro.observe(container);

        return () => ro.disconnect();
    }, [pinned, resetCards, stackCards]);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => {
                if (pinned || !stackable()) return;
                isHovered.current = true;
                resetCards(true);
            }}
            onMouseLeave={() => {
                if (pinned || !stackable()) return;
                isHovered.current = false;
                stackCards(true);
            }}
            className={cn("relative", className)}
            {...props}>
            {children}
        </div>
    );
};
