const experiences = [
  { role: "Product Design Intern", company: "Air IQ", location: "Gurgaon, India", period: "Nov 2025 – Present" },
  { role: "Product Design Consultant", company: "Freelance", location: "Remote", period: "Mar – Sep 2025" },
  { role: "UI/UX Design Intern", company: "Infosys", location: "Mysore, India", period: "Jun – Jul 2024" },
  { role: "B.Tech CSE", company: "Galgotias University", location: "India", period: "2021 – 2025" },
  { role: "Google UX Design Certificate", company: "Google", location: "Certification", period: "2024" },
  { role: "ISDP – Apple & Infosys", company: "Infosys Springboard", location: "Design Program", period: "Feb – Jun 2024" },
];

const dot = `<span class="xp-dot">★</span>`;

function buildItem(e: typeof experiences[0]) {
  return `<span class="xp-item">
    <span class="xp-role">${e.role}</span>
    <span class="xp-company">${e.company}</span>
    <span class="xp-period">${e.period}</span>
  </span>${dot}`;
}

const track = [...experiences, ...experiences, ...experiences]
  .map(buildItem)
  .join("");

const html = `<section class="home-xp" id="experiences">
  <div class="home-xp-inner">
    <h2 class="home-xp-title reveal">
      Good <em>experiences.</em>
    </h2>
  </div>
  <div class="xp-ticker-wrap">
    <div class="xp-ticker-track">${track}</div>
  </div>
</section>`;

export function HomeExperiencesSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
