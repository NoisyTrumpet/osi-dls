import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { boolean } from "@storybook/addon-knobs";
import withFormik from "storybook-formik";
import { ToggleSwitch } from "./";

const parameters = {
  component: ToggleSwitch,
  componentSubtitle: "Utilize <ToggleSwitch /> for toggle switches",
  jest: ["ToggleSwitch"]
};

storiesOf("components/Form Fields/ToggleSwitch", module)
  .addParameters(parameters)
  .addDecorator(
    withSmartKnobs({
      ignoreProps: ["isChecked", "children", "storybookErrorPreview"]
    })
  )
  .addDecorator(withFormik)
  .add("Default", () => (
    <ToggleSwitch
      name="toggleSwitch"
      label="Label"
      domId="toggleSwitch"
      storybookErrorPreview={boolean("error", false)}
      helperText="Optional helper text"
    />
  ));
