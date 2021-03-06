import React from "react";
import { storiesOf } from "@storybook/react";
import withFormik from "storybook-formik";
import { select, boolean } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { TextFieldMultiline } from "./";
import iconArray from "../../Icon/helpers/getIconArray";

const TextFieldParameters = {
  component: TextFieldMultiline,
  componentSubtitle: "Utilize <TextFieldMultiline /> to present fields",
  jest: ["TextFieldMultiline"]
};

storiesOf("components | Form Fields/Text Field - Multiline", module)
  .addParameters(TextFieldParameters)
  .addDecorator(
    withSmartKnobs({
      ignoreProps: [
        "icon",
        "touched",
        "type",
        "maxLength",
        "children",
        "storybookErrorPreview"
      ]
    })
  )
  .addDecorator(withFormik)
  .add("Default", () => (
    <TextFieldMultiline
      label="Label"
      name="myInputName"
      domId="myDomId"
      helperText="Optional helper text"
      hideLabel={boolean("hideLabel", false)}
      icon={select("icon", iconArray, "placeholder-bold")}
      storybookErrorPreview={boolean("error", false)}
      required
    />
  ))
  .add("With Min Rows", () => (
    <TextFieldMultiline
      label="Label"
      name="myInputName"
      domId="myDomId"
      minRows="3"
      helperText="Optional helper text"
      hideLabel={boolean("hideLabel", false)}
      icon={select("icon", iconArray, "placeholder-bold")}
      storybookErrorPreview={boolean("error", false)}
      required
    />
  ))
  .add("With Max Rows", () => (
    <TextFieldMultiline
      label="Label"
      name="myInputName"
      domId="myDomId"
      maxRows="5"
      helperText="Optional helper text"
      hideLabel={boolean("hideLabel", false)}
      icon={select("icon", iconArray, "placeholder-bold")}
      storybookErrorPreview={boolean("error", false)}
      required
    />
  ));
