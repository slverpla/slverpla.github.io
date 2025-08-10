import Link from 'next/link';
import type { ReactNode } from 'react';

import type { Language } from '@/utils/translations';

type INavbarProps = {
  language?: Language;
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <Link
        href={`${props.language === 'en' ? '' : '/nl'}/`}
        aria-label="Homepage"
      >
        {props.logo}
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center text-xl font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
