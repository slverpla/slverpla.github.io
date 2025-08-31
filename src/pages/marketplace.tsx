import { Turnstile } from '@marsidev/react-turnstile';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { translations } from '@/utils/translations';

import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import MarketPlace from '../templates/marketplace/MarketPlace';

const SearchPage = () => {
  const t = translations.en;
  const router = useRouter();
  const { q, category } = router.query;

  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={t.seo.marketplace.title}
        description={t.seo.marketplace.description}
      />
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
            siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!}
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
