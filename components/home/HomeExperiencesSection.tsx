"use client";

import { useState, useCallback, type CSSProperties } from "react";

/* ─────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────── */
interface Photo {
  src: string;
  caption: string;
  alt: string;
}

interface Pile {
  id: string;
  label: string;
  tape: "y" | "b";
  photos: Photo[];
}

const PILES: Pile[] = [
  {
    id: "mornings",
    label: "Slow mornings",
    tape: "y",
    photos: [
      { src: "/Image/hero/Cafe.png",  caption: "corner seat, always",    alt: "café" },
      { src: "/about/work.jpg",        caption: "deep work mode",          alt: "working" },
      { src: "/about/portrait.jpg",    caption: "the designer herself",    alt: "Nikunj" },
    ],
  },
  {
    id: "things",
    label: "Little things",
    tape: "b",
    photos: [
      { src: "/Image/hero/flower.png", caption: "small things matter",     alt: "flower" },
      { src: "/Image/hero/Book.png",   caption: "one more chapter",        alt: "book" },
      { src: "/about/stuff.png",       caption: "bits & pieces",           alt: "stuff" },
    ],
  },
  {
    id: "sky",
    label: "Sky watching",
    tape: "y",
    photos: [
      { src: "/about/sky.jpg",         caption: "somewhere up there",      alt: "sky" },
      { src: "/about/sky.png",         caption: "blue hour",               alt: "blue sky" },
      { src: "/Image/hero/flower.png", caption: "little joys",             alt: "flower" },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────
   POSITIONS
   Index 0 = the TOP card of the pile (the one you see first)
───────────────────────────────────────────────────────────────────── */
const STACK_POS = [
  { x:  0, y:  0,  r: -2 },  // top card — front-facing
  { x:  6, y:  6,  r:  7 },  // second — peeks left-down
  { x: -5, y: 10,  r: -8 },  // third  — peeks right-down
];

const SCATTER_POS = [
  { x: -220, y:  -45, r: -15 }, // scatters upper-left
  { x:    6, y: -250, r:   7 }, // scatters straight up
  { x:  210, y:  -60, r:  13 }, // scatters upper-right
];

/* ─────────────────────────────────────────────────────────────────────
   PILE GROUP
───────────────────────────────────────────────────────────────────── */
interface PileGroupProps {
  pile: Pile;
  isOpen: boolean;
  onToggle: () => void;
}

function PileGroup({ pile, isOpen, onToggle }: PileGroupProps) {
  const count = pile.photos.length;

  return (
    <div className={`hxp-pile-group${isOpen ? " is-active" : ""}`}>
      <div
        className="hxp-stack-wrap"
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(); }
        }}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        {/* Washi tape — stays pinned at pile center */}
        <div className={`hxp-tape hxp-tape-${pile.tape}`} />

        {/* Photos — rendered bottom-to-top so top card is last DOM child
            (natural paint order, explicit z-index also set for safety) */}
        {pile.photos.map((photo, idx) => {
          const pos = isOpen ? SCATTER_POS[idx] : STACK_POS[idx];
          // stacked: top card (idx 0) gets highest z; scattered: arbitrary
          const zIdx = isOpen ? idx + 1 : count - idx;
          const delay = isOpen ? `${idx * 60}ms` : "0ms";

          return (
            <div
              key={photo.src + idx}
              className="hxp-photo-wrap"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.r}deg)`,
                zIndex: zIdx,
                transitionDelay: delay,
              } as CSSProperties}
            >
              <div className="hxp-polaroid">
                <div className="hxp-pol-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
                <span className="hxp-pol-caption">{photo.caption}</span>
              </div>
            </div>
          );
        })}
      </div>

      <span className="hxp-category-label">{pile.label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────────────────── */
export function HomeExperiencesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const close = useCallback(() => setActiveId(null), []);

  return (
    <section className="home-xp" id="experiences">
      {/* Full-page dim overlay — click to close */}
      <div
        className={`hxp-overlay${activeId ? " hxp-visible" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      <div className="home-xp-inner">
        <h2 className="home-xp-title reveal">
          Good <em>experiences.</em>
        </h2>

        <div className="hxp-piles">
          {PILES.map((pile) => (
            <PileGroup
              key={pile.id}
              pile={pile}
              isOpen={activeId === pile.id}
              onToggle={() => toggle(pile.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
