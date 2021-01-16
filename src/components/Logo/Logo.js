import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import InlineSVG from "../../components/InlineSVG/InlineSVG";
import {
  LogoHoriz,
  LogoHorizWhite,
  LogoHorizBlue,
  LogoHorizOrange,
  LogoRegular,
  LogoRegularBlack,
  LogoRegularWhite,
  LogoRegularBlue,
  LogoRegularOrange,
  LogoMark,
  LogoMarkBlack,
  LogoMarkWhite,
  LogoMarkBlue,
  LogoMarkOrange,
  LogoHorizBlack
} from "../../assets/svg";
import "./Logo.scss";

const Logo = ({
  variant,
  title,
  color,
  description,
  className,
  addClass,
  animated
}) => {
  const classes = classNames(
    className || "logo",
    addClass,
    animated && "logo-animated"
  );

  function variantChoice() {
    // Horizontal
    if (variant === "horizontal") {
      if (color === "black") {
        return LogoHorizBlack;
      }
      if (color === "white") {
        return LogoHorizWhite;
      }
      if (color === "blue") {
        return LogoHorizBlue;
      }
      if (color === "orange") {
        return LogoHorizOrange;
      }
      return LogoHoriz;
    }
    // Mark
    if (variant === "mark") {
      if (color === "black") {
        return LogoMarkBlack;
      }
      if (color === "white") {
        return LogoMarkWhite;
      }
      if (color === "blue") {
        return LogoMarkBlue;
      }
      if (color === "orange") {
        return LogoMarkOrange;
      }
      return LogoMark;
    }
    // Regular Logo
    if (variant === "regular") {
      if (color === "black") {
        return LogoRegularBlack;
      }
      if (color === "white") {
        return LogoRegularWhite;
      }
      if (color === "blue") {
        return LogoRegularBlue;
      }
      if (color === "orange") {
        return LogoRegularOrange;
      }
    }
    return LogoRegular;
  }
  return (
    <div className="logo-wrapper">
      <InlineSVG
        path={`${variantChoice()}`}
        title={title}
        description={description}
        role="img"
        className={classes}
      />
    </div>
  );
};

Logo.defaultProps = {
  variant: "regular"
};

Logo.propTypes = {
  variant: PropTypes.oneOf(["regular", "horizontal", "mark"]),
  color: PropTypes.oneOf(["black", "white", "blue", "orange"]),
  animated: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  addClass: PropTypes.string
};

export default Logo;
