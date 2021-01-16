import React from "react";
import { storiesOf } from "@storybook/react";
import { ContentCard } from "./";
import { Grid } from "../Grid";
import * as mockContentCardData from "./mockData/mockContentCardData.json";

const cards = mockContentCardData.cards.map(card => (
  <ContentCard
    type="media"
    theme="vertical"
    cardData={card}
    key={card.title + card.href.url}
  />
));

const parameters = {
  component: ContentCard,
  componentSubtitle:
    "The <ContentCard /> tag defines a clickable Card component with options, such as image, video, title, copy, and various layouts",
  jest: ["CotentCard"]
};

storiesOf("components/ContentCard", module)
  .addParameters(parameters)
  .add("Default", () => <Grid grid={4}>{cards}</Grid>);
