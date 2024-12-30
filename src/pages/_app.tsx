import '../styles/global.css';

import type { AppProps } from 'next/app';

import { DeepLinkHandler } from '../components/DeepLinkHandler';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <DeepLinkHandler
      appScheme="plantative"
      storeUrls={{
        android: 'https://slverpla.github.io/', // Replace with your Android app URL
        ios: 'https://slverpla.github.io/', // Replace with your iOS app URL
      }}
      excludedPaths={['/', '/get-plantative']}
    />
    <Component {...pageProps} />
  </>
);

export default MyApp;
