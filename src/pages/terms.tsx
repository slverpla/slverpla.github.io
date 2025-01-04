import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { GetAppHeader } from '../templates/GetAppHeader';
import { Header } from '../templates/Header';
import { AppConfig } from '../utils/AppConfig';

const TermsOfServicePage = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <GetAppHeader />
    <Header />
    <Footer />
  </div>
);

export default TermsOfServicePage;
