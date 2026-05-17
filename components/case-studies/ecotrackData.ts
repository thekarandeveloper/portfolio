export const ecoMeta = [
  { label: "Role", value: "UX Designer (Solo)" },
  { label: "Timeline", value: "4 Weeks" },
  { label: "Platform", value: "iOS · Mobile" },
  { label: "Type", value: "Personal Project" },
];

export const ecoFeatures = [
  { icon: "📊", title: "Daily Footprint Tracking", desc: "Quick-log from the home screen. I designed it so users never need to navigate away to record an activity. Every extra tap was a reason to quit." },
  { icon: "🌍", title: "Impact Visualization", desc: "Research showed raw CO₂ numbers mean nothing to most people. I reframed every metric as a plain-language comparison instead of a raw score." },
  { icon: "💡", title: "Learning Hub", desc: "Interviews revealed users wanted to understand why their actions matter, not just be told to change behaviour. Content and function had to be on the same screen." },
  { icon: "📈", title: "Progress Profile", desc: "Added after every usability tester asked 'am I actually getting better?' A question the original dashboard didn't answer." },
];

export const ecoProcess = [
  { phase: "01", icon: "🔍", name: "Empathize", desc: "5 semi-structured interviews + a 12-person screener survey. I recruited people who identified as eco-conscious but inconsistent, not existing eco-app users.", active: true },
  { phase: "02", icon: "📌", name: "Define", desc: "Synthesised 30+ raw findings into one framing: users don't abandon eco apps because they don't care. They quit because tracking makes them feel worse, not better.", active: false },
  { phase: "03", icon: "💡", name: "Ideate", desc: "Listed 23 possible features, then cut to 5 using one filter: can a first-time user do this on day one without help? If not, it's out of V1.", active: false },
  { phase: "04", icon: "🎨", name: "Prototype", desc: "Mid-fi first to validate IA and flow, then hi-fi to test visual decisions. Ran usability tests between both rounds, not just at the end.", active: false },
  { phase: "05", icon: "✅", name: "Test", desc: "Two rounds with 5 participants each. Round 2 tested the specific changes identified in Round 1, not a general re-test of the whole prototype.", active: false },
];

export const ecoCompetitors = [
  {
    name: "Joro",
    pros: ["Automatic spending-based tracking", "No manual logging required"],
    cons: ["US-only audience", "Opaque calculation methodology"],
    decision: "Automatic tracking feels magical but creates trust problems when users can't see why a purchase triggered a number. I kept logging manual but made it fast.",
  },
  {
    name: "Capture",
    pros: ["GPS-based transport detection", "Custom goal setting"],
    cons: ["Every screen has 6+ competing data points", "Feels like a carbon accounting tool, not a habit app"],
    decision: "Hardened my 'one primary number per screen' rule. Completeness is the enemy of daily usability.",
  },
  {
    name: "Aerial",
    pros: ["Excellent visual design", "Clean, focused interface"],
    cons: ["Flight tracking only, ignores daily habits", "No educational or contextual content"],
    decision: "Proved a beautiful narrow-scope product beats a complete ugly one. Scope constraint is a feature, not a limitation.",
  },
  {
    name: "UNEP Carbon",
    pros: ["Backed by a credible institution", "Strong climate education content"],
    cons: ["Non-interactive, no personalisation", "Education and action exist in separate silos"],
    decision: "Learning and logging need to share the same screen. A standalone learning tab is a tab users won't open.",
  },
];

export const ecoResearchStats = [
  { value: "68", suffix: "%", label: "said existing apps made them feel judged, not helped" },
  { value: "5",  suffix: "+", label: "semi-structured interviews, 30 min each" },
  { value: "3",  suffix: "/5", label: "interviewees had uninstalled an eco app within 10 days" },
];

export const ecoEmpathy1 = [
  { cat: "Think & Feel", insight: `"I care about the planet, but I don't know where to begin."` },
  { cat: "See", insight: "Sees influencers posting eco tips but finds most advice inconsistent or unclear." },
  { cat: "Say & Do", insight: "Tries meatless meals and reusable bags but isn't tracking results." },
  { cat: "Pain", insight: "Feels small actions aren't making a difference; existing tools are intimidating." },
  { cat: "Gain", insight: "Wants a friendly guide that tracks her efforts and teaches along the way." },
];

export const ecoEmpathy2 = [
  { cat: "Think & Feel", insight: `"I've built good habits. I want to know if they really matter."` },
  { cat: "See", insight: "Sees apps that focus on numbers but lack real guidance or encouragement." },
  { cat: "Say & Do", insight: "Avoids fast fashion, uses a bike, and talks about eco-living with peers." },
  { cat: "Pain", insight: "Doesn't see how to measure long-term progress; wants smarter feedback." },
  { cat: "Gain", insight: "Looking for a sleek, data-light tool that visualizes his actual impact over time." },
];

export const ecoTestInsights = [
  "4 of 5 testers couldn't locate the add button within 90 seconds. One said: 'I kept tapping the logo.'",
  "Users completed the carbon data task but left feeling worse, not informed. Three described the numbers as 'meaningless' or 'like seeing calories on a menu, just guilt.'",
  "Every tester wanted to log without leaving the home screen. Each extra navigation step caused 1–2 testers to abandon the task.",
  "Onboarding asked for too much upfront commitment. Two testers dropped off before completing setup.",
];

export const ecoTestHelped = [
  "Task 1 (log a commute): 3 of 5 → 5 of 5 after the floating FAB replaced the buried tab button.",
  "Task 4 (add a weekly goal): 2 of 5 → 4 of 5 after separating Goals from the Profile tab.",
  "The word most used after Round 1 was 'complicated.' After Round 2 it was 'simple.' Same data, better framing.",
  "Confirmed the chart language change (comparative framing vs raw numbers) shifted how users described their own data: from 'depressing' to 'motivating.'",
];

export const ecoLearnings = [
  {
    icon: "🔍",
    title: "The problem I thought I was solving wasn't the real problem",
    desc: "I started this project thinking the gap was bad UX. Research showed the real gap was emotional. Users felt judged by their own data. That one reframe changed almost every design decision I made after it.",
  },
  {
    icon: "✂️",
    title: "What I cut mattered as much as what I built",
    desc: "I started with 23 features. Every feature I cut in scoping made the features I kept stronger. The quick-log flow only works because I didn't also try to handle carbon offsets on the same screen.",
  },
  {
    icon: "🔗",
    title: "Research findings need a decision attached or they're just decoration",
    desc: "I ran 5 interviews and came out with 30+ findings. Most sat in a doc and affected nothing. The 3 that actually changed my design were written as decision sentences: 'Because users said X, I will do Y.' Next time I write those before synthesis, not after.",
  },
  {
    icon: "📖",
    title: "The before matters as much as the after",
    desc: "Documenting the reasoning behind V1 made the iteration story legible. I assumed the original design's logic was obvious. It wasn't, and capturing it made the case for change much stronger than just showing the updated version.",
  },
  {
    icon: "⚠️",
    title: "What I'd do differently",
    desc: "I'd design for the unhappy path. Every screen I built shows a successful, populated state. I never designed for day one (no data yet), a bad week (numbers going up), or a user who wants to stop tracking. Those are real moments, and the prototype doesn't address them.",
  },
];
