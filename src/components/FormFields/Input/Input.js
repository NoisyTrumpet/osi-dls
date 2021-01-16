import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import classNames from 'classnames';

const Input = ({
  ariaControls,
  autoComplete,
  click,
  domId,
  error,
  isChecked,
  isDisabled,
  maxLength,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  required,
  type,
  value,
  // range input
  min,
  max,
  step,
}) => {
  const classes = classNames(
    'input-field',
    { error },
  );

  return (
    <input
      aria-controls={ariaControls}
      autoComplete={autoComplete || undefined}
      type={type}
      name={name}
      id={domId}
      className={classes}
      maxLength={maxLength}
      placeholder={placeholder}
      defaultValue={value}
      checked={isChecked}
      disabled={isDisabled}
      aria-required={required}
      aria-invalid={error}
      onChange={onChange}
      onBlur={onBlur}
      onClick={click}
      onFocus={onFocus}
      min={min}
      max={max}
      step={step}
    />
  );
};

Input.defaultProps = {
  domId: '',
  name: '',
  onChange: null,
  onBlur: null,
  placeholder: '',
  type: 'text',
  value: '',
};

Input.propTypes = {
  ariaControls: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  click: PropTypes.func,
  domId: PropTypes.string,
  error: PropTypes.bool,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
};

export default Input;
