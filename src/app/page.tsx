import { FAQ, FAQS } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { FinePrint } from "@/components/sections/FinePrint";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Packages } from "@/components/sections/Packages";
import { ProfitCalculator } from "@/components/sections/ProfitCalculator";
import { StyleDirection } from "@/components/sections/StyleDirection";
import { WhatWeHandle } from "@/components/sections/WhatWeHandle";
import { StructuredData } from "@/components/seo/StructuredData";
import { absoluteUrl, siteConfig } from "@/lib/site";

const organizationId = absoluteUrl("/#organization");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      alternateName: siteConfig.alternateNames,
      description: siteConfig.description,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/icon.svg"),
      email: siteConfig.email,
      sameAs: [siteConfig.instagram],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: siteConfig.whatsapp,
        availableLanguage: ["English", "Hindi"],
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: absoluteUrl("/"),
      name: siteConfig.name,
      alternateName: siteConfig.alternateNames,
      description: siteConfig.description,
      publisher: { "@id": organizationId },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/#webpage"),
      url: absoluteUrl("/"),
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: { "@id": absoluteUrl("/#website") },
      about: { "@id": organizationId },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      name: "Wedrip creator merchandise services",
      serviceType: "Creator merchandise agency",
      description:
        "Creator merchandise design, storefront setup, production management, and launch support for creators in India.",
      provider: { "@id": organizationId },
      areaServed: { "@type": "Country", name: "India" },
      url: absoluteUrl("/#packages"),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <StructuredData data={structuredData} />
      <main className="overflow-x-clip">
        <Hero />
        <HowItWorks />
        <WhatWeHandle />
        <Packages />
        <ProfitCalculator />
        <FinePrint />
        <StyleDirection />
        <FAQ />
        <FinalCta />
      </main>
    </>
  );
}
