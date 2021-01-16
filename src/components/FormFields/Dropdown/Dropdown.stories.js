import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import withFormik from "storybook-formik";
import { Dropdown } from "./";
// import {
//   AllMyBest,
//   BuhBye,
//   CatchYouLater,
//   CheersToYou,
//   GratefulForYou,
//   HeySunshine,
//   HugsToYou,
//   KeepInTouch,
//   KindRegards,
//   LaterGator,
//   SimplyYours,
//   StayStrong,
//   TakeItEasy,
//   TilNextTime,
//   WarmestWishes,
//   YoursAlways
// } from "../../../assets/svg";

const DropdownParameters = {
  component: Dropdown,
  componentSubtitle: "Utilize <Dropdown /> to present select boxes",
  jest: ["Dropdown"]
};

const DropdownOptions = [
  {
    label: "Option 1",
    value: "option-1",
    disabled: false
  },
  {
    label: "Option 2 longer",
    value: "option-2",
    disabled: false
  },
  {
    label: "Option 3 is a very long option",
    value: "option-3",
    disabled: false
  }
];

// const fontOptions = [
//   {
//     value: "allMyBest",
//     label: "All My Best",
//     svg: AllMyBest
//   },
//   {
//     value: "buhBye",
//     label: "Buh Bye",
//     svg: BuhBye
//   },
//   {
//     value: "catchYouLater",
//     label: "Catch You Later",
//     svg: CatchYouLater
//   },
//   {
//     value: "cheersToYou",
//     label: "Cheers To You",
//     svg: CheersToYou
//   },
//   {
//     value: "gratefulForYou",
//     label: "Grateful For You",
//     svg: GratefulForYou
//   },
//   {
//     value: "heySunshine",
//     label: "Hey Sunshine",
//     svg: HeySunshine
//   },
//   {
//     value: "hugsToYou",
//     label: "Hugs To You",
//     svg: HugsToYou
//   },
//   {
//     value: "keepInTouch",
//     label: "Keep In Touch",
//     svg: KeepInTouch
//   },
//   {
//     value: "kindRegards",
//     label: "Kind Regards",
//     svg: KindRegards
//   },
//   {
//     value: "laterGator",
//     label: "Later Gator",
//     svg: LaterGator
//   },
//   {
//     value: "simplyYours",
//     label: "Simply Yours",
//     svg: SimplyYours
//   },
//   {
//     value: "stayStrong",
//     label: "Stay Strong",
//     svg: StayStrong
//   },
//   {
//     value: "takeItEasy",
//     label: "Take It Easy",
//     svg: TakeItEasy
//   },
//   {
//     value: "tilNextTime",
//     label: "Til Next Time",
//     svg: TilNextTime
//   },
//   {
//     value: "warmestWishes",
//     label: "Warmest Wishes",
//     svg: WarmestWishes
//   },
//   {
//     value: "yoursAlways",
//     label: "Yours Always",
//     svg: YoursAlways
//   }
// ];

storiesOf("components/Form Fields/Dropdown", module)
  .addParameters(DropdownParameters)
  .addDecorator(
    withSmartKnobs({ ignoreProps: ["children", "storybookErrorPreview"] })
  )
  .addDecorator(withFormik)
  .add("Default", () => (
    <Dropdown
      label="Label"
      name="myInputName"
      domId="myDomId"
      helperText="Optional helper text"
      storybookErrorPreview={boolean("error", false)}
      options={DropdownOptions}
      defaultOption="Choose an Option"
    />
  ))
  .add("Text Variant", () => (
    <Dropdown
      label="Sort by"
      name="sortby"
      domId="sortby"
      options={DropdownOptions}
      defaultOption="Featured"
      variant="text"
      color="gray5"
      required
    />
  ));
// .add("Font Variant", () => (
//   <Dropdown
//     label="Font"
//     name="myInputName"
//     domId="myDomId"
//     variant="font"
//     helperText="Optional helper text"
//     storybookErrorPreview={boolean("error", false)}
//     options={fontOptions}
//     required
//   />
// ));
