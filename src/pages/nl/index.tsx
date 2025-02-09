import { Meta } from '../../layout/Meta';
import { Footer } from '../../templates/Footer';
import { HomeHeader } from '../../templates/HomeHeader';
import { VerticalFeatures } from '../../templates/VerticalFeatures';
import { AppConfig } from '../../utils/AppConfig';

const IndexNL = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <HomeHeader language="nl" />
    <VerticalFeatures language="nl" />
    <Footer language="nl" />
  </div>
);

export default IndexNL;
