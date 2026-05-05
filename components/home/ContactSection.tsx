import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bg px-6 py-24 md:px-16">
      <div className="pointer-events-none absolute right-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-pink/10 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Get in touch</p>
        <h2 className="font-hand text-[clamp(3.2rem,7vw,5.5rem)] font-bold leading-none text-ink">
          Let&apos;s grab
          <br />a <span className="text-pink">coffee</span>
        </h2>
        <p className="mt-6 max-w-md font-serif text-lg italic leading-8 text-ink3">Whether it&apos;s a role, a collab, or just a good conversation about design, I&apos;m always up for it.</p>
        <div className="mt-10 flex flex-col md:max-w-md">
          {[
            ["Email", "tyaginikunj26@gmail.com", "mailto:tyaginikunj26@gmail.com"],
            ["LinkedIn", "nikunj-tyagi", "https://linkedin.com/in/nikunj-tyagi"],
            ["GitHub", "NikunjTyagi26", "https://github.com/NikunjTyagi26"]
          ].map(([platform, value, href]) => (
            <Link key={platform} href={href} className="group flex items-center justify-between border-y border-[rgba(180,140,130,0.15)] py-4 transition hover:pl-3">
              <span>
                <span className="block text-[0.65rem] uppercase tracking-[0.16em] text-pink">{platform}</span>
                <span className="font-serif text-lg text-ink3 group-hover:text-pink">{value}</span>
              </span>
              <span className="text-ink4 group-hover:text-pink">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
