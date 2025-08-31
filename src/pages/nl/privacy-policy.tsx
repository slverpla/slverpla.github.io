import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import PrivacyPolicyNL from '@/templates/PrivacyPolicyNL';
import { translations } from '@/utils/translations';

const PrivacyPolicyPageNL = () => {
  const t = translations.nl;
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={t.seo.privacy.title}
        description={t.seo.privacy.description}
      />
      <Header language="nl" />
      <PrivacyPolicyNL />
      <Footer language="nl" />
    </div>
  );
};

export default PrivacyPolicyPageNL;
