import React from "react";
import { storiesOf } from "@storybook/react";

import { DataLayer } from "./";
import { Typography } from "../Typography";
// init for Storybook
import "./testScripts/initScript";

const parameters = {
  component: DataLayer,
  componentSubtitle:
    "Utilize <DataLayer /> to create and edit the datalayer for analytics",
  jest: ["DataLayer"]
};

const exampleObj = '{ "cart": { "productId": "12345" }}';
const exampleArray =
  '{ "eventInfo": { "eventName": "Find a store", "eventAction": "Show More" }}';

storiesOf("components/DataLayer", module)
  .addParameters(parameters)
  .add("Default", () => (
    <div>
      <Typography variant="headline-5">Example DataLayer</Typography>
      <DataLayer dataKey="test" dataValue="Push was successful" />
    </div>
  ))
  .add("Reassign Existing key", () => (
    <div>
      <Typography variant="headline-5">DataLayer with existing key</Typography>
      <DataLayer dataKey="title" dataValue="Homepage" />
      <DataLayer dataKey="test" dataValue="Second Push was successful" />
    </div>
  ))
  .add("Add key with depth", () => (
    <div>
      <Typography variant="headline-5">
        DataLayer with existing key with depth
      </Typography>
      <DataLayer
        dataKey="example"
        dataValue="Adding value several keys deep"
        depth="page.pageInfo"
      />
    </div>
  ))
  .add("Add Promo Id", () => (
    <div>
      <Typography variant="headline-5">
        DataLayer with Promo Banner Campaign ID
      </Typography>
      <DataLayer
        dataKey="promoBanners"
        dataValue="shp_mf_brws_ed_all_cards_1"
      />
    </div>
  ))
  .add("Add Object", () => (
    <div>
      <Typography variant="headline-5">DataLayer with new object</Typography>
      <DataLayer dataObj={exampleObj} />
    </div>
  ))
  .add("Push to Array", () => (
    <div>
      <Typography variant="headline-5">DataLayer with push to array</Typography>
      <DataLayer depth="modal" dataKey="event" dataArray={exampleArray} />
    </div>
  ));
