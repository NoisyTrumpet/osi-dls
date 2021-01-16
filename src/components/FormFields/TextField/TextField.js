import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField } from 'formik';
import { Label } from '../Label';
import { Input } from '../Input';
import { HelperText } from '../HelperText';
import { Icon } from '../../Icon';
import { IconButton } from '../../IconButton';
import './TextField.scss';

const TextField = ({
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
  ...props
}) => {
  // useField passes name, placeholder, value, onChange and onBlur
  const [field, meta] = useField({ ...props, type: 'text' });
  const isError = !!(meta.touched && meta.error && typeof meta.error === 'string');
  const fieldHelperText = isError ? meta.error : helperText;
  const classes = classNames(
    'input-field-container',
    'input-field-text',
    { 'no-helpertext': !fieldHelperText },
    hideLabel && 'hidden-label',
    iconPos && `has-icon icon-${iconPos}`,
    addClass,
  );

  const InputIcon = () => (
    <>
      {iconOnClick ?
        <IconButton icon={icon} size={24} click={iconOnClick}>{iconSR}</IconButton> :
        <Icon name={icon} size={24} error={isError || storybookErrorPreview} />}
    </>
  );

  return (
    <div className={classes} data-testid="test-id-input">
      <Input
        autoComplete={autoComplete}
        domId={domId}
        error={isError || storybookErrorPreview}
        maxLength={maxLength}
        required={required}
        type={type}
        // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
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
          <HelperText error={isError || storybookErrorPreview}>
            {fieldHelperText}
          </HelperText>
        )
      }
    </div >
  );
};

TextField.defaultProps = {
  iconOnClick: null,
};

TextField.propTypes = {
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
};

export default TextField;
