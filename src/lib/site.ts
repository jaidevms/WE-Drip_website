export const siteConfig = {
  name: "WeDrip",
  title: "Wedrip | India's merch agency for creators",
  description:
    "India's merch agency for creators. We design it, build the store, and handle production so you can focus on your audience.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.wedrip.in",
  locale: "en_IN",
  alternateNames: ["Wedrip", "WeDrip", "We Drip"],
  email: "we.drip.cma@gmail.com",
  instagram: "https://www.instagram.com/wedrip.merch/",
  instagramHandle: "@wedrip.merch",
  whatsapp: "https://wa.me/917550022162",
} as const;

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();
