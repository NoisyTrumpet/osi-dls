import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MediaGallery from './MediaGallery';

describe('<MediaGallery />', () => {
  test('should render', () => {
    const wrapper = shallow(<MediaGallery />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
