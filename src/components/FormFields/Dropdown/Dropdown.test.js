import React from 'react';
import { mount } from 'enzyme'; import { Formik, Form } from 'formik';
import toJson from 'enzyme-to-json';
import { Dropdown } from './';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { Select } from '../Select';

const fontOptions = [
  {
    value: 'allMyBest',
    label: 'All My Best'
  },
  {
    value: 'buhBye',
    label: 'Buh Bye'
  }
];

describe('<Dropdown />', () => {
  it('Should render Default', () => {
    const wrapper = mount(
      <Formik initialValues={{ dropdown: '' }}>
        <Form>
          <Dropdown
            label="label"
            name="dropdown"
            domId="exampleDropdown"
            helperText="Optional helper text"
          />
        </Form>
      </Formik>,
    );

    expect(wrapper.find(Label).length).toBe(1);
    expect(wrapper.find(HelperText).length).toBe(1);
    expect(wrapper.find(Select).length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should render Font Dropdown', () => {
    const wrapper = mount(
      <Formik initialValues={{ dropdown: '' }}>
        <Form>
          <Dropdown
            label="Font"
            name="myInputName"
            domId="myDomId"
            variant="font"
            helperText="Optional helper text"
            options={fontOptions}
            required
          />
        </Form>
      </Formik>,
    );

    expect(wrapper.find(Label).length).toBe(1);
    expect(wrapper.find(HelperText).length).toBe(1);
    expect(wrapper.find(Select).length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
