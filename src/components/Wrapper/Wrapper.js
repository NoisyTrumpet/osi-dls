import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Wrapper.scss";

const Wrapper = ({ addClass, children, backgroundColor, styles }) => {
  const wrapperClasses =
    addClass && addClass.split(" ").map(i => `wrapper-${i}`);
  const backgroundColorClass = {
    [`background-color-${backgroundColor}`]: backgroundColor
  };
  const classes = classNames("wrapper", wrapperClasses, backgroundColorClass);

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );
};

Wrapper.defaultProps = {};

Wrapper.propTypes = {
  addClass: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.string)
};

export default Wrapper;
