import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Formik, Form } from 'formik';
import { Input } from '../Input';
import { TextField } from './';
import { Label } from '../Label';
import { HelperText } from '../HelperText';

describe('<TextField />', () => {
  it('Should render', () => {
    const wrapper = mount(
      <Formik initialValues={{ textField: '' }}>
        <Form>
          <TextField
            label="label"
            name="textField"
            domId="textFieldId"
            helperText="Optional helper text"
          />
        </Form>
      </Formik>,
    );
    expect(wrapper.find(Label).length).toBe(1);
    expect(wrapper.find(HelperText).length).toBe(1);
    expect(wrapper.find(Input).length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
