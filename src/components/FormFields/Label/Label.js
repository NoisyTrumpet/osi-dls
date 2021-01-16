import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss';
import classNames from 'classnames';
import { Typography } from '../../Typography';

const Label = ({
  fieldType,
  forId,
  display,
  hideLabel,
  isDisabled,
  color,
  required,
  addClass,
  suffixHelperText,
  children,
}) => {
  const classes = classNames(
    'input-label',
    fieldType,
    display,
    hideLabel && 'hide-label',
    addClass,
    { isDisabled },
  );

  const srtVariant = hideLabel && "srt";

  return (
    <label
      className={classes}
      htmlFor={forId}
    >
      <Typography variant={srtVariant || "field-label"} color={color} addClass={addClass}>
        {children}
      </Typography>
      {suffixHelperText && (
        <Typography variant="helper" addClass="optional">
          {suffixHelperText}
        </Typography>
      )}
      {!required && (
        <Typography variant={srtVariant || "helper"} addClass="optional">
          (Optional)
        </Typography>
      )}
    </label>
  );
};

Label.defaultProps = {
  fieldType: 'text',
  display: 'inline',
  isDisabled: false,
  color: '',
};

Label.propTypes = {
  fieldType: PropTypes.oneOf([
    'text',
    'radio',
    'checkbox',
    'textarea',
    'select',
  ]),
  forId: PropTypes.string,
  display: PropTypes.oneOf([
    'inline',
    'inline-block',
    'block',
  ]),
  hideLabel: PropTypes.bool,
  isDisabled: PropTypes.bool,
  color: PropTypes.string,
  suffixHelperText: PropTypes.string, // helper text that is appended to label
  required: PropTypes.bool,
  addClass: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
