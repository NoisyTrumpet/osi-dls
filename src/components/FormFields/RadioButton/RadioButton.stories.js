import React from "react";
import { storiesOf } from "@storybook/react";
import withFormik from "storybook-formik";
import { RadioButton } from "./";
import { Image } from "../../Image";
import { Button } from "../../Button";

const storyTitle = "components/Form Fields/Radio Button"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const RadioButtonParameters = {
  component: RadioButton,
  componentSubtitle: "Utilize <RadioButton /> to present radio buttons",
  jest: ["RadioButton"]
};

const imageArray = [
  <div style={{ marginRight: "16px" }} key="1">
    <Image
      className="radio-button-image"
      alt="pic-1"
      src="https://media4.s-nbcnews.com/j/streams/2014/May/140505/2D274905781707-hallmark-two-moms-day-md2926.fit-760w.jpg"
    />
  </div>,
  <div style={{ marginRight: "16px" }} key="2">
    <Image
      className="radio-button-image"
      alt="pic-2"
      src="https://media4.s-nbcnews.com/j/streams/2014/May/140505/2D274905781707-hallmark-two-moms-day-md2926.fit-760w.jpg"
    />
  </div>,
  <div key="3">
    <Image
      className="radio-button-image"
      alt="pic-3"
      src="https://media4.s-nbcnews.com/j/streams/2014/May/140505/2D274905781707-hallmark-two-moms-day-md2926.fit-760w.jpg"
    />
  </div>
];

storiesOf(storyTitle, module)
  .addParameters(RadioButtonParameters)
  .addDecorator(withFormik)
  .add("Default", () => (
    <div>
      <RadioButton
        label="Radio Button 1"
        name="myRadioGroup"
        domId="myDomId"
        value="Option 1"
        checked
      />
      <RadioButton
        label="Radio Button 2"
        name="myRadioGroup"
        domId="myDomId2"
        value="Option 2"
      />
    </div>
  ))
  .add("Disabled", () => (
    <div>
      <RadioButton
        label="Radio Button 1"
        name="myRadioGroup"
        domId="myDomId"
        value="Option 1"
        checked
        isDisabled
      />
      <RadioButton
        label="Radio Button 2"
        name="myRadioGroup"
        domId="myDomId2"
        value="Option 2"
        isDisabled
      />
    </div>
  ))
  .add("Cards", () => (
    <div>
      <RadioButton
        label="Radio Button Card 1"
        name="myRadioGroup"
        domId="myDomId"
        value="Option 1"
        isCard
        helperText="Optional helper text"
        checked
      />
      <RadioButton
        label="Radio Button Card 2"
        name="myRadioGroup"
        domId="myDomId2"
        value="Option 2"
        isCard
        helperText="Optional helper text"
      />
      <RadioButton
        label="Radio Button Card 3"
        name="myRadioGroup"
        domId="myDomId3"
        value="Option 3"
        isCard
        helperText="Optional helper text"
        isDisabled
      />
    </div>
  ))
  .add("Blank Cards", () => (
    <div style={{ width: "400px" }}>
      <RadioButton
        variant="blank-card"
        label="image1"
        name="myRadioGroup"
        domId="myDomId"
        value="Option 1"
        isCard
        checked
      >
        {imageArray}
      </RadioButton>
      <RadioButton
        variant="blank-card"
        label="image2"
        name="myRadioGroup"
        domId="myDomId2"
        value="Option 2"
        isCard
      >
        {imageArray}
      </RadioButton>
      <RadioButton
        variant="blank-card"
        label="image3"
        name="myRadioGroup"
        domId="myDomId3"
        value="Option 3"
        isCard
      >
        Can be text or any other type of content
      </RadioButton>
    </div>
  ))
  .add("Cards contained in a 250px wide <div>", () => (
    <div style={{ width: 250 }}>
      <RadioButton
        label="Radio Button Card 1"
        name="myRadioGroup"
        domId="myDomId"
        value="Option 1"
        isCard
        helperText="Optional helper text"
        checked
      />
      <RadioButton
        label="Radio Button Card 2"
        name="myRadioGroup"
        domId="myDomId2"
        value="Option 2"
        isCard
        helperText="Optional helper text"
      />
      <RadioButton
        label="Radio Button Card 3"
        name="myRadioGroup"
        domId="myDomId3"
        value="Option 3"
        isCard
        helperText="Optional helper text"
        isDisabled
      />
    </div>
  ))
  .add("Regular Radio With Child", () => (
    <div>
      <RadioButton
        label="Radio Button 1"
        name="myRadioGroup"
        domId="myDomId"
        value="Option 1"
        checked
      >
        <p style={{ paddingLeft: "20px" }}>
          This can be any kind of content, needs to be styled by child
        </p>
      </RadioButton>
      <RadioButton
        label="Radio Button 2"
        name="myRadioGroup"
        domId="myDomId2"
        value="Option 2"
      >
        <Button disabled={false} iconLeft="arrow">
          Even a Button
        </Button>
      </RadioButton>
    </div>
  ));
