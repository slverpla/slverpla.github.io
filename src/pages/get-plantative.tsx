import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { GetAppHeader } from '../templates/GetAppHeader';
import { DownloadSection } from '../templates/GetAppSection';
import { AppConfig } from '../utils/AppConfig';

const GetTheApp = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <GetAppHeader />
    <DownloadSection />
    <Footer />
  </div>
);

export default GetTheApp;
