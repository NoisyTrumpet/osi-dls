import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Tooltip } from "./";

const parameters = {
  component: Tooltip,
  componentSubtitle: "The <Tooltip /> tag defines a clickable Tooltip",
  jest: ["Tooltip"]
};

const storyStyles = storyFn => (
  // Center story so we can see all tooltips
  <div
    style={{
      position: "relative",
      margin: "100px auto",
      display: "block",
      textAlign: "center"
    }}
  >
    {storyFn()}
  </div>
);

const tooltipTitle = "Amet Dapibus Nibh";

const tooltipContent =
  "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.";

storiesOf("components/Tooltip", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["disabled"] }))
  .addDecorator(storyStyles)
  .add("Default", () => (
    <Tooltip content={tooltipContent}>Fusce dapibus, tellus ac cursus.</Tooltip>
  ))
  .add("Tooltip w/ Title", () => (
    <Tooltip title={tooltipTitle} content={tooltipContent}>
      Fusce dapibus, tellus ac cursus.
    </Tooltip>
  ))
  .add("Tooltip w/ Icon", () => (
    <Tooltip
      content={tooltipContent}
      orientation="bottom"
      caretAlignment="left-align"
      icon="info-bold"
    >
      Fusce dapibus, tellus ac cursus.
    </Tooltip>
  ));
