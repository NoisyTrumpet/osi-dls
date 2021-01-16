import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { DescriptionList } from './';
import DescriptionListItem from './DescriptionListItem';

describe('<DescriptionList />', () => {
  test('should render ', () => {
    const data = [
      {
        icon: 'icon',
        titleText: 'Front',
        descriptionText: 'You can do anything when you set your mind to it.',
      },
      {
        titleText: 'Inside',
        descriptionText: "Can't wait to see what this year brings!",
      },
      {
        icon: 'icon',
        titleText: 'Envelope & Seal',
        descriptionText: 'Includes one card and one envelope with a Gold Crown seal. Envelope color may vary.',
      },
    ];
    const wrapper = shallow(<DescriptionList descriptionListData={data} />);
    expect(wrapper.find(DescriptionListItem).length).toBe(3);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
