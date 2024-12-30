import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  xxl?: boolean;
};

const LogoWithText = (props: ILogoProps) => {
  if (props.xl) {
    return (
      <span
        className="inline-flex items-center text-3xl font-semibold"
        style={{ color: '#1c5f3e' }}
      >
        <img
          src="/assets/images/logo.png"
          alt={`${AppConfig.site_name} logo`}
          width="54"
          height="54"
          className="-mr-1.5"
        />
        <span className="-ml-1 translate-y-1">{AppConfig.logo_text}</span>
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center text-xl font-semibold"
      style={{ color: '#1c5f3e' }}
    >
      <img
        src="/assets/images/logo.png"
        alt={`${AppConfig.site_name} logo`}
        width="34"
        height="34"
        className="-mr-0.5"
      />
      <span className="-ml-1 translate-y-1">{AppConfig.logo_text}</span>
    </span>
  );
};

const Logo = (props: ILogoProps) => {
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
          width="54"
          height="54"
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
