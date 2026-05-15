const html = `<nav id="nav">
  <div class="nav-left">
    <div class="nav-monogram">NT</div>
    <a href="#work" class="nav-link-item">Work</a>
    <a href="/about" class="nav-link-item">About</a>
    <a href="/Nikunj-Resume.pdf" class="nav-link-item nav-link-resume" target="_blank" rel="noopener noreferrer">Resume ↗</a>
  </div>
  <div class="nav-right">
    <div class="nav-clock-group">
      <span class="nav-dot"></span>
      <span class="nav-time" id="nav-clock">--:-- --</span>
      <span class="nav-city">Gurugram</span>
    </div>
    <div class="nav-divider"></div>
    <a href="mailto:nikunj.tyagi.design@gmail.com" class="nav-cta">
      Say hi
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
    </a>
  </div>
</nav>`;

export function HomeNav() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
