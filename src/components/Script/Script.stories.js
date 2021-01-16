import React from "react";
import { storiesOf } from "@storybook/react";

import { Script } from "./";
import { Typography } from "../Typography";

const parameters = {
  component: Script,
  componentSubtitle: "Utilize <Script /> to inject a 3rd party script tag",
  jest: ["Script"]
};

// Example Scripts
const testInlineScript = "alert('Inline Script as Text')";
const resourceUrl1 = "https://service.force.com/embeddedservice/5.0/esw.min.js";
const resourceUrl2 =
  "https://assets.adobedtm.com/f883c22c9968c9151ecfa832037a990a96bfceef/satelliteLib-64bf9e975adfece54d2af85a9ba38ebfcd00792a.js";
const exampleDataLayer =
  'const dataLayer = { siteType: "responsive", siteID: "hallmark.com", page: { attributes: { length: "test" }, pageInfo: { recommendationDetails: { length: "test" }, pageURL: window.location.href, referringURL: document.referrer, sysEnv: "Production", language: navigator.language, IP: "75.179.128.124", adminView: "No", level1: "Home" } }, modal: { event: { length: "test" }, attributes: { length: "test" }, level1: "test", store: { storeInfo: "test" } }, transaction: { transactionID: "test", total: { basePrice: "test" }, item: { length: "test", productInfo: { length: "test", productID: "test", productInfoShown: { productID: "test" } } }, total: { cartTotal: "test", shippingInfo: { shippingTotal: "test" } }  }, store: { storeInfo: "test" }, lists: { item: { length: "test" } }, cart: { price: { orderLevelDiscountCodes: { length: "test" }, discountInfo: { length: "test" }, basePrice: "test" }, item: { length: "test", productInfo: { productID: "test", productInfoShown: { productID: "test", averageRating: { length: "test" } } } } }, user: { profile: { customerGroup: { length: "test" } } }, event: { length: "test" } }';

storiesOf("components/Script", module)
  .addParameters(parameters)
  .add("Default", () => (
    <div>
      <Typography variant="headline-5">
        Inline Script - Text attribute
      </Typography>
      <Script type="text/javascript" text={testInlineScript} />
    </div>
  ))
  .add("External Script", () => (
    <div>
      <Typography variant="headline-5">
        External Script - Src attribute
      </Typography>
      <Script type="text/javascript" url={resourceUrl1} />
    </div>
  ))
  .add("Multiple Scripts - Datalayer", () => (
    <div>
      <Typography variant="headline-5">
        Script 1 - Inline DataLayer Script
      </Typography>
      <Script type="text/javascript" text={exampleDataLayer} />
      <Typography variant="headline-5">
        Script 2 - External script dependent on const dataLayer
      </Typography>
      <Script url={resourceUrl2} type="text/javascript" />
    </div>
  ));
