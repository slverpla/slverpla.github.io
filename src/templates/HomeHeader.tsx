import Link from 'next/link';

import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import type { Language } from '../utils/translations';
import { translations } from '../utils/translations';
import { Logo } from './Logo';
import { ScrollFadeInSection } from './ScrollFadeIn';

interface HomeHeaderProps {
  language?: Language;
}

const HomeHeader = ({ language = 'en' }: HomeHeaderProps) => {
  const t = translations[language];

  return (
    <div>
      <div className="splash-screen-background fixed inset-0 -z-10" />
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo responsive />}>
          <div className="pr-1 md:pr-8">
            <ul className="flex items-center space-x-8 text-black">
              <li className="hidden md:block">
                <Link
                  href={language === 'en' ? '/' : '/nl'}
                  className="underline"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`${language === 'en' ? '' : '/nl'}/get-plantative`}>
                  {t.nav.getApp}
                </Link>
              </li>
            </ul>
          </div>
        </NavbarTwoColumns>
      </Section>
      <ScrollFadeInSection>
        <Section yPadding="pt-24 pb-12">
          <HeroOneButton language={language} />
        </Section>
      </ScrollFadeInSection>
    </div>
  );
};

export { HomeHeader };
