"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import heroCarousel1 from "../../../hero_carousel/1.jpeg";
import heroCarousel2 from "../../../hero_carousel/2.jpeg";
import heroCarousel3 from "../../../hero_carousel/3.jpeg";
import heroCarousel4 from "../../../hero_carousel/4.jpeg";
import heroCarousel5 from "../../../hero_carousel/5.jpeg";

const MERCH_IMAGES = [
  {
    label: "Hero carousel image 1",
    tilt: "-rotate-6",
    src: heroCarousel1,
  },
  {
    label: "Hero carousel image 2",
    tilt: "rotate-3",
    src: heroCarousel2,
  },
  {
    label: "Hero carousel image 3",
    tilt: "-rotate-2",
    src: heroCarousel3,
  },
  {
    label: "Hero carousel image 4",
    tilt: "rotate-6",
    src: heroCarousel4,
  },
  {
    label: "Hero carousel image 5",
    tilt: "-rotate-3",
    src: heroCarousel5,
  },
];

const HERO_STEPS = [
  {
    title: "Reach out",
    description:
      "Send us your handle, your audience size, and the vibe you want. WhatsApp, Instagram, email â€” whatever works.",
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
    <div className="w-full max-w-[72rem] overflow-hidden border-y border-brand-black/10 bg-[#ddc3f2] text-left shadow-[0_18px_45px_rgba(10,10,10,0.08)]">
      <div className="relative grid min-h-[180px] grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(280px,320px)] lg:min-h-[168px]">
        <div
          className="absolute left-0 top-0 h-6 w-full bg-brand-off-white sm:h-8"
          aria-hidden="true"
        >
          <div className="h-full bg-[radial-gradient(36px_32px_at_50%_-1px,transparent_48%,#ddc3f2_51%)] bg-[length:72px_32px]" />
        </div>

        <div className="relative flex min-w-0 items-end overflow-hidden px-3 pb-4 pt-7 sm:px-6 sm:pb-6 sm:pt-10 md:px-8 lg:px-10 lg:pb-5 lg:pt-8">
          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
            {visibleItems.map(({ label, src, tilt }, index) => (
              <div
                key={`${label}-${index}`}
                className={cn(
                  "flex min-h-[88px] items-center justify-center sm:min-h-[118px] lg:min-h-[108px]",
                  index === 4 && "col-span-2 sm:col-span-1"
                )}
              >
                <Image
                  src={src}
                  alt={label}
                  width={220}
                  height={220}
                  className={cn(
                    "hero-carousel-pop h-[3.4rem] w-[3.4rem] object-contain drop-shadow-[6px_8px_0_rgba(10,10,10,0.16)] transition-transform duration-500 sm:h-20 sm:w-20 lg:h-16 lg:w-16 xl:h-20 xl:w-20",
                    tilt
                  )}
                  style={{ animationDelay: `${index * 110}ms` }}
                />
              </div>
            ))}
          </div>
        </div>

        <aside className="relative flex min-h-[132px] flex-col justify-between overflow-hidden bg-brand-black p-4 text-white sm:p-6 md:min-h-full md:p-8 lg:p-6">
          <div
            className="absolute -right-8 -top-10 h-20 w-20 rounded-full border-[18px] border-[#ddc3f2] opacity-95"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -right-5 h-28 w-28 rotate-45 border-l-[16px] border-t-[16px] border-[#ddc3f2]"
            aria-hidden="true"
          />
          <div>
            <div className="hero-carousel-star mb-4 h-10 w-10 text-brand-yellow sm:mb-5 sm:h-11 sm:w-11" />
            <h2 className="max-w-[11ch] text-[1.15rem] font-bold leading-tight tracking-normal sm:text-3xl lg:text-[24px]">
              Creator Merch Drops
            </h2>
          </div>
          <div className="relative z-10 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous category"
              onClick={() => move("prev")}
              className="flex h-10 w-10 items-center justify-center border border-white/25 bg-white/5 text-white transition-colors hover:bg-white hover:text-brand-black sm:h-11 sm:w-11"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next category"
              onClick={() => move("next")}
              className="flex h-10 w-10 items-center justify-center border border-white/25 bg-white/5 text-white transition-colors hover:bg-white hover:text-brand-black sm:h-11 sm:w-11"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </aside>
      </div>
      <div className="grid border-t border-brand-black/10 bg-brand-off-white md:grid-cols-[200px_1fr]">
        <div className="border-b border-brand-black/10 px-4 py-3 font-mono text-xs font-bold uppercase tracking-wide text-brand-black sm:px-5 md:border-b-0 md:border-r md:py-4">
          How it works
        </div>
        <div className="relative overflow-hidden px-4 py-3 sm:px-5 sm:py-4">
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
