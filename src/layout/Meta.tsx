import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta
          name="google-site-verification"
          content="H99J8vU1McXIRfD010wFzNIRCa28-E8ptiAHpEjxm9o"
          key="google-verification"
        />
        <link
          rel="apple-touch-icon"
          href={`/assets/images/logo.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/assets/images/logo.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/assets/images/logo.png`}
          key="icon16"
        />
        <link rel="icon" href={`/assets/favicon.ico`} key="favicon" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
