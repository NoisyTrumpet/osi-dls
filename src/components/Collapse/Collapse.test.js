import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Collapse } from './';
import { Typography } from '../Typography';

const content = (
  <>
    <Typography variant="body" htmlTagOverride="p">
      Personalize a handwritten Hallmark Card and we&apos;ll mail it for you!
    </Typography>
    <Typography variant="body" htmlTagOverride="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque
      sagittis purus sit amet volutpat consequat. At augue eget arcu dictum. Hac habitasse
      platea dictumst quisque sagittis purus sit. Elementum pulvinar etiam non quam lacus
      suspendisse faucibus. Dictumst quisque sagittis purus sit amet volutpat consequat
      mauris. A condimentum vitae sapien pellentesque habitant morbi tristique senectus.
      Eget est lorem ipsum dolor sit. Ut consequat semper viverra nam libero justo
      laoreet sit amet. Netus et malesuada fames ac turpis egestas sed. Congue quisque
      egestas diam in arcu cursus euismod quis viverra. Lacus sed turpis tincidunt
      id aliquet risus feugiat in ante. Aliquam vestibulum morbi blandit cursus risus
      at ultrices mi. Diam maecenas sed enim ut sem viverra aliquet. Leo urna molestie
      at elementum. Pretium fusce id velit ut tortor pretium viverra.
    </Typography>
    <Typography variant="body" htmlTagOverride="p">
      Mauris in aliquam sem fringilla ut morbi. Morbi leo urna molestie at elementum eu.
      Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nulla
      at volutpat diam ut venenatis tellus in metus. Vestibulum mattis ullamcorper velit
      sed ullamcorper morbi. Leo urna molestie at elementum eu facilisis. Ut faucibus
      pulvinar elementum integer. Vitae ultricies leo integer malesuada. Accumsan sit
      amet nulla facilisi. Nascetur ridiculus mus mauris vitae ultricies leo integer.
      Mauris vitae ultricies leo integer malesuada.
    </Typography>
    <Typography variant="body" htmlTagOverride="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque
      sagittis purus sit amet volutpat consequat. At augue eget arcu dictum. Hac habitasse
      platea dictumst quisque sagittis purus sit. Elementum pulvinar etiam non quam lacus
      suspendisse faucibus. Dictumst quisque sagittis purus sit amet volutpat consequat
      mauris. A condimentum vitae sapien pellentesque habitant morbi tristique senectus.
      Eget est lorem ipsum dolor sit. Ut consequat semper viverra nam libero justo
      laoreet sit amet. Netus et malesuada fames ac turpis egestas sed. Congue quisque
      egestas diam in arcu cursus euismod quis viverra. Lacus sed turpis tincidunt
      id aliquet risus feugiat in ante. Aliquam vestibulum morbi blandit cursus risus
      at ultrices mi. Diam maecenas sed enim ut sem viverra aliquet. Leo urna molestie
      at elementum. Pretium fusce id velit ut tortor pretium viverra.
    </Typography>
  </>
);

describe('Collapse', () => {
  test('Should render', () => {
    const wrapper = shallow(<Collapse>{content}</Collapse>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
