import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import SellPlants from '@/templates/SellPlants';
import { translations } from '@/utils/translations';

const SellPlantsPage = () => {
  const t = translations.en;
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={t.seo.sellPlants.title}
        description={t.seo.sellPlants.description}
        canonical="https://plantative.com/sell-plants/"
      />
      <Header />
      <SellPlants />
      <Footer />
    </div>
  );
};

export default SellPlantsPage;
