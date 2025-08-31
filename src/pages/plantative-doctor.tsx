import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import PlantativeDoctor from '../templates/PlantativeDoctor';
import { translations } from '../utils/translations';

const PlantativeDoctorPage = () => {
  const t = translations.en;
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={t.seo.plantDoctor.title}
        description={t.seo.plantDoctor.description}
      />
      <Header />
      <PlantativeDoctor />
      <Footer />
    </div>
  );
};

export default PlantativeDoctorPage;
