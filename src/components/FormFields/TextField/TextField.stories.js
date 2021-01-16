import React from "react";
import { storiesOf } from "@storybook/react";
import withFormik from "storybook-formik";
import { select, boolean } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Tooltip } from "../../Tooltip/";
import { Typography } from "../../Typography";
import { TextField } from "./";
import iconArray from "../../Icon/helpers/getIconArray";

const TextFieldParameters = {
  component: TextField,
  componentSubtitle: "Utilize <TextField /> to present fields",
  jest: ["TextField"]
};

storiesOf("components/Form Fields/Text Field", module)
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
    <TextField
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
  .add("With Tooltip", () => (
    <TextField
      label="Label"
      name="myInputName"
      domId="myDomId"
      helperText="Optional helper text"
      storybookErrorPreview={boolean("error", false)}
      icon={select("icon", iconArray, "placeholder-bold")}
    >
      <Tooltip
        content="Lorem ipsum dolor"
        orientation="bottom"
        caretAlignment="right-align"
        icon="info-bold"
      >
        <Typography variant="srt">More info</Typography>
      </Tooltip>
    </TextField>
  ));
