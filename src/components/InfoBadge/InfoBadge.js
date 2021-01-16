import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography } from '../Typography';
import { Icon } from '../Icon';
import './InfoBadge.scss';

const InfoBadge = ({ preset, color, icon, addClass, info }) => {
  const classes = classNames(
    "info-badge",
    addClass,
  );

  const presets = {
    success: {
      color: 'util-success',
      icon: 'check-default-bold',
    },
    error: {
      color: 'util-error',
      icon: 'triangle-bold',
    },
  };

  return (
    <div className={classes}>
      <Icon
        name={icon || (presets[preset] && presets[preset].icon)}
        size={15}
        color={color || (presets[preset] && presets[preset].color)}
        addClass="info-badge-icon"
      />
      <Typography variant="caption" color={color || (presets[preset] && presets[preset].color)}>
        {info}
      </Typography>
    </div>
  );
};

InfoBadge.propTypes = {
  preset: PropTypes.oneOf([
    'success',
    'error',
  ]),
  color: PropTypes.string,
  icon: PropTypes.string,
  addClass: PropTypes.string,
  info: PropTypes.string,
};

export default InfoBadge;
