"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = {
  text: string;
  className?: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;
const STAGGER = 0.022;
const BASE_DELAY = 0.1;

const RADIUS = 160;
const STRENGTH = 10;
const SMOOTH = 0.18;

function parseWords(text: string) {
  return text.split(" ").map((word) => {
    const chars: { char: string; accent: boolean }[] = [];
    let accent = false;
    for (const ch of word) {
      if (ch === "*") {
        accent = !accent;
        continue;
      }
      chars.push({ char: ch, accent });
    }
    return chars;
  });
}

export default function KineticHeading({ text, className }: Props) {
  const reduce = useReducedMotion();
  const words = useMemo(() => parseWords(text), [text]);
  const plain = useMemo(() => text.replace(/\*/g, ""), [text]);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const leanRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const applied = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (reduce) return;
    const heading = headingRef.current;
    if (!heading) return;

    let raf = 0;
    let hovering = false;
    let mx = 0;
    let my = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      const els = leanRefs.current;
      const rects = els.map((el) => (el ? el.getBoundingClientRect() : null));
      for (let i = 0; i < els.length; i++) {
        const el = els[i];
        const r = rects[i];
        if (!el || !r) continue;

        const prev = applied.current[i] ?? { x: 0, y: 0 };
        const baseX = r.left + r.width / 2 - prev.x;
        const baseY = r.top + r.height / 2 - prev.y;
        const dx = mx - baseX;
        const dy = my - baseY;
        const dist = Math.hypot(dx, dy);

        let tx = 0;
        let ty = 0;
        if (dist < RADIUS) {
          const pull = (1 - dist / RADIUS) * STRENGTH;
          const angle = Math.atan2(dy, dx);
          tx = Math.cos(angle) * pull;
          ty = Math.sin(angle) * pull;
        }

        const nx = prev.x + (tx - prev.x) * SMOOTH;
        const ny = prev.y + (ty - prev.y) * SMOOTH;
        applied.current[i] = { x: nx, y: ny };
        el.style.transform = `translate(${nx}px, ${ny}px)`;
      }
      if (hovering) raf = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      if (hovering) return;
      hovering = true;
      raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      hovering = false;
      cancelAnimationFrame(raf);
      const relax = () => {
        const els = leanRefs.current;
        let moving = false;
        for (let i = 0; i < els.length; i++) {
          const el = els[i];
          const prev = applied.current[i] ?? { x: 0, y: 0 };
          const nx = prev.x * (1 - SMOOTH);
          const ny = prev.y * (1 - SMOOTH);
          applied.current[i] = { x: nx, y: ny };
          if (el) el.style.transform = `translate(${nx}px, ${ny}px)`;
          if (Math.abs(nx) > 0.1 || Math.abs(ny) > 0.1) moving = true;
        }
        if (moving) {
          raf = requestAnimationFrame(relax);
        } else {
          for (const el of els) if (el) el.style.transform = "";
        }
      };
      raf = requestAnimationFrame(relax);
    };

    heading.addEventListener("mouseenter", onEnter);
    heading.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      heading.removeEventListener("mouseenter", onEnter);
      heading.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousemove", onMove);
    };
  }, [reduce]);

  let index = 0;

  return (
    <h1 ref={headingRef} className={className} aria-label={plain}>
      <span aria-hidden="true">
        {words.map((word, wi) => (
          <span key={wi} className="me-[0.2em] inline-block whitespace-nowrap">
            {word.map((c, ci) => {
              const i = index++;
              return (
                <span
                  key={ci}
                  ref={(el) => {
                    leanRefs.current[i] = el;
                  }}
                  className="inline-block align-bottom"
                >
                  <span className="inline-block overflow-hidden align-bottom">
                    <motion.span
                      data-animate
                      className={
                        c.accent
                          ? "inline-block italic text-accent px-[0.03em]"
                          : "inline-block"
                      }
                      initial={reduce ? false : { y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.8,
                        ease: EASE,
                        delay: reduce ? 0 : BASE_DELAY + i * STAGGER,
                      }}
                    >
                      {c.char}
                    </motion.span>
                  </span>
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </h1>
  );
}
