import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Image } from '../Image';

const SubBranding = ({ pictureClass, ariaHidden, src, dataSrc, alt, addClass }) => {
  const classes = classNames(
    'sub-branding',
    addClass,
  );
  return (
    <Image
      pictureClass={pictureClass}
      ariaHidden={ariaHidden}
      src={src}
      dataSrc={dataSrc}
      alt={alt}
      className={classes}
    />
  );
};

SubBranding.defaultProps = {};

SubBranding.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dataSrc: PropTypes.string,
  addClass: PropTypes.string,
  pictureClass: PropTypes.string,
  ariaHidden: PropTypes.string,
};

export default SubBranding;
