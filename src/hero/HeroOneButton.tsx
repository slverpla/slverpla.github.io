import Link from 'next/link';

import { Button } from '@/button/Button';
import type { Language } from '@/utils/translations';
import { translations } from '@/utils/translations';

interface HeroOneButtonProps {
  language?: Language;
}

const HeroOneButton = ({ language = 'en' }: HeroOneButtonProps) => {
  const t = translations[language];

  return (
    <header className="mb-32 px-4 text-center">
      <h1 className="-mt-16 text-4xl font-bold leading-none text-gray-900 md:mt-0 md:text-6xl">
        <div>{t.hero.title1}</div>
        <div>{t.hero.title2}</div>
      </h1>

      <div className="mb-20 mt-8 text-1.5xl font-semibold text-gray-900 md:text-3xl">
        {t.hero.subtitle}
      </div>

      <Link href={`${language === 'en' ? '' : '/nl'}/get-plantative/`}>
        <Button size="lg">{t.hero.cta}</Button>
      </Link>
    </header>
  );
};

export { HeroOneButton };
