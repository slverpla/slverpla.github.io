import { useRouter } from 'next/router';

import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
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
    <Section>
      <ScrollFadeInSection>
        <VerticalFeatureRow
          title={t.features.trading.title}
          description={t.features.trading.description}
          image="/assets/images/buying_and_selling_blur_bg.png"
          imageAlt="Illustration of people trading plants"
        />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <VerticalFeatureRow
          title={t.features.recognition.title}
          description={t.features.recognition.description}
          image="/assets/images/search_plants.png"
          imageAlt="Plant identification through camera illustration"
          reverse
        />
      </ScrollFadeInSection>
      <ScrollFadeInSection>
        <VerticalFeatureRow
          title={t.features.expert.title}
          description={t.features.expert.description}
          image="/assets/images/doctor_edited.png"
          imageAlt="Plant care expert consultation illustration"
          isClickable
          onClick={() => {
            router.push(`${language === 'en' ? '' : '/nl'}/plantative-doctor`);
          }}
        />
      </ScrollFadeInSection>
    </Section>
  );
};

export { VerticalFeatures };
