import React from "react";
// import PropTypes from 'prop-types';
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Footer } from "./";

const storyTitle = "components/Footer"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const FooterParameters = {
  component: Footer,
  componentSubtitle:
    "Utilize <Footer /> to present Footer in different variations",
  jest: ["Footer"]
};

storiesOf(storyTitle, module)
  .addParameters(FooterParameters)
  .addDecorator(withSmartKnobs())
  .add("With Knobs", () => <Footer />);
