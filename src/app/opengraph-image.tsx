import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Wedrip | India's merch agency for creators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8f6f0",
          color: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", fontSize: 42, fontWeight: 700 }}>
          {siteConfig.name}
          <span style={{ color: "#fed400", marginLeft: "6px" }}>|</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 800, lineHeight: 1 }}>
            You built the audience.
          </div>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 800, lineHeight: 1 }}>
            We&apos;ll build the brand.
          </div>
          <div style={{ color: "#4a4a4a", display: "flex", fontSize: 28 }}>
            {siteConfig.description}
          </div>
        </div>
        <div
          style={{
            alignSelf: "flex-start",
            background: "#fed400",
            display: "flex",
            fontSize: 22,
            padding: "14px 20px",
          }}
        >
          www.wedrip.in
        </div>
      </div>
    ),
    size
  );
}
