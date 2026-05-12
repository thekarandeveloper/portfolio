"use client";

export function LinkedInFloat() {
  return (
    <a
      href="https://www.linkedin.com/in/nikunj-tyagi26/"
      target="_blank"
      rel="noopener noreferrer"
      className="li-float"
      aria-label="Connect on LinkedIn"
    >
      {/* LinkedIn icon */}
      <span className="li-float-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </span>

      {/* Label — slides in on hover */}
      <span className="li-float-label">Let&rsquo;s connect</span>
    </a>
  );
}
