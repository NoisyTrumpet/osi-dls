import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { boolean } from "@storybook/addon-knobs";
import withFormik from "storybook-formik";
import { Fieldset } from "./";
import { RadioButton } from "../RadioButton";
import { Checkbox } from "../Checkbox";
import { Image } from "../../Image";

const storyTitle = "components/Form Fields/Fieldset";

const FieldsetParameters = {
  component: Fieldset,
  componentSubtitle: "Utilize <Fieldset /> to present a group of inputs",
  jest: ["Fieldset"]
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
  .addParameters(FieldsetParameters)
  .addDecorator(
    withSmartKnobs({ ignoreProps: ["children", "storybookErrorPreview"] })
  )
  .addDecorator(withFormik)
  .add("Default Radio Group", () => (
    <Fieldset
      legend="Default RadioButton"
      domId="myRadioButton"
      name="myRadioButton"
      storybookErrorPreview={boolean("error", false)}
      helperText="Optional helper text"
    >
      <RadioButton
        label="Radio Button 1"
        name="myRadioButton"
        domId="myDomId"
        value="Option 1"
        checked
      />
      <RadioButton
        label="Radio Button 2"
        name="myRadioButton"
        domId="myDomId2"
        value="Option 2"
      />
      <RadioButton
        label="Radio Button 3"
        name="myRadioButton"
        domId="myDomId3"
        value="Option 3"
      />
    </Fieldset>
  ))
  .add("Disabled Radio Group", () => (
    <Fieldset
      legend="Default RadioButton"
      domId="myRadioButton"
      name="myRadioButton"
    >
      <RadioButton
        label="Radio Button 1"
        name="myRadioButton"
        domId="myDomId"
        value="Option 1"
        checked
        isDisabled
      />
      <RadioButton
        label="Radio Button 2"
        name="myRadioButton"
        domId="myDomId2"
        value="Option 2"
        isDisabled
      />
      <RadioButton
        label="Radio Button 3"
        name="myRadioButton"
        domId="myDomId3"
        value="Option 3"
        isDisabled
      />
    </Fieldset>
  ))
  .add("Card Radio Group", () => (
    <Fieldset
      legend="Card RadioButton"
      domId="myRadioButton"
      name="myRadioButton"
      storybookErrorPreview={boolean("error", false)}
      helperText="Optional helper text"
    >
      <RadioButton
        label="Radio Button Card 1"
        name="myRadioButton"
        domId="myDomId"
        value="Option 1"
        isCard
        helperText="Optional helper text"
        checked
      />
      <RadioButton
        label="Radio Button Card 2"
        name="myRadioButton"
        domId="myDomId2"
        value="Option 2"
        isCard
        helperText="Optional helper text"
      />
      <RadioButton
        label="Radio Button Card 3"
        name="myRadioButton"
        domId="myDomId3"
        value="Option 3"
        isCard
        helperText="Optional helper text"
        isDisabled
      />
    </Fieldset>
  ))
  .add("Blank Card Radio Group", () => (
    <Fieldset
      legend="Card RadioButton"
      domId="myRadioButton"
      name="myRadioButton"
      storybookErrorPreview={boolean("error", false)}
      helperText="Optional helper text"
      style={{ width: "400px" }}
    >
      <RadioButton
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
        label="image2"
        name="myRadioGroup"
        domId="myDomId2"
        value="Option 2"
        isCard
      >
        {imageArray}
      </RadioButton>
      <RadioButton
        label="image3"
        name="myRadioGroup"
        domId="myDomId3"
        value="Option 3"
        isCard
      >
        Can be text or any other type of content
      </RadioButton>
    </Fieldset>
  ))
  .add("Checkbox Group", () => (
    <Fieldset
      legend="Checkbox"
      domId="myCheckbox"
      name="myCheckbox"
      storybookErrorPreview={boolean("error", false)}
      helperText="Optional helper text"
    >
      <Checkbox
        name="myCheckbox"
        domId="myDomId"
        value="Option 1"
        isFieldSet
        checked
      >
        Option 1
      </Checkbox>
      <Checkbox name="myCheckbox" domId="myDomId2" value="Option 2" isFieldSet>
        Option 2
      </Checkbox>
      <Checkbox name="myCheckbox" domId="myDomId3" value="Option 3" isFieldSet>
        Option 3
      </Checkbox>
    </Fieldset>
  ))
  .add("Disabled Checkbox Group", () => (
    <Fieldset legend="Checkbox Group" domId="myCheckbox" name="myCheckbox">
      <Checkbox
        name="myCheckbox"
        domId="myDomId"
        value="Option 1"
        isFieldSet
        checked
        isDisabled
      >
        Option 1
      </Checkbox>
      <Checkbox
        name="myCheckbox"
        domId="myDomId2"
        value="Option 2"
        isFieldSet
        isDisabled
      >
        Option 2
      </Checkbox>
      <Checkbox
        name="myCheckbox"
        domId="myDomId3"
        value="Option 3"
        isFieldSet
        isDisabled
      >
        Option 3
      </Checkbox>
    </Fieldset>
  ));
