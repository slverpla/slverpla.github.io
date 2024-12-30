import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { HomeHeader } from '../templates/HomeHeader';
import { VerticalFeatures } from '../templates/VerticalFeatures';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <HomeHeader />
    <VerticalFeatures />
    <Footer />
  </div>
);

export default Index;
