import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const GetAppHeader = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo xl />}>
      <div className="pr-0 md:pr-8">
        <ul className="flex items-center space-x-8">
          <li className="hidden md:block">
            <Link href="/">Home</Link>
          </li>
          <li className="hidden md:block">
            <Link href="/get-plantative" className="underline">
              Get the App
            </Link>
          </li>
        </ul>
      </div>
    </NavbarTwoColumns>
  </Section>
);

export { GetAppHeader };
