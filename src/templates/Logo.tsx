import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  xxl?: boolean;
  responsive?: boolean;
};

const LogoWithText = (props: ILogoProps) => {
  if (props.xl) {
    return (
      <span
        className="inline-flex items-center text-xl font-semibold sm:text-2xl md:text-3xl"
        style={{ color: '#1c5f3e' }}
      >
        <img
          src="/assets/images/logo.png"
          alt={`${AppConfig.site_name} logo`}
          width="54"
          height="54"
          className="-mr-1.5 w-10 sm:w-12 md:w-[54px]"
        />
        <span className="-ml-0.5 translate-y-1 sm:-ml-1">
          {AppConfig.logo_text}
        </span>
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center text-lg font-semibold sm:text-xl"
      style={{ color: '#1c5f3e' }}
    >
      <img
        src="/assets/images/logo.png"
        alt={`${AppConfig.site_name} logo`}
        width="34"
        height="34"
        className="-mr-0.5 w-7 sm:w-[34px]"
      />
      <span className="-ml-1 translate-y-1">{AppConfig.logo_text}</span>
    </span>
  );
};

const Logo = (props: ILogoProps) => {
  if (props.responsive) {
    return (
      <span className="inline-flex items-center">
        <img
          src="/assets/images/logo.png"
          alt={`${AppConfig.site_name} logo`}
          className="w-[88px] md:w-32"
        />
      </span>
    );
  }
  if (props.xxl) {
    return (
      <span className="inline-flex items-center">
        <img
          src="/assets/images/logo.png"
          alt={`${AppConfig.site_name} logo`}
          width="120"
          height="120"
        />
      </span>
    );
  }
  if (props.xl) {
    return (
      <span className="inline-flex items-center">
        <img
          src="/assets/images/logo.png"
          alt={`${AppConfig.site_name} logo`}
          width="88"
          height="88"
        />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center">
      <img
        src="/assets/images/logo.png"
        alt={`${AppConfig.site_name} logo`}
        width="34"
        height="34"
      />
    </span>
  );
};

export { Logo, LogoWithText };
