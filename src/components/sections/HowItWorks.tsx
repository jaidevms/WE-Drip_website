"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

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

const STORY_LINES = [
  "MERCH IS A MESS",
  "SUPPLIERS",
  "DESIGNS",
  "STORE",
  "RETURNS",
  "CUSTOMER CARE",
  "BY THE TIME YOU FIGURE IT OUT—",
  "THE MOMENT IS GONE.",
];

export function HowItWorks() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const storyLinesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!rightColRef.current || !lineRef.current || !leftColRef.current) return;

        // Pin the whole section to create a true scrubbed timeline presentation
        const sectionPin = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          anticipatePin: 1,
        });

        // Drive both the line fill and the active step directly off the scrub
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=300%",
            scrub: 1,
            onUpdate: (self) => {
              // Map progress over the 8 story lines
              const activeLineIndex = Math.min(
                STORY_LINES.length - 1,
                Math.floor(self.progress * STORY_LINES.length)
              );
              // Each step covers 2 lines
              const stepIndex = Math.floor(activeLineIndex / 2);
              setActiveStepIndex(stepIndex);
            },
          },
        });

        tl.fromTo(lineRef.current, { height: "0%" }, { height: "100%", ease: "none" }, 0);

        // Animate story lines on the left sequentially
        storyLinesRef.current.forEach((line, i) => {
          if (!line) return;
          
          const progressStep = 1 / STORY_LINES.length;
          const startTime = i * progressStep;
          const dimTime = startTime + progressStep;

          // Initial state: dim, slightly blurred
          gsap.set(line, { opacity: 0.1, filter: "blur(4px)" });

          // Highlight
          tl.to(line, {
            opacity: 1,
            filter: "blur(0px)",
            color: "#ffde59", // brand yellow approx
            duration: progressStep * 0.5,
            ease: "power2.out"
          }, startTime);

          // Dim afterwards (unless it's the last line)
          if (i < STORY_LINES.length - 1) {
            tl.to(line, {
              opacity: 0.4,
              color: "#ffffff",
              duration: progressStep * 0.5,
              ease: "power2.inOut"
            }, dimTime);
          }
        });

        return () => {
          sectionPin.kill();
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      mm.add("(max-width: 1023px)", () => {
        const cards = sectionRef.current?.querySelectorAll("[data-step-card]");
        if (!cards) return;

        const tweens = Array.from(cards).map((card) =>
          gsap.from(card, {
            opacity: 0,
            x: -48,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          })
        );

        const stateTriggers = Array.from(cards).map((card, index) =>
          ScrollTrigger.create({
            trigger: card,
            start: "top 68%",
            end: "bottom 40%",
            onEnter: () => setActiveStepIndex(index),
            onEnterBack: () => setActiveStepIndex(index),
          })
        );

        return () => {
          tweens.forEach((tween) => {
            tween.scrollTrigger?.kill();
            tween.kill();
          });
          stateTriggers.forEach((trigger) => trigger.kill());
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
      className="relative z-10 bg-brand-black px-6 py-24 md:py-40"
    >
      <div className="mx-auto max-w-7xl lg:grid lg:min-h-[70vh] lg:grid-cols-[35%_65%] lg:gap-16">
        {/* Left column — Problem narrative */}
        <div ref={leftColRef} className="flex flex-col justify-center mb-16 lg:mb-0 lg:flex">
          <p className="max-w-[420px] font-sans text-[30px] font-bold uppercase leading-[1.2] tracking-tight-display text-white sm:text-[32px] lg:text-[30px] xl:text-[42px] 2xl:text-[52px]">
            {STORY_LINES.map((line, i) => (
              <span
                key={i}
                ref={(el) => {
                  storyLinesRef.current[i] = el;
                }}
                className="block"
              >
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* Right column — Process steps */}
        <div ref={rightColRef} className="relative mt-16 flex flex-col justify-center lg:mt-0 lg:h-full lg:pl-12">
          <div className="absolute left-0 top-0 hidden h-full w-[2px] bg-white/10 lg:block">
            <div ref={lineRef} className="w-full bg-brand-yellow" />
          </div>

          {/* Desktop Layout */}
          <div className="hidden h-full w-full lg:block">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "absolute top-1/2 w-full -translate-y-1/2 pr-12 transition-all duration-700 ease-out",
                  index === 3 && "-mt-[3px]",
                  index === activeStepIndex
                    ? "pointer-events-auto translate-x-0 scale-100 opacity-100 blur-none"
                    : "pointer-events-none translate-x-12 scale-[0.96] opacity-0 blur-sm"
                )}
              >
                <div className="mb-4 flex items-baseline font-sans font-bold tracking-tight-display">
                  <span className="text-5xl text-brand-yellow">
                    {step.number}
                  </span>
                  <span className="text-5xl text-white/30">/04</span>
                </div>

                <h3 className="mt-3 max-w-xl text-4xl font-bold uppercase leading-tight tracking-tight-display text-white">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile layout requires normal document flow */}
          <div className="space-y-10 lg:hidden">
            {STEPS.map((step, index) => (
              <div
                key={`mobile-${step.number}`}
                data-step-card
                className={cn(
                  "rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-500",
                  index === activeStepIndex
                    ? "translate-x-0 border-brand-yellow/60 bg-white/[0.07] opacity-100 shadow-[0_16px_40px_rgba(0,0,0,0.24)]"
                    : "translate-x-0 opacity-65"
                )}
              >
                <div className="mb-6">
                  <div className="mb-4 h-[2px] w-16 bg-brand-yellow" />
                  <div className="flex items-baseline font-sans font-bold tracking-tight-display">
                    <span className="text-4xl text-brand-yellow">
                      {step.number}
                    </span>
                    <span className="text-4xl text-white/30">/04</span>
                  </div>
                </div>
                <h3 className="mt-3 max-w-xl text-2xl font-bold uppercase leading-tight tracking-tight-display text-white">
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
