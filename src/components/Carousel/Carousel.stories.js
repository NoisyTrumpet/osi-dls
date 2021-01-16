import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import Carousel from "./Carousel";
import { Typography } from "../Typography";

const storyTitle = "components/Carousel"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const parameters = {
  component: Carousel,
  componentSubtitle: "<Carousel /> defines a Carousel",
  jest: ["Carousel"]
};

const exampleStyles = {
  productCarousel: {
    item: {
      height: "300px",
      width: "100%"
    }
  },
  signAndSend: {
    outer: {
      height: "100%",
      width: "100%",
      boxSizing: "border-box",
      padding: "12px"
    },
    inner: {
      height: "100%",
      width: "100%",
      borderRadius: "3px",
      boxShadow: "1px 1px 10px lightgrey",
      background: "white"
    }
  }
};

// Pictures from https://osilife.com/cards/greeting-cards/assorted-cards-for-all-occasions-in-floral-organizer-box-box-of-24-1BCE4202.html
storiesOf(storyTitle, module)
  .addParameters(parameters)
  .addDecorator(
    withSmartKnobs({
      ignoreProps: [
        "children",
        "dots",
        "arrows",
        "enableScrollLock",
        "slidesToShow",
        "squared"
      ]
    })
  )
  .add("Product Carousel (fixed item width)", () => (
    <div style={{ padding: "32px", background: "white" }}>
      <Typography variant="headline-5" color="gray5">
        Title
      </Typography>
      <Carousel itemWidth={210} enableScrollLock={false}>
        <div
          style={{ background: "#aaa", ...exampleStyles.productCarousel.item }}
        />
        <div
          style={{ background: "#ccc", ...exampleStyles.productCarousel.item }}
        />
        <div
          style={{ background: "#aaa", ...exampleStyles.productCarousel.item }}
        />
        <div
          style={{ background: "#ccc", ...exampleStyles.productCarousel.item }}
        />
        <div
          style={{ background: "#aaa", ...exampleStyles.productCarousel.item }}
        />
        <div
          style={{ background: "#ccc", ...exampleStyles.productCarousel.item }}
        />
        <div
          style={{ background: "#aaa", ...exampleStyles.productCarousel.item }}
        />
      </Carousel>
    </div>
  ))
  .add("Sign and Send (Dot controls)", () => (
    <div style={{ width: "272px", height: "404px", background: "grey" }}>
      <Carousel dots="#example-dots" enableScrollLock>
        <div style={exampleStyles.signAndSend.outer}>
          <div style={exampleStyles.signAndSend.inner} />
        </div>
        <div style={exampleStyles.signAndSend.outer}>
          <div style={exampleStyles.signAndSend.inner} />
        </div>
        <div style={exampleStyles.signAndSend.outer}>
          <div style={exampleStyles.signAndSend.inner} />
        </div>
      </Carousel>
      <div role="tablist" id="example-dots" />
    </div>
  ));
