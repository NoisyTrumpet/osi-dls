import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classNames from 'classnames';
import { HelperText } from '../HelperText';
import './Fieldset.scss';

const Fieldset = ({
  legend,
  addClass,
  domId,
  helperText,
  storybookErrorPreview, // For storybook only
  children,
  ...props
}) => {
  // useField passes name, placeholder, value, onChange and onBlur
  const [field, meta] = useField({ ...props });
  const isError = !!(meta.touched && meta.error && typeof meta.error === 'string');
  const fieldHelperText = isError ? meta.error : helperText;

  const classes = classNames(
    'input-fieldset',
    'fieldset-container',
    addClass,
    { 'no-helpertext': !fieldHelperText },
  );

  return (
    <div className={classes}>
      <fieldset
        id={domId}
        // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        <legend className="screen-reader-text">{legend}</legend>
        {children}
      </fieldset>
      {fieldHelperText && (
        <HelperText error={isError || storybookErrorPreview}>{fieldHelperText}</HelperText>
      )}
    </div>
  );
};

Fieldset.defaultProps = {};

Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  domId: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  classes: PropTypes.string,
  storybookErrorPreview: PropTypes.bool,
  addClass: PropTypes.string,
  children: PropTypes.node,
};

export default Fieldset;
