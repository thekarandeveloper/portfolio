const html = `<nav id="nav">
  <div class="nav-brand">
    <span class="nav-initials">NT</span>
    <time class="nav-clock" id="navClock">--:--</time>
  </div>
  <div class="nav-links-wrap">
    <span class="nav-active-indicator" aria-hidden="true"></span>
    <a href="#work" class="nav-link-item">Work</a>
    <a href="#journey" class="nav-link-item">About</a>
    <a href="#contact" class="nav-link-item">Contact</a>
  </div>
  <a href="#contact" class="nav-cta">Get in Touch</a>
</nav>`;

export function HomeNav() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
