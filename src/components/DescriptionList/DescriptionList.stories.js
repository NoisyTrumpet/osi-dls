import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { DescriptionList } from "./";

const storyTitle = "components/DescriptionList"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const DescriptionListParameters = {
  component: DescriptionList,
  componentSubtitle:
    "Utilize <DescriptionList /> to present a list of descriptions with icons to the left. Icons are optional",
  jest: ["DescriptionList"]
};

// Array of components that will be passed to the {content} prop of SimpleContent
const dataWithIcons = [
  {
    icon: "card-front",
    titleText: "Front",
    descriptionText: "You can do anything when you set your mind to it."
  },
  {
    titleText: "Inside",
    descriptionText: "Can't wait to see what this year brings!"
  },
  {
    icon: "mail",
    titleText: "Envelope & Seal",
    descriptionText:
      "Includes one card and one envelope with a Gold Crown seal. Envelope color may vary."
  }
];

const dataWithoutIcons = [
  {
    titleText: "Front",
    descriptionText: "You can do anything when you set your mind to it."
  },
  {
    titleText: "Inside",
    descriptionText: "Can't wait to see what this year brings!"
  },
  {
    titleText: "Envelope & Seal",
    descriptionText:
      "Includes one card and one envelope with a Gold Crown seal. Envelope color may vary."
  }
];

storiesOf(storyTitle, module)
  .addParameters(DescriptionListParameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["icon"] }))
  .add("Description List With Icons", () => (
    <DescriptionList descriptionListData={dataWithIcons} />
  ))
  .add("Description List Without Icons", () => (
    <DescriptionList descriptionListData={dataWithoutIcons} />
  ));
