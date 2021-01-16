import React from 'react';
import PropTypes from 'prop-types';
import './Indicator.scss';
import classNames from 'classnames';

const Indicator = ({
  children,
  type,
  error,
}) => {
  const classes = classNames(
    'indicator',
    error,
    `indicator-${type}`,
  );

  return (
    <span className={classes} aria-hidden="true">
      {children}
    </span>
  );
};

Indicator.defaultProps = {
  children: '',
  type: undefined,
};

Indicator.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf([
    'radio',
    'checkbox',
    'toggle',
    'hidden',
  ]),
  error: PropTypes.bool,
};

export default Indicator;
