import classNames from 'classnames';
import React from 'react';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = classNames(
    // Base button styles
    'inline-block rounded-md text-center text-white',
    // Background colors
    'bg-[#288658] hover:bg-[#24784f]',
    // Size variations
    props.xl
      ? 'text-xl font-extrabold py-4 px-6' // XL size
      : 'text-lg font-semibold py-2 px-4', // Base size
  );

  return <div className={btnClass}>{props.children}</div>;
};

export { Button };
