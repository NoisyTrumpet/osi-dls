import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Carousel } from '../Carousel';
import { List } from '../List';

describe('<Carousel />', () => {
  test('should render', () => {
    const wrapper = shallow(<Carousel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render with correct number of children', () => {
    const wrapper = shallow(
      <Carousel>
        <div />
        <div />
        <div />
      </Carousel>,
    );
    expect(wrapper.find(List.Item).length).toBe(3);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
