import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Overview } from './Overview';

describe('<Overview />', () => {
  test('Should render', () => {
    const overview = shallow(<Overview />);
    expect(overview.length).toBe(1);
    expect(toJson(overview)).toMatchSnapshot();
  });
});
