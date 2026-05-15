const html = `<nav id="nav">
  <div class="nav-pill">
    <div class="nav-monogram">NT</div>
    <div class="nav-clock-group">
      <span class="nav-dot"></span>
      <span class="nav-time" id="nav-clock">--:-- --</span>
    </div>
    <div class="nav-divider"></div>
    <a href="#work" class="nav-link-item">Work</a>
    <a href="/about" class="nav-link-item">About</a>
    <a href="/Nikunj-Resume.pdf" class="nav-link-item nav-link-resume" target="_blank" rel="noopener noreferrer">Resume <span class="nav-resume-arrow">↗</span></a>
  </div>
</nav>`;

export function HomeNav() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
