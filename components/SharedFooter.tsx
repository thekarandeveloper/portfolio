"use client";

import { usePathname } from "next/navigation";

export function SharedFooter() {
  const pathname = usePathname();

  // Homepage uses ContactSection as its footer
  if (pathname === "/") return null;

  return <SharedFooterInner />;
}

function SharedFooterInner() {
  const links = [
    {
      platform: "Email",
      value: "tyaginikunj26@gmail.com",
      href: "mailto:tyaginikunj26@gmail.com",
    },
    {
      platform: "LinkedIn",
      value: "nikunj-tyagi26",
      href: "https://www.linkedin.com/in/nikunj-tyagi26/",
    },
    {
      platform: "Instagram",
      value: "@nikunj",
      href: "https://instagram.com",
    },
  ];

  return (
    <footer
      style={{
        background: "#faf9f7",
        borderTop: "1px solid rgba(180,140,130,0.15)",
        padding: "5rem clamp(1.5rem, 8vw, 6rem)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Instrument Sans', -apple-system, sans-serif",
      }}
    >
      {/* subtle glow */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(30,144,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 520,
          marginLeft: "auto",
          textAlign: "right",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-caveat, 'Caveat', cursive)",
            fontSize: "clamp(3rem, 7vw, 5rem)",
            fontWeight: 700,
            color: "#111111",
            lineHeight: 1.25,
            marginBottom: "1.1rem",
          }}
        >
          Let&rsquo;s grab
          <br />a <span style={{ color: "#1E90FF" }}>coffee</span> ☕
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "1.05rem",
            fontStyle: "italic",
            color: "#7a7069",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
            marginLeft: "auto",
            maxWidth: 380,
          }}
        >
          Whether it&rsquo;s a role, a collab, or just a good conversation
          about design, I&rsquo;m always up for it.
        </p>

        {/* Contact links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "3rem",
            marginLeft: "auto",
          }}
        >
          {links.map((link, i) => (
            <a
              key={link.platform}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem 0",
                borderBottom: "1px solid rgba(180,140,130,0.15)",
                borderTop:
                  i === 0 ? "1px solid rgba(180,140,130,0.15)" : undefined,
                textDecoration: "none",
                color: "#111111",
                transition: "padding-right 0.25s",
                gap: "1rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <span
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#b0a89f",
                    minWidth: 90,
                    flexShrink: 0,
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  {link.platform}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "1rem",
                    color: "#7a7069",
                  }}
                >
                  {link.value}
                </span>
              </div>
              <span style={{ fontSize: 15, color: "#b0a89f" }}>↗</span>
            </a>
          ))}
        </div>

        {/* Footer bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(180,140,130,0.15)",
          }}
        >
          <span
            style={{
              fontFamily: "Lato, sans-serif",
              fontSize: 14,
              color: "#7a7069",
            }}
          >
            Nikunj Tyagi · Product Designer
          </span>
          <span
            style={{
              fontFamily: "var(--font-caveat, 'Caveat', cursive)",
              fontSize: "0.9rem",
              color: "#7a7069",
            }}
          >
            made with ☕ &amp; obsession
          </span>
          <span
            style={{ fontSize: 13, letterSpacing: "0.06em", color: "#b0a89f" }}
          >
            © 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
