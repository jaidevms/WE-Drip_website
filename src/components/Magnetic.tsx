"use client";

import { cloneElement, isValidElement, useRef } from "react";
import type { ReactElement } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type MagneticProps = {
  children: ReactElement;
  strength?: number;
  radius?: number;
};

// Assumes the child does not already pass its own ref to <Link>/<a>.
// None of the current call sites do; revisit with a ref-merge helper if that changes.
export function Magnetic({ children, strength = 0.2, radius = 100 }: MagneticProps) {
  const elRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches || !elRef.current) return;

    const el = elRef.current;
    const quickX = gsap.quickTo(el, "x", { duration: 0.3, ease: "power3" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.3, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      if (Math.hypot(dx, dy) < radius) {
        quickX(dx * strength);
        quickY(dy * strength);
      } else {
        quickX(0);
        quickY(0);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [strength, radius]);

  if (!isValidElement(children)) return children;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return cloneElement(children as any, { ref: elRef });
}
