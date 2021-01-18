import React from "react";
// import PropTypes from 'prop-types';
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Nav } from "./";

const storyTitle = "components/Nav"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const NavParameters = {
  component: Nav,
  componentSubtitle: "Utilize <Nav /> to present Nav in different variations",
  jest: ["Nav"]
};

storiesOf(storyTitle, module)
  .addParameters(NavParameters)
  .addDecorator(withSmartKnobs())
  .add("With Knobs", () => <Nav />);
