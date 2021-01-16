import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { select, boolean } from "@storybook/addon-knobs";
import { IconButton } from "./";
import iconArray from "../Icon/helpers/getIconArray";

const parameters = {
  component: IconButton,
  componentSubtitle:
    "The <IconButton /> tag defines a clickable button with an icon inside it. The circular variant will place a circle around the icon.",
  jest: ["IconButton"]
};

storiesOf("components/IconButton", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["disabled", "icon"] }))
  .add("Default", () => (
    <IconButton
      disabled={boolean("disabled", false)}
      icon={select("icon", iconArray, "add-bold")}
    >
      +
    </IconButton>
  ));
