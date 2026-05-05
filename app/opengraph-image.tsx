import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Nikunj Tyagi · Product Designer";

export default async function OgImage() {
  let photoSrc = "";
  try {
    const imageData = await readFile(join(process.cwd(), "public/nikunj.png"));
    photoSrc = `data:image/png;base64,${imageData.toString("base64")}`;
  } catch {
    // no photo
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fafaf8",
          padding: "70px 80px",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Subtle grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #e8e8e6 1px, transparent 0)",
            backgroundSize: "32px 32px",
            opacity: 0.5,
            display: "flex",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 15,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 28,
              fontFamily: "sans-serif",
              display: "flex",
            }}
          >
            Product Designer
          </div>
          <div
            style={{
              fontSize: 86,
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.05,
              marginBottom: 32,
              fontFamily: "serif",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Nikunj</span>
            <span>Tyagi</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
            }}
          >
            {["B2B SaaS", "Healthcare", "iOS", "Design Systems"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    fontSize: 14,
                    color: "#666",
                    background: "#efefed",
                    padding: "6px 14px",
                    borderRadius: 100,
                    fontFamily: "sans-serif",
                    display: "flex",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>

        {/* Photo */}
        {photoSrc && (
          <div
            style={{
              width: 340,
              height: 340,
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              flexShrink: 0,
              border: "6px solid #e5e5e0",
              zIndex: 1,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoSrc}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
              alt="Nikunj Tyagi"
            />
          </div>
        )}
      </div>
    ),
    { ...size }
  );
}
