"use client";

import { motion, useReducedMotion } from "motion/react";
import KineticHeading from "@/components/KineticHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay: reduce ? 0 : delay },
  });

  return (
    <section className="py-24 sm:py-28">
      <motion.p
        {...fade(0)}
        data-animate
        className="mb-7 font-mono text-xs uppercase tracking-[0.2em] text-muted"
      >
        Hello — I&rsquo;m Rome
      </motion.p>

      <KineticHeading
        text="I b*u*ild fr*o*nt*e*nd th*a*t f*ee*ls."
        className="font-serif font-normal leading-[0.94] text-[clamp(2.875rem,11.5vw,8.875rem)]"
      />

      <motion.p
        {...fade(0.6)}
        data-animate
        className="mt-11 max-w-[52ch] font-mono text-sm leading-relaxed text-muted"
      >
        I build products with attention to the details people feel — the
        interactions, performance, and systems behind the interface. Frontend
        Software Engineer working with React, Next.js, TypeScript, and modern
        full-stack technologies.
      </motion.p>
    </section>
  );
}
