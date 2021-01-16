import React from "react";
import { storiesOf } from "@storybook/react";
import { TagList } from "./";

const storyTitle = "components/TagList"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const TagListParameters = {
  component: TagList,
  componentSubtitle: "Utilize <TagList /> to present tags as a list of buttons",
  jest: ["TagList"]
};

const tagItems = [
  { name: "camel", url: "#" },
  { name: "friendship", url: "#" },
  { name: "funny", url: "#" },
  { name: "glossy", url: "#" },
  { name: "green", url: "#" },
  { name: "shoebox", url: "#" },
  { name: "sign-and-send", url: "#" },
  { name: "zinger", url: "#" }
];

storiesOf(storyTitle, module)
  .addParameters(TagListParameters)
  .add("Default", () => (
    <div>
      <TagList items={tagItems} />
    </div>
  ))
  .add("Constrained in a 320px <div>", () => (
    <div style={{ width: 320 }}>
      <TagList items={tagItems} />
    </div>
  ))
  .add("render button", () => (
    <div>
      <TagList items={tagItems} variant="button" />
    </div>
  ))
  .add("render textlink", () => (
    <div>
      <TagList items={tagItems} variant="textlink" />
    </div>
  ));
