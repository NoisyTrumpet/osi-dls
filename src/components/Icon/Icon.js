import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';
import classNames from 'classnames';
import { Badge } from '../Badge';

const Icon = ({
  name,
  color,
  size,
  error,
  disabled,
  addClass,
  badgeCount,
  badgeColor,
  testId,
}) => {
  const classes = classNames(
    'icon',
    `icon-${name}`,
    color ? `icon-${color}` : '',
    `icon-${size}`,
    error ? 'error' : '',
    disabled ? 'disabled' : '',
    badgeCount ? 'badge' : '',
    addClass,
  );

  if (badgeCount && badgeCount > 0) {
    return (
      <div className="icon-badge">
        <span className={classes} aria-hidden="true" data-testid={testId}>
          <Badge count={badgeCount} color={badgeColor} />
        </span>
      </div>
    );
  }

  return <span className={classes} aria-hidden="true" data-testid={testId} />;
};

Icon.defaultProps = {
  size: 24,
  badgeColor: 'primary',
  testId: 'icon',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  addClass: PropTypes.string,
  // Badge props:
  badgeCount: PropTypes.number,
  badgeColor: PropTypes.string,
  testId: PropTypes.string,
};

export default Icon;
