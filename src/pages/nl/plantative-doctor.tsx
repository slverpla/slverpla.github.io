import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
import PlantativeDoctorNL from '@/templates/PlantativeDoctorNL';
import { translations } from '@/utils/translations';

const PlantativeDoctorPage = () => {
  const t = translations.nl;
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={t.seo.plantDoctor.title}
        description={t.seo.plantDoctor.description}
      />
      <Header language="nl" />
      <PlantativeDoctorNL />
      <Footer language="nl" />
    </div>
  );
};

export default PlantativeDoctorPage;
