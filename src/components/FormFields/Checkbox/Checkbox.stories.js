import React from "react";
import { storiesOf } from "@storybook/react";
import withFormik from "storybook-formik";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { boolean } from "@storybook/addon-knobs";
import { Checkbox } from "./";

const storyTitle = "components/Form Fields/Checkbox"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const CheckboxParameters = {
  component: Checkbox,
  componentSubtitle: "Utilize Checkbox to present a checkbox",
  jest: ["Checkbox"]
};

storiesOf(storyTitle, module)
  .addParameters(CheckboxParameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["isFieldSet", "click"] }))
  .addDecorator(withFormik)
  .add("Default", () => (
    <>
      <Checkbox
        name="myCheckbox"
        domId="myDomId"
        isDisabled={boolean("isDisabled", false)}
        storybookErrorPreview={boolean("error", false)}
        helperText="Optional helper text"
      >
        Label
      </Checkbox>
    </>
  ));
