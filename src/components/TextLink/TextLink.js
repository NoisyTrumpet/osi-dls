import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography } from '../Typography';
import { Icon } from '../Icon';
import './TextLink.scss';
// TODO: Link types (internal / ext-hallmark / external)

// Utilize `TextLink` to navigate around the application, or to link to an external site
const TextLink = ({
  defaultClassOverride,
  addClass,
  to,
  title,
  color,
  icon,
  iconPos,
  typoVariant,
  target,
  rel,
}) => {
  const defaultClass = (defaultClassOverride || 'text-link');
  const iconClass = iconPos ? (`has-icon icon-${iconPos}`) : '';

  const classes = classNames(
    defaultClass,
    addClass,
    iconClass,
  );

  return (
    <a href={to} className={classes} target={target} rel={rel}>
      <Typography variant={typoVariant} color={color}>{title}</Typography>
      {
        iconPos
        && (
          <Icon
            name={icon}
            color={color || 'accentB'}
            size={14}
          />
        )
      }
    </a>
  );
};

TextLink.defaultProps = {
  icon: 'placeholder-bold',
  typoVariant: 'text-link',
};

TextLink.propTypes = {
  defaultClassOverride: PropTypes.string,
  addClass: PropTypes.string,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  iconPos: PropTypes.oneOf([
    'left',
    'right',
  ]),
  icon: PropTypes.string,
  typoVariant: PropTypes.oneOf([
    'text-link',
    'helper',
    'cta-tertiary',
    'cta',
    'body',
  ]),
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default TextLink;
