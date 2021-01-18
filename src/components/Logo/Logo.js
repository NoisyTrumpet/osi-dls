import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import InlineSVG from "../../components/InlineSVG/InlineSVG";
import Typography from "../../components/Typography/Typography";

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
  animated,
  tagline,
  to
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

  if (to) {
    return (
      <div className="logo-wrapper">
        <a href={to}>
          <InlineSVG
            path={`${variantChoice()}`}
            title={title}
            description={description}
            role="img"
            className={classes}
          />
          {variant === "horizontal" && tagline && (
            <div className="tagline-wrapper">
              <Typography variant="body" color="primary">
                {tagline}
              </Typography>
            </div>
          )}
        </a>
      </div>
    );
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
      {variant === "horizontal" && tagline && (
        <div className="tagline-wrapper">
          <Typography variant="body" color="primary">
            {tagline}
          </Typography>
        </div>
      )}
    </div>
  );
};

Logo.defaultProps = {
  variant: "regular"
};

Logo.propTypes = {
  variant: PropTypes.oneOf(["regular", "horizontal", "mark"]),
  tagline: PropTypes.string,
  color: PropTypes.oneOf(["black", "white", "blue", "orange"]),
  animated: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  addClass: PropTypes.string,
  to: PropTypes.string
};

export default Logo;
