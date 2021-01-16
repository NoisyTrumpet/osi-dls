import React from "react";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";

import iconArray from "../Icon/helpers/getIconArray";
import { AccentIcon } from "./";

const parameters = {
  component: AccentIcon,
  componentSubtitle: "Utilize <AccentIcon /> to present icons",
  jest: ["AccentIcon"]
};

storiesOf("components/AccentIcon", module)
  .addParameters(parameters)
  .addDecorator(
    withSmartKnobs({ ignoreProps: ["icon", "accent", "accentColor"] })
  )
  .add("Default", () => (
    <AccentIcon icon={select("icon", iconArray, "achievement-bold")} />
  ));
