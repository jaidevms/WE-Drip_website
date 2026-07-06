"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const svgImage = (svg: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const MERCH_IMAGES = [
  {
    label: "Creator hoodie",
    tilt: "-rotate-6",
    src: svgImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220"><rect width="220" height="220" fill="#f8f6f0"/><path d="M74 70c9-21 63-21 72 0l34 19-20 42-16-8v63H76v-63l-16 8-20-42 34-19Z" fill="#111"/><path d="M88 65c7 15 37 15 44 0" fill="none" stroke="#fed400" stroke-width="10" stroke-linecap="round"/><path d="M91 118h58v39H91z" fill="#fed400"/><path d="M101 129h38v8h-38zm0 14h30v8h-30z" fill="#111"/><path d="M80 90c10 12 50 12 60 0" fill="none" stroke="#333" stroke-width="4"/></svg>`),
  },
  {
    label: "Drop tee",
    tilt: "rotate-3",
    src: svgImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220"><rect width="220" height="220" fill="#ddc3f2"/><path d="M70 56h32c5 10 21 10 26 0h32l28 36-25 24-13-12v82H80v-82l-13 12-25-24 28-36Z" fill="#fff" stroke="#111" stroke-width="5"/><circle cx="115" cy="122" r="31" fill="#fed400"/><path d="M91 124h48M115 100v48" stroke="#111" stroke-width="9" stroke-linecap="round"/></svg>`),
  },
  {
    label: "Fan cap",
    tilt: "-rotate-2",
    src: svgImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220"><rect width="220" height="220" fill="#d6f3ff"/><path d="M54 122c7-36 34-61 70-61 34 0 55 20 62 53-48-12-91-10-132 8Z" fill="#111"/><path d="M53 123c40-14 83-16 132-8 12 3 18 15 11 26-48-9-94-8-136 4-12 3-19-13-7-22Z" fill="#fed400" stroke="#111" stroke-width="5"/><path d="M101 82h41v28h-41z" fill="#fff"/><path d="M110 92h23v8h-23z" fill="#111"/></svg>`),
  },
  {
    label: "Creator bottle",
    tilt: "rotate-6",
    src: svgImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220"><rect width="220" height="220" fill="#ff7a45"/><path d="M91 28h38v25H91z" fill="#111"/><path d="M85 57h50l9 126c1 12-7 22-19 22H95c-12 0-20-10-19-22L85 57Z" fill="#f8f6f0" stroke="#111" stroke-width="5"/><path d="M89 90h48v65H89z" fill="#111"/><path d="M99 104h28v10H99zm0 19h18v10H99z" fill="#fed400"/></svg>`),
  },
  {
    label: "Tote bag",
    tilt: "-rotate-3",
    src: svgImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220"><rect width="220" height="220" fill="#b9f3d3"/><path d="M72 78h76l13 112H59L72 78Z" fill="#f8f6f0" stroke="#111" stroke-width="5"/><path d="M91 82c0-27 38-27 38 0" fill="none" stroke="#111" stroke-width="7"/><path d="M86 123h48v36H86z" fill="#fed400"/><path d="M96 136h28" stroke="#111" stroke-width="7" stroke-linecap="round"/></svg>`),
  },
  {
    label: "Sticker sheet",
    tilt: "rotate-2",
    src: svgImage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220"><rect width="220" height="220" fill="#fed400"/><rect x="56" y="39" width="108" height="142" rx="8" fill="#fff" stroke="#111" stroke-width="5" transform="rotate(-6 110 110)"/><circle cx="92" cy="84" r="18" fill="#111"/><path d="M124 69l17 30h-34l17-30Z" fill="#ff4d4d"/><rect x="82" y="119" width="62" height="20" rx="10" fill="#ddc3f2"/><path d="M83 154h60" stroke="#111" stroke-width="8" stroke-linecap="round"/></svg>`),
  },
];

const HERO_STEPS = [
  {
    title: "Reach out",
    description:
      "Send us your handle, your audience size, and the vibe you want. WhatsApp, Instagram, email — whatever works.",
  },
  {
    title: "We design",
    description:
      "Moodboards, fabric direction, and design rounds. Three free revisions. Designs land in your inbox within the first two weeks.",
  },
  {
    title: "Store goes live",
    description:
      "We build the storefront, plug in print-on-demand, and connect manufacturers. Ready in 28 days from kickoff.",
  },
  {
    title: "Launch",
    description:
      "Drop strategy, fan announcements, fulfillment running in the background. Your only job: post the launch.",
  },
];

export function HeroCategoryCarousel() {
  const [active, setActive] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const visibleItems = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => {
        const itemIndex = (active + index) % MERCH_IMAGES.length;
        return MERCH_IMAGES[itemIndex];
      }),
    [active]
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % MERCH_IMAGES.length);
      setActiveStep((current) => (current + 1) % HERO_STEPS.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  const move = (direction: "prev" | "next") => {
    setActive((current) =>
      direction === "next"
        ? (current + 1) % MERCH_IMAGES.length
        : (current - 1 + MERCH_IMAGES.length) % MERCH_IMAGES.length
    );
  };

  return (
    <div className="mt-10 w-full max-w-6xl overflow-hidden border-y border-brand-black/10 bg-[#ddc3f2] text-left shadow-[0_18px_45px_rgba(10,10,10,0.08)] md:mt-12">
      <div className="relative grid min-h-[230px] md:grid-cols-[1fr_320px]">
        <div
          className="absolute left-0 top-0 h-8 w-full bg-brand-off-white"
          aria-hidden="true"
        >
          <div className="h-full bg-[radial-gradient(36px_32px_at_50%_-1px,transparent_48%,#ddc3f2_51%)] bg-[length:72px_32px]" />
        </div>

        <div className="relative flex min-w-0 items-end overflow-hidden px-5 pb-7 pt-12 sm:px-8 md:px-10">
          <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {visibleItems.map(({ label, src, tilt }, index) => (
              <div
                key={`${label}-${index}`}
                className={cn(
                  "flex min-h-[142px] items-center justify-center",
                  index === 3 && "block sm:hidden lg:block",
                  index === 4 && "hidden lg:block"
                )}
              >
                <img
                  src={src}
                  alt={label}
                  className={cn(
                    "hero-carousel-pop h-24 w-24 object-contain drop-shadow-[6px_8px_0_rgba(10,10,10,0.16)] transition-transform duration-500 sm:h-28 sm:w-28",
                    tilt
                  )}
                  style={{ animationDelay: `${index * 110}ms` }}
                />
              </div>
            ))}
          </div>
        </div>

        <aside className="relative flex min-h-[190px] flex-col justify-between overflow-hidden bg-brand-black p-7 text-white md:min-h-full md:p-10">
          <div
            className="absolute -right-8 -top-10 h-20 w-20 rounded-full border-[18px] border-[#ddc3f2] opacity-95"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -right-5 h-28 w-28 border-l-[16px] border-t-[16px] border-[#ddc3f2] rotate-45"
            aria-hidden="true"
          />
          <div>
            <div className="hero-carousel-star mb-5 h-11 w-11 text-brand-yellow" />
            <h2 className="max-w-[190px] text-3xl font-bold leading-tight tracking-normal">
              Creator Merch Drops
            </h2>
          </div>
          <div className="relative z-10 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous category"
              onClick={() => move("prev")}
              className="flex h-11 w-11 items-center justify-center border border-white/25 bg-white/5 text-white transition-colors hover:bg-white hover:text-brand-black"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next category"
              onClick={() => move("next")}
              className="flex h-11 w-11 items-center justify-center border border-white/25 bg-white/5 text-white transition-colors hover:bg-white hover:text-brand-black"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </aside>
      </div>
      <div className="grid border-t border-brand-black/10 bg-brand-off-white md:grid-cols-[220px_1fr]">
        <div className="border-b border-brand-black/10 px-5 py-4 font-mono text-xs font-bold uppercase tracking-wide text-brand-black md:border-b-0 md:border-r">
          How it works
        </div>
        <div className="relative overflow-hidden px-5 py-4">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{ transform: `translateX(-${activeStep * 100}%)` }}
          >
            {HERO_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="flex min-w-full flex-col items-start gap-1 text-left"
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[11px] font-bold text-brand-yellow">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-bold uppercase leading-tight text-brand-black sm:text-sm">
                    {step.title}
                  </span>
                </div>
                <p className="pl-[26px] text-[11px] leading-snug text-brand-black/60 sm:text-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
