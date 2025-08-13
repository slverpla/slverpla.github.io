import { Turnstile } from '@marsidev/react-turnstile';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import MarketPlace from '@/templates/marketplace/MarketPlace';
import { AppConfig } from '@/utils/AppConfig';
import { translations } from '@/utils/translations';

const SearchPage = () => {
  const t = translations.nl;
  const router = useRouter();
  const { q, category } = router.query;

  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header language="nl" />
      {isVerified ? (
        <MarketPlace
          language="nl"
          searchQuery={q as string}
          category={Number(category)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-8">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!}
            onSuccess={() => setIsVerified(true)}
          />
          <p className="mb-4 mt-8 text-center text-lg">
            {t.marketplace.securityCheck}
          </p>
        </div>
      )}
      <Footer language="nl" />
    </div>
  );
};

export default SearchPage;
