import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { SimpleContent } from "./";
import { Typography } from "../Typography";
import { TextLink } from "../TextLink";
import iconArray from "../Icon/helpers/getIconArray";

const storyTitle = "components/SimpleContent"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const SimpleContentParameters = {
  component: SimpleContent,
  componentSubtitle: "Utilize <SimpleContent /> to present simple content",
  jest: ["SimpleContent"]
};

// Array of components that will be passed to the {content} prop of SimpleContent
const content = [
  <p key="paragraph">
    <TextLink
      typo-variant="text-link"
      title="Past And Presents Card Gifts &amp; Home"
      to="https://osilife.com"
    />
  </p>,
  <Typography key="address" variant="body">
    15020 W 87th St Pkwy
    <br />
    Lenexa, KS 66215
  </Typography>
];

storiesOf(storyTitle, module)
  .addParameters(SimpleContentParameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["icon"] }))
  .add("Default", () => (
    <div>
      <SimpleContent
        title="Pick Up in Store"
        icon={select("icon", iconArray, "store")}
        subhead="Sun. 2/23 &mdash; Fri. 2/28"
        content={content}
      />
    </div>
  ))
  .add("SimpleContent contained in a 220px wide <div>", () => (
    <div style={{ width: 220 }}>
      <SimpleContent
        title="Pick Up in Store"
        icon={select("icon", iconArray, "store")}
        subhead="Sun. 2/23 &mdash; Fri. 2/28"
        content={content}
      />
    </div>
  ));
