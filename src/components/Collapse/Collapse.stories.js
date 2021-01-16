import React, { useState, useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { Collapse } from "./";
import { Button } from "../Button";
import { UtilityLink } from "../UtilityLink";
import { Typography } from "../Typography";

const parameters = {
  component: Collapse,
  componentSubtitle: "Utilize <Collapse /> to present a collapsible div",
  jest: ["Collapse"]
};

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. At augue eget arcu dictum. Hac habitasse platea dictumst quisque sagittis purus sit. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Eget est lorem ipsum dolor sit. Ut consequat semper viverra nam libero justo laoreet sit amet. Netus et malesuada fames ac turpis egestas sed. Congue quisque egestas diam in arcu cursus euismod quis viverra. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Diam maecenas sed enim ut sem viverra aliquet. Leo urna molestie at elementum. Pretium fusce id velit ut tortor pretium viverra.";
const content = (
  <Typography variant="body" htmlTagOverride="p">
    {paragraph.repeat(5)}
  </Typography>
);

const CollapseUseExampleComponentWithButton = ({ previewContent, variant }) => {
  const buttonRef = useRef();
  const [buttonText, setButtonText] = useState("Show More");
  const [isOpen, setIsOpen] = useState(false);
  const [isTriggerFocused, setTriggerFocus] = useState(false);

  const toggleFocusClass = () => {
    setTriggerFocus(!isTriggerFocused);
  };
  const toggleTrigger = () => {
    setIsOpen(!isOpen);
    setButtonText(isOpen ? "Show More" : "Show Less");
  };

  const exampleTrigger = (
    <Button
      mode="tertiary"
      addClass={classNames("collapse-trigger", "full-width")}
      click={toggleTrigger}
      ref={buttonRef}
      onBlur={toggleFocusClass}
      onFocus={toggleFocusClass}
    >
      {buttonText}
    </Button>
  );
  return (
    <Collapse
      isOpen={isOpen}
      trigger={exampleTrigger}
      isTriggerFocused={isTriggerFocused}
      variant={variant}
      previewContent={previewContent}
    >
      {content}
    </Collapse>
  );
};
const CollapseUseExampleComponentWithUtilityLink = forwardRef(
  ({ previewContent, variant }, headlineRef) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTriggerFocused, setTriggerFocus] = useState(false);

    const toggleFocusClass = () => {
      setTriggerFocus(!isTriggerFocused);
    };
    const toggleTrigger = () => {
      setIsOpen(!isOpen);
    };

    const exampleTrigger = (
      <UtilityLink
        icon="arrows-caretup-bold"
        iconSize={18}
        title="Product Info"
        to="#"
        typoVariant="subtitle"
        addClass={classNames("collapse-trigger", "full-width")}
        onClick={event => {
          event.preventDefault();
          toggleTrigger();
        }}
        onBlur={toggleFocusClass}
        onFocus={toggleFocusClass}
        ref={headlineRef}
      />
    );
    return (
      <Collapse
        isOpen={isOpen}
        trigger={exampleTrigger}
        isTriggerFocused={isTriggerFocused}
        variant={variant}
        previewContent={previewContent}
      >
        {content}
      </Collapse>
    );
  }
);
const CollapseUseExampleComponentWithCheckbox = ({
  previewContent,
  variant
}) => {
  const checkRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isTriggerFocused, setTriggerFocus] = useState(false);

  const toggleFocusClass = () => {
    setTriggerFocus(!isTriggerFocused);
  };
  const toggleTrigger = () => {
    setIsOpen(!isOpen);
  };

  const exampleCheckbox = (
    <label htmlFor="trigger">
      <Typography variant="body">Trigger</Typography>
      <input
        id="trigger"
        type="checkbox"
        className={classNames("collapse-trigger")}
        onChange={toggleTrigger}
        ref={checkRef}
        onBlur={() => toggleFocusClass()}
        onFocus={() => toggleFocusClass()}
        style={{ marginLeft: "10px" }}
      />
    </label>
  );
  return (
    <Collapse
      isOpen={isOpen}
      trigger={exampleCheckbox}
      isTriggerFocused={isTriggerFocused}
      variant={variant}
      previewContent={previewContent}
    >
      {content}
    </Collapse>
  );
};

storiesOf("components/Collapse", module)
  .addParameters(parameters)
  .addDecorator(withKnobs())
  .add("Button Trigger", () => (
    <CollapseUseExampleComponentWithButton
      variant={select("variant", ["default", "fade-preview"], "fade-preview")}
      previewContent={text("Preview Content", "")}
    >
      {content}
    </CollapseUseExampleComponentWithButton>
  ))
  .add("Utility Link Trigger", () => (
    <CollapseUseExampleComponentWithUtilityLink
      variant={select("variant", ["default", "fade-preview"], "default")}
      previewContent={text("Preview Content", "")}
    >
      {content}
    </CollapseUseExampleComponentWithUtilityLink>
  ))
  .add("Checkbox Trigger", () => (
    <CollapseUseExampleComponentWithCheckbox
      variant={select("variant", ["default", "fade-preview"], "default")}
      previewContent={text("Preview Content", "")}
    >
      {content}
    </CollapseUseExampleComponentWithCheckbox>
  ));

CollapseUseExampleComponentWithButton.propTypes = {
  previewContent: PropTypes.node,
  variant: PropTypes.oneOf(["fade-preview", "default"])
};
CollapseUseExampleComponentWithUtilityLink.propTypes = {
  previewContent: PropTypes.node,
  variant: PropTypes.oneOf(["fade-preview", "default"])
};
CollapseUseExampleComponentWithCheckbox.propTypes = {
  previewContent: PropTypes.node,
  variant: PropTypes.oneOf(["fade-preview", "default"])
};
