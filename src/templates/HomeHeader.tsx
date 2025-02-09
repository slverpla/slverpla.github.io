import Link from 'next/link';

import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import type { Language } from '../utils/translations';
import { translations } from '../utils/translations';
import { Logo } from './Logo';

interface HomeHeaderProps {
  language?: Language;
}

const HomeHeader = ({ language = 'en' }: HomeHeaderProps) => {
  const t = translations[language];

  return (
    <>
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <div className="pr-1 md:pr-8">
            <ul className="flex items-center space-x-8">
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
      <Section yPadding="pt-20 pb-8">
        <HeroOneButton language={language} />
      </Section>
    </>
  );
};

export { HomeHeader };
