import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography } from "../Typography";
import "./Badge.scss";

const Badge = ({ count, color }) => {
  const badgeClasses = classNames("badge", `background-color-${color}`);

  if (!count || count < 1) {
    return null;
  }

  return (
    <div className={badgeClasses} color={color}>
      <Typography variant="caption" color="brand-white">
        {count}
      </Typography>
    </div>
  );
};

Badge.defaultProps = {
  color: "primary"
};

Badge.propTypes = {
  count: PropTypes.number.isRequired,
  color: PropTypes.string
};

export default Badge;
