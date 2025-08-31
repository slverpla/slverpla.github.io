import { Meta } from '@/layout/Meta';
import AboutUsNL from '@/templates/AboutUsNL';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import { translations } from '@/utils/translations';

const AboutUsPage = () => {
  const t = translations.nl;
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={t.seo.about.title} description={t.seo.about.description} />
      <Header language="nl" />
      <AboutUsNL />
      <Footer language="nl" />
    </div>
  );
};
export default AboutUsPage;
