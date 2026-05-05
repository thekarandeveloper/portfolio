import Image, { type ImageProps } from "next/image";
import { cloudinaryUrl, shimmerBlur } from "@/lib/cloudinary";

type Props = Omit<ImageProps, "loader" | "placeholder" | "blurDataURL">;

export function CloudinaryImage(props: Props) {
  const width = typeof props.width === "number" ? props.width : undefined;
  const height = typeof props.height === "number" ? props.height : undefined;
  const src = typeof props.src === "string" ? cloudinaryUrl(props.src, { width, height }) : props.src;

  return <Image {...props} src={src} placeholder="blur" blurDataURL={shimmerBlur} />;
}
