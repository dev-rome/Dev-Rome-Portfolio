"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { projects } from "@/data/work";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Work() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 });
  const py = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 });

  const onMove = (e: React.MouseEvent) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <section
      className="py-12 sm:py-16"
      onMouseMove={reduce ? undefined : onMove}
    >
      <h2 className="mb-2.5 font-serif tracking-tight text-[clamp(28px,6vw,56px)]">
        SelectedWork<span className="text-faint">&nbsp;(2024 — Today)</span>
      </h2>

      <div
        className="border-b border-line"
        onMouseLeave={() => setActive(null)}
      >
        {projects.map((project, i) => (
          <a
            key={project.idx}
            href="#"
            onMouseEnter={() => setActive(i)}
            className={`flex items-baseline gap-5 border-t border-line py-6 transition-opacity duration-500 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transition-none ${
              active !== null && active !== i ? "opacity-30" : "opacity-100"
            }`}
          >
            <span className="hidden w-8 shrink-0 font-mono text-xs text-muted sm:block">
              {project.idx}
            </span>
            <span
              className={`font-serif leading-[1.05] text-[clamp(24px,7vw,60px)] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transition-none ${
                active === i ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {project.name}
            </span>
            <span className="ml-auto font-mono text-[11px] uppercase tracking-wider text-muted">
              {project.year}
            </span>
          </a>
        ))}
      </div>

      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-50"
          style={{ x: px, y: py }}
        >
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key="preview"
                className="h-70 w-55 overflow-hidden rounded-lg shadow-2xl"
                style={{ x: "-50%", y: "-50%" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <div
                  className="flex h-full w-full items-end p-4"
                  style={{ background: projects[active].gradient }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/90">
                    {projects[active].meta}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
