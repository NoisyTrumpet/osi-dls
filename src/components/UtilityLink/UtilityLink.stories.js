import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { select } from "@storybook/addon-knobs";
import { UtilityLink } from "./";
import iconArray from "../Icon/helpers/getIconArray";

const parameters = {
  component: UtilityLink,
  componentSubtitle: "Utilize <UtilityLink /> to present hyperlinks",
  jest: ["UtilityLink"]
};

storiesOf("components/UtilityLink", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["icon"] }))
  .add("Default", () => (
    <UtilityLink
      to="https://osilife.com/"
      title="Utility Link"
      icon={select("icon", iconArray, "placeholder-bold")}
    />
  ));
