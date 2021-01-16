import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input } from '../Input';
import { Label } from '../Label';
import './Range.scss';

const Range = ({
  domId,
  name,
  range,
  tickCount,
  step,
  label,
  showValueInLabel,
  isDisabled,
  addClass,
  onChange,
  fontValue,
  ...props
}) => {
  const classes = classNames(
    'input-range-container',
    addClass,
  );
  const min = Array.isArray(range) ? '0' : range.min;
  const max = Array.isArray(range) ? `${range.length - 1}` : range.max;

  // formik field
  const [field, meta, helpers] = useField({ name });
  const [value, setValue] = useState(meta.initialValue || fontValue || field.value || meta.value || min);
  // label suffix
  const [suffix, setSuffix] = useState(null);

  useEffect(() => {
    meta.value = value;
    setSuffix((showValueInLabel && Array.isArray(range)) ? range[parseInt(value, 10)] : null)
  }, [value]);

  const onChangeWrapper = (e) => {
    helpers.setValue(e.target.value)
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  // TODO: We should make this a util function
  const debounce = (fn, ms) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this);
      }, ms);
    };
  };

  const debouncedHandleOnChange = (e) => debounce(onChangeWrapper(e), 250); // 250ms wait time to fire resize

  return (
    <div className={classes}>
      <Label forId={domId} required suffixHelperText={suffix}>{label}</Label>
      <div className="input-range-slider-background" />
      {/* Range ticks */}
      {tickCount > 0 && (
        <div className="input-range-tick-container">
          {[...Array(tickCount)].map((v, i) =>
            // eslint-disable-next-line react/no-array-index-key
            <div className="input-range-tick" key={`tick-${v}-${i}`} />
          )}
        </div>
      )}
      <Input
        type="range"
        domId={domId}
        name={name}
        min={min}
        max={max}
        step={step}
        isDisabled={isDisabled}
        // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        value={value}
        onChange={debouncedHandleOnChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
};

Range.defaultProps = {
  range: {
    min: '0',
    max: '100',
  },
  step: '1',
  tickCount: 2,
};

Range.propTypes = {
  isDisabled: PropTypes.bool,
  showValueInLabel: PropTypes.bool,
  range: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.exact({
      min: PropTypes.string,
      max: PropTypes.string,
    })
  ]),
  step: PropTypes.string,
  tickCount: PropTypes.number,
  domId: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  addClass: PropTypes.string,
  onChange: PropTypes.func,
  fontValue: PropTypes.string,
};

export default Range;
