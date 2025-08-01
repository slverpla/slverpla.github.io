import { useRouter } from 'next/router';

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
          <VerticalFeatureRow
            title={t.features.trading.title}
            description={t.features.trading.description}
            image="/assets/images/buying_and_selling_blur_bg.png"
            imageAlt="Illustration of people trading plants"
            removeMarginTop
            onTryNowClick={() => {
              router.push(`${language === 'en' ? '' : '/nl'}/get-plantative`);
            }}
            language={language}
          />
        </ScrollFadeInSection>
        <ScrollFadeInSection>
          <VerticalFeatureRow
            title={t.features.recognition.title}
            description={t.features.recognition.description}
            image="/assets/images/search_plants.png"
            imageAlt="Plant identification through camera illustration"
            reverse
            onTryNowClick={() => {
              router.push(`${language === 'en' ? '' : '/nl'}/get-plantative`);
            }}
            language={language}
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
              router.push(
                `${language === 'en' ? '' : '/nl'}/plantative-doctor`,
              );
            }}
            onMoreInfoClick={() => {
              router.push(
                `${language === 'en' ? '' : '/nl'}/plantative-doctor`,
              );
            }}
            onTryNowClick={() => {
              router.push(`${language === 'en' ? '' : '/nl'}/get-plantative`);
            }}
            language={language}
          />
        </ScrollFadeInSection>
      </Section>
    </BackgroundSection>
  );
};

export { VerticalFeatures };
