import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.scss';
import classNames from 'classnames';
import { Icon } from '../Icon';

const IconButton = React.forwardRef(({
  icon,
  id,
  variant,
  disabled,
  size,
  addClass,
  role,
  click,
  ariaPressed,
  srtAriaLive, // Screen Reader Text 'aria-live' prop
  ariaHaspopup,
  ariaExpanded,
  ariaControls,
  children,
  testId,
}, ref) => {
  const classes = classNames(
    'btn-icon',
    `btn-icon-${variant}`,
    addClass,
  );

  return (
    <button
      id={id}
      className={classes}
      type="button"
      role={role}
      data-testid={testId}
      disabled={disabled}
      onClick={click}
      aria-pressed={ariaPressed}
      aria-haspopup={ariaHaspopup}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      ref={ref}
    >
      <span
        className="screen-reader-text"
        aria-live={srtAriaLive}
      >
        {children}
      </span>
      <Icon
        name={icon}
        size={size}
      />
    </button>
  );
});

IconButton.defaultProps = {
  variant: 'simple',
  size: 16,
  disabled: false,
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  id: PropTypes.string,
  srtAriaLive: PropTypes.string,
  variant: PropTypes.oneOf([
    'simple',
    'circular',
    'circular-shadow',
    'tiny',
  ]),
  size: PropTypes.number,
  addClass: PropTypes.string,
  role: PropTypes.string,
  click: PropTypes.func,
  disabled: PropTypes.bool,
  ariaPressed: PropTypes.bool,
  ariaHaspopup: PropTypes.bool,
  ariaExpanded: PropTypes.bool,
  ariaControls: PropTypes.string,
  children: PropTypes.node,
  testId: PropTypes.string,
};

export default IconButton;
