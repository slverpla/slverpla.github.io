import Link from 'next/link';

import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { LogoWithText } from './Logo';

const HomeHeader = () => (
  <>
    {/* <Background color="bg-gray-100"> */}
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<LogoWithText xl />}>
        <div className="pr-8">
          <ul className="flex items-center space-x-8">
            <li className="hidden md:block">
              <Link href="/" className="underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/get-plantative">Get the App</Link>
            </li>
          </ul>
        </div>
      </NavbarTwoColumns>
    </Section>
    {/* </Background> */}
    <Section yPadding="pt-20 pb-8">
      <HeroOneButton />
    </Section>
  </>
);

export { HomeHeader };
