import React from 'react';
import PropTypes from 'prop-types';
import './HelperText.scss';
import classNames from 'classnames';
import { Typography } from '../../Typography';

const HelperText = ({ addClass, error, children }) => {
  const classes = classNames(
    'helper-text',
    addClass,
    { error },
  );

  return (
    <div className={classes} role={error ? 'alert' : undefined}>
      <Typography variant="helper">
        {children}
      </Typography>
    </div>
  );
};

HelperText.defaultProps = {};

HelperText.propTypes = {
  addClass: PropTypes.string,
  error: PropTypes.bool,
  children: PropTypes.node,
};

export default HelperText;
