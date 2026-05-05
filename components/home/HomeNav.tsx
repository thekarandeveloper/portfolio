const html = `<nav id="nav">
  <a href="#home" class="nav-logo">Nikunj Tyagi</a>
  <ul class="nav-links">
    <li><a href="#work" class="nav-link-item">Work</a></li>
    <li><a href="#process" class="nav-link-item">Process</a></li>
    <li><a href="#about" class="nav-link-item">About</a></li>
    <li><a href="#contact" class="nav-link-item">Contact</a></li>
  </ul>
  <a href="/Nikunj-Resume.pdf" download class="nav-resume">↓ Resume</a>
</nav>`;

export function HomeNav() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
