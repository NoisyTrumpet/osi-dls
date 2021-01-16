import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField } from 'formik';
import { Label } from '../Label';
import { Input } from '../Input';
import { Indicator } from '../Indicator';
import { HelperText } from '../HelperText';
import './Checkbox.scss';

const Checkbox = ({
  domId,
  helperText,
  isFieldSet,
  isDisabled,
  storybookErrorPreview, // For storybook only
  children,
  click,
  addClass,
  ...props
}) => {
  // useField passes name, placeholder, value, onChange and onBlur
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  const isError = !!(meta.touched && meta.error && typeof meta.error === 'string');
  const fieldHelperText = isError ? meta.error : helperText;
  const classes = classNames(
    'input-field-container',
    'input-field-checkbox',
    addClass,
    { 'no-helpertext': (fieldHelperText === '' || fieldHelperText === undefined) && !isFieldSet },
  );
  return (
    <div className={classes}>
      <Input
        type="checkbox"
        domId={domId}
        error={isError}
        isDisabled={isDisabled}
        click={click}
        // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        isChecked={field.checked}
      />
      <Indicator type="checkbox" error={isError} />
      <div>
        <Label
          fieldType="checkbox"
          forId={domId}
          disabled={isDisabled}
          display="inline-block"
          required
        >
          {children}
        </Label>
        {fieldHelperText && !isFieldSet && (
          <HelperText error={isError || storybookErrorPreview}>{fieldHelperText}</HelperText>
        )}
      </div>
    </div>
  );
};

Checkbox.defaultProps = {
  isFieldSet: false,
  isDisabled: false,
  click: null,
};

Checkbox.propTypes = {
  domId: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  isFieldSet: PropTypes.bool,
  isDisabled: PropTypes.bool,
  storybookErrorPreview: PropTypes.bool,
  children: PropTypes.node,
  click: PropTypes.func,
  addClass: PropTypes.string,
};

export default Checkbox;
