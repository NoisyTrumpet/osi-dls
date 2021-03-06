import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField } from 'formik';
import TextareaAutosize from 'react-textarea-autosize';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { Icon } from '../../Icon';
import { IconButton } from '../../IconButton';
import './TextFieldMultiline.scss';

const TextFieldMultiline = ({
  addClass,
  autoComplete,
  children,
  domId,
  helperText,
  hideLabel,
  icon,
  iconPos,
  iconOnClick,
  iconSR, // screen reader text for icon
  label,
  maxLength,
  required,
  storybookErrorPreview, // For storybook only
  type,
  minRows,
  maxRows,
  onChange,
  ...props
}) => {
  // useField passes name, placeholder, value, onChange and onBlur
  const [field, meta] = useField({ ...props, type: 'text' });
  const error = !!(meta.touched && meta.error && typeof meta.error === 'string') || storybookErrorPreview;
  const fieldHelperText = error ? meta.error : helperText;

  // eslint-disable-next-line react/destructuring-assignment
  const [value, setValue] = useState(props.value || '');

  const onValueChange = (event) => {
    setValue(event.target.value)
    onChange(event)
  }

  const classes = classNames(
    'input-field-container',
    'input-field-text',
    { 'no-helpertext': !fieldHelperText },
    hideLabel && 'hidden-label',
    iconPos && `has-icon icon-${iconPos}`,
    addClass,
    { error },
  );
  
  const wrapperClasses = classNames(
    'input-field', 
    'textarea-wrapper',
    { error },
  );
  
  const inputClasses = classNames(
    'input-field-textarea',
    { error },
  )
  const InputIcon = () => (
    <>
      {iconOnClick ?
        <IconButton icon={icon} size={24} click={iconOnClick}>{iconSR}</IconButton> :
        <Icon name={icon} size={24} error={error || storybookErrorPreview} />}
    </>
  );
  // IMPORTANT: props and field should be speaded before the value and onChange, 
  // field contains default onChange from formik which will override the defined onValueChange 
  return (
    <div className={classes} data-testid="test-id-input">
      <div  className={wrapperClasses}>
        <TextareaAutosize 
          className={inputClasses}
          autoComplete={autoComplete}
          error={(error || storybookErrorPreview || false).toString()}
          maxLength={maxLength}
          required={required}
          type={type}
          minRows={minRows}
          maxRows={maxRows}
          // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...field}
          value={value}
          onChange={onValueChange}
        />
      </div>
      {children}
      <Label
        color="gray4"
        display="block"
        fieldType="text"
        forId={domId}
        hideLabel={hideLabel}
        required={required}
      >
        {label}
      </Label>
      {iconPos && <InputIcon />}
      {
        fieldHelperText && (
          <HelperText error={error || storybookErrorPreview}>
            {fieldHelperText}
          </HelperText>
        )
      }
    </div >
  );
};

TextFieldMultiline.defaultProps = {
  iconOnClick: null,
};

TextFieldMultiline.propTypes = {
  addClass: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  children: PropTypes.node,
  domId: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  hideLabel: PropTypes.bool,
  icon: PropTypes.string,
  iconOnClick: PropTypes.func,
  iconPos: PropTypes.oneOf(['left', 'right']),
  iconSR: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  storybookErrorPreview: PropTypes.bool,
  type: PropTypes.string,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default TextFieldMultiline;
