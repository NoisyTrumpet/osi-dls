import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Typography } from "./";

const parameters = {
  component: Typography,
  componentSubtitle: "Utilize <Typography /> to present text",
  jest: ["Typography"]
};

storiesOf("components/Typography", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: [] }))
  .add("Default ", () => (
    <Typography variant="headline-1">Typography</Typography>
  ))
  .add("Text Align - Right", () => (
    <div style={{ textAlign: "right" }}>
      <Typography variant="headline-1">Typography</Typography>
    </div>
  ))
  .add("Text Align - Center", () => (
    <div style={{ textAlign: "center" }}>
      <Typography variant="headline-1">Typography</Typography>
    </div>
  ));
