"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Marquee } from "@/components/ui/marquee";
import { Magnetic } from "@/components/Magnetic";
import { HeroCategoryCarousel } from "@/components/sections/HeroCategoryCarousel";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap";

const MARQUEE_TEXT = "MERCH FOR CREATORS · INDIA ·";

export function Hero() {
  const barRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!headlineRef.current) return;

      const split = SplitText.create(headlineRef.current, {
        type: "words",
        wordsClass: "hero-word",
      });

      gsap.set(split.words, { opacity: 0, filter: "blur(8px)", y: 24 });
      gsap.set(sublineRef.current, { opacity: 0, y: 12 });
      gsap.set(ctaRowRef.current?.children ?? [], { opacity: 0, scale: 0.95 });
      gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({ paused: true });
      tl.to(split.words, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      })
        .to(
          sublineRef.current,
          { opacity: 1, y: 0, duration: 0.3 },
          "+=0.3"
        )
        .to(ctaRowRef.current?.children ?? [], {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.6)",
        })
        .to(barRef.current, { scaleX: 1, duration: 0.4, ease: "power2.out" });

      const start = () => tl.play();

      let fallback: ReturnType<typeof setTimeout> | undefined;
      if (document.documentElement.hasAttribute("data-skip-intro")) {
        start();
      } else {
        window.addEventListener("wd:intro-complete", start, { once: true });
        fallback = setTimeout(start, 700);
        tl.eventCallback("onStart", () => {
          if (fallback) clearTimeout(fallback);
        });
      }

      return () => {
        window.removeEventListener("wd:intro-complete", start);
        if (fallback) clearTimeout(fallback);
        split.revert();
      };
    },
    []
  );

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-x-clip bg-brand-off-white"
    >
      <DotPattern
        className="text-brand-yellow opacity-[0.04]"
        width={20}
        height={20}
      />

      <div className="hero-shell relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pb-4 pt-[4rem] text-center sm:px-6 sm:pb-6 sm:pt-[5rem] lg:px-8 lg:pb-1 lg:pt-[2.75rem] xl:pt-[3.25rem]">
        <div className="flex flex-col items-center">
          <div
            ref={barRef}
            className="mb-5 h-1 w-16 bg-brand-yellow sm:mb-6 sm:w-20"
          />

          <h1
            ref={headlineRef}
            className="w-full max-w-none normal-case font-sans text-[clamp(2.7rem,8.2vw,4.4rem)] font-bold leading-[0.88] tracking-tight-display text-brand-black sm:text-[clamp(3.25rem,6.1vw,5.15rem)] lg:text-[clamp(3.85rem,4.8vw,6.05rem)] xl:text-[clamp(4.2rem,4.1vw,6.75rem)]"
          >
            <span className="block whitespace-nowrap normal-case">
              You built the audience.
            </span>
            <span className="block whitespace-nowrap normal-case">
              We&apos;ll build the brand.
            </span>
          </h1>

          <p
            ref={sublineRef}
            className="mt-4 max-w-[34rem] text-sm leading-relaxed text-brand-gray-text sm:mt-5 sm:text-base md:text-lg"
          >
            India&apos;s merch agency for creators. We design it, build the
            store, handle production. You just show up.
          </p>

          <div
            ref={ctaRowRef}
            className="mt-5 flex w-full flex-col items-stretch gap-3 sm:mt-6 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            <Magnetic>
              <Link
                href="/apply"
                className="flex w-full items-center justify-center gap-2 rounded-[4px] bg-brand-black px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-yellow hover:text-brand-black sm:min-w-[190px] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#packages"
                className="flex w-full items-center justify-center rounded-[4px] border border-brand-black bg-transparent px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-black transition-colors hover:bg-brand-black hover:text-white sm:min-w-[190px] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                See Packages
              </Link>
            </Magnetic>
          </div>
        </div>

        <div className="hero-carousel-shell mt-6 w-full sm:mt-7 lg:mt-6">
          <HeroCategoryCarousel />
        </div>
      </div>

      <Marquee
        className="relative z-10 h-12 items-center bg-brand-black [--duration:30s]"
        repeat={6}
      >
        <span className="mx-4 whitespace-nowrap font-mono text-sm uppercase tracking-wide text-brand-yellow">
          {MARQUEE_TEXT}
        </span>
      </Marquee>
    </section>
  );
}
