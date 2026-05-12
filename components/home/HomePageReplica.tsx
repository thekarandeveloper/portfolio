import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { EditorialWorkSection } from "./EditorialWorkSection";
import { HeroSection } from "./HeroSection";
import { HomeBehavior } from "./HomeBehavior";
import { HomeLoader } from "./HomeLoader";
import { HomeNav } from "./HomeNav";
import { HomeStyles } from "./HomeStyles";
import { JourneySection } from "./JourneySection";
import { WorkSection } from "./WorkSection";

export function HomePageReplica() {
  return (
    <>
      <HomeStyles />
      <HomeLoader />
      <main className="home-page-shell">
        <HomeBehavior />
        <div className="custom-cursor" id="cursor"></div>
        <div className="glass-orb" id="glassOrb"></div>
        <div className="scroll-tube" id="scrollTube">
          <div className="scroll-tube-fill" id="scrollTubeFill"></div>
        </div>
        <HomeNav />
        <HeroSection />
        <WorkSection />
        <EditorialWorkSection />
        <JourneySection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
