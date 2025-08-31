import { useEffect } from 'react';

import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { GetAppHeader } from '@/templates/GetAppHeader';
import { DownloadSection } from '@/templates/GetAppSection';
import { AppConfig } from '@/utils/AppConfig';
import { translations } from '@/utils/translations';

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

const GetTheApp = () => {
  const t = translations.en;
  useEffect(() => {
    const handleMobileRedirect = () => {
      // Only redirect on mobile devices
      if (!isMobile()) return;

      // Check if user came from a direct link (not internal navigation)
      const isDirectAccess =
        !document.referrer || !document.referrer.includes(window.location.host);

      if (isDirectAccess) {
        // Detect platform and redirect to appropriate store
        const isAndroid = /Android/i.test(navigator.userAgent);
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isAndroid) {
          window.location.href = AppConfig.storeUrls.android;
        } else if (isIOS) {
          window.location.href = AppConfig.storeUrls.ios;
        }
      }
    };

    // Small delay to ensure the page has loaded
    const timer = setTimeout(handleMobileRedirect, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={t.seo.getApp.title} description={t.seo.getApp.description} />

      <GetAppHeader />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default GetTheApp;
