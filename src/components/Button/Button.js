import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import classNames from "classnames";
import { Typography } from "../Typography";
import { Icon } from "../Icon";

const Button = React.forwardRef(
  (
    {
      type,
      mode,
      disabled,
      onBlur,
      onFocus,
      color,
      children,
      iconLeft,
      iconRight,
      click,
      addClass,
      typoVariant,
      ariaControls,
      ariaSelected,
      role,
      id,
      onKeyDown,
      onKeyUp,
      tabIndex,
      testId
    },
    ref
  ) => {
    const classes = classNames(
      "btn",
      `btn-${mode}`,
      (iconLeft || iconRight) && "has-icon",
      {
        "has-icon-left": iconLeft,
        "has-icon-right": iconRight
      },
      addClass
    );
    const btnDetails = {
      primary: {
        iconSize: 20,
        color: color || "brand-white",
        typoVariant: typoVariant || "cta"
      },
      secondary: {
        iconSize: 20,
        color: color || "primary",
        typoVariant: typoVariant || "cta"
      },
      tertiary: {
        iconSize: 10,
        color: color || "primary",
        typoVariant: typoVariant || "cta-tertiary"
      },
      "quick-action-deactivated": {
        iconSize: 10,
        color: color || "primary",
        typoVariant: typoVariant || "cta-tertiary"
      },
      "quick-action-activated": {
        iconSize: 10,
        color: color || "primary",
        typoVariant: typoVariant || "cta-tertiary"
      },
      "text-link": {
        iconSize: 14,
        color: color || "accentB",
        typoVariant: typoVariant || "text-link"
      },
      "text-link-2": {
        iconSize: 12,
        color: color || "primary",
        typoVariant: typoVariant || "caption"
      },
      custom: {
        iconSize: 20,
        color: color || "brand-black",
        typoVariant: typoVariant || "body"
      }
    };

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        type={type}
        onClick={click}
        className={classes}
        disabled={disabled}
        ref={ref}
        onBlur={onBlur}
        onFocus={onFocus}
        aria-controls={ariaControls}
        aria-selected={ariaSelected}
        role={role}
        id={id}
        data-testid={testId}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      >
        {iconLeft && (
          <Icon
            name={iconLeft}
            color={btnDetails[mode].color}
            size={btnDetails[mode].iconSize}
            disabled={disabled}
            addClass="icon-left"
          />
        )}
        <Typography
          variant={btnDetails[mode].typoVariant}
          color={btnDetails[mode].color}
        >
          {children}
        </Typography>
        {iconRight && (
          <Icon
            name={iconRight}
            color={btnDetails[mode].color}
            size={btnDetails[mode].iconSize}
            disabled={disabled}
            addClass="icon-right"
          />
        )}
      </button>
    );
  }
);

Button.defaultProps = {
  type: "button",
  mode: "primary",
  disabled: false,
  color: "",
  iconLeft: "",
  iconRight: ""
};

Button.propTypes = {
  mode: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "quick-action-deactivated",
    "quick-action-activated",
    "text-link",
    "text-link-2",
    "custom"
  ]),
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  click: PropTypes.func,
  addClass: PropTypes.string,
  typoVariant: PropTypes.oneOf([
    "headline-1",
    "headline-2",
    "headline-3",
    "headline-4",
    "headline-5",
    "headline-6",
    "price-unit",
    "price-unit-strikethrough",
    "price-sale",
    "cta",
    "cta-tertiary",
    "subtitle",
    "field-label",
    "body",
    "body-medium",
    "eyebrow",
    "text-link",
    "input-text",
    "caption",
    "helper",
    "breadcrumb",
    "srt",
    "licensing",
    "subtext"
  ]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaControls: PropTypes.string,
  ariaSelected: PropTypes.string,
  tabIndex: PropTypes.string,
  role: PropTypes.string,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  id: PropTypes.string,
  testId: PropTypes.string
};

export default Button;
