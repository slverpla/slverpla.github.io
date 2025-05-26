import Image from 'next/image';
import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

import { Section } from '../layout/Section';
import { type Language, translations } from '../utils/translations';
import { ScrollFadeInSection } from './ScrollFadeIn';

interface DownloadSectionProps {
  language?: Language;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({
  language = 'en',
}) => {
  const t = translations[language];

  return (
    <ScrollFadeInSection>
      <Section>
        <div className="mx-auto -mt-8 flex max-w-6xl flex-col items-center justify-between px-4 pb-12 md:mt-0 md:flex-row">
          {/* Left Column */}
          <div className="mb-8 flex flex-col items-center space-y-6 md:mb-0 md:items-start">
            <h2 className="whitespace-pre-line text-center text-4xl font-bold leading-[1.1] text-gray-900 md:text-left md:text-6xl md:leading-hero">
              {t.download.title}
            </h2>
            <div className="flex flex-row gap-2 sm:gap-4">
              <Link
                href={AppConfig.storeUrls.ios}
                className="w-36 sm:w-40 md:w-44 lg:w-48"
              >
                <Image
                  src="/assets/images/appstore.png"
                  alt={t.download.appStoreAlt}
                  width={192}
                  height={56}
                  className="h-auto w-full"
                />
              </Link>
              <Link
                href={AppConfig.storeUrls.android}
                className="w-36 sm:w-40 md:w-44 lg:w-48"
              >
                <Image
                  src="/assets/images/googleplay.png"
                  alt={t.download.playStoreAlt}
                  width={192}
                  height={56}
                  className="h-auto w-full"
                />
              </Link>
            </div>
          </div>

          {/* Right Column - QR Code */}
          <div className="hidden md:block">
            <Image
              src="/assets/images/qr-code.png"
              alt={t.download.qrCodeAlt}
              width={1000}
              height={1000}
              className="size-60"
            />
          </div>
        </div>
      </Section>
    </ScrollFadeInSection>
  );
};

export { DownloadSection };
