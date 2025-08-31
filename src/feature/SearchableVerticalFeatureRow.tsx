import className from 'classnames';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { Button } from '@/button/Button';
import type { Language } from '@/utils/translations';
import { translations } from '@/utils/translations';

type ISearchableVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  language: Language;
  reverse?: boolean;
  removeMarginTop?: boolean;
};

const SearchableVerticalFeatureRow = (
  props: ISearchableVerticalFeatureRowProps,
) => {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const verticalFeatureClass = className(
    { 'mt-20': !props.removeMarginTop },
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const handleSearch = () => {
    if (searchText.trim()) {
      const params = new URLSearchParams();
      params.set('q', searchText.trim());
      router.push(
        `${props.language === 'en' ? '' : '/nl'}/marketplace?${params.toString()}`,
      );
    }
  };

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h2 className="text-3xl font-semibold text-gray-900">{props.title}</h2>
        <p
          className={`mt-5 text-base leading-7 text-gray-600 md:mt-6 md:text-xl md:leading-9`}
        >
          {props.description}
        </p>

        <div className="mx-auto mt-6 max-w-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg
                  className="size-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="What are you looking for?"
                className="block w-full rounded-full border-0 bg-white py-2.5 pl-11 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
              {searchText && (
                <button
                  type="button"
                  onClick={() => setSearchText('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#1c5f3e] transition-colors hover:text-[#144a31]"
                >
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              )}
            </div>

            <div className="mt-6">
              <Button outline size="md" onClick={handleSearch}>
                {translations[props.language].features.search.searchButton}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <div className="group relative">
          <div className="mx-auto max-w-sm">
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

export { SearchableVerticalFeatureRow };
