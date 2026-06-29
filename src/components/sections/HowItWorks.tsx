"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { NumberTicker } from "@/components/ui/number-ticker";

type Step = {
  number: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Reach out",
    description:
      "Send us your handle, your audience size, and the vibe you want. WhatsApp, Instagram, email — whatever works.",
  },
  {
    number: "02",
    title: "We design",
    description:
      "Moodboards, fabric direction, and design rounds. Three free revisions. Designs land in your inbox within the first two weeks.",
  },
  {
    number: "03",
    title: "Store goes live",
    description:
      "We build the storefront, plug in print-on-demand, and connect manufacturers. Ready in 28 days from kickoff.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Drop strategy, fan announcements, fulfillment running in the background. Your only job: post the launch.",
  },
];

export function HowItWorks() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!rightColRef.current || !lineRef.current || !leftColRef.current) return;

        // Pin only the left column (sticky-sidebar pattern) while the
        // right column's steps scroll normally — pinning the whole
        // section would freeze the steps too, so their ScrollTriggers
        // would never re-toggle after the first one.
        const pinTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: leftColRef.current,
          pinSpacing: false,
          anticipatePin: 1,
        });

        // Drive both the line fill and the active step directly off the
        // same scroll progress (0-1 across the whole section), rather than
        // per-step "top center" triggers — those are fragile here since
        // step 1 sits close enough to the section's top padding that its
        // viewport-center crossing happens before the pin even engages.
        const lineTween = gsap.fromTo(
          lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
              onUpdate: (self) => {
                const index = Math.min(
                  STEPS.length - 1,
                  Math.floor(self.progress * STEPS.length)
                );
                setActiveStepIndex(index);
              },
            },
          }
        );

        return () => {
          pinTrigger.kill();
          lineTween.scrollTrigger?.kill();
          lineTween.kill();
        };
      });

      mm.add("(max-width: 1023px)", () => {
        const cards = sectionRef.current?.querySelectorAll("[data-step-card]");
        if (!cards) return;

        const tween = gsap.from(cards, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.kill();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="bg-brand-black px-6 py-24 md:py-40"
    >
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[35%_65%] lg:gap-16">
        {/* Left column — desktop only, synced to active step via ScrollTrigger */}
        <div ref={leftColRef} className="hidden lg:block">
          <span className="font-mono text-xs uppercase tracking-wide text-brand-yellow">
            How It Works
          </span>
          <div className="mt-6 flex items-baseline font-sans font-bold tracking-tight-display">
            <span className="text-7xl text-brand-yellow">0</span>
            <NumberTicker
              value={activeStepIndex + 1}
              className="text-7xl text-brand-yellow"
            />
            <span className="text-7xl text-white/30">/04</span>
          </div>
          <p className="mt-4 text-2xl font-bold uppercase tracking-tight-display text-white">
            {STEPS[activeStepIndex].title}
          </p>
        </div>

        {/* Right column */}
        <div ref={rightColRef} className="relative mt-16 lg:mt-0">
          <div className="absolute left-0 top-0 hidden h-full w-[2px] bg-white/10 lg:block">
            <div ref={lineRef} className="w-full bg-brand-yellow" />
          </div>

          <div className="space-y-24 lg:space-y-32 lg:pl-12">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                data-step-card
                className={cn(
                  "transition-opacity lg:flex lg:min-h-[70vh] lg:flex-col lg:justify-center",
                  index === activeStepIndex
                    ? "opacity-100"
                    : "opacity-100 lg:opacity-30"
                )}
              >
                {/* Mobile-only step indicator */}
                <div className="mb-6 lg:hidden">
                  <div className="mb-4 h-[2px] w-16 bg-brand-yellow" />
                  <div className="flex items-baseline font-sans font-bold tracking-tight-display">
                    <span className="text-4xl text-brand-yellow">
                      {step.number}
                    </span>
                    <span className="text-4xl text-white/30">/04</span>
                  </div>
                </div>

                <span className="hidden font-mono text-xs uppercase tracking-wide text-brand-yellow lg:inline-block">
                  {step.number}
                </span>
                <h3 className="mt-3 max-w-xl text-2xl font-bold uppercase leading-tight tracking-tight-display text-white md:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
