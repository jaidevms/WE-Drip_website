import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/ui/blur-fade";

const FAQS = [
  {
    question: "How long until my merch is live?",
    answer:
      "28 days from kickoff — design, store build, and production setup all included. We move faster when content is approved quickly.",
  },
  {
    question: "Do I need to hold inventory?",
    answer:
      "Standard and Full Service use print-on-demand — zero inventory, zero risk. Exclusive Drop is a 50-piece run, so yes, you'll hold those 50 pieces (which sell out fast by design).",
  },
  {
    question: "What if my merch doesn't sell?",
    answer:
      "On Standard and Full Service, you have no inventory cost — no sales just means no revenue, no loss. On Exclusive Drop, the 50-piece run is designed to be small and scarcity-driven, exactly so this risk stays low.",
  },
  {
    question: "I have zero design experience. Can I still get custom merch?",
    answer:
      "That's the whole point of the agency. You share your vibe and we handle moodboards, designs, and rounds. Three free revisions on every package.",
  },
  {
    question: "Who handles customer support and shipping issues?",
    answer:
      "Full Service: we do, end-to-end. Standard: you do — we hand over the tools and walk you through it. Exclusive Drop: customer care isn't included; it's a single drop, fulfillment is one batch.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Yes. Start with Exclusive Drop, move to Standard or Full Service when you're ready — and we'll knock 10% off the new package.",
  },
  {
    question: "What about GST?",
    answer:
      "Our agency fees to you are GST-exempt. GST applies to your end customers when they buy the merch — that's handled inside the store setup.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-brand-off-white px-6 py-16 md:py-[120px]">
      <div className="mx-auto max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-wide text-brand-yellow">
          FAQ
        </span>
        <h2 className="mt-2 text-[28px] font-bold uppercase leading-[1.1] tracking-tight-display text-brand-black md:text-[44px]">
          What you&apos;re probably wondering.
        </h2>

        <Accordion type="single" collapsible defaultValue="item-0" className="mt-12">
          {FAQS.map((faq, index) => (
            <BlurFade key={faq.question} delay={index * 0.06} inView>
              <AccordionItem
                value={`item-${index}`}
                className="border-brand-gray-line"
              >
                <AccordionTrigger className="py-6 text-base font-bold uppercase tracking-tight-display text-brand-black hover:no-underline md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-brand-gray-text">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </BlurFade>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
