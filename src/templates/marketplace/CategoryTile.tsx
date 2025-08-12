import React from 'react';

import { className } from './utils';

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
        'relative cursor-pointer rounded-2xl transition-all duration-200 flex-shrink-0 overflow-hidden',
        // Smaller sizes for mobile, original sizes for sm+
        'h-[4.75rem] min-w-32 max-w-36 sm:h-[5.5rem] sm:min-w-40 sm:max-w-44',
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
      <div className="relative flex h-full flex-col justify-between p-2 sm:p-3">
        <div className="relative z-10">
          <h4
            className={className(
              'text-sm sm:text-base font-semibold leading-tight text-left whitespace-pre-line',
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
          className="absolute -bottom-6 right-0 h-14 w-24 origin-bottom-right rotate-[18deg] rounded-lg sm:-bottom-8 sm:h-16 sm:w-28"
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

export default CategoryTile;
