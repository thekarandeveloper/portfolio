import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nikunj Tyagi · Product Designer",
    short_name: "Nikunj Tyagi",
    description:
      "Portfolio of Nikunj Tyagi, a Product Designer specializing in B2B SaaS, healthcare, and iOS.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a1a1a",
    orientation: "portrait",
    icons: [
      {
        src: "/nikunj.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "maskable",
      },
      {
        src: "/nikunj.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
