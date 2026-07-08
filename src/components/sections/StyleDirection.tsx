import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import carousel1 from "../../../carousel/1.jpeg";
import carousel2 from "../../../carousel/2.jpg";
import carousel3 from "../../../carousel/3.jpeg";
import carousel4 from "../../../carousel/4.jpg";
import carousel5 from "../../../carousel/5.jpeg";
import carousel6 from "../../../carousel/6.jpg";

const CONCEPTS = [
  { number: "01", type: "HOODIE", image: carousel1 },
  { number: "02", type: "MUG", image: carousel2 },
  { number: "03", type: "TEE", image: carousel3 },
  { number: "04", type: "HOODIE", image: carousel4 },
  { number: "05", type: "MUG", image: carousel5 },
  { number: "06", type: "TEE", image: carousel6 },
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
          Yours will be yours alone these are concepts to show our range.
        </p>
      </div>

      <div className="relative mt-16 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-off-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-off-white to-transparent md:w-32" />

        <Marquee pauseOnHover className="[--duration:40s]">
          {CONCEPTS.map((concept) => (
            <div key={concept.number} className="w-[260px] md:w-[320px]">
              <div className="relative aspect-[4/5] overflow-hidden border border-brand-gray-line bg-neutral-200 transition-transform hover:scale-[1.05]">
                <Image
                  src={concept.image}
                  alt={`Concept ${concept.number} ${concept.type}`}
                  fill
                  sizes="(min-width: 768px) 320px, 260px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
