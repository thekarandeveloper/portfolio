export const bibloMeta = [
  { label: "My Role", value: "UI/UX Design Lead" },
  { label: "Platform", value: "iOS Mobile App" },
  { label: "Duration", value: "4 weeks · Internship" },
  { label: "Team", value: "Led 10 developers" }
];

export const bibloRoleChips = ["🔍 UX Research", "🗺 Information Architecture", "🎨 UI Design", "📐 Wireframing", "♿ Accessibility"];

export const bibloTeam = [
  { dot: "NT", title: "Nikunj Tyagi", sub: "Lead Designer — that's me" },
  { dot: "D1", title: "10 Developers", sub: "iOS engineering team · Infosys" },
  { dot: "PM", title: "Product Owner", sub: "Infosys project lead" }
];

export const diamondSteps = [
  { icon: "🔍", phase: "Phase 1", name: "Discover", desc: "Research, interviews, observation", active: true },
  { icon: "📖", phase: "Phase 2", name: "Define", desc: "Personas, problem statements, insights" },
  { icon: "🎨", phase: "Phase 3", name: "Develop", desc: "Brainstorming, wireframes, iterations" },
  { icon: "✅", phase: "Phase 4", name: "Deliver", desc: "Hi-fi designs, design system, testing" }
];

export const researchStats = [
  { value: "20", label: "Usability test participants" },
  { value: "90%", label: "Task completion rate" },
  { value: "10.95:1", label: "Colour contrast ratio (WCAG AAA)" },
  { value: "4", label: "Weeks to design & ship" }
];

export const personas = [
  {
    avatar: "👩‍💻",
    name: "Riya Sharma",
    meta: "21 · B.Tech Student · Delhi · High tech comfort",
    goals: ["Find book availability before visiting", "Reserve study seats in advance", "Get due date reminders to avoid fines", "Maintain a personal reading wishlist"],
    pains: ["Wastes time roaming shelves for books", "No seats during peak hours (exam season)", "Forgets return dates → gets fined", "Depends on librarians for basic info"]
  },
  {
    avatar: "👨‍🎓",
    name: "Arjun Mehta",
    meta: "20 · CS Student · Greater Noida · Power user",
    goals: ["Manage all library tasks digitally", "Track borrowed books and avoid fines", "Book seats for group study sessions", "Access audiobooks when traveling"],
    pains: ["Long queues just to issue or return books", "No transparency on seat availability", "Misses deadlines and pays unnecessary fines", "Can't track which books he's already read"]
  }
];

export const wireframes = ["Onboarding", "Browse by Genre", "Scan & Search", "Seat Booking", "Notifications", "Profile"];

export const bibloFeatures = [
  {
    num: "01",
    tag: "Smart Book Discovery",
    title: "Find any book before you even leave home.",
    desc: [
      "Students were wasting time visiting the library only to find the book they needed was already issued. The search system lets users browse by genre, search by author, or scan a barcode — and see real-time availability status before making the trip.",
      "18 out of 20 usability test participants successfully found and located a book on their first attempt."
    ],
    impact: "📚 90% search success rate in testing",
    phone: "discover"
  },
  {
    num: "02",
    tag: "Study Seat Booking",
    title: "Reserve your spot before you arrive.",
    desc: [
      "Seat unavailability during exam season was one of the top pain points identified in research. The seat booking feature lets students view the study hall layout in real time, select an available seat, and receive a confirmation — all before leaving home.",
      "17 out of 20 participants successfully booked a seat in usability testing. The 3 who struggled found the confirmation step slightly unclear — which we improved in the final iteration."
    ],
    impact: "📚 85% seat booking success rate",
    phone: "seat",
    reverse: true
  },
  {
    num: "03",
    tag: "Issue & Return Tracking",
    title: "No more queues. No more forgotten due dates.",
    desc: [
      "The issue and return flow is the heart of the app. Students can request a book digitally, track its status, and receive push notifications when due dates approach. The fine tracker shows exactly what's owed and why — no surprises at the counter.",
      "A personal reading history log also lets students track books they've previously borrowed — solving a pain point both personas mentioned during research."
    ],
    impact: "📚 Automated reminders reduce fines",
    phone: "books"
  },
  {
    num: "04",
    tag: "Scan & Search",
    title: "Point your camera. Find the book instantly.",
    desc: [
      "Students standing in the physical library can scan a book's barcode or ISBN to instantly see its availability status, location in the library, and whether similar books are available. It bridges the physical and digital library experience seamlessly.",
      "This was particularly well-received by tech-savvy users like Arjun's persona — the speed of scanning eliminated the need to ask librarians for basic information."
    ],
    impact: "📚 Eliminates dependency on librarians",
    phone: "scan",
    reverse: true
  }
];

export const accessibilityCards = [
  { icon: "🎨", title: "Colour Contrast", desc: "Text and background colours tested using WebAIM Contrast Checker. Achieved a contrast ratio of 10.95:1 — well above WCAG AAA standards for readability.", badge: "WCAG AAA — 10.95:1" },
  { icon: "📏", title: "Text Scalability", desc: "Typography uses relative units and flexible layouts, ensuring readability across devices and font sizes, aligning with WCAG 2.1 guidelines.", badge: "WCAG 2.1 compliant" },
  { icon: "🔊", title: "Screen Reader Ready", desc: "Interactive elements, headings, and buttons are clearly labelled in the design to support VoiceOver and other screen readers on iOS.", badge: "VoiceOver compatible" },
  { icon: "👆", title: "Touch Targets", desc: "All buttons and tappable areas meet Apple's minimum size guidelines (44×44pt) for easy, accurate interaction on all iPhone models.", badge: "Apple HIG compliant" }
];

export const testResults = [
  { task: "Task 1 — Search a book", fraction: "18/20", label: "completed successfully", note: "2 participants hesitated with filter options before needing guidance." },
  { task: "Task 2 — Book a seat", fraction: "17/20", label: "completed successfully", note: "3 found the confirmation step slightly unclear — improved in final iteration." },
  { task: "Task 3 — Check notifications", fraction: "19/20", label: "completed successfully", note: "1 participant missed the icon placement initially." }
];

export const learnings = [
  { num: "01", title: "Abstract ideas need structure to become real", text: "Starting from WhatsApp brainstorms and rough sketches, I learned how to translate messy, scattered ideas into structured, testable flows. The discipline of information architecture saved the team weeks of rework." },
  { num: "02", title: "User feedback early saves time late", text: "Getting real users into the testing process before the design was \"perfect\" led to better decisions. The confirmation step issue in seat booking would have shipped if we hadn't tested. That one finding alone justified the entire testing phase.", delay: "rd1" },
  { num: "03", title: "Leading a team of 10 is a design challenge", text: "Communicating design decisions to 10 developers — each with their own mental model of the product — taught me that documentation and clear handoff specs are as important as the design itself. Good collaboration is a UX problem too.", delay: "rd2" },
  { num: "04", title: "Clarity over perfection under time pressure", text: "Four weeks is not a lot of time. I learned to make principled trade-offs — choosing clarity and usability over aesthetic polish when the deadline demanded it. Shipping something good beats perfecting something that never ships.", delay: "rd3" }
];
