import { Meta } from '../layout/Meta';
import AboutUs from '../templates/AboutUs';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { AppConfig } from '../utils/AppConfig';

const AboutUsPage = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <AboutUs />
    <Footer />
  </div>
);

export default AboutUsPage;
