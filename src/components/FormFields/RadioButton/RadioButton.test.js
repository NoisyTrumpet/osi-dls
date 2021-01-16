import React from 'react';
import { mount } from 'enzyme';
import { Formik, Form } from 'formik';
import toJson from 'enzyme-to-json';
import { Label } from '../Label';
import { Input } from '../Input';
import { RadioButton } from './';

describe('<RadioButton />', () => {
  it('Should render', () => {
    const wrapper = mount(
      <Formik initialValues={{ radioGroup: '' }}>
        <Form>
          <RadioButton
            label="Radio Btn 1"
            name="radioGroup"
            value="radioBtn1"
            domId="radioBtn1"
          />
          <RadioButton
            label="Radio Btn 2"
            name="radioGroup"
            value="radioBtn2"
            domId="radioBtn2"
          />
        </Form>
      </Formik>,
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(Input).length).toBe(2);
    expect(wrapper.find(Label).length).toBe(2);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should render card style', () => {
    const wrapper = mount(
      <Formik initialValues={{ radioGroup: '' }}>
        <Form>
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
            label="Radio Button Card 1"
            name="myRadioGroup"
            domId="myDomId"
            value="Option 1"
            isCard
            helperText="Optional helper text"
            checked
          />
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
            label="Radio Button Card 1"
            name="myRadioGroup"
            domId="myDomId"
            value="Option 1"
            isCard
            helperText="Optional helper text"
            checked
            isDisabled
          />
        </Form>
      </Formik>,
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(Input).length).toBe(4);
    expect(wrapper.find(Label).length).toBe(4);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
