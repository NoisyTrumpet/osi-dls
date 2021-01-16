import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography } from '../Typography';
import { Icon } from '../Icon';
import './Tooltip.scss';

const Tooltip = ({
  addClass,
  children,
  orientation,
  caretAlignment,
  textAlignment,
  icon,
  iconColor,
  title,
  content,
}) => {
  const tooltipClasses = classNames(
    'tooltip-overlay',
    addClass,
    orientation,
    caretAlignment,
    textAlignment,
    icon,
  );

  const tooltipTriggerClasses = classNames(
    'tooltip tooltip-trigger',
    caretAlignment,
  );

  const trigger = useRef(null);
  const tooltip = useRef(null);

  const [isOpen, setOpen] = useState(false);
  const [isHidden, setHidden] = useState(true);

  const tooltipComponents = [
    'top',
    'bottom',
    'left',
    'right',
    'center-align',
    'left-align',
    'right-align',
    'text-align-left',
    'text-align-center',
    'text-align-right',
  ];

  if (tooltipComponents.indexOf(orientation) === -1) {
    return (null);
  }

  if (tooltipComponents.indexOf(caretAlignment) === -1) {
    return (null);
  }

  if (tooltipComponents.indexOf(textAlignment) === -1) {
    return (null);
  }

  function TooltipOpen(e) {
    // Handle open with Keyboard
    if (isOpen === false && e.type === 'keydown') {
      setOpen(true);
      setHidden(false);
    }
  }

  function TooltipClose() {
    // Handle close with Keyboard
    if (isOpen === true) {
      setOpen(false);
      setHidden(true);
    }
  }

  function ToggleTooltip() {
    if (isOpen === false) {
      setOpen(true);
      setHidden(false);
    } else {
      setOpen(false);
      setHidden(true);
    }
  }

  return (
    <div className="tooltip-wrapper">
      <button
        className={tooltipTriggerClasses}
        onClick={(e) => ToggleTooltip(e)}
        onFocus={(e) => TooltipOpen(e)}
        onBlur={(e) => TooltipClose(e)}
        type="button"
        ref={trigger}
        tabIndex="0"
      >
        {icon && (
          <Icon size={24} name={icon} color={iconColor} />
        )}
        <Typography variant="body-medium">
          {children}
        </Typography>
        <div className="tooltip-content">
          <div
            className={tooltipClasses}
            data-open={isOpen}
            data-animate="modal"
            data-type="modal"
            aria-hidden={isHidden}
            role="tooltip"
            ref={tooltip}
            tabIndex="-1"
          >
            {title && (
              <Typography
                addClass="tooltip-title"
                variant="body-medium"
              >
                {title}
              </Typography>
            )}
            <Typography variant="helper">
              {content}
            </Typography>
            <i className="caret" />
          </div>
        </div>
      </button>
    </div>
  );
};

Tooltip.defaultProps = {
  orientation: 'bottom',
  caretAlignment: 'center-align',
  textAlignment: 'text-align-left',
  icon: '',
  title: '',
  content: '',
};

Tooltip.propTypes = {
  children: PropTypes.node,
  addClass: PropTypes.string,
  orientation: PropTypes.oneOf([
    'bottom',
    'top',
    'left',
    'right',
  ]),
  caretAlignment: PropTypes.oneOf([
    'center-align',
    'left-align',
    'right-align',
  ]),
  textAlignment: PropTypes.oneOf([
    'text-align-left',
    'text-align-center',
    'text-align-right',
  ]),
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Tooltip;
