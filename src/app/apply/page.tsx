"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { ApplyForm } from "@/components/ApplyForm";
import { ApplySuccess } from "@/components/ApplySuccess";

const WHATSAPP_URL =
  "https://wa.me/917550022162?text=Hi%20WeDrip%2C%20I'm%20interested.";

function ApplyFormFallback() {
  return (
    <div className="h-[640px] w-full animate-pulse rounded-[4px] bg-brand-gray-line/30" />
  );
}

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <ApplySuccess />;
  }

  return (
    <main className="min-h-screen bg-brand-off-white px-6 pb-16 pt-24 md:pb-20 md:pt-[120px]">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="font-mono text-[13px] uppercase tracking-wide text-brand-gray-text transition-colors hover:text-brand-black"
        >
          &larr; Back to home
        </Link>

        <h1 className="mt-6 text-[36px] font-bold uppercase leading-[1.05] tracking-tight-display text-brand-black md:text-[56px]">
          Tell us about you.
        </h1>
        <p className="mt-4 text-[17px] text-brand-gray-text">
          We read every submission. Expect a reply within 24 hours.
        </p>

        <div className="mt-16">
          <Suspense fallback={<ApplyFormFallback />}>
            <ApplyForm onSubmitSuccess={() => setSubmitted(true)} />
          </Suspense>
        </div>

        <div className="mt-12 border-t border-brand-gray-line pt-8 text-center font-mono text-[13px] uppercase tracking-wide text-brand-gray-text">
          Prefer to chat?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-black underline-offset-2 hover:underline"
          >
            WhatsApp
          </a>
          {" · "}
          <a
            href="https://instagram.com/wedripout"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-black underline-offset-2 hover:underline"
          >
            Instagram
          </a>
          {" · "}
          <a
            href="mailto:sharath.creator2210@gmail.com"
            className="font-bold text-brand-black underline-offset-2 hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </main>
  );
}
