import React from "react";
import PropTypes from "prop-types";

import { AccentCircle } from "../../assets/svg";
import { Icon } from "../Icon";
import { InlineSVG } from "../InlineSVG";
import "./AccentIcon.scss";

const AccentIcon = ({ accent, accentColor, icon, iconColor, testId }) => {
  const preProcessor = accentColor
    ? code =>
        code
          .replace(/fill=".*?"/g, `fill="${accentColor}"`)
          .replace(/stroke=".*?"/g, `stroke="${accentColor}"`)
    : null;

  return (
    <div className="accent-icon">
      <InlineSVG
        className="accent-icon-accent-svg"
        focus={false}
        path={accent}
        preProcessor={preProcessor}
        role="img"
      />
      {icon && (
        <div className="icon-wrapper">
          <Icon color={iconColor} name={icon} testId={testId} />
        </div>
      )}
    </div>
  );
};

AccentIcon.defaultProps = {
  accent: AccentCircle,
  iconColor: "brand-white"
};

AccentIcon.propTypes = {
  accent: PropTypes.string,
  accentColor: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  testId: PropTypes.string
};

export default AccentIcon;
