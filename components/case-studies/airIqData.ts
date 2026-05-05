export const airFigmaLinks = {
  desktop: "https://www.figma.com/design/64MuAcPHGp3vcWTQheTK5l/AIR-iQ-Desktop",
  mobile: "https://www.figma.com/design/34tj6z1oOaVtCRrD1b7zCB/AIR-iQ-Mobile"
};

export const airHeroMetrics = [
  { value: "30", accent: "–40%", label: "Faster booking completion" },
  { value: "2", accent: "×", label: "Clearer data on flight cards" },
  { value: "80", accent: "+", label: "Components built from zero" },
  { value: "20", accent: "+", label: "Screens — desktop & mobile" }
];

export const airStoryCards = [
  {
    tone: "sc-blue",
    kicker: "Ownership",
    title: "Led from research to handoff",
    text: "Took ownership of the full product design — user research, wireframes, design system, high-fidelity screens, and developer handoff. Built the process from scratch alongside the engineering team."
  },
  {
    tone: "sc-green",
    delay: "0.1s",
    kicker: "Business alignment",
    title: "Design that served real business goals",
    text: "Participated directly in business requirement discussions with stakeholders. Every design decision was grounded in commercial viability — not just usability. This made decisions defensible at every level."
  },
  {
    tone: "sc-accent",
    delay: "0.15s",
    kicker: "Problem finding",
    title: "Identified gaps others had overlooked",
    text: "Spotted critical UX issues in the data tables — specifically how agents were missing key fare information. Proposed and implemented a restructured information hierarchy that went straight to production."
  },
  {
    tone: "sc-amber",
    delay: "0.2s",
    kicker: "Cross-functional",
    title: "Close collaboration with engineering",
    text: "Worked directly with the engineering manager and developers throughout. Dev constraints shaped the design — and design thinking shaped what the team built."
  }
];

export const airStorySummary = [
  { value: "6mo", label: "End-to-end product design" },
  { value: "Live", label: "Shipped & used by real travel agents" },
  { value: "2", label: "Platforms — desktop + mobile" },
  { value: "+1", label: "Hotel module trusted next" }
];

export const airProblemWords = [
  [
    { text: "Agents" },
    { text: "were" },
    { text: "drowning", tone: "accent" },
    { text: "in" },
    { text: "complexity —", tone: "red" }
  ],
  [
    { text: "outdated" },
    { text: "interfaces,", tone: "red" },
    { text: "dense" },
    { text: "data tables,", tone: "red" }
  ],
  [
    { text: "zero" },
    { text: "design system,", tone: "accent" },
    { text: "and" },
    { text: "no" },
    { text: "mobile", tone: "red" },
    { text: "support." }
  ]
];

export const airProblemCards = [
  {
    tag: "Critical",
    tagClass: "tag-red",
    title: "Legacy System Dependence",
    text: "Agents trained on command-based interfaces. Modernising meant respecting what they knew — while dramatically reducing cognitive load."
  },
  {
    tag: "High complexity",
    tagClass: "tag-amber",
    delay: "0.1s",
    title: "Complex Business Rules",
    text: "Fare rules, GST, RAF levies, dynamic airline charges per segment per passenger — all needed to surface clearly within a single booking flow."
  },
  {
    tag: "UX gap found",
    tagClass: "tag-blue",
    delay: "0.15s",
    title: "High-Density Data Tables",
    text: "15–20 data points per flight card. Equal visual weight across everything. Agents were missing refundability and seat count — the two things they check first. I caught this. I fixed it."
  },
  {
    tag: "Alignment",
    tagClass: "tag-teal",
    delay: "0.2s",
    title: "Multi-Stakeholder Complexity",
    text: "Developers, engineering managers, business owners, and agents — all with different priorities. Design was the bridge between what the business needed and what users could use."
  }
];

export const airBeforeList = [
  "No design system — inconsistent UI everywhere",
  "Fare rules buried in unreadable small text",
  "3–4 steps to share a fare via email",
  "Empty screen on broken searches",
  "No mobile — unusable in the field"
];

export const airAfterList = [
  "Unified system — 80+ components, one language",
  "Fare breakdown with 4 scannable states",
  "1-click share wizard with to/cc + close guard",
  "3 designed error states for every failure",
  "Full 375px mobile — login to confirmation"
];

export const airResearchCards = [
  {
    name: "MakeMyTrip",
    type: "B2C · Consumer OTA",
    works: ["Price clarity", "Search UX"],
    missing: ["No fare class depth", "No GST breakdown", "B2C only"],
    insight: "\"Price hierarchy is strong — but agents need fare class and tax breakdowns. None of it exists here.\"",
    opportunity: "Opportunity: Carry price clarity into B2B depth"
  },
  {
    name: "Skyscanner",
    type: "B2C · Meta-search",
    works: ["Filter UX", "Visual hierarchy"],
    missing: ["Modal filters", "No multi-pax", "No booking depth"],
    insight: "\"Persistent filter panel idea came from watching how Skyscanner fails agents — hiding filters breaks comparison flow.\"",
    opportunity: "Opportunity: Persistent sidebar, not modal"
  },
  {
    name: "Amadeus / Sabre",
    type: "B2B · GDS System",
    works: ["Data complete", "Agent-trusted"],
    missing: ["Zero usability", "Command-line UI", "No visual design"],
    insight: "\"The data model is right. The presentation is from 1994. This is exactly the gap AIR iQ fills.\"",
    opportunity: "Opportunity: GDS data + modern UI thinking"
  },
  {
    name: "Goibibo for Business",
    type: "B2B · Corporate Travel",
    works: ["Card design", "B2B context"],
    missing: ["Fare breakdown weak", "No share flow"],
    insight: "\"Good B2B card hierarchy reference. But misses the complexity real travel agents deal with daily.\"",
    opportunity: "Opportunity: Deeper fare card anatomy"
  },
  {
    name: "Cleartrip for Work",
    type: "B2B · SME Travel",
    works: ["Approval flows", "Multi-stakeholder"],
    missing: ["Dated visual language", "Mobile ignored"],
    insight: "\"Multi-stakeholder thinking informed the share wizard flow — how agents send fares to clients for approval.\"",
    opportunity: "Opportunity: Share wizard UX"
  }
];

export const airProcessSteps = [
  {
    save: "-3 days",
    num: "Step 01",
    title: "Requirements → User stories",
    text: "Stakeholder meeting notes fed into ChatGPT to extract structured user stories and edge cases I might miss. What took 2 days of affinity mapping took 20 minutes.",
    old: "Old: 2-day affinity mapping",
    ai: "ChatGPT · Brief synthesis"
  },
  {
    save: "-4 days",
    num: "Step 02",
    title: "Layout exploration with v0",
    text: "Used v0 to generate 4 layout directions for the search results page in 30 minutes. Showed stakeholders real-looking options — not grey boxes — and got direction validated before opening Figma.",
    old: "Old: 3-day lo-fi wireframe round",
    ai: "v0 · Rapid layout prototyping"
  },
  {
    save: "-2 days",
    num: "Step 03",
    title: "Filter logic validation",
    text: "15 filter types in the panel. Used ChatGPT to map filter priority by agent use frequency — so the panel hierarchy matched how agents actually work, not how we assumed.",
    old: "Old: User interviews + synthesis",
    ai: "ChatGPT · Filter hierarchy logic"
  },
  {
    save: "-2 days",
    num: "Step 04",
    title: "Edge case discovery",
    text: "Prompted AI with the full user journey and asked it to attack the design — find every scenario that breaks. Found 12 edge cases in 30 minutes that I then designed for explicitly.",
    old: "Old: QA or missed entirely",
    ai: "ChatGPT · Stress testing"
  },
  {
    save: "-1 day",
    num: "Step 05",
    title: "Microcopy & error states",
    text: "B2B copy must be precise and non-alarming. Generated 5 variants per error message, selected and refined the best. Covered all 3 error screens — no results, timeout, sold-out.",
    old: "Old: UX writer or self-iterate",
    ai: "ChatGPT · Microcopy generation"
  },
  {
    num: "Step 06",
    title: "Hi-fi in Figma",
    text: "With direction validated and edge cases defined, every hour in Figma was intentional. No exploration, only craft — building the design system, tokens, and 80+ components from scratch.",
    ai: "Figma · Full system build"
  }
];

export const airColorSwatches = [
  { name: "Navy", value: "var(--airq-navy)" },
  { name: "Dark Blue", value: "var(--airq-dark-blue)" },
  { name: "Tech Blue", value: "var(--airq-blue)" },
  { name: "Blue Mid", value: "var(--airq-blue-mid)" },
  { name: "Blue Light", value: "var(--airq-blue-light)" },
  { name: "Background", value: "var(--airq-bg-swatch)" },
  { name: "BG-2", value: "var(--airq-bg-2-swatch)" },
  { name: "Border", value: "var(--airq-border-swatch)" },
  { name: "Body", value: "var(--airq-body-swatch)" },
  { name: "Placeholder", value: "var(--airq-placeholder)" },
  { name: "Success", value: "var(--airq-green)" },
  { name: "Error", value: "var(--airq-red)" }
];

export const airTypeScale = [
  { sample: "H1 Black", meta: "900 · 28–36px · Page titles", size: "26px", weight: 900 },
  { sample: "H2 Bold", meta: "700 · 20–24px · Section heads", size: "20px", weight: 700 },
  { sample: "Label Bold", meta: "700 · 14–16px · Card labels", size: "16px", weight: 700 },
  { sample: "Body Regular", meta: "400 · 13–15px · Content, descriptions", size: "14px", weight: 400 },
  { sample: "Caption Light", meta: "300 · 11–12px · Meta, hints", size: "12px", weight: 300, style: "italic" }
];

export const airSpacingTokens = [
  { label: "4", size: 16, px: "4px" },
  { label: "8", size: 24, px: "8px" },
  { label: "12", size: 32, px: "12px" },
  { label: "16", size: 40, px: "16px" },
  { label: "24", size: 56, px: "24px" },
  { label: "32", size: 72, px: "32px" },
  { label: "40", size: 88, px: "40px" },
  { label: "48", size: 104, px: "48px" }
];

export const airRadiusTokens = [
  { label: "radius-sm · 4px", radius: "4px" },
  { label: "radius-md · 8px", radius: "8px" },
  { label: "radius-lg · 12px", radius: "12px" },
  { label: "radius-pill", radius: "100px" }
];

export const airComponents = [
  { icon: "✈", name: "Itinerary card", count: "4 variants" },
  { icon: "💰", name: "Price listing", count: "3 variants" },
  { icon: "▼", name: "Dropdowns", count: "5 states" },
  { icon: "📝", name: "Text fields", count: "6 states" },
  { icon: "⚠", name: "Error states", count: "3 types" },
  { icon: "🔘", name: "Buttons", count: "5 variants" },
  { icon: "☑", name: "Checkboxes", count: "4 states" },
  { icon: "🏷", name: "Fare breakdown", count: "4 states" },
  { icon: "🔔", name: "Tooltips", count: "6 variants" }
];

export const airIcons = ["🧳", "ℹ", "✈", "🔄", "📍", "📋"];

export const airDesignStats = [
  { value: "80", accent: "+", label: "Components built" },
  { value: "0", label: "External icon libraries" },
  { value: "3", label: "Icon size scales" },
  { value: "4", accent: "pt", label: "Base grid" }
];
