import { Turnstile } from '@marsidev/react-turnstile';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { translations } from '@/utils/translations';

import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import MarketPlace from '../templates/marketplace/MarketPlace';
import { AppConfig } from '../utils/AppConfig';

const SearchPage = () => {
  const t = translations.en;
  const router = useRouter();
  const { q, category } = router.query;

  const [isVerified, setIsVerified] = useState(true); // TODO: Default to true for development purposes

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      {isVerified ? (
        <MarketPlace
          language="en"
          searchQuery={q as string}
          category={Number(category)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-8">
          <Turnstile
            siteKey="0x4AAAAAABoqN97JRiRd8u4T"
            onSuccess={() => setIsVerified(true)}
          />
          <p className="mb-4 mt-8 text-center text-lg">
            {t.marketplace.securityCheck}
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SearchPage;
