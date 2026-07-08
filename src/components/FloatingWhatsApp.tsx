"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/917550022162";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message WeDrip on WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-brand-black transition-opacity duration-300 animate-whatsapp-pulse",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-current"
      >
        <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.94 9.94 0 0 0-8.6 14.92L2 22l5.23-1.37A9.94 9.94 0 0 0 12 22a10 10 0 0 0 7.05-17.06Zm-7.05 15.4a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.81.83-3.03-.2-.31A8.28 8.28 0 0 1 12 3.66a8.34 8.34 0 0 1 0 16.68Zm4.57-6.23c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.12-.17.25-.66.8-.8.97-.15.17-.3.19-.56.06-.25-.13-1.08-.4-2.05-1.28-.76-.68-1.27-1.52-1.42-1.77-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.38-.78-1.89-.2-.48-.4-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.02 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.08.42 1.45.54.61.2 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.57.21-1.06.15-1.17-.06-.1-.23-.17-.48-.29Z" />
      </svg>
    </a>
  );
}
