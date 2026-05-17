const html = `<section class="testimonials-section" id="testimonials">
  <p class="section-label reveal">Kind words</p>
  <h2 class="section-title reveal reveal-delay-1">What people<br><em>say about working with me.</em></h2>
  <div class="testimonials-grid">
    <div class="testimonial-card reveal">
      <p class="testimonial-quote">"</p>
      <p class="testimonial-text">Nikunj has an exceptional ability to simplify complex workflows. His work on our booking system genuinely changed how our agents operate: faster, clearer, more confident.</p>
      <div class="testimonial-person"><div class="testimonial-avatar">👤</div><div><p class="testimonial-name">Add name here</p><p class="testimonial-role">Manager · Air IQ</p></div></div>
    </div>
    <div class="testimonial-card reveal reveal-delay-3">
      <p class="testimonial-quote">"</p>
      <p class="testimonial-text">Working with Nikunj was seamless. He understood our users deeply and translated complex healthcare needs into interfaces that felt simple and human.</p>
      <div class="testimonial-person"><div class="testimonial-avatar">👤</div><div><p class="testimonial-name">Add name here</p><p class="testimonial-role">Founder · Care Autor</p></div></div>
    </div>
    <div class="testimonial-card reveal reveal-delay-5">
      <p class="testimonial-quote">"</p>
      <p class="testimonial-text">Rare to find someone who's equally strong at research and execution. Nikunj led our team with clarity and shipped designs that developers actually loved working with.</p>
      <div class="testimonial-person"><div class="testimonial-avatar">👤</div><div><p class="testimonial-name">Add name here</p><p class="testimonial-role">Team Lead · Infosys</p></div></div>
    </div>
  </div>
</section>`;

export function TestimonialsSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
