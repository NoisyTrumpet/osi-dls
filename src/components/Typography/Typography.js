import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TypographyComponents from './Typography.components';
import './Typography.scss';

/**
 * Utilize `Typography` to present text
 */
const Typography = ({ addClass, variant, htmlTagOverride, color, children, ...rest }) => {
  if (!(variant in TypographyComponents)) {
    return (null);
  }

  const {
    defaultTag,
    className,
  } = TypographyComponents[variant];

  const colorClass = {
    [`color-${color}`]: color,
  };

  const newProps = {
    className: classNames(className, colorClass, addClass),
    ...rest,
  };

  const tag = htmlTagOverride || defaultTag;
  return React.createElement(tag, newProps, children);
};

Typography.variants = Object.keys(TypographyComponents);

Typography.propTypes = {
  /** Variant determines the styling for the component */
  variant: PropTypes.oneOf([
    'headline-1',
    'headline-2',
    'headline-3',
    'headline-4',
    'headline-5',
    'headline-6',
    'price-unit',
    'price-unit-strikethrough',
    'price-sale',
    'cta',
    'cta-tertiary',
    'subtitle',
    'field-label',
    'body',
    'body-medium',
    'eyebrow',
    'text-link',
    'input-text',
    'caption',
    'helper',
    'breadcrumb',
    'srt',
    'licensing',
    'subtext',
  ]).isRequired,
  /** The content of the component */
  children: PropTypes.node,
  /** Overides the default tag that the component is rendered as */
  htmlTagOverride: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'address', 'div']),
  /** Color provides the component with a class name that affects the color of text */
  color: PropTypes.string,
  /** addClass appends a string to the component's className prop */
  addClass: PropTypes.string,
};

export default Typography;
