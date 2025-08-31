import className from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';

import { Button } from '@/button/Button';
import type { Language } from '@/utils/translations';
import { translations } from '@/utils/translations';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  isClickable?: boolean;
  onClick?: () => void;
  removeMarginTop?: boolean;
  language: Language;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    { 'mt-20': !props.removeMarginTop },
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  const handleInteraction = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleInteraction();
    }
  };

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h2
          className={`text-3xl font-semibold text-gray-900`}
          onClick={handleInteraction}
          onKeyDown={handleKeyDown}
          role={props.onClick ? 'button' : undefined}
          tabIndex={props.onClick ? 0 : -1}
        >
          {props.title}
        </h2>
        <div
          className={`mt-5 text-base leading-7 md:mt-6 md:text-xl md:leading-9`}
          onClick={handleInteraction}
          onKeyDown={handleKeyDown}
          role={props.onClick ? 'button' : undefined}
          tabIndex={props.onClick ? 0 : -1}
        >
          {props.description}
        </div>
        <div className="mt-6 flex justify-center gap-4">
          {props.onClick && (
            <Button onClick={props.onClick}>
              {translations[props.language].features.buttons.moreInfo}
            </Button>
          )}
          <Button
            onClick={() => {
              router.push(
                `${props.language === 'en' ? '' : '/nl'}/get-plantative/`,
              );
            }}
            outline
          >
            {translations[props.language].features.buttons.tryNow}
          </Button>
        </div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <div
          className="group relative"
          onClick={handleInteraction}
          onKeyDown={handleKeyDown}
          role={props.onClick ? 'button' : undefined}
          tabIndex={props.onClick ? 0 : -1}
        >
          <div
            className={`mx-auto max-w-sm ${
              props.onClick ? 'cursor-pointer' : ''
            }`}
          >
            <img
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
              className="h-auto w-full"
              style={{
                maskImage:
                  'radial-gradient(circle at center, black 60%, transparent 65%)',
                WebkitMaskImage:
                  'radial-gradient(circle at center, black 60%, transparent 65%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
