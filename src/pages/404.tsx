import Custom404 from '@/components/DeepLinkHandler';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';
import { translations } from '@/utils/translations';

export default function NotFound() {
  const t = translations.en;
  return (
    <div>
      <Meta
        title={t.seo.notFound.title}
        description={t.seo.notFound.description}
      />
      <Custom404
        appScheme="plantative"
        storeUrls={{
          android: AppConfig.storeUrls.android,
          ios: AppConfig.storeUrls.ios,
        }}
      />
    </div>
  );
}
