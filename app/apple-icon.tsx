import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  let photoSrc = "";
  try {
    const imageData = await readFile(join(process.cwd(), "public/nikunj.jpg"));
    photoSrc = `data:image/jpeg;base64,${imageData.toString("base64")}`;
  } catch {
    // fallback to initials
  }

  return new ImageResponse(
    photoSrc ? (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          alt="Nikunj Tyagi"
        />
      </div>
    ) : (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
          borderRadius: "50%",
          fontSize: 72,
          fontWeight: 700,
          color: "white",
          letterSpacing: "-3px",
        }}
      >
        NT
      </div>
    ),
    { ...size }
  );
}
