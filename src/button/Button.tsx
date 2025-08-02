import classNames from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';

type IButtonProps = {
  xl?: boolean;
  children: ReactNode;
  outline?: boolean;
  onClick?: () => void;
};

const Button = (props: IButtonProps) => {
  const btnClass = classNames(
    'inline-block',
    'rounded-2xl',
    'text-center',
    'border-2',
    {
      'text-xl font-extrabold py-4 px-6': props.xl,
      'text-lg font-semibold py-2 px-4': !props.xl,
    },
    props.outline
      ? 'border-[#1c5f3e] bg-transparent text-[#1c5f3e] hover:bg-[#1c5f3e] hover:text-white'
      : 'border-transparent bg-[#1c5f3e] text-white hover:bg-[#256545]',
  );

  return (
    <button type="button" className={btnClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export { Button };
