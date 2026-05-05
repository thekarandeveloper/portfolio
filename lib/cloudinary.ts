const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "demo";

type CloudinaryOptions = {
  width?: number;
  height?: number;
  quality?: "auto" | number;
  format?: "auto" | string;
  crop?: "fill" | "fit" | "scale" | "limit";
};

export function cloudinaryUrl(publicId: string, options: CloudinaryOptions = {}) {
  if (publicId.startsWith("http")) {
    return publicId;
  }

  const transforms = [
    options.crop ? `c_${options.crop}` : "c_fill",
    options.width ? `w_${options.width}` : null,
    options.height ? `h_${options.height}` : null,
    `q_${options.quality || "auto"}`,
    `f_${options.format || "auto"}`
  ].filter(Boolean);

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms.join(",")}/${publicId}`;
}

export function cloudinaryLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  return cloudinaryUrl(src, { width, quality: quality || "auto" });
}

export const shimmerBlur =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNzAwJyBoZWlnaHQ9JzQ3NScgdmlld0JveD0nMCAwIDcwMCA0NzUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzcwMCcgaGVpZ2h0PSc0NzUnIGZpbGw9JyNGM0VERTgnLz48Y2lyY2xlIGN4PSczNTAnIGN5PScyMzcnIHI9JzIwMCcgZmlsbD0nI0ZGRjBGMycgZmlsbC1vcGFjaXR5PScwLjYnLz48L3N2Zz4=";
