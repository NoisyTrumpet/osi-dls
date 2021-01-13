import React from "react";
import "./Grid.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const Grid = ({
  addClass,
  grid,
  gap,
  rowGap,
  landscape,
  portrait,
  mobile,
  children,
  testId
}) => {
  const classes = classNames("grid-container", addClass);
  return (
    <div
      className={classes}
      grid={grid}
      gap={gap}
      row-gap={rowGap}
      landscape={landscape}
      portrait={portrait}
      mobile={mobile}
      data-testid={testId}
    >
      {children}
    </div>
  );
};

Grid.defaultProps = {
  grid: 4,
  gap: 16,
  rowGap: 0,
  landscape: 3,
  portrait: 2,
  mobile: 1,
  testId: "grid"
};

Grid.propTypes = {
  grid: PropTypes.number,
  gap: PropTypes.number,
  rowGap: PropTypes.number,
  landscape: PropTypes.number,
  portrait: PropTypes.number,
  mobile: PropTypes.number,
  addClass: PropTypes.string,
  children: PropTypes.node,
  testId: PropTypes.string
};

export default Grid;
