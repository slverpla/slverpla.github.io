import Custom404 from '@/components/DeepLinkHandler';

export default function NotFound() {
  return (
    <Custom404
      appScheme="plantative"
      storeUrls={{
        android: 'https://plantative.com/get-plantative/', // Replace with Android app URL
        ios: 'https://plantative.com/get-plantative/', // Replace with iOS app URL
      }}
    />
  );
}
