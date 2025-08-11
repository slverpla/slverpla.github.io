import type { FC } from 'react';

import { Button } from '@/button/Button';
import type { Language } from '@/utils/translations';
import { translations } from '@/utils/translations';

interface ICreateAdTeaserProps {
  language: Language;
  onCTAClick: () => void;
}

const CreateAdTeaser: FC<ICreateAdTeaserProps> = ({ language, onCTAClick }) => {
  const t = translations[language];

  return (
    <div className="text-center">
      <p className="mx-auto mb-14 max-w-md text-2xl">
        {t.marketplace.createAd.title}
      </p>
      <Button size="lg" onClick={() => onCTAClick()}>
        {t.marketplace.createAd.button}
      </Button>
    </div>
  );
};

export default CreateAdTeaser;
