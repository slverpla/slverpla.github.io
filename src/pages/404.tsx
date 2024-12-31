import Custom404 from '@/components/DeepLinkHandler';

export default function NotFound() {
  return (
    <Custom404
      appScheme="plantative"
      storeUrls={{
        android: 'https://slverpla.github.io/get-plantative/', // Replace with Android app URL
        ios: 'https://slverpla.github.io/get-plantative/', // Replace with iOS app URL
      }}
    />
  );
}
