const html = `<section class="gallery-section" id="gallery">
  <p class="section-label reveal">Through my lens</p>
  <h2 class="section-title reveal reveal-delay-1">Life outside<br><em>the pixels.</em></h2>
  <div class="gallery-grid">
    <div class="gallery-item g1 reveal scale-up" style="grid-row:span 2;"><div class="gallery-placeholder">☕ café corner<br><span style="font-size:15px;opacity:0.6;">drop your photo</span></div><span class="gallery-label">Café</span></div>
    <div class="gallery-item g2 reveal reveal-delay-1" ><div class="gallery-placeholder">🌆 travel<br><span style="font-size:15px;opacity:0.6;">drop your photo</span></div><span class="gallery-label">Travel</span></div>
    <div class="gallery-item g3 reveal reveal-delay-2"><div class="gallery-placeholder">🏛 architecture<br><span style="font-size:15px;opacity:0.6;">drop your photo</span></div><span class="gallery-label">Architecture</span></div>
    <div class="gallery-item g4 reveal reveal-delay-2 scale-up" style="grid-row:span 2;"><div class="gallery-placeholder">📸 aesthetic<br><span style="font-size:15px;opacity:0.6;">drop your photo</span></div><span class="gallery-label">Aesthetic</span></div>
    <div class="gallery-item g2 reveal reveal-delay-3" style="grid-row:2;"><div class="gallery-placeholder">🌸 nature<br><span style="font-size:15px;opacity:0.6;">drop your photo</span></div><span class="gallery-label">Nature</span></div>
    <div class="gallery-item g3 reveal reveal-delay-4" style="grid-row:2;"><div class="gallery-placeholder">✈ wandering<br><span style="font-size:15px;opacity:0.6;">drop your photo</span></div><span class="gallery-label">Journey</span></div>
  </div>
</section>`;

export function GallerySection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
