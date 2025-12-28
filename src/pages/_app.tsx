import '../styles/global.css';

import type { AppProps } from 'next/app';
import Snowfall from 'react-snowfall';

import { LanguageProvider } from '../context/LanguageContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <LanguageProvider>
    <Snowfall />
    <Component {...pageProps} />
  </LanguageProvider>
);

export default MyApp;
