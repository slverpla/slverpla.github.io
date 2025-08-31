import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Toast from '@/components/Toast';
import { translations } from '@/utils/translations';

import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { HomeHeader } from '../templates/HomeHeader';
import { VerticalFeatures } from '../templates/VerticalFeatures';

const Index = () => {
  const [showToast, setShowToast] = useState(false);
  const t = translations.en;
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem('showWantedCreatedToast') === 'true') {
      setShowToast(true);
      sessionStorage.removeItem('showWantedCreatedToast');
    }
  }, []);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={t.seo.home.title} description={t.seo.home.description} />
      <AnimatePresence>
        {showToast && (
          <Toast
            show={showToast}
            message={t.marketplace.createAd.created}
            onClose={() => setShowToast(false)}
            buttonText={t.marketplace.createAd.viewInApp}
            onButtonClick={() => router.push('/get-plantative')}
          />
        )}
      </AnimatePresence>
      <HomeHeader />
      <VerticalFeatures />
      <Footer />
    </div>
  );
};

export default Index;
