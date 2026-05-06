export const ecoMeta = [
  { label: "Role", value: "UX Designer (Solo)" },
  { label: "Timeline", value: "4 Weeks" },
  { label: "Platform", value: "iOS · Mobile" },
  { label: "Type", value: "Personal Project" },
];

export const ecoFeatures = [
  { icon: "📊", title: "Daily Footprint Tracking", desc: "See your carbon impact in real time on a clean, intuitive dashboard." },
  { icon: "🌍", title: "Impact Visualization", desc: "Understand how your actions affect the environment through clear, engaging graphics." },
  { icon: "💡", title: "Learning Hub", desc: "Access personalized tips and eco-friendly habits to help you live sustainably." },
  { icon: "📈", title: "Progress Profile", desc: "Track your long-term growth and stay motivated on your eco journey." },
];

export const ecoProcess = [
  { phase: "01", icon: "🔍", name: "Empathize", desc: "User interviews and surveys to understand environmental awareness and app-usage behavior.", active: true },
  { phase: "02", icon: "📌", name: "Define", desc: "Identified core pain points: complexity, lack of engagement, and invisible daily impact.", active: false },
  { phase: "03", icon: "💡", name: "Ideate", desc: "Brainstormed features around simplicity, personalization, and habit formation.", active: false },
  { phase: "04", icon: "🎨", name: "Prototype", desc: "Built mid and high-fidelity wireframes using Inter typeface and a clean green palette.", active: false },
  { phase: "05", icon: "✅", name: "Test", desc: "Conducted usability tests, iterated based on friction-point feedback from real users.", active: false },
];

export const ecoCompetitors = [
  {
    name: "Joro",
    pros: ["Spending-based carbon tracking", "Community-driven features"],
    cons: ["US-only audience", "Lacks educational content"],
  },
  {
    name: "Capture",
    pros: ["GPS transport tracking", "Custom goals & reminders"],
    cons: ["UI feels outdated", "Data-heavy, often confusing"],
  },
  {
    name: "Aerial",
    pros: ["Flight tracking + carbon offsets", "Simple, sleek design"],
    cons: ["Travel-only coverage", "No daily habit tracking"],
  },
  {
    name: "UNEP Carbon",
    pros: ["Backed by trusted org", "Climate education content"],
    cons: ["Poor user interface", "Not interactive or personalized"],
  },
];

export const ecoResearchStats = [
  { value: "68", suffix: "%", label: "users find existing apps too complex" },
  { value: "5", suffix: "+", label: "in-depth user interviews conducted" },
  { value: "82", suffix: "%", label: "want real-time daily impact visibility" },
];

export const ecoEmpathy1 = [
  { cat: "Think & Feel", insight: `"I care about the planet, but I don't know where to begin."` },
  { cat: "See", insight: "Sees influencers posting eco tips but finds most advice inconsistent or unclear." },
  { cat: "Say & Do", insight: "Tries meatless meals and reusable bags but isn't tracking results." },
  { cat: "Pain", insight: "Feels small actions aren't making a difference; existing tools are intimidating." },
  { cat: "Gain", insight: "Wants a friendly guide that tracks her efforts and teaches along the way." },
];

export const ecoEmpathy2 = [
  { cat: "Think & Feel", insight: `"I've built good habits — I want to know if they really matter."` },
  { cat: "See", insight: "Sees apps that focus on numbers but lack real guidance or encouragement." },
  { cat: "Say & Do", insight: "Avoids fast fashion, uses a bike, and talks about eco-living with peers." },
  { cat: "Pain", insight: "Doesn't see how to measure long-term progress; wants smarter feedback." },
  { cat: "Gain", insight: "Looking for a sleek, data-light tool that visualizes his actual impact." },
];

export const ecoTestInsights = [
  "Users found the center tab bar add button unintuitive and often overlooked it.",
  "Carbon data visualizations felt too technical and lacked context.",
  "Users wanted faster ways to log daily activities without navigating away from home.",
  "The onboarding flow felt slightly overwhelming to first-time users.",
];

export const ecoTestHelped = [
  "Identified friction points early in the flow before expensive redesigns.",
  "Informed key UI improvements: floating add button, simplified charts, clearer onboarding.",
  "Enabled a more user-centered design that improved engagement and daily app usage.",
  "Validated that small UX tweaks had significant impact on usability and satisfaction.",
];

export const ecoLearnings = [
  { icon: "✨", title: "Simplicity enhances engagement", desc: "Streamlining complex carbon data into clear visuals made the experience approachable for everyday users." },
  { icon: "👥", title: "User feedback is invaluable", desc: "Direct insights helped identify usability gaps and guided purposeful design decisions." },
  { icon: "🎯", title: "Micro-interactions matter", desc: "Small refinements — like repositioning the add button — led to significantly improved task completion." },
  { icon: "📚", title: "Content + Function = Impact", desc: "Balancing educational content with actionable features created a product that's both informative and functional." },
  { icon: "🔄", title: "Iterate with intent", desc: "Each design iteration, driven by real user behavior, contributed to a cleaner, more effective solution." },
];
