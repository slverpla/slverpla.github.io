import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import type { Language } from '../utils/translations';
import { translations } from '../utils/translations';
import { Logo } from './Logo';

interface HeaderProps {
  language?: Language;
}

const Header: React.FC<HeaderProps> = ({ language = 'en' }) => {
  const t = translations[language];

  return (
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo responsive />}>
        <div className="pr-0 md:pr-8">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href={language === 'en' ? '/' : '/nl'}>{t.nav.home}</Link>
            </li>
            <li className="hidden md:block">
              <Link href={`${language === 'en' ? '' : '/nl'}/get-plantative`}>
                {t.nav.getApp}
              </Link>
            </li>
          </ul>
        </div>
      </NavbarTwoColumns>
    </Section>
  );
};

export { Header };
