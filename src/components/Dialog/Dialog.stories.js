import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { select, boolean } from "@storybook/addon-knobs";
import iconArray from "../Icon/helpers/getIconArray";
import { Dialog } from "../Dialog";
import { DialogExample, ExposedTriggerExample } from "./Dialog.example";

const parameters = {
  component: Dialog,
  componentSubtitle: "MicroModal powered dialogs",
  jest: ["Dialog"]
};

storiesOf("components/Dialog", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["type", "children"] }))
  .add("Modal", () => (
    <DialogExample
      accentIcon={select("icon", iconArray, "achievement-bold")}
      hideOverlay={boolean("hideOverlay", false)}
      type="modal"
    />
  ))
  .add("Feature Modal", () => (
    <DialogExample
      accentIcon={select("icon", iconArray, "achievement-bold")}
      hideOverlay={boolean("hideOverlay", false)}
      type="feature-modal"
    />
  ))
  .add("Feature Modal - Exposed Trigger", () => (
    <ExposedTriggerExample
      accentIcon={select("icon", iconArray, "achievement-bold")}
      hasGrayBackground={boolean("hasGrayBackground", true)}
      hideOverlay={boolean("hideOverlay", false)}
      type="feature-modal"
    />
  ))
  .add("Drawer - Left", () => <DialogExample type="drawer-left" />)
  .add("Drawer - Right", () => <DialogExample type="drawer-right" />)
  .add("Drawer - Bottom", () => (
    <DialogExample
      accentIcon={select("icon", iconArray, "achievement-bold")}
      hideOverlay={boolean("hideOverlay", false)}
      type="drawer-bottom"
    />
  ))
  .add("Drawer - Top", () => (
    <DialogExample
      accentIcon={select("icon", iconArray, "achievement-bold")}
      hideOverlay={boolean("hideOverlay", false)}
      type="drawer-top"
    />
  ));
