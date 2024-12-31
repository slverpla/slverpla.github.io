import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

interface DeepLinkHandlerProps {
  appScheme: string;
  storeUrls: {
    android: string;
    ios: string;
  };
  excludedPaths?: string[];
  allowedPaths?: string[];
}

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

const DebugOverlay: React.FC<{
  step: string;
  details: string;
  visible: boolean;
}> = ({ step, details, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed right-4 top-4 z-50 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
      <div className="mb-2 text-lg font-bold text-gray-800">
        Debug Step: {step}
      </div>
      <div className="text-gray-600">{details}</div>
    </div>
  );
};

export const DeepLinkHandler: React.FC<DeepLinkHandlerProps> = ({
  appScheme,
  storeUrls,
  excludedPaths = [],
  allowedPaths,
}) => {
  const router = useRouter();
  const hasAttemptedRedirect = useRef(false);
  const [debugState, setDebugState] = useState<{
    step: string;
    details: string;
    showModal: boolean;
  }>({
    step: '',
    details: '',
    showModal: false,
  });

  const showDebugModal = async (step: string, details: string) => {
    setDebugState({
      step,
      details,
      showModal: true,
    });
    await sleep(10000); // Show each debug message for 10 seconds
    setDebugState((prev) => ({ ...prev, showModal: false }));
  };

  useEffect(() => {
    const handleDeepLink = async () => {
      // Check if we have a path
      if (!router.asPath) {
        await showDebugModal('Path Check', 'No path available, exiting');
        return;
      }

      // Check current path
      const currentPath = router.asPath?.split('?')[0] ?? '';
      await showDebugModal('Current Path', `Processing path: ${currentPath}`);

      // Check excluded paths
      if (excludedPaths.some((path) => currentPath.startsWith(path))) {
        await showDebugModal(
          'Excluded Path',
          `Path ${currentPath} is excluded, exiting`,
        );
        return;
      }

      // Check allowed paths
      if (
        allowedPaths &&
        !allowedPaths.some((path) => currentPath.startsWith(path))
      ) {
        await showDebugModal(
          'Allowed Path',
          `Path ${currentPath} is not in allowed paths, exiting`,
        );
        return;
      }

      // Check mobile and redirect attempt
      if (!isMobile()) {
        await showDebugModal('Device Check', 'Not a mobile device, exiting');
        return;
      }

      if (hasAttemptedRedirect.current) {
        await showDebugModal(
          'Redirect Check',
          'Already attempted redirect, exiting',
        );
        return;
      }

      hasAttemptedRedirect.current = true;

      // Get full URL and create app URL
      const fullUrl = typeof window !== 'undefined' ? window.location.href : '';
      const appUrl = fullUrl.replace('https://', `${appScheme}://`);
      await showDebugModal('URL Creation', `Created app URL: ${appUrl}`);

      // Create and append iframe
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = appUrl;
      document.body.appendChild(iframe);
      await showDebugModal(
        'iframe Created',
        'Added hidden iframe for deep linking',
      );

      // Handle store redirect
      const isAndroid = /Android/i.test(navigator.userAgent);
      const storeUrl = isAndroid ? storeUrls.android : storeUrls.ios;
      await showDebugModal(
        'Store Redirect',
        `Will redirect to store: ${storeUrl} in 1 second if app not opened`,
      );

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

      // Register cleanup
      window.addEventListener('beforeunload', cleanup);

      // Return void instead of cleanup function
    };

    handleDeepLink();
  }, [router.asPath, appScheme, storeUrls, excludedPaths, allowedPaths]);

  return (
    <DebugOverlay
      step={debugState.step}
      details={debugState.details}
      visible={debugState.showModal}
    />
  );
};
