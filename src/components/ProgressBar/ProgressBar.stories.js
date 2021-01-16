import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { ProgressBar } from "./";

const storyTitle = "components/ProgressBar"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const parameters = {
  component: ProgressBar,
  componentSubtitle: "A generic progress bar.",
  jest: ["ProgressBar"]
};

storiesOf(storyTitle, module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: [] }))
  .add("Default", () => <ProgressBar progress={1} progressComplete={10} />);
