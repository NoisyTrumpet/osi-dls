import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Wave } from './';

describe('<Wave />', () => {
  test('should render wave component', () => {
    const wrapper = shallow(
      <Wave colorTop="brand-white" colorBottom="gray1" reverseDirection />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
