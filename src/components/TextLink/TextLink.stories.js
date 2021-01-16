import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { TextLink } from "./";
import iconArray from "../Icon/helpers/getIconArray";

const parameters = {
  component: TextLink,
  componentSubtitle: "Utilize <TextLink /> to present hyperlinks",
  jest: ["TextLink"]
};

storiesOf("components/TextLink", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["icon"] }))
  .add("Default", () => (
    <TextLink
      to="https://osilife.com/"
      title="Text Link"
      icon={select("icon", iconArray, "placeholder-bold")}
    />
  ));

storiesOf("components/TextLink", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["icon"] }))
  .add("Quick Link", () => (
    <TextLink
      to="https://osilife.com/"
      title="Text Link"
      defaultClassOverride="btn btn-tertiary"
      typoVariant="cta-tertiary"
      color="primary"
      icon={select("icon", iconArray, "placeholder-bold")}
    />
  ));

storiesOf("components/TextLink", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["icon"] }))
  .add("icon-right", () => (
    <TextLink
      to="https://osilife.com/"
      title="Text Link"
      icon="placeholder-bold"
      iconPos="right"
    />
  ));

storiesOf("components/TextLink", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["icon"] }))
  .add("icon-left", () => (
    <TextLink
      to="https://osilife.com/"
      title="Text Link"
      icon="placeholder-bold"
      iconPos="left"
    />
  ));
