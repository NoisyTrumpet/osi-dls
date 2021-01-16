import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { TabBrushStroke } from "../../../assets/svg";
import { Button } from "../../../components/Button";
import { InlineSVG } from "../../../components/InlineSVG";

const TabItem = ({
  label,
  selected,
  id,
  sharedSVG,
  onClick,
  onKeyDown,
  onKeyUp,
  index
}) => {
  const classes = classNames("tab-item", { "tab-item-selected": selected });
  return (
    <div className={classes} data-index={`${index}`}>
      <Button
        role="tab"
        ariaSelected={`${selected}`}
        ariaControls={`${id}-tab`}
        addClass="tab-item-btn"
        id={id}
        mode="quick-action-deactivated"
        color={selected ? "primary" : "gray5"}
        tabIndex={selected ? "0" : "-1"}
        click={onClick}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      >
        {label}
      </Button>
      <InlineSVG
        path={sharedSVG}
        title="Tab Brush Stroke svg"
        description="Decorative tab background image"
        role="img"
        focus={false}
        className="tab-item-brush-stroke"
      />
    </div>
  );
};

TabItem.defaultProps = {
  selected: false,
  sharedSVG: `${TabBrushStroke}`
};

TabItem.propTypes = {
  sharedSVG: PropTypes.string,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  index: PropTypes.number
};

export default TabItem;
