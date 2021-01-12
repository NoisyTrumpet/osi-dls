import React from 'react';
import PropTypes from 'prop-types';

const ImageSource = ({ srcSet, dataSrcSet, media }) => (
  <source srcSet={srcSet} data-srcset={dataSrcSet} media={media} />
);

ImageSource.defaultProps = {};

ImageSource.propTypes = {
  media: PropTypes.string,
  srcSet: PropTypes.string,
  dataSrcSet: PropTypes.string,
};

export default ImageSource;
