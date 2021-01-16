import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Button } from "../Button";
import { Toast } from "./";
import { DialogManager } from "../Dialog";

const parameters = {
  component: Toast,
  componentSubtitle: "MicroModal powered dialogs",
  jest: ["Toast"]
};

// Create Toast Context
const ToastContext = React.createContext();

// Create Toast, consuming context
const ToastExample = () => {
  const { isOpen, close } = React.useContext(ToastContext);
  return (
    <Toast title="Toast Title" onClose={close} isOpen={isOpen}>
      Tab through all the elements of the dialog to see how the focus traps
      works.
    </Toast>
  );
};

// Create Toast Trigger, consuming context
const ToastTrigger = () => {
  const { open } = React.useContext(ToastContext);
  return <Button click={open}>Open Toast</Button>;
};

// Example that utilizes a triggerable Toast
const ToastStory = () => {
  // Call DialogManager HoC which wraps Toast with Toast ContextProvider, while handling state
  const TriggerableToast = DialogManager(ToastExample, ToastContext);
  return (
    <TriggerableToast>
      <div>
        <ToastTrigger />
      </div>
      <ul>
        <li>
          <ToastTrigger />
        </li>
        <li>
          <ToastTrigger />
        </li>
      </ul>
    </TriggerableToast>
  );
};

storiesOf("components/Toast", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: [] }))
  .add("Modal", () => <ToastStory />);
