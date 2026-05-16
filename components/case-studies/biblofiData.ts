export const bibloMeta = [
  { label: "My Role", value: "UI/UX Design Lead" },
  { label: "Platform", value: "iOS Mobile App" },
  { label: "Duration", value: "4 weeks · Internship" },
  { label: "Team",     value: "Led 10 developers"  }
];

export const bibloRoleChips = [
  "🔍 UX Research",
  "🗺 Information Architecture",
  "🎨 UI Design",
  "📐 Wireframing",
  "♿ Accessibility",
];

export const bibloTeam = [
  { dot: "NT", title: "Nikunj Tyagi",   sub: "Lead Designer — that's me"         },
  { dot: "D1", title: "10 Developers",  sub: "iOS engineering team · Infosys"     },
  { dot: "PM", title: "Product Owner",  sub: "Infosys project lead"               },
];

export const diamondSteps = [
  { icon: "🔍", phase: "Phase 1", name: "Discover", desc: "Surveys, interviews, observation sessions", active: true },
  { icon: "📖", phase: "Phase 2", name: "Define",   desc: "Personas, problem statements, insights"                 },
  { icon: "🎨", phase: "Phase 3", name: "Develop",  desc: "Brainstorming, wireframes, lo-fi iterations"            },
  { icon: "✅", phase: "Phase 4", name: "Deliver",  desc: "Hi-fi designs, design system, usability testing"        },
];

/* Research stats — only actual research findings live here */
export const researchStats = [
  { value: "38", label: "Students surveyed"    },
  { value: "8",  label: "In-depth interviews"  },
  { value: "3",  label: "Observation sessions" },
  { value: "2",  label: "Librarians consulted" },
];

export const personas = [
  {
    avatar: "👩‍💻",
    name: "Riya Sharma",
    meta: "21 · B.Tech Student · Delhi · High tech comfort",
    goals: [
      "Find book availability before visiting",
      "Reserve study seats in advance",
      "Get due date reminders to avoid fines",
      "Maintain a personal reading wishlist",
    ],
    pains: [
      "Wastes time roaming shelves for books",
      "No seats during peak hours (exam season)",
      "Forgets return dates → gets fined",
      "Depends on librarians for basic info",
    ],
  },
  {
    avatar: "👨‍🎓",
    name: "Arjun Mehta",
    meta: "20 · CS Student · Greater Noida · Power user",
    goals: [
      "Manage all library tasks digitally",
      "Track borrowed books and avoid fines",
      "Book seats for group study sessions",
      "Access audiobooks when traveling",
    ],
    pains: [
      "Long queues just to issue or return books",
      "No transparency on seat availability",
      "Misses deadlines and pays unnecessary fines",
      "Can't track which books he's already read",
    ],
  },
];

export const wireframes = [
  "Onboarding",
  "Browse by Genre",
  "Scan & Search",
  "Seat Booking",
  "Notifications",
  "Profile",
];

export const bibloFeatures = [
  {
    num: "01",
    tag: "Smart Book Discovery",
    title: "Find any book before you even leave home.",
    desc: [
      "Students were wasting time visiting the library only to find the book they needed was already issued. The search system lets users browse by genre, search by author, or scan a barcode — and see real-time availability before making the trip.",
      "18 out of 20 usability test participants successfully found and located a book on their first attempt.",
    ],
    rationale:
      "Students weren't browsing for new reads — they arrived with specific titles in mind. Real-time availability confirmation was the primary need. We designed for certainty, not discovery.",
    rejected:
      "A 'you might also like' recommendation engine was explored first — rejected because it solved a secondary problem while leaving the primary one (is this book available right now?) completely unanswered.",
    impact: "📚 90% search success rate in testing",
    img:   "/Image/Biblofi/smart-book.png",
    phone: "discover",
  },
  {
    num: "02",
    tag: "Study Seat Booking",
    title: "Reserve your spot before you arrive.",
    desc: [
      "Seat unavailability during exam season was the single most-mentioned pain point across all 8 interviews. The seat booking feature lets students view the study hall layout in real time, select an available seat, and receive a confirmation — all before leaving home.",
      "17 out of 20 participants successfully booked a seat. The 3 who struggled found the confirmation step unclear — which we restructured in the final iteration.",
    ],
    rationale:
      "11 of 12 students who had stopped visiting the library regularly cited seat unavailability during exams as the reason. Solving this one problem had the highest potential to change actual behaviour.",
    rejected:
      "A 'notify me when a seat opens' waitlist was designed first. Cut because persistent push notification infrastructure wasn't available in the sprint timeline — a real engineering constraint, not a design preference.",
    impact: "📚 85% seat booking success rate",
    img:   "/Image/Biblofi/seat.png",
    phone: "seat",
    reverse: true,
  },
  {
    num: "03",
    tag: "Scan & Search",
    title: "Point your camera. Find the book instantly.",
    desc: [
      "Observation sessions showed students physically pulling books off shelves one by one to check availability. A barcode scan closes the physical-digital gap in under 3 seconds — no librarian needed.",
      "Particularly well-received by tech-savvy users like Arjun's persona — the scanner eliminated the single most friction-heavy moment in a library visit.",
    ],
    rationale:
      "Observation sessions revealed the behaviour we needed to eliminate: students walking rows of shelves, pulling books out, asking librarians for status. The scanner makes the librarian's most-repeated task self-serve.",
    rejected:
      "A campus-map shelf locator was explored first. Rejected: students already knew the layout. What they didn't know was whether the book was on the shelf right now. The scanner solved the real problem; the map solved one that didn't exist.",
    impact: "📚 Eliminates dependency on librarians",
    img:   "/Image/Biblofi/scan.png",
    phone: "scan",
  },
];

export const accessibilityCards = [
  {
    icon:  "🎨",
    title: "Colour Contrast",
    desc:  "Text and background colours tested using WebAIM Contrast Checker. Achieved a contrast ratio of 10.95:1 — well above WCAG AAA standards for readability.",
    badge: "WCAG AAA — 10.95:1",
  },
  {
    icon:  "📏",
    title: "Text Scalability",
    desc:  "Typography uses relative units and flexible layouts, ensuring readability across devices and font sizes, aligning with WCAG 2.1 guidelines.",
    badge: "WCAG 2.1 compliant",
  },
  {
    icon:  "🔊",
    title: "Screen Reader Ready",
    desc:  "Interactive elements, headings, and buttons are clearly labelled in the design to support VoiceOver and other screen readers on iOS.",
    badge: "VoiceOver compatible",
  },
  {
    icon:  "👆",
    title: "Touch Targets",
    desc:  "All buttons and tappable areas meet Apple's minimum size guidelines (44×44pt) for easy, accurate interaction on all iPhone models.",
    badge: "Apple HIG compliant",
  },
];

export const testResults = [
  {
    task:     "Task 1 — Search a book",
    fraction: "18/20",
    label:    "completed successfully",
    note:     "2 participants hesitated with filter options before needing guidance.",
  },
  {
    task:     "Task 2 — Book a seat",
    fraction: "17/20",
    label:    "completed successfully",
    note:     "3 found the confirmation step slightly unclear — restructured in final iteration.",
  },
  {
    task:     "Task 3 — Check notifications",
    fraction: "19/20",
    label:    "completed successfully",
    note:     "1 participant missed the icon placement initially.",
  },
];

export const learnings = [
  {
    num:   "01",
    title: "Navigation is your first design decision — not your last",
    text:  "Early brainstorming in WhatsApp chats produced three different nav structures before anyone opened Figma. The lo-fi round proved this mattered: we had five tabs instead of four — one too many for comfortable one-handed iPhone use. Catching it at wireframe stage took 20 minutes to fix. In hi-fi, that same catch would have cost two days of rework. Information architecture isn't the boring part — it's the part everything else depends on.",
  },
  {
    num:   "02",
    title: "User feedback early saves time late",
    text:  "Getting real users into testing before the design was 'perfect' led to better decisions. The confirmation step issue in seat booking would have shipped broken if we hadn't tested. That one finding alone justified the entire testing phase — and it only surfaced because we put the prototype in front of someone who wasn't us.",
  },
  {
    num:   "03",
    title: "Leading a team of 10 is itself a design challenge",
    text:  "Communicating design decisions to 10 developers — each with their own mental model of the product — taught me that documentation is as important as the design itself. I started writing decision rationale directly into Figma comments. By week 3, the dev team was referencing those notes without asking me. Good collaboration is a UX problem.",
  },
  {
    num:   "04",
    title: "Know what to cut — and cut it cleanly",
    text:  "In week 3, we de-scoped three planned features: audiobook streaming, a librarian-facing admin panel, and in-app fine payment. These weren't abandoned — they were deliberately cut to protect the quality of the 7 core flows. Shipping 7 excellent flows beats shipping 10 mediocre ones. The cut list went into the handoff doc as 'Phase 2 recommendations' with full specs.",
  },
  {
    num:   "05",
    title: "What I'd do differently",
    text:  "I'd include librarians in the research phase from day one — not just students. The app solves the member experience but leaves the librarian's workload completely unchanged. I'd push for 6 weeks instead of 4 — the seat booking flow deserved another testing round. And I'd build post-launch success metrics into the handoff brief from the start, so adoption data wouldn't disappear when the internship ended.",
  },
];
