import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import PrivacyPolicyNL from '@/templates/PrivacyPolicyNL';
import { AppConfig } from '@/utils/AppConfig';

const PrivacyPolicyPageNL = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header language="nl" />
    <PrivacyPolicyNL />
    <Footer language="nl" />
  </div>
);

export default PrivacyPolicyPageNL;
