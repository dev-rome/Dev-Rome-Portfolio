"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

type Props = {
  href: string;
  label: string;
  alt: string;
};

const SPRING = { stiffness: 200, damping: 20, mass: 0.5 };

export default function MagneticLink({ href, label, alt }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ix = useMotionValue(0);
  const iy = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);
  const six = useSpring(ix, SPRING);
  const siy = useSpring(iy, SPRING);

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * 0.35);
    y.set(dy * 0.5);
    ix.set(dx * 0.15);
    iy.set(dy * 0.2);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
    ix.set(0);
    iy.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="group relative inline-block overflow-hidden rounded-full border border-line px-6 py-3 font-serif text-2xl text-ink transition-colors duration-300 hover:border-ink"
    >
      <span className="absolute inset-0 z-0 translate-y-full bg-ink transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:translate-y-0 motion-reduce:transition-none" />
      <motion.span
        style={{ x: six, y: siy }}
        className="relative z-10 inline-block"
      >
        <span className="inline-block h-[1.25em] overflow-hidden align-bottom">
          <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1/2 motion-reduce:transition-none">
            <span className="whitespace-nowrap leading-tight">{label}</span>
            <span
              aria-hidden="true"
              className="whitespace-nowrap leading-tight text-accent"
            >
              {alt}
            </span>
          </span>
        </span>
      </motion.span>
    </motion.a>
  );
}
