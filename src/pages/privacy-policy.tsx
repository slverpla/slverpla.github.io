import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import PrivacyPolicy from '../templates/PrivacyPolicy';
import { AppConfig } from '../utils/AppConfig';

const PrivacyPolicyPage = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <PrivacyPolicy />
    <Footer />
  </div>
);

export default PrivacyPolicyPage;
