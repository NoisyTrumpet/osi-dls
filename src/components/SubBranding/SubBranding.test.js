import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SubBranding } from './';
import { Image } from '../Image';

describe('<SubBranding />', () => {
  test('should render ', () => {
    const wrapper = shallow(<SubBranding src="https://webfileswest.uswest.os.ctl.io/corporate.hallmark.com/wp-content/uploads/2018/06/Hallmark-Greetings-Logo-black-160x160.jpg" alt="Hallmark" />);
    expect(wrapper.find(Image).length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
