import { useRouter } from 'next/router';
import { useEffect } from 'react';

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    if (!isMobile()) {
      router.replace('/');
    }
  }, [router]);

  return null;
}
