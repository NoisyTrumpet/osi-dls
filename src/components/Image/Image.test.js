import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Image } from './';

describe('<Image />', () => {
  test('props should render down to <img/>', () => {
    const imageComponent = <Image src="test-src" alt="test-alt" className="test-class" />;
    const wrapper = shallow(imageComponent);
    expect(wrapper.getElement()).toBeTruthy();
    expect(wrapper.find('picture').length).toBe(1);
    expect(wrapper.find('img').prop('src')).toEqual('test-src');
    expect(wrapper.find('img').prop('alt')).toEqual('test-alt');
    expect(wrapper.find('img').prop('className')).toEqual('test-class');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('soucre tags should render', () => {
    const imageComponent = (
      <Image src="test-src" alt="test-alt" className="test-class">
        <Image.Source />
        <Image.Source />
      </Image>
    );
    const wrapper = shallow(imageComponent);
    expect(wrapper.find('picture').length).toBe(1);
    expect(wrapper.find(Image.Source).length).toBe(2);
    expect(wrapper.find('img').prop('src')).toEqual('test-src');
    expect(wrapper.find('img').prop('alt')).toEqual('test-alt');
    expect(wrapper.find('img').prop('className')).toEqual('test-class');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('picture attributes should render', () => {
    const imageComponent = (
      <Image pictureClass="pic-class" ariaHidden="true" src="test-src" alt="test-alt" className="test-class">
        <Image.Source srcSet="test1.jpg" dataSrcSet="data1" media="(min-width: 800px)" />
      </Image>
    );
    const wrapper = shallow(imageComponent);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('img').prop('aria-hidden')).toEqual('true');
    expect(wrapper.find('picture').length).toBe(1);
    expect(wrapper.find('picture').prop('className')).toEqual('pic-class');
    expect(wrapper.find(Image.Source).length).toBe(1);
    expect(wrapper.find(Image.Source).prop('srcSet')).toEqual('test1.jpg');
    expect(wrapper.find(Image.Source).prop('dataSrcSet')).toEqual('data1');
    expect(wrapper.find(Image.Source).prop('media')).toEqual('(min-width: 800px)');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
