import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { CulturalIndicator } from "./";

const parameters = {
  component: CulturalIndicator,
  componentSubtitle:
    "The <CulturalIndicator/> tag defines a <img> tag with optional sources. This component does not render children.",
  jest: ["CulturalIndicator"]
};

storiesOf("components/CulturalIndicator", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: "onClick" }))
  .add("Default", () => (
    <CulturalIndicator
      src="https://www.noisytrumpet.com/wp-content/uploads/2021/01/osi.png"
      alt="OSI-LIFE"
    />
  ));
