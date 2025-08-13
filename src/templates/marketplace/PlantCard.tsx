import Image from 'next/image';
import { useEffect, useState } from 'react';

import { getOptimizedImageUrl, ImageSize } from '@/utils/imageOptimizer';
import type { Language } from '@/utils/translations';

interface Plant {
  id: string;
  title: string;
  description: string;
  price: number | null;
  thumbnailUrl: string; // Base path, e.g., 'plants/plantId/'
}

const PlantCard = ({
  plant,
  language,
  router,
}: {
  plant: Plant;
  language: Language;
  router: any;
}) => {
  const [optimizedUrl, setOptimizedUrl] = useState<string>(
    // Transparent placeholder
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  );
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchImageUrl = async () => {
      if (imageError) return;

      try {
        const url = await getOptimizedImageUrl(
          plant.thumbnailUrl,
          ImageSize.MEDIUM,
        );
        if (isMounted) {
          setOptimizedUrl(url);
        }
      } catch (err) {
        if (isMounted) {
          setImageError(true);
        }
      }
    };

    fetchImageUrl();

    return () => {
      isMounted = false;
    };
  }, [plant.thumbnailUrl, imageError]);

  const handleCardClick = () => {
    const basePath = language === 'en' ? '' : '/nl/';
    router.push(`${basePath}/get-plantative`);
  };

  const finalImageUrl = imageError
    ? `https://placehold.co/600x400/e2e8f0/e2e8f0?text=Image`
    : optimizedUrl;

  return (
    <div
      className="min-w-56 max-w-60 cursor-pointer rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      onClick={handleCardClick}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      role="button"
      tabIndex={0}
    >
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image
          src={finalImageUrl}
          alt={plant.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          onError={() => setImageError(true)}
          unoptimized={imageError}
        />
        <div className="absolute right-2 top-2 rounded-full bg-white/80 p-2 backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="truncate text-lg font-bold text-gray-800">
          {plant.title}
        </h3>
        <p className="mt-1 truncate text-sm text-gray-600">
          {plant.description}
        </p>
        <p className="mt-2 text-lg font-semibold text-green-600">
          {plant.price !== null && plant.price > 0
            ? `€${plant.price.toFixed(2)}`
            : ''}
        </p>
      </div>
    </div>
  );
};

export default PlantCard;
export type { Plant };
