"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useCounter(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

function Reveal({
  children,
  delay = 0,
  from = "bottom",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right";
  className?: string;
}) {
  const { ref, visible } = useReveal();
  const offsets: Record<string, string> = {
    bottom: "translateY(44px)",
    left: "translateX(-44px)",
    right: "translateX(44px)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : offsets[from],
        transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const [err, setErr] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {err ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bg3">
          <div className="flex h-10 w-10 items-center justify-center border border-ink4">
            <span className="text-lg text-ink4">+</span>
          </div>
          <span className="px-4 text-center font-['Syne'] text-[0.56rem] uppercase tracking-[0.22em] text-ink4">
            {alt}
          </span>
          <span className="font-['Syne'] text-[0.5rem] uppercase tracking-[0.15em] text-ink4/60">
            add to public/about/
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setErr(true)}
        />
      )}
    </div>
  );
}

function Polaroid({
  src,
  alt,
  caption,
  rotation,
  delay,
}: {
  src: string;
  alt: string;
  caption: string;
  rotation: number;
  delay: number;
}) {
  const { ref, visible } = useReveal(0.05);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "rotate(0deg) scale(1.08)"
            : `rotate(${rotation}deg)`
          : `rotate(${rotation}deg) translateY(70px)`,
        transition: hovered
          ? "opacity 0.5s ease, transform 0.38s cubic-bezier(0.34,1.56,0.64,1)"
          : `opacity 0.85s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms, transform 0.65s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
        cursor: "grab",
        zIndex: hovered ? 20 : 1,
        position: "relative",
      }}
    >
      <div
        className="bg-white px-3 pb-12 pt-3"
        style={{
          boxShadow: hovered
            ? "0 28px 72px rgba(26,18,16,0.25)"
            : "0 8px 32px rgba(26,18,16,0.13)",
        }}
      >
        <div className="relative h-[210px] w-[160px] overflow-hidden md:h-[255px] md:w-[195px]">
          <Photo src={src} alt={alt} className="h-full w-full" sizes="200px" />
        </div>
        <p className="mt-3 text-center font-[family-name:var(--font-caveat)] text-[0.92rem] leading-snug text-ink3">
          {caption}
        </p>
      </div>
    </div>
  );
}

function Brackets({ color = "border-ink3" }: { color?: string }) {
  return (
    <>
      <span className={`absolute -left-3 -top-3 z-10 block h-7 w-7 border-l-2 border-t-2 ${color}`} />
      <span className={`absolute -right-3 -top-3 z-10 block h-7 w-7 border-r-2 border-t-2 ${color}`} />
      <span className={`absolute -bottom-3 -left-3 z-10 block h-7 w-7 border-b-2 border-l-2 ${color}`} />
      <span className={`absolute -bottom-3 -right-3 z-10 block h-7 w-7 border-b-2 border-r-2 ${color}`} />
    </>
  );
}

export default function AboutPage() {
  const heroImgRef = useRef<HTMLDivElement>(null);
  const workImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(() => {
        if (heroImgRef.current) {
          heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.13}px)`;
        }
        if (workImgRef.current) {
          const section = workImgRef.current.closest("section") as HTMLElement | null;
          if (section) {
            const offset = (window.innerHeight - section.getBoundingClientRect().top) * 0.14;
            workImgRef.current.style.transform = `translateY(${-Math.max(0, offset)}px)`;
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsActive(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const count50 = useCounter(50, statsActive, 2000);
  const count3 = useCounter(3, statsActive, 1400);

  return (
    <main className="overflow-x-hidden bg-bg text-ink">
      <style>{`.no-sb::-webkit-scrollbar{display:none}`}</style>

      {/* §1 HERO */}
      <section className="relative flex min-h-screen flex-col">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(180,140,130,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(180,140,130,0.07) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 flex flex-1 flex-col px-6 pb-10 pt-24 md:px-12 lg:px-16">
          <div className="mb-10 flex items-center justify-between">
            <span className="font-['Syne'] text-[0.58rem] uppercase tracking-[0.25em] text-ink4">
              Creative Story · 2K25
            </span>
            <Link href="/" className="font-['Syne'] text-[0.58rem] uppercase tracking-[0.25em] text-ink4 transition-colors hover:text-ink">
              ← Home
            </Link>
          </div>

          <div className="grid flex-1 grid-cols-12 gap-6">
            <div className="col-span-12 flex flex-col justify-between lg:col-span-5">
              <div>
                <Reveal delay={80}>
                  <p className="mb-3 font-['Syne'] text-[0.57rem] uppercase tracking-[0.3em] text-ink4">01 · About</p>
                  <h1
                    className="leading-[0.92] tracking-[-0.025em] text-ink"
                    style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(4rem, 10vw, 8rem)" }}
                  >
                    Nikunj<br /><em>Tyagi.</em>
                  </h1>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-5 font-['Syne'] text-[0.6rem] uppercase tracking-[0.2em] text-ink3">
                    Product Designer · New Delhi, India
                  </p>
                </Reveal>
              </div>
              <div className="mt-auto pt-10">
                <Reveal delay={380}>
                  <blockquote className="text-[1.1rem] italic leading-[1.75] text-ink2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    "I design the way I explore —<br />noticing what others walk past."
                  </blockquote>
                </Reveal>
                <Reveal delay={480} className="mt-8">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 bg-ink" />
                    <div className="h-4 w-4 bg-[#6B6B3A]" />
                    <div className="h-4 w-4 bg-[#8B8B4A]" />
                    <div className="h-3 w-3 bg-[#A8A870]" />
                    <span className="ml-2 font-['Syne'] text-[0.56rem] uppercase tracking-[0.18em] text-ink4">.Nature / Cafes / Roads</span>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={160} className="h-full">
                <div className="relative h-[55vh] overflow-hidden lg:h-[78vh]">
                  <Brackets />
                  <div ref={heroImgRef} className="absolute" style={{ inset: "-12% 0 0 0", height: "125%", willChange: "transform" }}>
                    <Photo src="/about/portrait.jpg" alt="Nikunj Tyagi" className="h-full w-full" sizes="(max-width: 1024px) 100vw, 58vw" />
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 bg-bg/90 px-2 py-1 backdrop-blur-sm">
                    <p className="font-['Syne'] text-[0.56rem] uppercase tracking-[0.15em] text-ink3">Nikunj · Product Designer</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 grid grid-cols-2 gap-3 border-t border-[rgba(180,140,130,0.15)] pt-5 md:grid-cols-4">
              {["Nature's Atmosphere", "Cafes & Coffee", "Long Highways", "Flowers & Quiet"].map((tag, i) => (
                <Reveal key={tag} delay={620 + i * 60}>
                  <span className="font-['Syne'] text-[0.56rem] uppercase tracking-[0.16em] text-ink4">{tag}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §2 STATEMENT */}
      <section className="px-6 py-24 md:px-12 md:py-36 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-5 font-['Syne'] text-[0.58rem] uppercase tracking-[0.26em] text-ink4">14 · 08 → where my feet stand.</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="leading-[1.02] tracking-[-0.025em] text-ink" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}>
              the silence<br /><em>that heals.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <Reveal delay={220}>
              <p className="text-[1.15rem] italic leading-[1.9] text-ink2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                In the midst of the world's noise, beneath the shade of a tree, there lies a space without sound. The wind blows gently, leaves fall unhurriedly, and slowly my breath finds its calm.
              </p>
            </Reveal>
            <Reveal delay={340} from="right">
              <p className="text-[0.84rem] leading-[1.95] text-ink3" style={{ fontFamily: "var(--font-instrument)" }}>
                I'm the kind of person who stops for flowers no one else notices. Who photographs the typography on a cafe menu before ordering. Who drives long highways not to get somewhere — but to think.
                <br /><br />
                That same attention is what I bring to every pixel, every flow, every decision. I'm a product designer working at the intersection of research and craft — building experiences for B2B SaaS, healthcare, and iOS.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* §3 ROAD */}
      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-12 items-center gap-8">
            <div className="col-span-12 lg:col-span-4">
              <Reveal>
                <div className="border-l-2 border-ink pl-5">
                  <span className="block leading-none tracking-[-0.04em] text-ink opacity-10" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "5rem" }}>01</span>
                  <p className="mt-1 font-['Syne'] text-[0.56rem] uppercase tracking-[0.24em] text-ink4">The wanderer</p>
                </div>
              </Reveal>
              <Reveal delay={180} className="mt-8">
                <p className="text-[0.84rem] leading-[1.95] text-ink3" style={{ fontFamily: "var(--font-instrument)" }}>
                  Long highways are where I do my best thinking. Windows down, something instrumental playing, golden hour light across the road. I stop for yellow flowers. I photograph what most people walk past. That attention ends up in every interface I build.
                </p>
              </Reveal>
              <Reveal delay={320} className="mt-7">
                <p className="font-[family-name:var(--font-caveat)] text-[1.18rem] text-ink3">"slow down enough to see it properly."</p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <Reveal delay={140} from="right">
                <div className="relative">
                  <Brackets />
                  <Photo src="/about/road.jpg" alt="on the road, chasing yellow flowers" className="h-[420px] w-full md:h-[520px]" sizes="(max-width: 1024px) 100vw, 66vw" />
                  <div className="absolute bottom-4 right-4 z-20 bg-bg/90 px-3 py-1 backdrop-blur-sm">
                    <p className="font-['Syne'] text-[0.56rem] uppercase tracking-[0.15em] text-ink3">somewhere on a highway ↗</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* §4 CAFE POLAROIDS */}
      <section className="bg-bg2 px-6 py-24 md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <p className="mb-3 font-['Syne'] text-[0.58rem] uppercase tracking-[0.26em] text-ink4">02 · My other office</p>
                <h2 className="leading-[1.05] tracking-[-0.025em] text-ink" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)" }}>
                  you'll find me<br /><em>in a cafe.</em>
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 flex items-end md:col-span-6 md:col-start-7">
              <Reveal delay={200} from="right">
                <p className="text-[0.84rem] leading-[1.95] text-ink3" style={{ fontFamily: "var(--font-instrument)" }}>
                  I treat cafes like second offices. I've collected enough to have strong opinions about which ones are for deep thinking and which are for meetings. Good espresso, ambient noise, three focused hours — no co-working space replicates it. You'll find me in a corner booth, laptop open, a latte cooling beside a Figma file.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 py-8 md:flex-nowrap md:gap-2">
            {[
              { src: "/about/cafe-dark.jpg", alt: "industrial cafe", caption: "good espresso, better ideas", rotation: -7, delay: 0 },
              { src: "/about/cafe-art.jpg", alt: "Shrng-e-Mohabbat cafe", caption: "this place had me speechless", rotation: 4, delay: 100 },
              { src: "/about/cafe-green.jpg", alt: "green cafe with flowers", caption: "details I couldn't stop looking at", rotation: -3, delay: 200 },
              { src: "/about/portrait.jpg", alt: "me with my latte", caption: "yes, that's my latte. jan '24", rotation: 8, delay: 300 },
            ].map((p, i) => (
              <div key={p.src} style={{ marginTop: i % 2 === 0 ? 0 : 48 }}>
                <Polaroid {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §5 FULL-WIDTH WORK PHOTO */}
      <section className="relative h-[70vh] overflow-hidden">
        <div ref={workImgRef} className="absolute" style={{ inset: "-20% 0 0 0", willChange: "transform" }}>
          <Photo src="/about/work.jpg" alt="working in a bookstore cafe" className="h-full w-full" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <Reveal>
            <h3 className="italic leading-[1.05] text-white" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 4.2rem)" }}>
              somewhere between<br />a latte and a figma file.
            </h3>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 font-['Syne'] text-[0.58rem] uppercase tracking-[0.2em] text-white/50">Camera · Samsung A10s · Archive by Nikunj</p>
          </Reveal>
        </div>
        <div className="absolute left-5 top-5 h-6 w-6 border-l-2 border-t-2 border-white/30" />
        <div className="absolute right-5 top-5 h-6 w-6 border-r-2 border-t-2 border-white/30" />
      </section>

      {/* §6 ME + COFFEE */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-12 items-center gap-8 md:gap-12">
            <div className="order-2 col-span-12 lg:order-1 lg:col-span-4">
              <Reveal>
                <p className="mb-4 font-['Syne'] text-[0.58rem] uppercase tracking-[0.26em] text-ink4">03 · The ritual</p>
                <h2 className="leading-[1.08] tracking-[-0.025em] text-ink" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                  coffee is my<br /><em>opening act.</em>
                </h2>
              </Reveal>
              <Reveal delay={180} className="mt-7">
                <p className="text-[0.84rem] leading-[1.95] text-ink3" style={{ fontFamily: "var(--font-instrument)" }}>
                  First cup = first frame. I don't start designing until I have coffee. It's not a habit — it's a ritual. The same way a blank canvas needs the right light. Every good design session I remember has had a latte somewhere in it.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-7">
                <p className="font-[family-name:var(--font-caveat)] text-[1.2rem] text-ink2">"17:10, Jan 31 — best kind of afternoon."</p>
              </Reveal>
            </div>

            <div className="order-1 col-span-12 lg:order-2 lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative mx-auto max-w-sm">
                  <div className="absolute -left-3 bottom-0 top-0 flex w-[5px] flex-col justify-around opacity-15">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div key={i} className="h-2 w-full bg-ink" />
                    ))}
                  </div>
                  <Photo src="/about/portrait.jpg" alt="Nikunj with coffee" className="h-[480px] w-full" sizes="(max-width: 1024px) 80vw, 40vw" />
                  <div className="absolute bottom-3 left-3 bg-bg/92 px-2 py-1 backdrop-blur-sm">
                    <p className="font-[family-name:var(--font-caveat)] text-sm text-ink3">Jan 31, 2024 · 17:10</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="order-3 col-span-12 lg:col-span-3">
              <Reveal delay={280} from="right">
                <div className="space-y-7">
                  {[
                    { label: "currently sipping", value: "espresso" },
                    { label: "working on", value: "B2B SaaS · Healthcare · iOS" },
                    { label: "based in", value: "New Delhi, India" },
                    { label: "open to", value: "Full-time roles" },
                  ].map(({ label, value }) => (
                    <div key={label} className="border-t border-[rgba(180,140,130,0.2)] pt-4">
                      <p className="mb-1 font-['Syne'] text-[0.55rem] uppercase tracking-[0.24em] text-ink4">{label}</p>
                      <p className="text-[0.84rem] text-ink2" style={{ fontFamily: "var(--font-instrument)" }}>{value}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* §7 EXPLORE STRIP */}
      <section className="bg-bg2 px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 grid grid-cols-12">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <p className="mb-3 font-['Syne'] text-[0.58rem] uppercase tracking-[0.26em] text-ink4">04 · The explorer</p>
                <h2 className="leading-[1.05] tracking-[-0.025em] text-ink" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  always looking for<br /><em>the next frame.</em>
                </h2>
              </Reveal>
            </div>
          </div>
          <div className="no-sb flex gap-3 overflow-x-auto pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}>
            {[
              { src: "/about/road.jpg", alt: "highway with yellow flowers", label: "highway moments" },
              { src: "/about/cafe-green.jpg", alt: "cafe with flower vase", label: "small beautiful things" },
              { src: "/about/cafe-art.jpg", alt: "artistic cafe", label: "spaces that inspire" },
              { src: "/about/cafe-dark.jpg", alt: "moody dark cafe", label: "late night thinking" },
              { src: "/about/work.jpg", alt: "working in bookstore", label: "where ideas happen" },
            ].map(({ src, alt, label }) => (
              <div key={src} className="flex-shrink-0" style={{ width: "clamp(210px, 28vw, 290px)" }}>
                <Photo src={src} alt={alt} className="h-[340px] w-full" sizes="300px" />
                <p className="mt-2 font-['Syne'] text-[0.58rem] uppercase tracking-[0.16em] text-ink4">{label}</p>
              </div>
            ))}
          </div>
          <Reveal delay={200} className="mt-3">
            <p className="font-['Syne'] text-[0.56rem] uppercase tracking-[0.22em] text-ink4">← drag to explore →</p>
          </Reveal>
        </div>
      </section>

      {/* §8 STATS */}
      <section className="px-6 py-24 md:px-12 lg:px-16">
        <div ref={statsRef} className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {[
              { number: `${count50}+`, label: "cafes explored", note: "and counting" },
              { number: `${count3}+`, label: "years designing", note: "still learning" },
              { number: "∞", label: "km driven", note: "on long highways" },
              { number: "01", label: "coffee to start", note: "always, no exceptions" },
            ].map(({ number, label, note }, i) => (
              <Reveal key={label} delay={i * 80}>
                <div className="border-t-2 border-ink pt-5">
                  <p className="leading-none tracking-[-0.04em] text-ink" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.2rem)" }}>
                    {number}
                  </p>
                  <p className="mt-2 font-['Syne'] text-[0.63rem] uppercase tracking-[0.16em] text-ink2">{label}</p>
                  <p className="mt-1 font-[family-name:var(--font-caveat)] text-sm text-ink4">{note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* §9 CLOSING CTA */}
      <section className="bg-ink px-6 py-32 text-bg md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 md:col-span-8">
              <Reveal>
                <p className="mb-6 font-['Syne'] text-[0.58rem] uppercase tracking-[0.26em] text-bg/35">
                  that silence feels like an embrace —<br />healing the wounds unseen.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <h2 className="leading-[1.0] tracking-[-0.025em] text-bg" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
                  Let's make something<br /><em>worth stopping for.</em>
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 flex flex-col items-start gap-4 md:col-span-4 md:items-end">
              <Reveal delay={280} from="right">
                <Link href="/projects" className="border border-bg/25 px-7 py-3 font-['Syne'] text-[0.63rem] uppercase tracking-[0.15em] text-bg transition hover:bg-bg/10">
                  View Work ↗
                </Link>
              </Reveal>
              <Reveal delay={380} from="right">
                <a href="mailto:nikunj.tyagi.design@gmail.com" className="border border-bg/25 px-7 py-3 font-['Syne'] text-[0.63rem] uppercase tracking-[0.15em] text-bg transition hover:bg-bg/10">
                  Say Hello ↗
                </a>
              </Reveal>
            </div>
          </div>
          <div className="mt-20 flex items-center justify-between border-t border-bg/10 pt-8">
            <p className="font-['Syne'] text-[0.55rem] uppercase tracking-[0.16em] text-bg/25">archive by nikunj</p>
            <p className="font-['Syne'] text-[0.55rem] uppercase tracking-[0.16em] text-bg/25">camera · samsung a10s</p>
          </div>
        </div>
      </section>
    </main>
  );
}
