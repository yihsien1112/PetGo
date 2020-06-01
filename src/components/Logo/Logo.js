import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MobileLogoImage from './petgo-logo-mobile.png';
import DesktopLogoImage from './petgo-logo-small.png'
import css from './Logo.css';

const Logo = props => {
  const { className, format, ...rest } = props;
  const isMobile = format !== 'desktop';
  const classes = classNames(className, { [css.logoMobile]: isMobile});
  const logoImage = isMobile ? MobileLogoImage : DesktopLogoImage;

  // If you want to use image instead of svg as a logo you can use the following code.
  // Also, remember to import the image as LogoImage here.
  // <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />

  return (
    <img
      className={classes}
      src={logoImage}
      alt={''}
      {...rest}
    />
  );
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
