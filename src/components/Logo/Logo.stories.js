import React from "react";
// import PropTypes from 'prop-types';
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Logo } from "./";

const storyTitle = "components/Logo"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const LogoParameters = {
  component: Logo,
  componentSubtitle: "Utilize <Logo /> to present Logo in different variations",
  jest: ["Logo"]
};

storiesOf(storyTitle, module)
  .addParameters(LogoParameters)
  .addDecorator(withSmartKnobs())
  .add("With Knobs", () => (
    <Logo variant="regular" title="Logo Title" description="Logo Description" />
  ));
storiesOf(storyTitle, module)
  .addParameters(LogoParameters)
  .add("Regular", () => (
    <Logo variant="regular" title="Logo Title" description="Logo Description" />
  ))
  .add("Horizontal", () => (
    <Logo
      variant="horizontal"
      title="Logo Title"
      description="Logo Description"
    />
  ))
  .add("Mark", () => (
    <Logo variant="mark" title="Logo Title" description="Logo Description" />
  ))
  .add("Animated", () => (
    <Logo
      variant="regular"
      title="Logo Title"
      description="Logo Description"
      animated
    />
  ));
