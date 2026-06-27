import { cn } from "@/lib/utils";

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
  const activeStep = STEPS[0];

  return (
    <section
      id="how-it-works"
      className="bg-brand-black px-6 py-24 md:py-40"
    >
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[35%_65%] lg:gap-16">
        {/* Left column — desktop only, static for now (sticky/pin behavior comes in Phase 3) */}
        <div className="hidden lg:block">
          <span className="font-mono text-xs uppercase tracking-wide text-brand-yellow">
            How It Works
          </span>
          <div className="mt-6 flex items-baseline font-sans font-bold tracking-tight-display">
            <span className="text-7xl text-brand-yellow">
              {activeStep.number}
            </span>
            <span className="text-7xl text-white/30">/04</span>
          </div>
          <p className="mt-4 text-2xl font-bold uppercase tracking-tight-display text-white">
            {activeStep.title}
          </p>
        </div>

        {/* Right column */}
        <div className="relative mt-16 lg:mt-0">
          <div className="absolute left-0 top-0 hidden h-full w-[2px] bg-white/10 lg:block">
            <div className="w-full bg-brand-yellow" style={{ height: "25%" }} />
          </div>

          <div className="space-y-24 lg:space-y-32 lg:pl-12">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "transition-opacity",
                  index === 0 ? "opacity-100" : "opacity-100 lg:opacity-30"
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
