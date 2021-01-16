import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { LikeButtons } from "./";

const parameters = {
  component: LikeButtons,
  componentSubtitle:
    "The <LikeButtons /> tag defines 2 clickable buttons with the like and dislike icons and a number count displyed by each.",
  jest: ["LikeButtons"]
};

const count = { likes: 10, dislikes: 0 };

storiesOf("components/Like Buttons", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["disabled", "icon"] }))
  .add("Default", () => (
    <LikeButtons
      domId="exampleProduct"
      likeCount={count}
      likeText="Like this card"
      dislikeText="Dislike this card"
    />
  ));
