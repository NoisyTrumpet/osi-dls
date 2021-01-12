import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import InlineSVG from "../../components/InlineSVG/InlineSVG";
import { LogoHoriz, LogoRegular, LogoMark } from "../../assets/svg";
import "./Logo.scss";

const Logo = ({
  variant,
  title,
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
  // Default Case: Regular Logo
  return (
    <div className="logo-wrapper">
      {variant === "regular" && (
        <InlineSVG
          path={`${LogoRegular}`}
          title={title}
          description={description}
          role="img"
          focus={false}
          className={classes}
        />
      )}
      {variant === "horizontal" && (
        <InlineSVG
          path={`${LogoHoriz}`}
          title={title}
          description={description}
          role="img"
          focus={false}
          className={classes}
        />
      )}
      {variant === "mark" && (
        <InlineSVG
          path={`${LogoMark}`}
          title={title}
          description={description}
          role="img"
          focus={false}
          className={classes}
        />
      )}
    </div>
  );
};

Logo.defaultProps = {
  variant: "regular"
};

Logo.propTypes = {
  variant: PropTypes.oneOf(["regular", "horizontal", "mark"]),
  animated: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  addClass: PropTypes.string
};

export default Logo;
