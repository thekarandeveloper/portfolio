const html = `
<section class="signoff" id="signoff">
  <span class="signoff-eyebrow">fin.</span>

  <div class="signoff-stage" id="signoffStage">
    <div class="sb sb-d2"></div>
    <div class="sb sb-d3"></div>
    <div class="sb sb-d1"></div>
    <div class="sb sb-d4"></div>
    <div class="sb sb-d5"></div>
    <div class="sb sb-N">N</div>
    <div class="sb sb-T">T</div>
  </div>

  <p class="signoff-hint" id="signoffHint">&mdash;&nbsp;click anywhere to fix it&nbsp;&mdash;</p>

  <div class="signoff-reveal" id="signoffReveal">
    <span class="signoff-reveal-line1">Order out of chaos.</span>
    <span class="signoff-reveal-line2">That&rsquo;s the job.</span>
  </div>
</section>
`;

export function SignoffSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
