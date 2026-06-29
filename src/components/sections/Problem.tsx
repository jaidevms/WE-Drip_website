"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type ProblemWord = { text: string; tone: "white" | "yellow" | "dim" };

const SENTENCE: ProblemWord[] = [
  { text: "MERCH", tone: "white" },
  { text: "IS", tone: "white" },
  { text: "A", tone: "white" },
  { text: "MESS", tone: "yellow" },
  { text: "—", tone: "white" },
  { text: "SUPPLIERS,", tone: "white" },
  { text: "DESIGNS,", tone: "white" },
  { text: "A", tone: "white" },
  { text: "STORE,", tone: "white" },
  { text: "RETURNS,", tone: "white" },
  { text: "CUSTOMER", tone: "white" },
  { text: "CARE.", tone: "white" },
  { text: "BY", tone: "dim" },
  { text: "THE", tone: "dim" },
  { text: "TIME", tone: "dim" },
  { text: "YOU", tone: "dim" },
  { text: "FIGURE", tone: "dim" },
  { text: "IT", tone: "dim" },
  { text: "OUT,", tone: "dim" },
  { text: "THE", tone: "dim" },
  { text: "MOMENT'S", tone: "dim" },
  { text: "GONE.", tone: "dim" },
];

const TONE_CLASS: Record<ProblemWord["tone"], string> = {
  white: "text-white",
  yellow: "text-brand-yellow",
  dim: "text-white/30",
};

const PAIN_TAGS = [
  "— Suppliers ghost you",
  "— Designers cost a fortune",
  "— Shopify is a full-time job",
  "— Customer DMs never stop",
];

export function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !textRef.current) return;

      const words = textRef.current.querySelectorAll<HTMLElement>("[data-word]");

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.set(words, { opacity: 0.3 });
        gsap.set(tagsRef.current, { opacity: 0, y: 20 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(words, { opacity: 1, stagger: 0.04, ease: "none" }, 0).to(
          tagsRef.current,
          { opacity: 1, y: 0, duration: 0.3 },
          ">-0.1"
        );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(words, { opacity: 1 });
        gsap.set(tagsRef.current, { opacity: 1, y: 0 });

        const tween = gsap.from(words, {
          opacity: 0,
          stagger: 0.02,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        const tagsTween = gsap.from(tagsRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          scrollTrigger: {
            trigger: tagsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          tagsTween.scrollTrigger?.kill();
          tagsTween.kill();
        };
      });

      return () => mm.kill();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="flex min-h-[80vh] flex-col items-center justify-center bg-brand-black px-6 py-32 md:py-40"
    >
      <p
        ref={textRef}
        className="max-w-[1100px] text-center font-sans text-[32px] font-bold uppercase leading-[1.1] tracking-tight-display md:text-[44px] lg:text-[64px]"
      >
        {SENTENCE.map((word, i) => (
          <span
            key={i}
            data-word
            className={cn("inline-block", TONE_CLASS[word.tone])}
          >
            {word.text}{" "}
          </span>
        ))}
      </p>

      <div
        ref={tagsRef}
        className="mt-20 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:flex-wrap sm:justify-center"
      >
        {PAIN_TAGS.map((tag) => (
          <div
            key={tag}
            className="border border-brand-gray-line/30 px-4 py-3 text-center font-mono text-xs uppercase tracking-wide text-white/60 sm:text-sm"
          >
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
}
