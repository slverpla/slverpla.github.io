import Link from 'next/link';

import { Button } from '../button/Button';

const HeroOneButton = () => (
  <header className="text-center">
    <h1 className="-mt-16 text-5xl font-bold leading-none text-gray-900 md:mt-0">
      <div>Trade and share plants with</div>
      <div>Plantative</div>
    </h1>

    <div className="mb-16 mt-4 text-2xl">
      Connect with local plant enthusiasts, trade cuttings, and grow your plants
      with ease.
    </div>

    <Link href="/get-plantative">
      <Button xl>Download The App Now</Button>
    </Link>
  </header>
);

export { HeroOneButton };
