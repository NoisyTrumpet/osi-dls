import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { SubBranding } from "./";

const parameters = {
  component: SubBranding,
  componentSubtitle:
    "The <SubBranding/> tag defines a <img> tag with optional sources. This component does not render children.",
  jest: ["SubBranding"]
};

storiesOf("components/SubBranding", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: "onClick" }))
  .add("Default", () => (
    <SubBranding
      src="https://www.noisytrumpet.com/wp-content/uploads/2021/01/osi.png"
      alt="OSI-LIFE"
    />
  ));
