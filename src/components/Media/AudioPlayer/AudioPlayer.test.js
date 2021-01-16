import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AudioPlayer } from '../AudioPlayer';

describe('<AudioPlayer />', () => {
  test('should render', () => {
    const wrapper = shallow(
      <AudioPlayer>
        <AudioPlayer.Source src="http://soundbible.com/mp3/Tinkle-Lisa_Redfern-1916445296.mp3" />
      </AudioPlayer>,
    );
    expect(wrapper.getElement()).toBeTruthy();
    expect(wrapper.find('audio').length).toBe(1);
    expect(wrapper.find('AudioPlayerSource').length).toBe(1);
    expect(wrapper.find('svg').length).toBe(1);
    expect(wrapper.find('circle').length).toBe(1);
    console.log(wrapper.debug());
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render mulitple sources', () => {
    const wrapper = shallow(
      <AudioPlayer>
        <AudioPlayer.Source src="http://soundbible.com/mp3/Tinkle-Lisa_Redfern-1916445296.mp3" />
        <AudioPlayer.Source
          src="http://soundbible.com/wav/Tinkle-Lisa_Redfern-1916445296.wav"
          type="audio/wav"
        />
      </AudioPlayer>,
    );
    expect(wrapper.getElement()).toBeTruthy();
    expect(wrapper.find('audio').length).toBe(1);
    expect(wrapper.find('AudioPlayerSource').length).toBe(2);
    expect(wrapper.find('svg').length).toBe(1);
    expect(wrapper.find('circle').length).toBe(1);
    console.log(wrapper.debug());
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
