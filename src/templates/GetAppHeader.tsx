import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { LogoWithText } from './Logo';

const GetAppHeader = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<LogoWithText xl />}>
      <div className="pr-2 md:pr-8">
        <ul className="flex items-center space-x-8">
          <li>
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
