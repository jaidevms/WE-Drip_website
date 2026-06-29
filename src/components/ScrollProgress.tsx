"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!barRef.current) return;
    gsap.fromTo(
      barRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[2px] w-full bg-transparent">
      <div ref={barRef} className="h-full w-full origin-left bg-brand-yellow" />
    </div>
  );
}
