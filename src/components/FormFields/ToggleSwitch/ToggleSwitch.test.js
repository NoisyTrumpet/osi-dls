import React from 'react';
import { mount } from 'enzyme';
import { Formik, Form } from 'formik';
import toJson from 'enzyme-to-json';
import { ToggleSwitch } from './';
import { Indicator } from '../Indicator';
import { Input } from '../Input';
import { Label } from '../Label';

describe('<ToggleSwitch />', () => {
  test('should render ', () => {
    const text = 'Toggle Switch';
    const domId = 'toggleSwitch';
    const checked = false;
    const wrapper = mount(
      <Formik initialValues={{ toggle: '' }}>
        <Form>
          <ToggleSwitch
            name="toggle"
            domId={domId}
            label={text}
            checked={checked}
          />
        </Form>
      </Formik>,
    );
    expect(wrapper.find(Label).length).toBe(1);
    expect(wrapper.find(Input).length).toBe(1);
    expect(wrapper.find(Indicator).length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
