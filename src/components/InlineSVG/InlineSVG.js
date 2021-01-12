import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import './InlineSVG.scss';

const InlineSVG = ({ path, title, description, role, focus, className, preProcessor, ...rest }) => (
  <SVG
    src={path}
    title={title}
    description={description}
    role={role}
    focus={focus.toString()}
    className={className}
    preProcessor={preProcessor}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  />
);

InlineSVG.defaultProps = {
  path: '',
  title: '',
  description: '',
  role: '',
  focus: false,
  preProcessor: null,
};

InlineSVG.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  role: PropTypes.string,
  focus: PropTypes.bool,
  className: PropTypes.string,
  preProcessor: PropTypes.func,
};

export default InlineSVG;
