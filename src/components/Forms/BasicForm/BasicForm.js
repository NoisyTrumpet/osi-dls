import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../../FormFields/TextField";
import { Checkbox } from "../../FormFields/Checkbox";
import { RadioButton } from "../../FormFields/RadioButton";
import { Fieldset } from "../../FormFields/Fieldset";
import { Dropdown } from "../../FormFields/Dropdown";
import { ToggleSwitch } from "../../FormFields/ToggleSwitch";
import { Range } from "../../FormFields/Range";
import { Tooltip } from "../../Tooltip";
import { Button } from "../../Button";
import { Typography } from "../../Typography";
import { Image } from "../../Image";
import "./BasicForm.scss";
import SegmentedControl from "../../FormFields/SegmentedControl/SegmentedControl";
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
//   YoursAlways,
// } from '../../../assets/svg';

// And now we can use these
const BasicForm = () => {
  const DropdownOptions = [
    {
      label: "Option 1",
      value: "option1",
      disabled: false
    },
    {
      label: "Option 2",
      value: "option2",
      disabled: false
    },
    {
      label: "Option 3",
      value: "option3",
      disabled: false
    }
  ];

  // const fontOptions = [
  //   {
  //     value: 'allMyBest',
  //     label: 'All My Best',
  //     svg: AllMyBest,
  //   },
  //   {
  //     value: 'buhBye',
  //     label: 'Buh Bye',
  //     svg: BuhBye,
  //   },
  //   {
  //     value: 'catchYouLater',
  //     label: 'Catch You Later',
  //     svg: CatchYouLater,
  //   },
  //   {
  //     value: 'cheersToYou',
  //     label: 'Cheers To You',
  //     svg: CheersToYou,
  //   },
  //   {
  //     value: 'gratefulForYou',
  //     label: 'Grateful For You',
  //     svg: GratefulForYou,
  //   },
  //   {
  //     value: 'heySunshine',
  //     label: 'Hey Sunshine',
  //     svg: HeySunshine,
  //   },
  //   {
  //     value: 'hugsToYou',
  //     label: 'Hugs To You',
  //     svg: HugsToYou,
  //   },
  //   {
  //     value: 'keepInTouch',
  //     label: 'Keep In Touch',
  //     svg: KeepInTouch,
  //   },
  //   {
  //     value: 'kindRegards',
  //     label: 'Kind Regards',
  //     svg: KindRegards,
  //   },
  //   {
  //     value: 'laterGator',
  //     label: 'Later Gator',
  //     svg: LaterGator,
  //   },
  //   {
  //     value: 'simplyYours',
  //     label: 'Simply Yours',
  //     svg: SimplyYours,
  //   },
  //   {
  //     value: 'stayStrong',
  //     label: 'Stay Strong',
  //     svg: StayStrong,
  //   },
  //   {
  //     value: 'takeItEasy',
  //     label: 'Take It Easy',
  //     svg: TakeItEasy,
  //   },
  //   {
  //     value: 'tilNextTime',
  //     label: 'Til Next Time',
  //     svg: TilNextTime,
  //   },
  //   {
  //     value: 'warmestWishes',
  //     label: 'Warmest Wishes',
  //     svg: WarmestWishes,
  //   },
  //   {
  //     value: 'yoursAlways',
  //     label: 'Yours Always',
  //     svg: YoursAlways,
  //   }
  // ];

  const checked = false;

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

  // Custom onChange functionality examples
  // const [fontId, setFontId] = useState('allMyBest');
  const [rangeId, setRangeId] = useState("5");
  const [scId, setSCId] = useState("5");

  // const onFontChanged = (value) => {
  //   setFontId(value);

  //   console.log("Font triggered", value);
  // };

  const onRangeChanged = value => {
    setRangeId(value);

    console.log("Range triggered", value);
  };

  const onSCChanged = value => {
    setSCId(value);

    console.log("SC triggered", value);
  };

  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password: "",
          email: "",
          crownRewards: "",
          acceptedTerms: false,
          select: "",
          signUp: "radioBtn2",
          checkboxGroup: [],
          rangeInput: "5",
          toggle: true,
          segmentedcontrol: "calendar"
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, "Please enter your first name.")
            .max(40, "Must be 40 characters or less")
            .required("Please enter your first name."),
          lastName: Yup.string()
            .min(2, "Please enter your last name.")
            .max(40)
            .required("Please enter your last name."),
          email: Yup.string()
            .max(50)
            .email("Please enter a valid email address.")
            .required("Please enter a valid email address."),
          password: Yup.string()
            .min(6, "Please use 6-15 characters.")
            .max(15)
            .required("Please use 6-15 characters."),
          crownRewards: Yup.string()
            // Best way to achieve a numerical with maxlength:
            // Instead of .number, use .string with regex
            // and maxLength on Field
            .required("Please enter your 12-digit Crown Rewards number.")
            .matches(/^[0-9]+$/, "Please use only digits.")
            .min(12, "Please enter your 12-digit Crown Rewards number.")
            .max(12),
          acceptedTerms: Yup.boolean()
            .required("You must accept the terms and conditions.")
            .oneOf([true], "You must accept the terms and conditions."),
          select: Yup.string()
            .oneOf(["option1", "option2", "option3"])
            .required("Please select an option."),
          signUp: Yup.string().required("Please select a signup option."),
          toggle: Yup.string().required("Please select an option."),
          checkboxGroup: Yup.array()
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          {/* <Dropdown
            label="Font"
            name="myInputName"
            domId="myDomId"
            variant="font"
            helperText="Optional helper text"
            options={fontOptions}
            value={fontId}
            onChange={(event) => onFontChanged(event.target.value)}
            required
          /> */}
          <Typography variant="headline-6">Text fields</Typography>
          <TextField
            label="First Name"
            name="firstName"
            domId="basic-form-first-name"
            type="text"
            placeholder="Test"
            helperText="Example Helper Text"
            required // Needed for accessibility
          />
          <TextField
            label="Last Name"
            name="lastName"
            domId="basic-form-last-name"
            placeholder="Test"
            helperText="Example Helper Text"
            required
          />
          <TextField
            label="Email Address"
            name="email"
            domId="basic-form-email"
            type="email"
            placeholder="test@hallmark.com"
            required
          >
            <Tooltip
              content="Must be a valid email"
              orientation="bottom"
              alignment="right-align"
              icon="info-bold"
            >
              <Typography variant="srt">More info</Typography>
            </Tooltip>
          </TextField>
          <TextField
            type="password"
            label="Password"
            name="password"
            domId="basic-form-password"
            placeholder="6 characters minimum"
            maxLength={12}
            required
          />
          <TextField
            label="Crown Rewards"
            name="crownRewards"
            domId="basic-form-crown-rewards"
            maxLength={12}
            required
          />

          <Typography variant="headline-6">Dropdown</Typography>
          <Dropdown
            label="Select Dropdown"
            name="select"
            domId="basic-form-select"
            defaultOption="Choose an Option"
            options={DropdownOptions}
            required
          />

          <Typography variant="headline-6">Checkbox</Typography>
          <Checkbox
            label="Accepted Terms"
            name="acceptedTerms"
            domId="basic-form-checkbox"
            required
          >
            I accept the terms and conditions
          </Checkbox>

          <Typography variant="headline-6">Toggle Switch</Typography>
          <ToggleSwitch
            checked={checked}
            label="Label"
            name="toggle"
            type="checkbox"
            domId="toggleSwitch"
            helperText="Select an option"
            required
          />

          <Typography variant="headline-6">Radio Button Group</Typography>
          <Fieldset
            legend="RadioButton"
            domId="radioGroup"
            name="signUp"
            required
          >
            <RadioButton
              label="Sign me up for Crown Rewards"
              value="radioBtn1"
              domId="radioBtn1"
              name="signUp"
            />
            <RadioButton
              label="I'm already a Crown Rewards member"
              value="radioBtn2"
              domId="radioBtn2"
              name="signUp"
            />
            <RadioButton
              label="No thanks, not right now"
              value="radioBtn3"
              domId="radioBtn3"
              name="signUp"
            />
          </Fieldset>

          <Typography variant="headline-6">Radio Button Blank Card</Typography>
          <Fieldset
            legend="Card RadioButton"
            domId="myRadioButton"
            name="myRadioButton"
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
              {imageArray}
            </RadioButton>
          </Fieldset>

          <Typography variant="headline-6">Checkbox Group</Typography>
          <Fieldset
            legend="Checkbox Group"
            domId="checkboxGroup"
            name="checkboxGroup"
            required
          >
            <Checkbox
              value="option 1"
              domId="option1checkbox"
              name="checkboxGroup"
              isFieldSet
            >
              Option 1
            </Checkbox>
            <Checkbox
              value="option 2"
              domId="option2checkbox"
              name="checkboxGroup"
              isFieldSet
            >
              Option 2
            </Checkbox>
          </Fieldset>
          <Typography variant="headline-6">Range</Typography>
          <Range
            range={{ min: "0", max: "10" }}
            name="rangeInput"
            domId="example-range-id"
            label="Size"
            value={rangeId}
            onChange={event => onRangeChanged(event.target.value)}
          />
          <SegmentedControl
            name="segmentedcontrol"
            segments={[
              { label: "Apple", value: "apple", icon: "brands-apple-bold" },
              { label: "Google", value: "google", icon: "brands-google-bold" },
              {
                label: "Calendar",
                value: "calendar",
                icon: "calendar-calendar-bold"
              },
              { label: "Card", value: "card", icon: "card-front-bold" }
            ]}
            defaultSelected={2}
            domId="segmentedControl"
            legend="Segmented Control"
            value={scId}
            onChange={event => onSCChanged(event.target.value)}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BasicForm;
