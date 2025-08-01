import type { ReactNode } from 'react';

type IBackgroundSectionProps = {
  children: ReactNode;
  yPadding?: string;
};

const BackgroundSection = (props: IBackgroundSectionProps) => (
  <div className={`bg-white ${props.yPadding ? props.yPadding : 'py-16'}`}>
    <div className="mx-auto max-w-screen-lg px-3">{props.children}</div>
  </div>
);

export { BackgroundSection };
