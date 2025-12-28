import type { ReactNode } from 'react';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}

    <nav>
      <ul className="navbar mt-5 flex flex-row flex-wrap justify-center gap-8 text-xl font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>

    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    <div className="mt-4 flex items-center justify-center">
      <LanguageSwitcher />
    </div>

    <div className="mt-4 text-sm">
      <FooterCopyright />
    </div>
  </div>
);

export { CenteredFooter };
