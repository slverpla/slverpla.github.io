import { Meta } from '../layout/Meta';
import AboutUs from '../templates/AboutUs';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { translations } from '../utils/translations';

const AboutUsPage = () => {
  const t = translations.en;
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={t.seo.about.title} description={t.seo.about.description} />
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
