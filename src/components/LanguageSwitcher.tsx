import Link from 'next/link';
import { useRouter } from 'next/router';

interface LanguageSwitcherProps {
  className?: string; // Allow custom className to be passed
}

export const LanguageSwitcher = ({ className = '' }: LanguageSwitcherProps) => {
  const router = useRouter();
  const currentPath = router.asPath;

  const englishPath = currentPath.startsWith('/nl')
    ? currentPath.slice(3)
    : currentPath;
  const dutchPath = currentPath.startsWith('/nl')
    ? currentPath
    : `/nl${currentPath}`;

  return (
    <div className={`text-sm ${className}`}>
      <Link
        href={englishPath}
        className={`px-2 py-1 ${currentPath === englishPath ? ' text-gray-700' : 'text-gray-400 hover:text-gray-900'}`}
      >
        EN
      </Link>
      <span className="text-gray-700">|</span>
      <Link
        href={dutchPath}
        className={`px-2 py-1 ${currentPath === dutchPath ? ' text-gray-700' : 'text-gray-400 hover:text-gray-900'}`}
      >
        NL
      </Link>
    </div>
  );
};
