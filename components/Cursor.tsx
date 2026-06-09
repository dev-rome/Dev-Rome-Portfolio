"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

export default function Cursor() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (reduce) return;
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const isInteractive = (t: EventTarget | null) =>
      t instanceof Element && t.closest("a, button, [data-cursor]");
    const over = (e: MouseEvent) => {
      if (isInteractive(e.target)) setActive(true);
    };
    const out = (e: MouseEvent) => {
      if (isInteractive(e.target)) setActive(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [reduce, x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-9999"
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          width: active ? 10 : 10,
          height: active ? 10 : 10,
          backgroundColor: active ? "#1a1916" : "#db4c44",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </motion.div>
  );
}
