import LogoNuevo from './Images/Logo.svg';

function Logo({ theme, ...props }) {
  const themes = {
    dark: LogoNuevo,
    light: LogoNuevo,
    grey: LogoNuevo,
  };

  const src = themes[theme] || themes.dark;
  return <img src={src} alt="MarketAllocator" {...props} />;
}

export default Logo;
