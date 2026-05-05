import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { GallerySection } from "./GallerySection";
import { HeroSection } from "./HeroSection";
import { HomeLoader } from "./HomeLoader";
import { HomeNav } from "./HomeNav";
import { JourneySection } from "./JourneySection";
import { ProcessSection } from "./ProcessSection";
import { ScrapbookSection } from "./ScrapbookSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ToolkitSection } from "./ToolkitSection";
import { WorkSection } from "./WorkSection";

export function HomePageReplica() {
  return (
    <main>
      <HomeLoader />
      <HomeNav />
      <HeroSection />
      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <GallerySection />
      <ScrapbookSection />
      <ToolkitSection />
      <JourneySection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
