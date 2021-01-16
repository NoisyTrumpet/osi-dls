import React from 'react';
import { mount } from 'enzyme';
import { Formik, Form } from 'formik';
import toJson from 'enzyme-to-json';
import { Checkbox } from './';

describe('<Checkbox />', () => {
  it('Should render', () => {
    const wrapper = mount(
      <Formik initialValues={{ checkBox: '' }}>
        <Form>
          <Checkbox name="checkBox" helperText="helperText">
            Label
          </Checkbox>
        </Form>
      </Formik>,
    );
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
