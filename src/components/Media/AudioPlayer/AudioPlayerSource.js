import React from 'react';
import PropTypes from 'prop-types';

const AudioPlayerSource = ({ src, type }) => (<source src={src} type={type} />);

AudioPlayerSource.defaultProps = {
  type: 'audio/mpeg',
};

AudioPlayerSource.propTypes = {
  src: PropTypes.string,
  type: PropTypes.oneOf([
    'audio/mpeg',
    'audio/ogg',
    'audio/wav',
  ]),
};

export default AudioPlayerSource;
