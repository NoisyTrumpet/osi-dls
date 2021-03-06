import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Formik, Form } from 'formik';
import TextareaAutosize from 'react-textarea-autosize';
import { TextFieldMultiline } from './';
import { Label } from '../Label';
import { HelperText } from '../HelperText';

describe('<TextFieldMultiline />', () => {
  it('Should render', () => {
    const wrapper = mount(
      <Formik initialValues={{ textField: '' }}>
        <Form>
          <TextFieldMultiline
            label="label"
            name="textField"
            domId="textFieldId"
            multiline="false"
            helperText="Optional helper text"
          />
        </Form>
      </Formik>,
    );
    expect(wrapper.find(Label).length).toBe(1);
    expect(wrapper.find(HelperText).length).toBe(1);
    expect(wrapper.find(TextareaAutosize).length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
