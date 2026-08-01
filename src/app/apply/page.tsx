import type { Metadata } from "next";
import { ApplyPageClient } from "./ApplyPageClient";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply to work with Wedrip",
  description:
    "Tell Wedrip about your audience and merch goals. Apply for creator merchandise design, store setup, and production support.",
  alternates: { canonical: "/apply" },
  openGraph: {
    title: "Apply to work with Wedrip",
    description:
      "Tell Wedrip about your audience and merch goals. Apply for creator merchandise support.",
    url: "/apply",
    type: "website",
    siteName: siteConfig.name,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to work with Wedrip",
    description:
      "Tell Wedrip about your audience and merch goals. Apply for creator merchandise support.",
    images: ["/opengraph-image"],
  },
};

export default function ApplyPage() {
  return <ApplyPageClient />;
}
