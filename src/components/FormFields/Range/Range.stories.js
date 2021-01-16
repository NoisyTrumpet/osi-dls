import React from "react";
import { storiesOf } from "@storybook/react";
import withFormik from "storybook-formik";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Range } from "./";

const storyTitle = "components/Form Fields/Range"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const CheckboxParameters = {
  component: Range,
  componentSubtitle: "Utilize Range to present a range",
  jest: ["Range"]
};

storiesOf(storyTitle, module)
  .addParameters(CheckboxParameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["range", "showValueInLabel"] }))
  .addDecorator(withFormik)
  .add("Dynamic Label", () => (
    <Range
      domId="test-id"
      name="test-name"
      label="Size - "
      showValueInLabel
      tickCount={3}
      range={["Small", "Medium", "Large"]}
    />
  ))
  .add("Static Label", () => (
    <Range
      domId="test-id"
      name="test-name"
      label="Range Label"
      showValueInLabel
      step="5"
      tickCount={5}
      range={{
        min: "0",
        max: "100"
      }}
    />
  ));
