import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import PlantativeDoctorNL from '@/templates/PlantativeDoctorNL';
import { AppConfig } from '@/utils/AppConfig';

const PlantativeDoctorPage = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <PlantativeDoctorNL />
    <Footer />
  </div>
);

export default PlantativeDoctorPage;
