"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function PageEntry() {
  const curtainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!curtainRef.current) return;
    if (document.documentElement.hasAttribute("data-skip-intro")) return;

    sessionStorage.setItem("wd-intro-played", "1");
    gsap.to(curtainRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={curtainRef}
      className="page-entry-curtain pointer-events-none fixed inset-0 z-[200] bg-brand-yellow"
      aria-hidden="true"
    />
  );
}
