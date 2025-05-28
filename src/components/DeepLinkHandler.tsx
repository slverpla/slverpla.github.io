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
      if (!isMobile()) {
        router.replace('/');
        return;
      }

      if (hasAttemptedRedirect.current) {
        return;
      }

      hasAttemptedRedirect.current = true;

      const fullUrl = typeof window !== 'undefined' ? window.location.href : '';
      const appUrl = fullUrl.replace('https://', `${appScheme}://`);

      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = appUrl;
      document.body.appendChild(iframe);

      const isAndroid = /Android/i.test(navigator.userAgent);
      const storeUrl = isAndroid ? storeUrls.android : storeUrls.ios;

      let redirected = false;

      const timeoutId = setTimeout(() => {
        if (!redirected) {
          document.body.removeChild(iframe);
          window.location.href = storeUrl;
        }
      }, 1000);

      // Listen for when the app opens (user leaves the page)
      const handleVisibilityChange = () => {
        if (document.hidden) {
          redirected = true;
          clearTimeout(timeoutId);
        }
      };

      const handleBlur = () => {
        redirected = true;
        clearTimeout(timeoutId);
      };

      // Add event listeners
      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('blur', handleBlur);

      // Cleanup function
      const cleanup = () => {
        redirected = true;
        clearTimeout(timeoutId);
        document.removeEventListener(
          'visibilitychange',
          handleVisibilityChange,
        );
        window.removeEventListener('blur', handleBlur);
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      };

      window.addEventListener('beforeunload', cleanup);

      // Clean up after timeout regardless
      setTimeout(cleanup, 2000);
    };

    handleDeepLink();
  }, [router, appScheme, storeUrls]);

  return null;
}
