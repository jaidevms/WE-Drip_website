import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

const WHATSAPP_URL =
  "https://wa.me/917550022162?text=Hi%20WeDrip%2C%20I'm%20interested.";

export function ApplySuccess() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-off-white px-6">
      <div className="flex max-w-[560px] flex-col items-center text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow">
          <Check className="h-5 w-5 text-white" strokeWidth={3} />
        </span>

        <h1 className="mt-8 text-[60px] font-bold uppercase leading-[0.95] tracking-tight-display text-brand-black md:text-[96px]">
          Got it.
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-brand-gray-text">
          We&apos;ll be in touch on WhatsApp within 24 hours.
          <br />
          Meanwhile, follow along at{" "}
          <a
            href="https://instagram.com/wedripout"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-black underline underline-offset-2"
          >
            @wedripout
          </a>
        </p>

        <div className="mt-12 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="rounded-[4px] border border-brand-black bg-transparent px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-brand-black transition-colors hover:bg-brand-black hover:text-white"
          >
            Back to home
          </Link>
          <Magnetic>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-[4px] bg-brand-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-yellow hover:text-brand-black"
            >
              <MessageCircle className="h-4 w-4" />
              Message us on WhatsApp
            </a>
          </Magnetic>
        </div>
      </div>
    </main>
  );
}
