import '../styles/global.css';

import type { AppProps } from 'next/app';

import { LanguageProvider } from '../context/LanguageContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <LanguageProvider>
    <Component {...pageProps} />
  </LanguageProvider>
);

export default MyApp;
