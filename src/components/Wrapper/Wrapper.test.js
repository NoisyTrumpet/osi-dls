import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Wrapper } from './';

describe('<Wrapper />', () => {
  test('Should render', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
