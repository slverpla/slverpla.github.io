import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

interface Custom404Props {
  appScheme: string;
  storeUrls: {
    android: string;
    ios: string;
  };
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

export default function Custom404({ appScheme, storeUrls }: Custom404Props) {
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
      // If not mobile, redirect to home
      if (!isMobile()) {
        await showDebugModal(
          'Device Check',
          'Not a mobile device, redirecting to home',
        );
        router.replace('/');
        return;
      }

      // Check if we already attempted a redirect
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

      window.addEventListener('beforeunload', cleanup);
    };

    handleDeepLink();
  }, [router, appScheme, storeUrls]);

  return (
    <DebugOverlay
      step={debugState.step}
      details={debugState.details}
      visible={debugState.showModal}
    />
  );
}
