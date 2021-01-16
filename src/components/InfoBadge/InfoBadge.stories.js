import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";

import { InfoBadge } from "./";

const parameters = {
  component: InfoBadge,
  componentSubtitle: "Utilize <InfoBadge /> to present the InfoBadge",
  jest: ["InfoBadge"]
};

storiesOf("components/InfoBadge", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: [] }))
  .add("Success", () => (
    <InfoBadge info="I am a Success info badge" preset="success" />
  ))
  .add("Error", () => (
    <InfoBadge info="I am a Error info badge" preset="error" />
  ))
  .add("Custom", () => (
    <InfoBadge info="I am Custom info badge" icon="star-bold" color="primary" />
  ));
