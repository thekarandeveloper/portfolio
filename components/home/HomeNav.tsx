const html = `<nav id="nav">
  <span class="nav-active-indicator" aria-hidden="true"></span>
  <a href="#work" class="nav-link-item">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
    Work
  </a>
  <div class="nav-divider"></div>
  <a href="#about" class="nav-link-item">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
    About
  </a>
  <div class="nav-divider"></div>
  <a href="/Nikunj-Resume.pdf" target="_blank" class="nav-resume">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
    Resume
  </a>
</nav>`;

export function HomeNav() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
