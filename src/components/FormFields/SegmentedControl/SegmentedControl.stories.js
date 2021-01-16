import React from "react";
import withFormik from "storybook-formik";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { array } from "@storybook/addon-knobs";
import SegmentedControl from "./SegmentedControl";

const segments = [
  { label: "Apple", value: "apple", icon: "brands-apple-bold" },
  { label: "Google", value: "google", icon: "brands-google-bold" },
  { label: "Calendar", value: "calendar", icon: "calendar-calendar-bold" },
  { label: "Card", value: "card", icon: "card-front-bold" }
];
const defaultSelected = 2;

const parameters = {
  component: SegmentedControl,
  componentSubtitle:
    "Utilize SegmentedControl to present 2 to 4 styled radio buttons",
  jest: ["SegmentedControl"]
};

storiesOf("components/Form Fields/SegmentedControl", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({}))
  .addDecorator(withFormik)
  .add("Default", () => (
    <SegmentedControl
      name="Example"
      segments={array("segments", segments)}
      defaultSelected={defaultSelected}
      legend="Segmented Control"
      domId="segmentedControl"
    />
  ));
