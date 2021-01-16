import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField } from 'formik';
import { Label } from '../Label';
import { Input } from '../Input';
import { Indicator } from '../Indicator';
import { HelperText } from '../HelperText';
import './ToggleSwitch.scss';

const ToggleSwitch = ({
  label,
  labelPosition,
  domId,
  addClass,
  helperText,
  isChecked,
  storybookErrorPreview, // For storybook only
  children,
  required,
  ...props
}) => {
  // useField passes name, placeholder, value, onChange and onBlur
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  const isError = !!(
    meta.touched &&
    meta.error &&
    typeof meta.error === 'string'
  );
  const fieldHelperText = isError ? meta.error : helperText;
  const classes = classNames(
    'toggle-switch',
    { 'no-helpertext': !fieldHelperText },
    { 'toggle-switch--right': labelPosition === 'right' },
    addClass,
  );
  return (
    <div className={classes}>
      <Label fieldType="checkbox" forId={domId} required>
        {label}
      </Label>
      <Input
        type="checkbox"
        domId={domId}
        isChecked={isChecked || field.checked}
        error={isError}
        // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      <Indicator type="toggle" />
      {fieldHelperText && (
        <HelperText error={isError || storybookErrorPreview}>
          {fieldHelperText}
        </HelperText>
      )}
    </div>
  );
};

ToggleSwitch.defaultProps = {
  labelPosition: 'left',
};

ToggleSwitch.propTypes = {
  label: PropTypes.string,
  addClass: PropTypes.string,
  helperText: PropTypes.string,
  isChecked: PropTypes.bool,
  domId: PropTypes.string.isRequired,
  storybookErrorPreview: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
  required: PropTypes.bool,
};

export default ToggleSwitch;
