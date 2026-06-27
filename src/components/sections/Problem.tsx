const PAIN_TAGS = [
  "— Suppliers ghost you",
  "— Designers cost a fortune",
  "— Shopify is a full-time job",
  "— Customer DMs never stop",
];

export function Problem() {
  return (
    <section
      id="problem"
      className="flex min-h-[80vh] flex-col items-center justify-center bg-brand-black px-6 py-32 md:py-40"
    >
      <p className="max-w-[1100px] text-center font-sans text-[32px] font-bold uppercase leading-[1.1] tracking-tight-display text-white md:text-[44px] lg:text-[64px]">
        MERCH IS A <span className="text-brand-yellow">MESS</span> —
        SUPPLIERS, DESIGNS, A STORE, RETURNS, CUSTOMER CARE.{" "}
        <span className="text-white/30">
          BY THE TIME YOU FIGURE IT OUT, THE MOMENT&apos;S GONE.
        </span>
      </p>

      <div className="mt-20 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:flex-wrap sm:justify-center">
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
