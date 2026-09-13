import { Meta } from '@/layout/Meta';
import BuyPlants from '@/templates/BuyPlants';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import { translations } from '@/utils/translations';

const BuyPlantsPage = () => {
  const t = translations.en;
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={t.seo.buyPlants.title}
        description={t.seo.buyPlants.description}
        canonical="https://plantative.com/buy-plants/"
      />
      <Header />
      <BuyPlants />
      <Footer />
    </div>
  );
};

export default BuyPlantsPage;
