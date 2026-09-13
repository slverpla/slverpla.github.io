import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import SellPlantsNL from '@/templates/SellPlantsNL';
import { translations } from '@/utils/translations';

const SellPlantsPage = () => {
  const t = translations.nl;
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={t.seo.sellPlants.title}
        description={t.seo.sellPlants.description}
        canonical="https://plantative.com/nl/sell-plants/"
      />
      <Header language="nl" />
      <SellPlantsNL />
      <Footer language="nl" />
    </div>
  );
};

export default SellPlantsPage;
