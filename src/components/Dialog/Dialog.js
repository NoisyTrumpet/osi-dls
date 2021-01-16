import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { trapFocus, canUseDOM, bodyScroll } from "../../util";
import { AccentIcon } from "../AccentIcon";
import { IconButton } from "../IconButton";
import { InlineSVG } from "../InlineSVG";
import { Typography } from "../Typography";
import "./Dialog.scss";

import {
  AccentCircle,
  MobileModalCurveTop,
  DesktopModalCurveBottom,
  DesktopModalCurveTop
} from "../../assets/svg";

const Dialog = ({
  accentIcon,
  accentIconColor,
  addDialogClass,
  appendEl, // append an element to trapFocus in utils.js
  children,
  disableTrapFocus, // disable trapFocus in utils.js
  exposedTrigger,
  hasGrayBackground,
  hideOverlay,
  id,
  isOpen,
  onClose,
  prependEl, // prepend an element to trapFocus in utils.js
  testId,
  title,
  titleDisabled,
  type
}) => {
  // Unicode value of the `TAB` and `ESC` key
  const KEYCODE_ESC = 27;

  const dialog = useRef(null);
  const overlay = useRef(null);
  const close = useRef(null);

  let removeKeyDown;

  // classnames for dialog container
  const dialogClasses = classNames(
    "dialog-container",
    hideOverlay && "hide-overlay",
    addDialogClass
  );

  // classnames for dialog wrapper
  const dialogWrapperClasses = classNames(
    "dialog-wrapper",
    hasGrayBackground && "dialog-wrapper-gray",
    exposedTrigger && "exposed-trigger"
  );

  const triggerOnCloseCallback = () => {
    if (onClose) {
      onClose();
    }
  };

  // closeMethod (str) = how the close is being triggered
  // element = what user just clicked on to close the dialog and call this function
  const closeDialog = (closeMethod, element) => {
    if (closeMethod === "escape-key") {
      triggerOnCloseCallback();
    }
    if (closeMethod === "close-button" || closeMethod === "overlay") {
      const exclude = element.target.classList;
      if (
        exclude.contains("dialog-overlay") ||
        exclude.contains("dialog-close")
      ) {
        triggerOnCloseCallback();
      }
    }
    if (removeKeyDown) {
      removeKeyDown();
      removeKeyDown = null;
    }
  };

  // Update page when the 'isOpen' prop changes.
  // 'isOpen' is controlled in the parent component,
  // so true here means "please open the dialog."
  useEffect(() => {
    if (isOpen && !disableTrapFocus) {
      // need a little time for the dialog to appear to safely focus
      setTimeout(() => {
        removeKeyDown = trapFocus(dialog.current, prependEl, appendEl);
        bodyScroll(false);
      }, 100);
    } else {
      closeDialog("initial-trigger");
      bodyScroll(true);
    }
  }, [isOpen]);

  const onKeyDown = e => e.keyCode === KEYCODE_ESC && closeDialog("escape-key");

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const DialogComponent = () => (
    <div
      className={dialogClasses}
      id={id}
      data-testid={testId}
      data-open={isOpen}
      data-animate={type}
      aria-hidden={!isOpen}
      ref={dialog}
    >
      <div
        className="dialog-overlay"
        tabIndex="-1"
        onClick={e => closeDialog("overlay", e)}
        role="presentation"
        ref={overlay}
      >
        <div // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
          className={dialogWrapperClasses}
          data-type={type}
          aria-modal="true"
          aria-labelledby={`${id}-title`}
          role="dialog"
          onKeyDown={e => onKeyDown(e)}
        >
          <div className="dialog-scroll">
            {(type === "drawer-bottom" || type === "feature-modal") && (
              <InlineSVG
                path={
                  type === "drawer-bottom" || isMobile
                    ? `${MobileModalCurveTop}`
                    : `${DesktopModalCurveTop}`
                }
                title="Dialog Top Curve"
                description={isMobile ? "Drawer Curve" : "Top of Modal Curve"}
                role="img"
                focus={false}
                className="dialog-top-curve"
              />
            )}

            {type === "feature-modal" && (
              <InlineSVG
                path={
                  isMobile
                    ? `${MobileModalCurveTop}`
                    : `${DesktopModalCurveTop}`
                }
                title="Dialog Bottom Curve"
                description={
                  isMobile ? "Drawer Curve" : "Bottom of Modal Curve"
                }
                role="img"
                focus={false}
                className="dialog-top-curve"
              />
            )}

            {(type === "feature-modal" || type === "drawer-bottom") &&
              accentIcon && (
                <div
                  className={
                    type === "feature-modal"
                      ? "dialog-accent-icon"
                      : "dialog-title-icon"
                  }
                >
                  <AccentIcon
                    accent={AccentCircle}
                    icon={accentIcon}
                    iconColor={accentIconColor}
                  />
                </div>
              )}

            {!titleDisabled && (
              <Typography
                id={`${id}-title`}
                variant={type === "toast" ? "subtext" : "headline-5"}
                addClass="dialog-title"
              >
                {title}
              </Typography>
            )}

            <div id={`${id}-content`} className="dialog-content">
              {children}
            </div>

            {type === "feature-modal" && !isMobile && (
              <InlineSVG
                path={`${DesktopModalCurveBottom}`}
                title="Dialog Bottom Curve"
                description="Top of Modal Curve"
                role="img"
                focus={false}
                className="dialog-bottom-curve"
              />
            )}
          </div>

          {type !== "drawer-left" && type !== "drawer-right" && (
            <IconButton
              click={e => closeDialog("close-button", e)}
              icon="menuclose-bold"
              addClass="dialog-close"
              variantTypo="srt"
              ref={close}
              variant={type === "toast" ? "simple" : "tiny"}
              testId="closeDialogButton"
            >
              {`Close ${title}`}
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );

  if (canUseDOM()) {
    // use createPortal to place the dialog at the end of the body tag
    return ReactDOM.createPortal(<DialogComponent />, document.body);
  }
  return <DialogComponent />;
};

Dialog.defaultProps = {
  id: `dialog-${Math.floor(Math.random() * 10000)}`,
  type: "modal",
  title: "Dialog Window"
};

Dialog.propTypes = {
  accentIcon: PropTypes.string,
  accentIconColor: PropTypes.string,
  addDialogClass: PropTypes.string,
  appendEl: PropTypes.string, // appendEl="button.dialog-close"
  children: PropTypes.node,
  disableTrapFocus: PropTypes.bool,
  exposedTrigger: PropTypes.bool,
  hasGrayBackground: PropTypes.bool,
  hideOverlay: PropTypes.bool,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  prependEl: PropTypes.string,
  testId: PropTypes.string,
  type: PropTypes.oneOf([
    "modal",
    "feature-modal",
    "toast",
    "drawer-left",
    "drawer-right",
    "drawer-bottom",
    "drawer-top"
  ]),
  title: PropTypes.string,
  titleDisabled: PropTypes.bool
};

export default Dialog;
