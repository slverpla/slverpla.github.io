import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import type { Language } from '../utils/translations';
import { translations } from '../utils/translations';
import { Logo } from './Logo';

interface GetAppHeaderProps {
  language?: Language;
}

const GetAppHeader = ({ language = 'en' }: GetAppHeaderProps) => {
  const t = translations[language];

  return (
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo responsive />} language={language}>
        <div className="pr-0 md:pr-8">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href={language === 'en' ? '/' : '/nl'}>{t.nav.home}</Link>
            </li>
            <li className="hidden md:block">
              <Link
                href={`${language === 'en' ? '' : '/nl'}/get-plantative`}
                className="underline"
              >
                {t.nav.getApp}
              </Link>
            </li>
          </ul>
        </div>
      </NavbarTwoColumns>
    </Section>
  );
};

export { GetAppHeader };
