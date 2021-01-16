import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

import { AccentIcon } from "../../AccentIcon";
import { IconButton } from "../../IconButton";
import { InlineSVG } from "../../InlineSVG";
import { Typography } from "../../Typography";
import "../Dialog.scss";

import {
  AccentCircle,
  MobileModalCurveTop,
  DesktopModalCurveTop
} from "../../../assets/svg";

const ExposedFeatureTrigger = ({
  accentIcon,
  accentIconColor,
  context,
  exposedText,
  testId
}) => {
  const isMobileViewport = useMediaQuery({
    query: "(max-width: 767px)" // `min-width` value is from dls/src/styles/variables/_media-queries.scss
  });
  const { isOpen, openedBy, open } = React.useContext(context);
  const [isTriggerVisible, setTriggerVisible] = React.useState(true);
  const [prevOpened, setPrevOpened] = React.useState(openedBy);
  const parent = React.useRef(null);
  const toggleFocusClass = () => {
    parent.current.classList.toggle("focused");
  };
  const KEYCODE_ENTER = 13;
  const KEYCODE_SPACE = 32;

  // classnames for trigger container
  const triggerClasses = classNames("feature-modal-exposed-trigger");

  React.useEffect(() => {
    setPrevOpened(!!openedBy); // save a boolean instead of object
    setTriggerVisible(!prevOpened && !isOpen); // if dialog hasn't been opened yet
  }, [openedBy]);

  if (isTriggerVisible) {
    return (
      <div className={triggerClasses} ref={parent}>
        <div
          className="dialog-scroll"
          onClick={open}
          onKeyDown={e => {
            if (
              e.key === "Enter" ||
              e.keyCode === KEYCODE_ENTER ||
              e.keyCode === KEYCODE_SPACE
            ) {
              open();
              setTriggerVisible(false);
              e.preventDefault();
            }
          }}
          onFocus={toggleFocusClass}
          onBlur={toggleFocusClass}
          role="button"
          tabIndex={0}
          data-testid={testId}
        >
          <InlineSVG
            path={
              isMobileViewport
                ? `${MobileModalCurveTop}`
                : `${DesktopModalCurveTop}`
            }
            title="Feature Trigger Top Curve"
            description={
              isMobileViewport
                ? "Feature Trigger Curve"
                : "Top of Feature Trigger Curve"
            }
            role="img"
            focus={false}
            className="dialog-top-curve"
          />
          <div className="dialog-accent-icon">
            <AccentIcon
              accent={AccentCircle}
              icon={accentIcon}
              iconColor={accentIconColor}
              testId="triggerAccentIcon"
            />
          </div>
          <Typography addClass="dialog-title" variant="headline-6">
            {exposedText}
          </Typography>
        </div>
        <IconButton
          addClass="dialog-close"
          click={() => setTriggerVisible(false)}
          icon="menuclose-bold"
          variantTypo="srt"
          variant="tiny"
          testId="closeExposedTrigger"
        >
          Close
        </IconButton>
      </div>
    );
  }
  return null;
};

ExposedFeatureTrigger.defaultProps = {};

ExposedFeatureTrigger.propTypes = {
  accentIcon: PropTypes.string,
  accentIconColor: PropTypes.string,
  context: PropTypes.shape({
    isOpen: PropTypes.bool,
    openedBy: PropTypes.node,
    open: PropTypes.func
  }),
  exposedText: PropTypes.string,
  testId: PropTypes.node
};

export default ExposedFeatureTrigger;
