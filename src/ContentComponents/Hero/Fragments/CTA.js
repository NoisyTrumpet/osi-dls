import React from 'react';
import PropTypes from 'prop-types';
import { TextLink } from '../../../components/TextLink';

const CTA = ({ text, textColor, link, color, style }) => {
  if (style === 'text-link') {
    return (
      <TextLink
        addClass="cta2"
        to={link}
        title={text}
        color={textColor}
        typoVariant={style}
      />
    );
  }

  return (
    <TextLink
      addClass={`ctaButton btn btn-${style} background-color-${color}`}
      to={link}
      title={text}
      color={textColor}
      typoVariant="cta"
    />
  );
};

CTA.defaultProps = {};

CTA.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.string,
};

export default CTA;
