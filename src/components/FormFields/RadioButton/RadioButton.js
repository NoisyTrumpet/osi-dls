import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classNames from 'classnames';
import { Label } from '../Label';
import { Input } from '../Input';
import { Indicator } from '../Indicator';
import { HelperText } from '../HelperText';
import './RadioButton.scss';

const RadioButton = ({
  ariaControls,
  domId,
  label,
  isCard,
  helperText,
  addClass,
  isDisabled,
  children,
  variant,
  hiddenLabel,
  ...props
}) => {
  // useField passes name, placeholder, value, onChange and onBlur
  const [field] = useField({ ...props, type: 'radio' });

  // For FieldSet Render Props
  const { name } = props;

  const classes = classNames(
    'input-field-container',
    'input-field-radio',
    { 'input-field-radio-blank': variant === 'blank-card' },
    { 'input-field-radio-card': isCard },
    { 'input-field-disabled': isDisabled },
    addClass,
  );

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classes}>
      <Input
        ariaControls={ariaControls}
        type="radio"
        domId={domId}
        name={name || field.name}
        isChecked={field.checked}
        className={classNames('radio-button')}
        isDisabled={isDisabled}
        // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      <Indicator type={variant === 'blank-card' ? 'hidden' : 'radio'} />
      {children}
      <div className={`radio-button-labels ${hiddenLabel && 'screen-reader-text'}`}>
        <Label
          fieldType="radio"
          isDisabled={isDisabled}
          forId={domId}
          display="inline-block"
          addClass={hiddenLabel && "screen-reader-text"}
          required
        >
          {label}
        </Label>
        {isCard && helperText ? (
          <HelperText>{helperText}</HelperText>
        ) : ''}
      </div>
    </div>
  );
};

RadioButton.defaultProps = {
  isCard: false,
  isDisabled: false,
};

RadioButton.propTypes = {
  ariaControls: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  hiddenLabel: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  domId: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  helperText: PropTypes.string,
  isCard: PropTypes.bool,
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'blank-card',
  ])
};

export default RadioButton;
