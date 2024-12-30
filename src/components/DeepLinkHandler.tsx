// components/DeepLinkHandler.tsx
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

interface DeepLinkHandlerProps {
  appScheme: string;
  storeUrls: {
    android: string;
    ios: string;
  };
  excludedPaths?: string[];
  allowedPaths?: string[];
}

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

export const DeepLinkHandler: React.FC<DeepLinkHandlerProps> = ({
  appScheme,
  storeUrls,
  excludedPaths = [],
  allowedPaths,
}) => {
  const router = useRouter();
  const hasAttemptedRedirect = useRef(false);

  useEffect(() => {
    // Ensure we have a path to work with
    if (!router.asPath) {
      return undefined;
    }

    // Check if current path should be handled
    const currentPath = router.asPath.split('?')[0]; // Remove query params for matching

    // Skip if path is excluded
    if (excludedPaths.some((path) => currentPath!.startsWith(path))) {
      return undefined;
    }

    // Skip if we have allowedPaths and current path isn't in it
    if (
      allowedPaths &&
      !allowedPaths.some((path) => currentPath!.startsWith(path))
    ) {
      return undefined;
    }

    if (!isMobile() || hasAttemptedRedirect.current) {
      return undefined;
    }

    hasAttemptedRedirect.current = true;
    const path = router.asPath.startsWith('/')
      ? router.asPath.slice(1)
      : router.asPath;
    const isAndroid = /Android/i.test(navigator.userAgent);
    const appUrl = `${appScheme}://${path}`;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appUrl;
    document.body.appendChild(iframe);

    const timeoutId = setTimeout(() => {
      document.body.removeChild(iframe);
      window.location.href = isAndroid ? storeUrls.android : storeUrls.ios;
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    };
  }, [router.asPath, appScheme, storeUrls, excludedPaths, allowedPaths]);

  return null;
};
