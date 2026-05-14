import { ContactSection } from "./ContactSection";
import { DesignSystemZoom } from "./DesignSystemZoom";
import { GallerySection } from "./GallerySection";
import { HeroSection } from "./HeroSection";
import { HomeBehavior } from "./HomeBehavior";
import { HomeExperiencesSection } from "./HomeExperiencesSection";
import { HomeLoader } from "./HomeLoader";
import { HomeLovesSection } from "./HomeLovesSection";
import { HomeNav } from "./HomeNav";
import { HomeStyles } from "./HomeStyles";
import { JourneySection } from "./JourneySection";
import { ProcessSection } from "./ProcessSection";
import { ScrapbookSection } from "./ScrapbookSection";
import { SignoffSection } from "./SignoffSection";
import { SpiralSection } from "./SpiralSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ToolkitSection } from "./ToolkitSection";
import { WorkSection } from "./WorkSection";
import { ZoomSection } from "./ZoomSection";

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
        <DesignSystemZoom />
        <ZoomSection />
        <ProcessSection />
        <JourneySection />
        <ToolkitSection />
        <HomeLovesSection />
        <TestimonialsSection />
        <HomeExperiencesSection />
        <ScrapbookSection />
        <GallerySection />
        <SpiralSection />
        <SignoffSection />
        <ContactSection />
      </main>
    </>
  );
}
