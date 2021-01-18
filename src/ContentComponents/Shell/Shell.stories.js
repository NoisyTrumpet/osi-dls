/* eslint-disable import/no-unresolved */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Shell } from "./";

storiesOf("Content Components/Shell", module)
  .addDecorator(withSmartKnobs())
  .add("Full Width", () => <Shell>Full Width</Shell>)
  .add("Contained", () => <Shell contained>contained coontent</Shell>);
