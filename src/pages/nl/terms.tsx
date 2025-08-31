import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import TermsOfServiceNL from '@/templates/TermsSectionNL';
import { translations } from '@/utils/translations';

const TermsOfServicePageNL = () => {
  const t = translations.nl;
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={t.seo.terms.title} description={t.seo.terms.description} />
      <Header language="nl" />
      <TermsOfServiceNL />
      <Footer language="nl" />
    </div>
  );
};
export default TermsOfServicePageNL;
