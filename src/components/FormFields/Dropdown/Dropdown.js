import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField } from 'formik';
import { Label } from '../Label';
import { Select } from '../Select';
import { HelperText } from '../HelperText';
import { Icon } from '../../Icon';
import { InlineSVG } from '../../InlineSVG';
import './Dropdown.scss';

const Dropdown = ({
  addClass,
  children,
  color,
  defaultOption,
  domId,
  helperText,
  hideLabel,
  iconTestId,
  label,
  noFormik,
  options,
  required,
  storybookErrorPreview, // For storybook only
  variant,
  onChange,
  ...props
}) => {
  // useField passes name, placeholder, value, onChange and onBlur
  const [field, meta, helpers] = useField({ ...props, type: 'select' });
  const [value, setValue] = useState(meta.initialValue || field.value);

  const isError = !!(meta.touched && meta.error && typeof meta.error === 'string');
  const fieldHelperText = isError ? meta.error : helperText;
  const classes = classNames(
    'input-field-container',
    'input-field-select',
    'has-icon icon-right',
    addClass,
    `variant-${variant}`,
    { 'no-helpertext': !fieldHelperText },
    { 'font-select': variant === 'font' },
  );

  // Helper For Font Variant
  const selectedFont = (fontOptions) => {
    // Iterate through fontOptions array
    const obj = fontOptions.find(o => o.value === field.value);
    const selectedSvg = obj ? obj.svg : fontOptions[0].svg;

    return selectedSvg;
  }

  useEffect(() => {
    meta.value = value;
  }, [value]);

  const onChangeWrapper = (e) => {
    helpers.setValue(e.target.value)
    setValue(e.target.value); if (onChange) {
      onChange(e);
    }
  }

  return (
    <div className={classes}>
      {variant === 'font' && options &&
        <div className="font-dropdown">
          <InlineSVG
            path={selectedFont(options)}
            title="Font"
            description="Font select option"
            focus={false}
            className="font-dropdown"
            aria-hidden="true"
            focusable="false"
          />
        </div>
      }
      <Select
        domId={domId}
        options={options}
        defaultOption={defaultOption}
        error={isError || storybookErrorPreview}
        variant={variant}
        // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        value={value}
        onChange={onChangeWrapper}
      />
      <Label
        display="block"
        fieldType="text"
        color={color}
        forId={domId}
        required={required}
        hideLabel={hideLabel}
      >
        {label}
      </Label>
      <Icon name="arrows-norgiedown-bold" size={8} testId={iconTestId} />
      {fieldHelperText && (
        <HelperText error={isError || storybookErrorPreview}>{fieldHelperText}</HelperText>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  variant: 'default',
  color: 'gray4',
};

Dropdown.propTypes = {
  addClass: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  defaultOption: PropTypes.string,
  domId: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  hideLabel: PropTypes.bool,
  iconTestId: PropTypes.string,
  label: PropTypes.string,
  noFormik: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  required: PropTypes.bool,
  storybookErrorPreview: PropTypes.bool,
  variant: PropTypes.oneOf([
    'default',
    'text',
    'font',
  ]),
  onChange: PropTypes.func,
};

export default Dropdown;
