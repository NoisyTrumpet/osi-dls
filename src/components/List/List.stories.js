import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { List } from "./";
import { Typography } from "../Typography";

const storyTitle = "components/List"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const parameters = {
  component: List,
  componentSubtitle:
    "The <List /> tag defines a list component (defaults to an unordered list)",
  jest: ["List"]
};

storiesOf(storyTitle, module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["children"] }))
  .add("Default", () => (
    <List>
      <List.Item>
        <Typography variant="body">Text 1</Typography>
      </List.Item>
      <List.Item>
        <Typography variant="body">Text 2</Typography>
      </List.Item>
      <List.Item>
        <Typography variant="body">Text 3</Typography>
      </List.Item>
    </List>
  ))
  .add("List within a list", () => (
    <List>
      <List.Item>
        <Typography variant="body">Text 1</Typography>
      </List.Item>
      <List.Item>
        <Typography variant="body">Text 2</Typography>
      </List.Item>
      <List.Item>
        <Typography variant="body">Text 3</Typography>
        <List>
          <List.Item>
            <Typography variant="body">Text 4</Typography>
          </List.Item>
          <List.Item>
            <Typography variant="body">Text 5</Typography>
          </List.Item>
          <List.Item>
            <Typography variant="body">Text 6</Typography>
          </List.Item>
        </List>
      </List.Item>
    </List>
  ));
