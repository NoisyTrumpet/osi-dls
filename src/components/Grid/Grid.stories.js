import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { select } from "@storybook/addon-knobs";
import { Grid } from "./";

const storyTitle = "components/Grid"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const parameters = {
  component: Grid,
  componentSubtitle: "Basic grid to support page and component layouts",
  jest: ["Grid"]
};

storiesOf(storyTitle, module)
  .addParameters(parameters)
  .addDecorator(
    withSmartKnobs({
      ignoreProps: ["grid", "gap", "landscape", "portrait", "mobile"]
    })
  )
  .add("Default", () => (
    <Grid
      grid={select("grid", [1, 2, 3, 4, 6], 4)}
      landscape={select("landscape", [1, 2, 3, 4, 6], 3)}
      portrait={select("portrait", [1, 2, 3, 4, 6], 2)}
      mobile={select("mobile", [1, 2], 1)}
      gap={select("gap", [0, 8, 16, 24, 32], 16)}
    >
      <div>Col 1</div>
      <div>Col 2</div>
      <div>Col 3</div>
      <div>Col 4</div>
      <div>Col 5</div>
      <div>Col 6</div>
    </Grid>
  ));
