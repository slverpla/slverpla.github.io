import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import TermsOfServiceNL from '@/templates/TermsSectionNL';
import { AppConfig } from '@/utils/AppConfig';

const TermsOfServicePageNL = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header language="nl" />
    <TermsOfServiceNL />
    <Footer language="nl" />
  </div>
);

export default TermsOfServicePageNL;
