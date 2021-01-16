import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Image } from '../Image';

const CulturalIndicator = ({ pictureClass, ariaHidden, src, dataSrc, alt, addClass }) => {
  const classes = classNames(
    'cultural-indicator',
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

CulturalIndicator.defaultProps = {};

CulturalIndicator.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dataSrc: PropTypes.string,
  addClass: PropTypes.string,
  pictureClass: PropTypes.string,
  ariaHidden: PropTypes.string,
};

export default CulturalIndicator;
