"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import { useCanHover } from "@/hooks/useMediaQuery";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const canHover = useCanHover();
  if (reduce || !canHover) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}
