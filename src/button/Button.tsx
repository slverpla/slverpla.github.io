import classNames from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';

type IButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  outline?: boolean;
  onClick?: () => void;
};

const Button = (props: IButtonProps) => {
  const { size = 'sm', outline, children, onClick } = props;

  const sizeStyles = {
    sm: 'text-base font-semibold py-1.5 px-3 md:text-lg md:py-2 md:px-4',
    md: 'text-lg font-semibold py-2 px-6',
    lg: 'text-xl font-extrabold py-4 px-6',
  };

  const btnClass = classNames(
    'inline-block',
    'rounded-2xl',
    'text-center',
    'border-2',
    sizeStyles[size],
    outline
      ? 'border-[#1c5f3e] bg-transparent text-[#1c5f3e] hover:bg-[#1c5f3e] hover:text-white'
      : 'border-transparent bg-[#1c5f3e] text-white hover:bg-[#256545]',
  );

  return (
    <button type="button" className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
