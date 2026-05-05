export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-6 pb-16 pt-28 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,84,122,0.1)_0%,rgba(232,84,122,0.04)_40%,transparent_70%)]" />
      <div className="absolute left-[8%] top-[22%] hidden rotate-[-8deg] rounded-[20px] border border-[rgba(180,140,130,0.15)] bg-white p-4 shadow-[0_20px_60px_rgba(232,84,122,0.08)] md:block">
        <p className="font-hand text-2xl text-pink">coffee first</p>
        <p className="text-[0.65rem] text-ink4">always</p>
      </div>
      <div className="absolute right-[8%] top-[26%] hidden rotate-[7deg] rounded-[20px] border border-[rgba(180,140,130,0.15)] bg-bg2 p-5 md:block">
        <p className="text-2xl">✦</p>
        <p className="text-[0.65rem] uppercase tracking-[0.12em] text-ink4">pixel obsessed</p>
      </div>
      <div className="relative z-10">
        <p className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-pink">Portfolio · Product Designer</p>
        <h1 className="font-hand text-[clamp(5rem,14vw,11rem)] font-bold leading-[0.88] text-ink">
          <span className="text-pink">Nikunj</span> Tyagi
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-serif text-[clamp(1rem,2vw,1.4rem)] font-light italic leading-relaxed text-ink3">
          Turning complex systems into things that just feel <span className="font-sans not-italic text-pink">obvious.</span>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#work" className="pill border-pink bg-pink text-white hover:bg-pink2">
            View work
          </a>
          <a href="#contact" className="pill">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
