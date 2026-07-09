"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches || !dotRef.current) return;

    const dot = dotRef.current;
    document.documentElement.classList.add("wd-cursor-active");

    const quickX = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3" });
    const quickY = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      quickX(e.clientX);
      quickY(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a, button");
      gsap.to(dot, {
        scale: target ? 4 : 1,
        backgroundColor: "#D7B4F3",
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("wd-cursor-active");
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D7B4F3] [@media(hover:hover)_and_(pointer:fine)]:block"
    />
  );
}
