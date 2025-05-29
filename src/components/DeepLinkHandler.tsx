import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

interface Custom404Props {
  appScheme: string;
  storeUrls: {
    android: string;
    ios: string;
  };
}

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

export default function Custom404({ appScheme, storeUrls }: Custom404Props) {
  const router = useRouter();
  const hasAttemptedRedirect = useRef(false);

  useEffect(() => {
    const handleDeepLink = () => {
      // If not mobile, redirect to home
      if (!isMobile()) {
        router.replace('/');
        return;
      }

      // Check if we already attempted a redirect
      if (hasAttemptedRedirect.current) {
        return;
      }

      hasAttemptedRedirect.current = true;

      // Get full URL and create app URL
      const fullUrl = typeof window !== 'undefined' ? window.location.href : '';
      const appUrl = fullUrl.replace('https://', `${appScheme}://`);

      // Create and append iframe
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = appUrl;
      document.body.appendChild(iframe);

      // Handle store redirect
      const isAndroid = /Android/i.test(navigator.userAgent);
      const storeUrl = isAndroid ? storeUrls.android : storeUrls.ios;

      const timeoutId = setTimeout(() => {
        document.body.removeChild(iframe);
        window.location.href = storeUrl;
      }, 1000);

      // Handle cleanup
      const cleanup = () => {
        clearTimeout(timeoutId);
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      };

      window.addEventListener('beforeunload', cleanup);
    };

    handleDeepLink();
  }, [router, appScheme, storeUrls]);

  return null;
}
