import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Select.scss';
import classNames from 'classnames';

const Select = ({
  defaultOption,
  domId,
  error,
  isDisabled,
  name,
  options,
  onChange,
  onBlur,
  value,
  variant,
}) => {
  const classes = classNames('input-field', { error });
  const myRef = useRef(null);
  const [charCount, setCharCount] = useState(0); // Character count for selected option

  const resizeComponent = () => {
    if (myRef.current) {
      if (myRef.current.options.selectedIndex === 0) {
        setCharCount(
          defaultOption ? defaultOption.length : options[0].label.length,
        );
      } else {
        const offset = defaultOption ? 1 : 0;
        setCharCount(
          options
            ? options[myRef.current.options.selectedIndex - offset].label.length
            : 0,
        );
      }
    }
  };

  const handleChange = (e) => {
    resizeComponent();
    if (onChange) {
      onChange(e);
    }
  };

  useEffect(() => {
    resizeComponent();
  }, [options]);

  // Here we are calculating the length of a selected option,
  // multiplying it by about a character's pixel width, 7,
  // and adding some additional spacing based on the variant provided.
  const style =
    variant === 'text'
      ? {
        width: `${charCount / 2 + (1 - 0.05 * charCount)}rem`,
      }
      : {};

  return (
    <select
      name={name}
      className={classes}
      disabled={isDisabled}
      id={domId}
      aria-required="true"
      aria-invalid={error}
      onChange={handleChange}
      onBlur={onBlur}
      value={value || defaultOption}
      style={style}
      ref={myRef}
    >
      {defaultOption && (
        <option key="default" value={defaultOption} default disabled>
          {defaultOption}
        </option>
      )}
      {options &&
        options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
    </select>
  );
};

Select.defaultProps = {
  error: false,
  isDisabled: false,
  onChange: null,
  onBlur: null,
};

Select.propTypes = {
  name: PropTypes.string,
  error: PropTypes.bool,
  isDisabled: PropTypes.bool,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  domId: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'text', 'font']),
};

export default Select;
