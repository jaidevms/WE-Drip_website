import { Shirt, Coffee } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const CONCEPTS = [
  { number: "01", type: "HOODIE", icon: Shirt },
  { number: "02", type: "MUG", icon: Coffee },
  { number: "03", type: "TEE", icon: Shirt },
  { number: "04", type: "HOODIE", icon: Shirt },
  { number: "05", type: "MUG", icon: Coffee },
  { number: "06", type: "TEE", icon: Shirt },
];

export function StyleDirection() {
  return (
    <section className="bg-brand-off-white py-16 md:py-[120px]">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="font-mono text-xs uppercase tracking-wide text-brand-yellow">
          Style Direction
        </span>
        <h2 className="mt-2 text-[32px] font-bold uppercase leading-[1.05] tracking-tight-display text-brand-black md:text-[52px]">
          This is the kind of work we make.
        </h2>
        <p className="mt-4 text-base text-brand-gray-text md:text-lg">
          Yours will be yours alone — these are concepts to show our range.
        </p>
      </div>

      <div className="relative mt-16 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-off-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-off-white to-transparent md:w-32" />

        <Marquee pauseOnHover className="[--duration:40s]">
          {CONCEPTS.map((concept) => {
            const Icon = concept.icon;
            return (
              <div
                key={concept.number}
                className="flex w-[260px] flex-col gap-3 md:w-[320px]"
              >
                <div className="flex aspect-[4/5] flex-col items-center justify-center gap-4 border border-brand-gray-line bg-neutral-200 transition-transform hover:scale-[1.03]">
                  <Icon
                    className="h-10 w-10 text-neutral-500"
                    strokeWidth={1.5}
                  />
                  <span className="px-4 text-center font-mono text-xs uppercase tracking-wide text-neutral-500">
                    Concept {concept.number} — {concept.type}
                  </span>
                </div>
                <span className="text-center font-mono text-xs uppercase tracking-wide text-brand-gray-text">
                  Concept — {concept.type}
                </span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
