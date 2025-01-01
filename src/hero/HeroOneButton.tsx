import Link from 'next/link';

import { Button } from '../button/Button';

const HeroOneButton = () => (
  <header className="px-10 text-center">
    <h1 className="-mt-16 text-4xl font-bold leading-none text-gray-900 md:mt-0 md:text-5xl">
      <div>Trade and share plants with</div>
      <div>Plantative</div>
    </h1>

    <div className="text-1xl mb-16 mt-4 md:text-2xl">
      Connect with local plant enthusiasts, trade cuttings, and grow your plants
      with ease.
    </div>

    <Link href="/get-plantative">
      <Button xl>Download The App Now</Button>
    </Link>
  </header>
);

export { HeroOneButton };
