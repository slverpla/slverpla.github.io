import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import TermsOfService from '../templates/TermsSection';
import { AppConfig } from '../utils/AppConfig';

const TermsOfServicePage = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <TermsOfService />
    <Footer />
  </div>
);

export default TermsOfServicePage;
