import { HeroSection } from "../components/HeroSection";
import { ProcessSection } from "../components/ProcessSection";
import { TreatmentsSection } from "../components/TreatmentsSection";
import { DoctorSection } from "../components/DoctorSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FAQsSection } from "../components/FAQsSection";
import { ContactSection } from "../components/ContactSection";

interface HomePageProps {
  onNavigate: (page: string, treatmentSlug?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <HeroSection />
      <ProcessSection />
      <TreatmentsSection onNavigate={onNavigate} />
      <DoctorSection />
      <TestimonialsSection />
      <FAQsSection />
      <ContactSection />
    </main>
  );
}
