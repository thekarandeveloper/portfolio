import Image, { type ImageProps } from "next/image";
import { cloudinaryUrl, shimmerBlur } from "@/lib/cloudinary";

type Props = Omit<ImageProps, "loader" | "placeholder" | "blurDataURL">;

export function CloudinaryImage(props: Props) {
  const width = typeof props.width === "number" ? props.width : undefined;
  const height = typeof props.height === "number" ? props.height : undefined;
  const src = typeof props.src === "string" ? cloudinaryUrl(props.src, { width, height }) : props.src;

  // Local paths bypass Next.js image optimization (avoids allowed-widths 400 errors)
  const isLocal = typeof src === "string" && src.startsWith("/");

  if (isLocal) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src as string}
        alt={props.alt}
        width={width}
        height={height}
        sizes={props.sizes as string | undefined}
        className={props.className}
        style={props.style as React.CSSProperties | undefined}
      />
    );
  }

  return <Image {...props} src={src} placeholder="blur" blurDataURL={shimmerBlur} />;
}
