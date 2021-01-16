import React from 'react';
import PropTypes from 'prop-types';

import ExposedFeatureTrigger from './Fragments/ExposedFeatureTrigger';
import { Button } from '../Button';
import { Dialog, DialogManager } from '../Dialog';
import { IconButton } from '../IconButton';

/**
 *  Fully worked out example of how a Dialog is utilized by triggers anywhere in it's component tree
 */

// First, create a Context for every sub-app wide Dialog (ex. FilterFlyout)
const ExampleDialogContext = React.createContext(null);

const DialogExample = ({
  accentIcon,
  accentIconColor,
  hasGrayBackground,
  hideOverlay,
  type
}) => {
  // Use `<Dialog />` component with the necessary props, and set `isOpen` and `close` to the useContext values respectively
  const ExampleDialog = () => {
    const { isOpen, close } = React.useContext(ExampleDialogContext);
    return (
      <Dialog
        accentIcon={accentIcon}
        accentIconColor={accentIconColor}
        type={type}
        hasGrayBackground={hasGrayBackground}
        hideOverlay={hideOverlay}
        isOpen={isOpen}
        onClose={close}
        testId="modal"
      >
        <p>Tab through all the elements of the dialog to see how the focus traps works.</p>
        <a href="https://google.com">Link A</a>
      &nbsp;
        <a href="https://google.com">Link B</a>
        <br />
        <br />
        <Button mode="secondary">Button A</Button>
        <Button click={close}> Button B (extra close onClick)</Button>
      </Dialog>
    );
  };

  // Before rendering, call `DialogManager` to handle state and to wrap it in the ContextProvider
  const TriggerableDialog = DialogManager(ExampleDialog, ExampleDialogContext);

  // Create a dialog Trigger with useContext value of `open` as the onClick method
  const DialogTrigger = () => {
    const { open } = React.useContext(ExampleDialogContext);
    return (
      <IconButton click={open} icon="placeholder" variant="circular">Dialog Trigger</IconButton>
    );
  };

  const DialogTrigger2 = () => {
    const { open } = React.useContext(ExampleDialogContext);
    return (
      <Button click={open} mode="text-link">Dialog Trigger 2</Button>
    );
  };

  const DialogTrigger3 = () => {
    const { open } = React.useContext(ExampleDialogContext);
    return (
      <Button click={open} mode="quick-action-activated">Dialog Trigger 3</Button>
    );
  };

  const DialogTrigger4 = () => {
    const { open } = React.useContext(ExampleDialogContext);
    return (
      <Button click={open} mode="secondary">Dialog Trigger 4</Button>
    );
  };

  const DialogTrigger5 = () => {
    const { open } = React.useContext(ExampleDialogContext);
    return (
      <Button click={open} mode="primary">Dialog Trigger 5</Button>
    );
  };

  // Dialog is then contextually triggered by any child within it's component tree
  return (
    <TriggerableDialog>
      <div style={{ paddingBottom: '8px' }}>
        <DialogTrigger />
      </div>
      <ul>
        <li style={{ paddingBottom: '8px' }}><DialogTrigger2 /></li>
        <li style={{ paddingBottom: '8px', textAlign: 'center' }}>some text separating unique trigger elements…</li>
        <li style={{ paddingBottom: '8px' }}><DialogTrigger3 /></li>
        <li style={{ paddingBottom: '8px', textAlign: 'center' }}>some text separating unique trigger elements…</li>
        <li style={{ paddingBottom: '8px' }}><DialogTrigger4 /></li>
      </ul>
      <div style={{ paddingBottom: '8px' }}>
        <DialogTrigger5 />
      </div>
    </TriggerableDialog >
  );
};

const ExposedTriggerExample = ({
  accentIcon,
  accentIconColor,
  hasGrayBackground,
  hideOverlay,
  type
}) => {
  // Use `<Dialog />` component with the necessary props, and set `isOpen` and `close` to the useContext values respectively
  const ExampleDialog = () => {
    const { isOpen, close } = React.useContext(ExampleDialogContext);
    return (
      <Dialog
        type={type}
        accentIcon={accentIcon}
        exposedTrigger
        hasGrayBackground={hasGrayBackground}
        hideOverlay={hideOverlay}
        isOpen={isOpen}
        onClose={close}
        testId="modal"
      >
        <p>Tab through all the elements of the dialog to see how the focus traps works.</p>
        <a href="https://google.com">Link A</a>
      &nbsp;
        <a href="https://google.com">Link B</a>
        <br />
        <br />
        <Button mode="secondary">Button A</Button>
        <Button click={close}> Button B (extra close onClick)</Button>
      </Dialog>
    );
  };

  // Before rendering, call `DialogManager` to handle state and to wrap it in the ContextProvider
  const TriggerableDialog = DialogManager(ExampleDialog, ExampleDialogContext);

  // Dialog is then contextually triggered by any child within it's component tree
  return (
    <TriggerableDialog>
      <ExposedFeatureTrigger
        accentIcon={accentIcon}
        accentIconColor={accentIconColor}
        context={ExampleDialogContext}
        exposedText='Dialog Window'
        hasGrayBackground={hasGrayBackground}
        hideOverlay={hideOverlay}
        testId="featureTrigger"
      />
    </TriggerableDialog >
  );
};

DialogExample.propTypes = {
  accentIcon: PropTypes.string,
  accentIconColor: PropTypes.string,
  hasGrayBackground: PropTypes.bool,
  hideOverlay: PropTypes.bool,
  type: PropTypes.string,
};

ExposedTriggerExample.propTypes = {
  accentIcon: PropTypes.string,
  accentIconColor: PropTypes.string,
  hasGrayBackground: PropTypes.bool,
  hideOverlay: PropTypes.bool,
  type: PropTypes.string,
};

export { DialogExample, ExposedTriggerExample };
