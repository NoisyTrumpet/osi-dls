import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ImageSource from './ImageSource';

describe('<ImageSource />', () => {
  test('Should render', () => {
    const wrapper = shallow(<ImageSource />);
    expect(wrapper.getElement()).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('Should render with attributes', () => {
    const wrapper = shallow(<ImageSource srcSet="test1.jpg" dataSrcSet="data1" media="(min-width: 800px)" />);
    expect(wrapper.prop('data-srcset')).toEqual('data1');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
