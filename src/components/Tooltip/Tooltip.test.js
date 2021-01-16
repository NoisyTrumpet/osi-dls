import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Tooltip } from './';

describe('<Tooltip />', () => {
  test('should renders without props ', () => {
    const wrapper = shallow(<Tooltip />);
    expect(wrapper.getElement()).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
