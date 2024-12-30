// components/DeepLinkHandler.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface DeepLinkHandlerProps {
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

export const DeepLinkHandler: React.FC<DeepLinkHandlerProps> = ({
  appScheme,
  storeUrls,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (!isMobile()) {
      return undefined; // Explicit return for non-mobile case
    }

    const path = router.asPath.startsWith('/')
      ? router.asPath.slice(1)
      : router.asPath;
    const appUrl = `${appScheme}://${path}`;

    // Try opening app first
    window.location.href = appUrl;

    // If app doesn't open, redirect to store after delay
    const timeoutId = setTimeout(() => {
      const isAndroid = /Android/i.test(navigator.userAgent);
      window.location.href = isAndroid ? storeUrls.android : storeUrls.ios;
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [router.asPath, appScheme, storeUrls]);

  return null;
};
