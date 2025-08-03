import { Meta } from '@/layout/Meta';
import AboutUsNL from '@/templates/AboutUsNL';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import { AppConfig } from '@/utils/AppConfig';

const AboutUsPage = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header language="nl" />
    <AboutUsNL />
    <Footer language="nl" />
  </div>
);

export default AboutUsPage;
