import React from "react";
import { storiesOf } from "@storybook/react";
import { Licensing } from "./";
import BvSLogo from "../../../conf/storybook/images/batman-vs-superman-color_pdp@1x.png";
import DCLogo from "../../../conf/storybook/images/dc-comics_pdp@1x.png";

const storyTitle = "components/Licensing"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const LicensingParameters = {
  component: Licensing,
  componentSubtitle:
    "Utilize <Licensing /> to present licensing copy and logos",
  jest: ["Licensing"]
};

const logos = [
  {
    url: BvSLogo,
    alt: "Batman v Superman"
  },
  {
    url: DCLogo,
    alt: "DC Comics"
  }
];

storiesOf(storyTitle, module)
  .addParameters(LicensingParameters)
  .add("Default", () => (
    <div>
      <Licensing
        logos={logos}
        text="BATMAN V SUPERMAN: DAWN OF JUSTICE and all related characters and elements © & ™ DC Comics and Warner Bros. Entertainment Inc. (s19)"
      />
    </div>
  ))
  .add("Licensing contained in a 260px <div>", () => (
    <div style={{ width: 260 }}>
      <Licensing
        logos={logos}
        text="BATMAN V SUPERMAN: DAWN OF JUSTICE and all related characters and elements © & ™ DC Comics and Warner Bros. Entertainment Inc. (s19)"
      />
    </div>
  ));
