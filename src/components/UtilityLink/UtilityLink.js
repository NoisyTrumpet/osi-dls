import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import './UtilityLink.scss';

const UtilityLink = ({
  icon,
  title,
  to,
  iconSize,
  typoVariant,
  addClass,
  onClick,
  onBlur,
  onFocus,
  target,
  rel,
  ariaControls,
  isButton,
}) => {
  const classnames = classNames('utility-link', addClass);

  return (
    <div className={classnames}>
      {isButton ? (
        <button
          type="button"
          onClick={onClick}
          onBlur={onBlur}
          onFocus={onFocus}
          aria-controls={ariaControls}
        >
          <Icon name={icon} size={iconSize} />
          <Typography variant={typoVariant}>{title}</Typography>
        </button>
      ):(
        <a
        href={to}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        target={target}
        rel={rel}
        aria-controls={ariaControls}
      >
        <Icon name={icon} size={iconSize} />
        <Typography variant={typoVariant}>{title}</Typography>
      </a>
      )}
    </div>
  );
};

UtilityLink.defaultProps = {
  iconSize: 24,
  typoVariant: 'body-medium',
};

UtilityLink.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  iconSize: PropTypes.number,
  typoVariant: PropTypes.string,
  addClass: PropTypes.string,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
  ariaControls: PropTypes.string,
  isButton: PropTypes.bool,
};

export default UtilityLink;
