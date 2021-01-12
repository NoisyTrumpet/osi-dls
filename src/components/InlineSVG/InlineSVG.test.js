import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { InlineSVG } from './';

describe('<InlineSVG />', () => {
  test('Should render', () => {
    const wrapper = shallow(<InlineSVG />);
    expect(wrapper.getElement()).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('test-inlinesvg div should render', () => {
    const inlineSVGComponent = (
      <InlineSVG
        path="test-path"
        title="test-title"
        description="test-description"
        role="img"
        focus
        className="test-inlinesvg"
      />
    );
    const wrapper = shallow(inlineSVGComponent);
    expect(wrapper.find('.test-inlinesvg').length).toBe(1);
  });
});
