import HeroAthleteSection from '@/components/athletes/HeroAthleteSection';
import AthleteAudienceSection from '@/components/athletes/AthleteAudienceSection';
import AthleteProcessSection from '@/components/athletes/AthleteProcessSection';
import AthleteTreatmentsSection from '@/components/athletes/AthleteTreatmentsSection';
import AthleteDifferentialsSection from '@/components/athletes/AthleteDifferentialsSection';
import AthleteTestimonialsSection from '@/components/athletes/AthleteTestimonialsSection';
import AthleteFAQSection from '@/components/athletes/AthleteFAQSection';
import AthleteFinalCTASection from '@/components/athletes/AthleteFinalCTASection';

export default function AthletesPage() {
  return (
    <>
      <HeroAthleteSection />
      <AthleteAudienceSection />
      <AthleteProcessSection />
      <AthleteTreatmentsSection />
      <AthleteDifferentialsSection />
      <AthleteTestimonialsSection />
      <AthleteFAQSection />
      <AthleteFinalCTASection />
    </>
  );
}
