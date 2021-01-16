import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import ContentPanels from "./ContentPanels";
import { Button } from "../Button";
import { TextLink } from "../TextLink";

import { Typography } from "../Typography";

const parameters = {
  component: ContentPanels,
  componentSubtitle: "The <ContentPanels/> tag",
  jest: ["CulturalIndicator"]
};

// const scrollToRef = (ref) => (typeof window !== 'undefined') && window.scrollTo(0, ref.current.offsetRight)

const ContentPanelsExample = () => {
  const [panel, showPanel] = React.useState(0);
  return (
    <ContentPanels showPanel={panel}>
      <ContentPanels.Panel id="panel-0">
        <Typography variant="body">Index 0</Typography>
        <Button click={() => showPanel(1)} ariaControls="panel-1">
          Go to next
        </Button>
        <TextLink
          to="https://osilife.com/"
          title="Text Link"
          icon="placeholder-bold"
        />
      </ContentPanels.Panel>
      <ContentPanels.Panel id="panel-1">
        <Typography variant="body">Index 1</Typography>
        <Button click={() => showPanel(0)} ariaControls="panel-0">
          Go to prev
        </Button>
        <Button click={() => showPanel(2)} ariaControls="panel-2">
          Go to next
        </Button>
        <TextLink
          to="https://osilife.com/"
          title="Text Link"
          icon="placeholder-bold"
        />
      </ContentPanels.Panel>
      <ContentPanels.Panel id="panel-2">
        <Typography variant="body">Index 2</Typography>
        <Button click={() => showPanel(1)} ariaControls="panel-1">
          Go to prev
        </Button>
        <Button click={() => showPanel(0)} ariaControls="panel-0">
          Go to first
        </Button>
      </ContentPanels.Panel>
    </ContentPanels>
  );
};

storiesOf("components/ContentPanels", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: [] }))
  .add("Default", () => (
    <div style={{ height: "500px", width: "500px" }}>
      <ContentPanelsExample />
    </div>
  ));
