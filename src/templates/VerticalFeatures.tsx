import { useRouter } from 'next/router';

import { SearchableVerticalFeatureRow } from '@/feature/SearchableVerticalFeatureRow';
import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { BackgroundSection } from '@/layout/BackgroundSection';
import { Section } from '@/layout/Section';
import type { Language } from '@/utils/translations';
import { translations } from '@/utils/translations';

import { ScrollFadeInSection } from './ScrollFadeIn';

interface VerticalFeaturesProps {
  language?: Language;
}

const VerticalFeatures = ({ language = 'en' }: VerticalFeaturesProps) => {
  const t = translations[language];
  const router = useRouter();

  return (
    <BackgroundSection yPadding="pb-16">
      <Section yPadding="py-8">
        <ScrollFadeInSection>
          <SearchableVerticalFeatureRow
            title={t.features.trading.title}
            description={t.features.trading.description}
            image="/assets/images/search_plants.webp"
            imageAlt="Illustration of people trading plants"
            removeMarginTop
            language={language}
          />
        </ScrollFadeInSection>
        <ScrollFadeInSection>
          <VerticalFeatureRow
            title={t.features.recognition.title}
            description={t.features.recognition.description}
            image="/assets/images/buying_and_selling_blur_bg.webp"
            imageAlt="Plant identification through camera illustration"
            reverse
            language={language}
          />
        </ScrollFadeInSection>
        <ScrollFadeInSection>
          <VerticalFeatureRow
            title={t.features.expert.title}
            description={t.features.expert.description}
            image="/assets/images/doctor_edited.webp"
            imageAlt="Plant care expert consultation illustration"
            onClick={() => {
              router.push(
                `${language === 'en' ? '' : '/nl'}/plantative-doctor`,
              );
            }}
            language={language}
          />
        </ScrollFadeInSection>
        <ScrollFadeInSection>
          <VerticalFeatureRow
            title={t.features.reminders.title}
            description={t.features.reminders.description}
            image="/assets/images/watering_reminders.webp"
            imageAlt="Plant care reminders illustration"
            reverse
            language={language}
          />
        </ScrollFadeInSection>
      </Section>
    </BackgroundSection>
  );
};

export { VerticalFeatures };
