"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { projects } from "@/data/work";
import { useCanHover } from "@/hooks/useMediaQuery";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Work() {
  const reduce = useReducedMotion();
  const canHover = useCanHover();
  const interactive = canHover && !reduce;
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
      onMouseMove={interactive ? onMove : undefined}
    >
      <h2 className="mb-2.5 font-serif tracking-tight text-section">
        Selected<span className="text-faint">&nbsp;Work</span>
      </h2>

      <div
        className="border-b border-line"
        onMouseLeave={interactive ? () => setActive(null) : undefined}
      >
        {projects.map((project, i) => (
          <a
            key={project.idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={interactive ? () => setActive(i) : undefined}
            className={`flex items-baseline gap-5 border-t border-line py-6 transition-opacity duration-500 ease-fluid motion-reduce:transition-none ${
              active !== null && active !== i ? "opacity-30" : "opacity-100"
            }`}
          >
            <span className="hidden w-8 shrink-0 font-mono text-xs text-muted sm:block">
              {project.idx}
            </span>
            <span
              className={`font-serif leading-[1.05] text-[clamp(1.5rem,7vw,3.75rem)] transition-transform duration-500 ease-fluid motion-reduce:transition-none ${
                active === i ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {project.name}
            </span>
            <span className="ml-auto font-mono text-2xs uppercase tracking-wider text-muted">
              {project.year}
            </span>
          </a>
        ))}
      </div>

      {interactive && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-50"
          style={{ x: px, y: py }}
        >
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key="preview"
                className="relative h-40 w-80 overflow-hidden rounded-lg bg-ink shadow-2xl"
                style={{ x: "-50%", y: "-50%" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {projects[active].image ? (
                  <Image
                    src={projects[active].image!}
                    alt=""
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{ background: projects[active].gradient }}
                  />
                )}
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/85 via-black/35 to-transparent p-4">
                  <span className="font-mono text-2xs uppercase tracking-[0.14em] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]">
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
