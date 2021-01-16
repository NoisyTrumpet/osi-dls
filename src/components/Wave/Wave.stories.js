import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { boolean } from "@storybook/addon-knobs";
import { Wave } from "./";

const storyTitle = "components/Wave"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const parameters = {
  component: Wave,
  componentSubtitle: "A visual wave component",
  jest: ["Wave"]
};

storiesOf(storyTitle, module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["reverseDirection"] }))
  .add("Default", () => (
    <Wave reverseDirection={boolean("reverseDirection", false)} />
  ));
