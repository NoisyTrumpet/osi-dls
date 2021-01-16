import React from "react";
import { storiesOf } from "@storybook/react";
import { Breadcrumbs } from "./";

const storyTitle = "components/Breadcrumbs"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const parameters = {
  component: Breadcrumbs,
  componentSubtitle: "The <Breadcrumb /> tag defines Navigation Breadcrumbs",
  jest: ["Breadcrumbs"]
};

const breadcrumbsData = [
  {
    title: "Page",
    to: "#"
  },
  {
    title: "Page",
    to: "#"
  },
  {
    title: "Page",
    to: "#"
  },
  {
    title: "Page",
    to: "#"
  },
  {
    title: "Page",
    to: "#"
  }
];

storiesOf(storyTitle, module)
  .addParameters(parameters)
  .add("Breadcrumbs", () => (
    <Breadcrumbs breadcrumbs={breadcrumbsData} ariaLabel="breadcrumbs" />
  ))
  .add("Wrapping breadcrumbs", () => (
    <div style={{ width: "200px" }}>
      <Breadcrumbs
        breadcrumbs={breadcrumbsData.concat(breadcrumbsData)}
        ariaLabel="breadcrumbs"
      />
    </div>
  ))
  .add("More Examples", () => (
    <>
      <Breadcrumbs
        breadcrumbs={breadcrumbsData.slice(0, 1)}
        ariaLabel="breadcrumbs"
      />
      <br />
      <Breadcrumbs
        breadcrumbs={breadcrumbsData.slice(0, 2)}
        ariaLabel="breadcrumbs2"
      />
      <br />
      <Breadcrumbs
        breadcrumbs={breadcrumbsData.slice(0, 3)}
        ariaLabel="breadcrumbs3"
      />
      <br />
      <Breadcrumbs
        breadcrumbs={breadcrumbsData.slice(0, 4)}
        ariaLabel="breadcrumbs4"
      />
      <br />
      <Breadcrumbs
        breadcrumbs={breadcrumbsData.slice(0, 5)}
        ariaLabel="breadcrumbs5"
      />
    </>
  ));
