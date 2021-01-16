import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Typography } from '../../../components/Typography';

const Headline = ({ text1, text2, text3, color, state, headlineTag }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const variantValue = () => {
    if (isMobile) {
      return 'headline-4';
    }
    return 'headline-3';
  };
  return (
    <Typography
      variant={state ? 'body-medium' : variantValue()}
      addClass="typoOverride"
      htmlTagOverride={headlineTag}
      color={color}
    >
      {text1}
      {text2 && (
        <>
          <br /> {text2}
        </>
      )}
      {text3 && (
        <>
          <br /> {text3}
        </>
      )}
    </Typography>
  );
};

Headline.defaultProps = {
  text1: '',
  text2: '',
  text3: '',
  color: '',
  headlineTag: 'h1',
};

Headline.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  color: PropTypes.string,
  state: PropTypes.bool,
  headlineTag: PropTypes.oneOf(['h1', 'h2', 'p']),
};

export default Headline;
