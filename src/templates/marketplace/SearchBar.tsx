import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import type { Language } from '@/utils/translations';
import { translations } from '@/utils/translations';

// Utility function for conditional class names
const className = (...args: any[]) => {
  return args
    .filter(Boolean)
    .map((arg) => {
      if (typeof arg === 'string') return arg;
      if (typeof arg === 'object') {
        return Object.entries(arg)
          .filter(([, condition]) => condition)
          .map(([cls]) => cls)
          .join(' ');
      }
      return '';
    })
    .join(' ');
};

const searchCategoryData = [
  {
    id: '0',
    nameKey: 'plants',
    image: '/assets/images/search_categories/plants.png',
  },
  {
    id: '1',
    nameKey: 'seeds',
    image: '/assets/images/search_categories/seeds.png',
  },
  {
    id: '2',
    nameKey: 'produce',
    image: '/assets/images/search_categories/produce.png',
  },
  {
    id: '3',
    nameKey: 'tools',
    image: '/assets/images/search_categories/tools.jpg',
  },
  {
    id: '4',
    nameKey: 'grandGreens',
    image: '/assets/images/search_categories/grand_greens.png',
  },
  {
    id: '5',
    nameKey: 'sprouts',
    image: '/assets/images/search_categories/sprouts.png',
  },
  {
    id: '6',
    nameKey: 'gardener',
    image: '/assets/images/search_categories/gardener.png',
  },
  {
    id: '7',
    nameKey: 'homeLover',
    image: '/assets/images/search_categories/home_lover.png',
  },
  {
    id: '8',
    nameKey: 'pennyPincher',
    image: '/assets/images/search_categories/penny_pincher.png',
  },
  {
    id: '9',
    nameKey: 'lowLight',
    image: '/assets/images/search_categories/shadow_planter.png',
  },
  {
    id: '10',
    nameKey: 'casualGreenThumb',
    image: '/assets/images/search_categories/casual_green_thumb.png',
  },
  {
    id: '11',
    nameKey: 'surprise',
    image: '/assets/images/search_categories/surprise_me.png',
  },
  {
    id: '12',
    nameKey: 'flowerFanatic',
    image: '/assets/images/search_categories/flower_fanatic.png',
  },
  {
    id: '13',
    nameKey: 'packAndSend',
    image: '/assets/images/search_categories/pack_&_send.png',
  },
];

interface Category {
  id: string;
  nameKey: string;
  image: string;
  name: string;
}

interface CategoryTileProps {
  category: Category;
  isSelected: boolean;
  onSelect: () => void;
}

const CategoryTile: React.FC<CategoryTileProps> = ({
  category,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className={className(
        'relative cursor-pointer rounded-2xl transition-all duration-200',
        'h-[5.5rem] min-w-40 max-w-44 flex-shrink-0 overflow-hidden',
        {
          'bg-gray-100 border border-[#1c5f3e]': isSelected,
          'border-transparent bg-white': !isSelected,
        },
      )}
      style={{
        boxShadow: isSelected
          ? '0 0 12px rgba(0, 0, 0, 0.25)'
          : '0 0 8px rgba(0, 0, 0, 0.20)',
        transition: 'all 0.2s ease-in-out',
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.15)';
        }
      }}
    >
      <div className="relative flex h-full flex-col justify-between p-3">
        <div className="relative z-10">
          <h4
            className={className(
              'text-base font-semibold leading-tight text-left whitespace-pre-line',
              {
                'text-gray-800': isSelected,
                'text-gray-900': !isSelected,
              },
            )}
          >
            {category.name}
          </h4>
        </div>
        <div
          className="absolute -bottom-8 right-0 h-16 w-28 origin-bottom-right rotate-[18deg] rounded-lg"
          style={{
            backgroundImage: `url(${category.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'rotate(18deg)',
          }}
        />
      </div>
    </div>
  );
};

interface SearchBarProps {
  language?: Language;
  searchQuery?: string;
  category?: number;
}

const SearchBar = ({
  language = 'en',
  searchQuery,
  category,
}: SearchBarProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const [searchText, setSearchText] = useState('');
  const [dropdownHeight, setDropdownHeight] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { searchBar, searchCategories: tCat } = translations[language];

  const searchCategories = useMemo(() => {
    return searchCategoryData.map((cat) => ({
      ...cat,
      name: tCat[cat.nameKey as keyof typeof tCat],
    }));
  }, [tCat]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    const trimmedSearchText = searchText.trim();

    if (trimmedSearchText) {
      params.set('q', trimmedSearchText);
    }

    if (selectedCategoryId) {
      const categoryObject = searchCategories.find(
        (c) => c.id === selectedCategoryId,
      );
      if (categoryObject) {
        params.set('category', categoryObject.id);
      }
    }

    if (params.toString()) {
      router.push(
        `${language === 'en' ? '' : '/nl'}/search?${params.toString()}`,
      );
    } else {
      router.push(`${language === 'en' ? '' : '/nl'}/search`);
    }
  };

  useEffect(() => {
    if (category !== undefined && searchCategories[category]) {
      setSelectedCategoryId(searchCategories[category]?.id!);
    } else {
      setSelectedCategoryId(null);
    }
  }, [category, searchCategories]);

  useEffect(() => {
    setSearchText(searchQuery || '');
  }, [searchQuery]);

  const handleCategorySelect = (categoryId: string) => {
    // Toggle selection - if same category is clicked, deselect it
    if (selectedCategoryId === categoryId) {
      setSelectedCategoryId(null);
    } else {
      setSelectedCategoryId(categoryId);
    }
    setDropdownOpen(false);
  };

  // Calculate dropdown height based on grid content
  useEffect(() => {
    if (isDropdownOpen && gridRef.current) {
      // Add some delay to ensure grid is rendered
      const timeout = setTimeout(() => {
        if (gridRef.current) {
          const gridHeight = gridRef.current.scrollHeight;
          const padding = 48; // 24px top + 24px bottom (p-6 = 1.5rem = 24px)
          setDropdownHeight(gridHeight + padding);
        }
      }, 10);

      return () => clearTimeout(timeout);
    }

    return () => {}; // Return cleanup function for all code paths
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const selectedCategoryName =
    searchCategories.find((c) => c.id === selectedCategoryId)?.name || null;

  return (
    <div className="flex justify-center px-0 py-4 font-sans sm:p-10">
      <div ref={dropdownRef} className="relative w-full max-w-[50rem]">
        <div className="flex items-center rounded-full border border-gray-200 bg-white p-2 shadow-lg">
          <div
            className="w-1/3 cursor-pointer rounded-full px-4 py-2 transition-colors hover:bg-gray-100"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <p className="hidden text-xs font-bold sm:block">
              {searchBar.categories}
            </p>
            <p
              className={className('truncate text-sm sm:hidden', {
                'text-gray-900': selectedCategoryName,
                'text-gray-500': !selectedCategoryName,
              })}
            >
              {selectedCategoryName || searchBar.categories}
            </p>
            <p
              className={className('hidden truncate text-sm sm:block', {
                'text-gray-900': selectedCategoryName,
                'text-gray-500': !selectedCategoryName,
              })}
            >
              {selectedCategoryName || searchBar.categoryFilter}
            </p>
          </div>
          <div className="h-10 border-l border-gray-200" />
          <div className="flex-1 px-4 py-2">
            <p className="hidden text-xs font-bold sm:block">
              {searchBar.what}
            </p>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder={searchBar.placeholder}
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
          </div>
          <button
            type="button"
            className="text-grey-300 ml-2 flex size-12 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-gray-200 focus:outline-none"
            aria-label={searchBar.ariaLabel}
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {isDropdownOpen && (
          <div
            className="absolute top-full z-10 mt-3 w-full overflow-hidden rounded-3xl bg-white shadow-xl"
            style={{
              height: dropdownHeight > 0 ? `${dropdownHeight}px` : 'auto',
              maxHeight: '24rem', // Keep max height as fallback
            }}
          >
            <div className="h-full overflow-y-auto p-6">
              <div
                ref={gridRef}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              >
                {searchCategories.map((cat) => (
                  <CategoryTile
                    key={cat.id}
                    category={cat}
                    isSelected={selectedCategoryId === cat.id}
                    onSelect={() => handleCategorySelect(cat.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
