import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Wave.scss";
import { WaveSVG } from "../../assets/svg";
import { InlineSVG } from "../InlineSVG";

const colorChoices = [
  "primary",
  "primary1",
  "gray5",
  "gray4",
  "gray3",
  "gray2",
  "gray1",
  "gray0",
  "accentA",
  "accentA1",
  "accentB",
  "accentB1",
  "util-error",
  "util-success",
  "brand-black",
  "brand-white",
  "brand-transparent",
  "disabled"
];

const Wave = ({ colorTop, colorBottom, reverseDirection }) => {
  const classes = classNames(
    "wave-inlinesvg",
    `color-top-${colorTop}`,
    `color-bottom-${colorBottom}`,
    reverseDirection && "reverse-direction"
  );

  return (
    <div className="wave">
      <InlineSVG
        path={`${WaveSVG}`}
        title="Wave svg"
        description="Decorative wave image"
        role="img"
        focus={false}
        className={classes}
      />
    </div>
  );
};

Wave.defaultProps = {
  colorTop: "brand-white",
  colorBottom: "gray1",
  reverseDirection: false
};

Wave.propTypes = {
  colorTop: PropTypes.oneOf(colorChoices),
  colorBottom: PropTypes.oneOf(colorChoices),
  reverseDirection: PropTypes.bool
};

export default Wave;
