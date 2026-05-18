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
  { dot: "NT", title: "Nikunj Tyagi",   sub: "Lead Designer, that's me"         },
  { dot: "D1", title: "10 Developers",  sub: "iOS engineering team · Infosys"     },
  { dot: "PM", title: "Product Owner",  sub: "Infosys project lead"               },
];

export const diamondSteps = [
  { icon: "🔍", phase: "Phase 1", name: "Discover", desc: "Surveys, interviews, observation sessions", active: true },
  { icon: "📖", phase: "Phase 2", name: "Define",   desc: "Personas, problem statements, insights"                 },
  { icon: "🎨", phase: "Phase 3", name: "Develop",  desc: "Brainstorming, wireframes, lo-fi iterations"            },
  { icon: "✅", phase: "Phase 4", name: "Deliver",  desc: "Hi-fi designs, design system, usability testing"        },
];

/* Research stats */
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
      "Students were wasting time visiting the library only to find the book they needed was already issued. The search system lets users browse by genre, search by author, or scan a barcode, and see real-time availability before making the trip.",
      "18 out of 20 usability test participants successfully found and located a book on their first attempt.",
    ],
    rationale:
      "Students weren't browsing for new reads. They arrived with specific titles in mind. Real-time availability confirmation was the primary need. We designed for certainty, not discovery.",
    rejected:
      "A 'you might also like' recommendation engine was explored first. Rejected because it solved a secondary problem while leaving the primary one (is this book available right now?) completely unanswered.",
    impact: "📚 90% search success rate in testing",
    img:   "/Image/Biblofi/smart-book.png",
    phone: "discover",
  },
  {
    num: "02",
    tag: "Study Seat Booking",
    title: "Reserve your spot before you arrive.",
    desc: [
      "Seat unavailability during exam season was the single most-mentioned pain point across all 8 interviews. Students can view the study hall layout, select a seat, and get a confirmation — before leaving home.",
    ],
    rationale:
      "11 of 12 students who stopped visiting regularly cited seat uncertainty as the reason. This single feature had the highest potential to change real behaviour.",
    rejected:
      "Waitlist notifications were cut — push infrastructure wasn't available in the sprint. Booking-only became the viable path.",
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
      "Observation sessions showed students physically pulling books off shelves one by one to check availability. A barcode scan closes the physical-digital gap in under 3 seconds, no librarian needed.",
      "Particularly well-received by tech-savvy users like Arjun's persona. The scanner eliminated the single most friction-heavy moment in a library visit.",
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
    desc:  "Text and background colours tested using WebAIM Contrast Checker. Achieved a contrast ratio of 10.95:1, well above WCAG AAA standards for readability.",
    badge: "WCAG AAA, 10.95:1",
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
    task:     "Task 1: Search a book",
    fraction: "18/20",
    label:    "completed successfully",
    note:     "2 participants hesitated with filter options before needing guidance.",
  },
  {
    task:     "Task 2: Book a seat",
    fraction: "17/20",
    label:    "completed successfully",
    note:     "3 found the confirmation step slightly unclear, restructured in final iteration.",
  },
  {
    task:     "Task 3: Check notifications",
    fraction: "19/20",
    label:    "completed successfully",
    note:     "1 participant missed the icon placement initially.",
  },
];

export const learnings = [
  {
    num:   "01",
    title: "Navigation is your first design decision, not your last",
    text:  "We had five tabs instead of four — caught it in lo-fi. Fixing it at wireframe stage took 20 minutes. In hi-fi, the same fix would have cost two days.",
  },
  {
    num:   "02",
    title: "Early testing saves late rework",
    text:  "The confirmation step in seat booking would have shipped broken without testing. That one finding alone justified the entire testing phase.",
  },
  {
    num:   "03",
    title: "Leading 10 developers is a design challenge",
    text:  "I started writing decision rationale into Figma comments. By week 3, the dev team was referencing those notes without asking me. Documentation is part of the design.",
  },
  {
    num:   "04",
    title: "Know what to cut — and cut it cleanly",
    text:  "Three features de-scoped in week 3 to protect quality of the 7 core flows. They didn't disappear — they went into the handoff doc as Phase 2 recommendations with full specs.",
  },
  {
    num:   "05",
    title: "What I'd do differently",
    text:  "Include librarians in research from day one. Push for 6 weeks instead of 4. Build post-launch success metrics into the brief so adoption data doesn't disappear when the internship ends.",
  },
];
