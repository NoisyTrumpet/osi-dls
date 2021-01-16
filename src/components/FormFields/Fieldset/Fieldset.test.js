import React from 'react';
import { mount } from 'enzyme';
import { Formik, Form } from 'formik';
import toJson from 'enzyme-to-json';
import { RadioButton } from '../RadioButton';
import { Fieldset } from './';

describe('<Fieldset />', () => {
  it('Should render Radio Buttons', () => {
    const wrapper = mount(
      <Formik initialValues={{ radioGroup: '' }}>
        <Form>
          <Fieldset
            label="RadioButton"
            domId="radioGroup"
            helperText="helperText"
            name="radioGroup"
          >
            <RadioButton
              label="Radio Btn 1"
              name="radioGroup"
              type="radio"
              value="radioBtn1"
              domId="radioBtn1"
            />
            <RadioButton
              label="Radio Btn 2"
              name="radioGroup"
              type="radio"
              value="radioBtn2"
              domId="radioBtn2"
            />
          </Fieldset>
        </Form>
      </Formik>,
    );
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
