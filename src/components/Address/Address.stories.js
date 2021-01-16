import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Address } from "./";

const parameters = {
  component: Address,
  componentSubtitle:
    "Utilize <Address /> to present preferred store or hyperlink",
  jest: ["Address"]
};

const store = {
  title: "Trudy's Hallmark Shop",
  address1: "Barton Creek Square",
  address2: "2901 S Capitol of Texas Highway",
  address3: "Ste D10",
  city: "Austin",
  state: "TX",
  zip: "78756"
};

storiesOf("components/Address", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: [] }))
  .add("Default", () => (
    <Address
      title={store.title}
      address1={store.address1}
      address2={store.address2}
      address3={store.address3}
      city={store.city}
      state={store.state}
      zip={store.zip}
    />
  ));
