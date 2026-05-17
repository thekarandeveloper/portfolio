const html = `<section class="scrapbook-section" id="shelf">
  <p class="section-label reveal">If you'd like,</p>
  <h2 class="scrapbook-title-line reveal reveal-delay-1">Here's some <em>personal stuff!</em></h2>
  <p class="scrapbook-sub reveal reveal-delay-2">The things that make me, me. Outside of Figma and deadlines.</p>

  <div class="scrapbook-canvas reveal reveal-delay-3">

    <!-- COFFEE -->
    <div class="sc-card sc-coffee pin">
      <p class="sc-label">Coffee first,<br>always.</p>
      <div class="sc-illus">
        <svg width="100" height="90" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="45" cy="72" rx="28" ry="8" fill="#F3EDE8"/>
          <rect x="17" y="30" width="56" height="42" rx="8" fill="#fff" stroke="#E8DDD6" stroke-width="2"/>
          <path d="M73 42 Q88 42 88 52 Q88 62 73 62" stroke="#E8DDD6" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <rect x="22" y="35" width="46" height="32" rx="5" fill="#FFF0F3"/>
          <path d="M35 20 Q35 12 42 12 Q42 18 38 20" stroke="#E8547A" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M48 18 Q48 10 55 10 Q55 16 51 18" stroke="#E8547A" stroke-width="2" fill="none" stroke-linecap="round"/>
          <text x="45" y="56" text-anchor="middle" font-family="Georgia" font-style="italic" font-size="10" fill="#B09A90">espresso</text>
        </svg>
      </div>
      <p class="sc-desc">Café explorer on a mission. Cold brew in every city ☕</p>
    </div>

    <!-- SPIDER-MAN -->
    <div class="sc-card sc-spidey">
      <p class="sc-label">Spider-Man<br>is the GOAT.</p>
      <div class="sc-illus">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- web -->
          <line x1="45" y1="10" x2="45" y2="80" stroke="#E8DDD6" stroke-width="1"/>
          <line x1="10" y1="45" x2="80" y2="45" stroke="#E8DDD6" stroke-width="1"/>
          <line x1="20" y1="20" x2="70" y2="70" stroke="#E8DDD6" stroke-width="1"/>
          <line x1="70" y1="20" x2="20" y2="70" stroke="#E8DDD6" stroke-width="1"/>
          <circle cx="45" cy="45" r="12" stroke="#E8DDD6" stroke-width="1" fill="none"/>
          <circle cx="45" cy="45" r="24" stroke="#E8DDD6" stroke-width="1" fill="none"/>
          <!-- spider -->
          <circle cx="45" cy="45" r="8" fill="#C0392B"/>
          <ellipse cx="45" cy="38" rx="5" ry="4" fill="#C0392B"/>
          <!-- eyes -->
          <ellipse cx="42" cy="37" rx="2.5" ry="2" fill="white"/>
          <ellipse cx="48" cy="37" rx="2.5" ry="2" fill="white"/>
          <!-- legs -->
          <line x1="37" y1="46" x2="25" y2="38" stroke="#C0392B" stroke-width="2" stroke-linecap="round"/>
          <line x1="37" y1="48" x2="24" y2="48" stroke="#C0392B" stroke-width="2" stroke-linecap="round"/>
          <line x1="37" y1="50" x2="25" y2="58" stroke="#C0392B" stroke-width="2" stroke-linecap="round"/>
          <line x1="53" y1="46" x2="65" y2="38" stroke="#C0392B" stroke-width="2" stroke-linecap="round"/>
          <line x1="53" y1="48" x2="66" y2="48" stroke="#C0392B" stroke-width="2" stroke-linecap="round"/>
          <line x1="53" y1="50" x2="65" y2="58" stroke="#C0392B" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <p class="sc-desc">No discussion. Neighborhood fav since forever 🕷</p>
    </div>

    <!-- HARRY POTTER -->
    <div class="sc-card sc-hp pin">
      <p class="sc-label">Always<br>Hogwarts.</p>
      <div class="sc-illus">
        <svg width="95" height="90" viewBox="0 0 95 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- hat -->
          <polygon points="47,8 20,62 74,62" fill="#1A0D2E" stroke="#2D1B4E" stroke-width="1.5"/>
          <rect x="12" y="58" width="70" height="12" rx="6" fill="#1A0D2E" stroke="#2D1B4E" stroke-width="1.5"/>
          <path d="M30 58 Q47 52 64 58" stroke="#9B59B6" stroke-width="1.5" fill="none"/>
          <!-- stars -->
          <text x="32" y="45" font-size="10" fill="#F1C40F">✦</text>
          <text x="52" y="40" font-size="7" fill="#9B59B6">✦</text>
          <!-- wand -->
          <line x1="65" y1="75" x2="85" y2="55" stroke="#3D2E28" stroke-width="3" stroke-linecap="round"/>
          <path d="M65 75 Q60 78 58 72" stroke="#3D2E28" stroke-width="2" fill="none" stroke-linecap="round"/>
          <!-- lightning -->
          <path d="M44 18 L40 28 L45 28 L41 38" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </div>
      <p class="sc-desc">Potterhead for life. ⚡ House? I think you know.</p>
    </div>

    <!-- MUSIC -->
    <div class="sc-card sc-music">
      <p class="sc-label">Always on<br>music.</p>
      <div class="sc-illus">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- vinyl record -->
          <circle cx="45" cy="48" r="32" fill="#1A1210" stroke="#2D2420" stroke-width="1"/>
          <circle cx="45" cy="48" r="20" fill="#2D2420"/>
          <circle cx="45" cy="48" r="10" fill="#E8DDD6"/>
          <circle cx="45" cy="48" r="3" fill="#E8547A"/>
          <!-- shine lines -->
          <path d="M20 35 Q28 25 45 22" stroke="#3D3530" stroke-width="1" fill="none"/>
          <path d="M18 50 Q15 42 20 35" stroke="#3D3530" stroke-width="1" fill="none"/>
          <!-- music notes -->
          <text x="54" y="22" font-size="16" fill="#E8547A">♪</text>
          <text x="64" y="35" font-size="11" fill="#F07A98">♫</text>
        </svg>
      </div>
      <p class="sc-desc">Arijit for feels, lo-fi for focus, shuffling for everything else 🎵</p>
    </div>

    <!-- TRAVEL -->
    <div class="sc-card sc-travel pin">
      <p class="sc-label">New city,<br>new café.</p>
      <div class="sc-illus">
        <svg width="110" height="85" viewBox="0 0 110 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- plane -->
          <path d="M15 50 L75 25 L85 30 L45 45 L50 65 L38 60 L35 45 Z" fill="#F3EDE8" stroke="#E8DDD6" stroke-width="1.5"/>
          <path d="M45 45 L75 25" stroke="#E8DDD6" stroke-width="1"/>
          <!-- clouds -->
          <ellipse cx="88" cy="20" rx="12" ry="8" fill="#F9F5F2"/>
          <ellipse cx="96" cy="22" rx="9" ry="7" fill="#F9F5F2"/>
          <ellipse cx="80" cy="22" rx="8" ry="6" fill="#F9F5F2"/>
          <!-- pin -->
          <circle cx="60" cy="62" r="6" fill="#E8547A"/>
          <circle cx="60" cy="62" r="2.5" fill="white"/>
          <line x1="60" y1="68" x2="60" y2="78" stroke="#E8547A" stroke-width="2" stroke-linecap="round"/>
          <!-- dotted path -->
          <path d="M15 72 Q35 65 60 70" stroke="#E8DDD6" stroke-width="1.5" stroke-dasharray="4 3" fill="none"/>
        </svg>
      </div>
      <p class="sc-desc">That's the whole travel plan. Camera always ready 📸</p>
    </div>

    <!-- PHOTOGRAPHY -->
    <div class="sc-card sc-photo">
      <p class="sc-label">Aesthetic<br>clicks.</p>
      <div class="sc-illus">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- camera body -->
          <rect x="10" y="22" width="72" height="48" rx="8" fill="#F3EDE8" stroke="#E8DDD6" stroke-width="2"/>
          <!-- viewfinder bump -->
          <rect x="28" y="14" width="22" height="12" rx="4" fill="#E8DDD6"/>
          <!-- lens -->
          <circle cx="46" cy="46" r="18" fill="#E8DDD6"/>
          <circle cx="46" cy="46" r="13" fill="#fff"/>
          <circle cx="46" cy="46" r="8" fill="#EDE5DE"/>
          <circle cx="46" cy="46" r="4" fill="#1A1210"/>
          <circle cx="48" cy="44" r="1.5" fill="white"/>
          <!-- flash -->
          <rect x="68" y="28" width="10" height="7" rx="2" fill="#F7C5D0"/>
          <!-- shutter -->
          <circle cx="25" cy="32" r="4" fill="#E8DDD6"/>
          <!-- pink heart -->
          <text x="16" y="66" font-size="12" fill="#E8547A">♥</text>
        </svg>
      </div>
      <p class="sc-desc">Light, shadows, café corners, random streets. I see beauty everywhere.</p>
    </div>

    <!-- SHOPPING -->
    <div class="sc-card sc-shop">
      <p class="sc-label">Shopaholic.<br>I said it. 🛍</p>
      <div class="sc-illus">
        <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- bag -->
          <path d="M15 35 L20 72 Q20 75 23 75 L62 75 Q65 75 65 72 L70 35 Z" fill="#FFF0F3" stroke="#E8547A" stroke-width="1.5"/>
          <!-- handles -->
          <path d="M27 35 Q27 15 42 15 Q57 15 57 35" stroke="#E8547A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <!-- stripes -->
          <line x1="20" y1="50" x2="70" y2="50" stroke="#F7C5D0" stroke-width="1"/>
          <line x1="20" y1="62" x2="70" y2="62" stroke="#F7C5D0" stroke-width="1"/>
          <!-- star -->
          <text x="36" y="46" font-size="14" fill="#E8547A">✦</text>
          <!-- tag -->
          <rect x="54" y="25" width="22" height="14" rx="3" fill="white" stroke="#E8DDD6"/>
          <text x="58" y="36" font-size="8" fill="#E8547A">sale</text>
        </svg>
      </div>
      <p class="sc-desc">Retail therapy is valid therapy. Certified and unapologetic.</p>
    </div>

    <!-- Doodle connecting lines -->
    <svg class="sc-doodle-line" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:0.15;" viewBox="0 0 1200 700" preserveAspectRatio="none">
      <path d="M190 80 Q280 120 340 90" stroke="#E8547A" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/>
      <path d="M510 80 Q560 130 640 85" stroke="#E8547A" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/>
      <path d="M300 380 Q420 350 530 400" stroke="#E8547A" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/>
    </svg>

  </div>
</section>`;

export function ScrapbookSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
