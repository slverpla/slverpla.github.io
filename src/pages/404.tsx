import Custom404 from '@/components/DeepLinkHandler';
import { AppConfig } from '@/utils/AppConfig';

export default function NotFound() {
  return (
    <Custom404
      appScheme="plantative"
      storeUrls={{
        android: AppConfig.storeUrls.android,
        ios: AppConfig.storeUrls.ios,
      }}
    />
  );
}
