import { Meta } from '@/layout/Meta';
import BuyPlantsNL from '@/templates/BuyPlantsNL';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import { translations } from '@/utils/translations';

const BuyPlantsPage = () => {
  const t = translations.nl;
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={t.seo.buyPlants.title}
        description={t.seo.buyPlants.description}
        canonical="https://plantative.com/nl/buy-plants/"
      />
      <Header language="nl" />
      <BuyPlantsNL />
      <Footer language="nl" />
    </div>
  );
};

export default BuyPlantsPage;
