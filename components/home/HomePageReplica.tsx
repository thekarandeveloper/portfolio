import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { HomeBehavior } from "./HomeBehavior";
import { HomeLoader } from "./HomeLoader";
import { HomeNav } from "./HomeNav";
import { HomeStyles } from "./HomeStyles";
import { JourneySection } from "./JourneySection";
import { ProcessSection } from "./ProcessSection";
import { WorkSection } from "./WorkSection";

export function HomePageReplica() {
  return (
    <main>
      <HomeStyles />
      <HomeBehavior />
      <div className="custom-cursor" id="cursor"></div>
      <div className="glass-orb" id="glassOrb"></div>
      <HomeLoader />
      <HomeNav />
      <HeroSection />
      <WorkSection />
      <ProcessSection />
      <JourneySection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
