import { MDXRemote } from "next-mdx-remote/rsc";
import type { BlockquoteHTMLAttributes, HTMLAttributes, ImgHTMLAttributes, LiHTMLAttributes } from "react";
import { CloudinaryImage } from "./CloudinaryImage";

const components = {
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <CloudinaryImage
      src={String(props.src || "")}
      alt={props.alt || ""}
      width={1200}
      height={720}
      sizes="(max-width: 768px) 100vw, 900px"
      className="my-8 rounded-xl border border-[rgba(180,140,130,0.15)] object-cover"
    />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="mt-14 font-serif text-3xl font-light leading-tight text-ink dark:text-bg" />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="mt-9 font-serif text-2xl font-normal text-ink dark:text-bg" />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="mt-5 text-[0.95rem] leading-[1.9] text-ink3 dark:text-bg4" />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="mt-5 space-y-3 text-[0.95rem] leading-[1.8] text-ink3 dark:text-bg4" />
  ),
  li: (props: LiHTMLAttributes<HTMLLIElement>) => <li {...props} className="ml-5 list-disc pl-1" />,
  blockquote: (props: BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className="my-8 border-l-2 border-pink bg-pink5 px-6 py-5 font-serif text-xl italic text-ink2 dark:bg-ink2 dark:text-bg"
    />
  )
};

export function MDXRenderer({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
