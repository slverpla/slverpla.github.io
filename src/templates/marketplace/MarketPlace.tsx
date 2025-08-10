import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { BackgroundSection } from '@/layout/BackgroundSection';
import { Section } from '@/layout/Section';
import type { Language } from '@/utils/translations';
import { translations } from '@/utils/translations';

import { fetchPlantsFromFirestore } from './fetchplants';
import type { Plant } from './PlantCard';
import PlantCard from './PlantCard';
import SearchBar from './SearchBar';

interface MarketplaceProps {
  language?: Language;
  searchQuery?: string;
  category?: number;
}

const Marketplace = ({
  language = 'en',
  searchQuery,
  category,
}: MarketplaceProps) => {
  const t = translations[language];
  const router = useRouter();
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true);
      try {
        const newplants = await fetchPlantsFromFirestore({
          searchQuery,
          category,
          limitCount: 10,
        });
        setPlants(newplants.plants);
      } catch (error) {
        // console.error('Error fetching plants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, [searchQuery, category]);

  return (
    <>
      <div className="-mt-10 text-center">
        <h1 className="hidden text-4xl font-bold text-black sm:block">
          {t.marketplace.title}
        </h1>
      </div>

      <div className="mx-auto items-center px-4">
        <SearchBar
          language={language}
          searchQuery={searchQuery}
          category={category}
        />
      </div>
      <BackgroundSection yPadding="pb-16">
        <Section description={t.marketplace.description} yPadding="py-8">
          {loading && <p className="text-center">{t.marketplace.loading}</p>}
          {!loading && plants.length === 0 && (
            <p className="text-center">{t.marketplace.noPlants}</p>
          )}
          <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {plants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                language={language}
                router={router}
              />
            ))}
          </div>
        </Section>
      </BackgroundSection>
    </>
  );
};

export default Marketplace;
