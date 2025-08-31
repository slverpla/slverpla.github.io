import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import PrivacyPolicy from '../templates/PrivacyPolicy';
import { translations } from '../utils/translations';

const PrivacyPolicyPage = () => {
  const t = translations.en;
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={t.seo.privacy.title}
        description={t.seo.privacy.description}
      />
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};
export default PrivacyPolicyPage;
