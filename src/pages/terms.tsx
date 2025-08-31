import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import TermsOfService from '../templates/TermsSection';
import { translations } from '../utils/translations';

const TermsOfServicePage = () => {
  const t = translations.en;
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={t.seo.terms.title} description={t.seo.terms.description} />
      <Header />
      <TermsOfService />
      <Footer />
    </div>
  );
};
export default TermsOfServicePage;
