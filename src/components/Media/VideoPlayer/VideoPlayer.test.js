import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { VideoPlayer } from './';

describe('<VideoPlayer />', () => {
  test('should render Video Player with a source and track and poster', () => {
    const videoSrc = { large: 'testSrc.mp4', medium: 'testSrc.mp4', small: 'testSrc.mp4' };
    const poster = 'testPoster.jpg';
    const width = 720;
    const track = 'testTrack.vtt';
    const wrapper = shallow(
      <VideoPlayer
        videoSrc={videoSrc}
        trackSrc={track}
        poster={poster}
        width={width}
      />,
    );
    expect(wrapper.find('video').length).toBe(1);
    expect(wrapper.find('video').prop('data-interactable')).toEqual(true);
    expect(wrapper.find('video').prop('poster')).toEqual(poster);
    expect(wrapper.find('video').prop('preload')).toEqual('metadata');
    expect(wrapper.find('video').prop('controls')).toEqual(true);
    expect(wrapper.find('video').prop('width')).toEqual(720);
    expect(wrapper.find('video').prop('src')).toEqual(videoSrc.small);

    expect(wrapper.find('track').length).toBe(1);
    expect(wrapper.find('track').prop('src')).toEqual(track);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render Video Player with override source', () => {
    const videoSrc = { large: 'testSrc.mp4', medium: 'testSrc.mp4', small: 'testSrc.mp4', override: 'override.mp4' };
    const poster = 'testPoster.jpg';
    const width = 480;
    const track = 'testTrack.vtt';
    const wrapper = shallow(
      <VideoPlayer
        videoSrc={videoSrc}
        trackSrc={track}
        poster={poster}
        width={width}
      />,
    );
    expect(wrapper.find('video').length).toBe(1);
    expect(wrapper.find('video').prop('data-interactable')).toEqual(true);
    expect(wrapper.find('video').prop('poster')).toEqual(poster);
    expect(wrapper.find('video').prop('preload')).toEqual('metadata');
    expect(wrapper.find('video').prop('controls')).toEqual(true);
    expect(wrapper.find('video').prop('width')).toEqual(480);
    expect(wrapper.find('video').prop('src')).toEqual(videoSrc.override);

    expect(wrapper.find('track').length).toBe(1);
    expect(wrapper.find('track').prop('src')).toEqual(track);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('decoration video', () => {
    const videoSrc = { large: 'testSrc.mp4', medium: 'testSrc2.mp4', small: 'testSrc3.mp4' };
    const width = 720;
    const track = 'testTrack.vtt';
    const wrapper = shallow(
      <VideoPlayer
        videoSrc={videoSrc}
        trackSrc={track}
        width={width}
        isDecoration
      />,
    );
    expect(wrapper.find('track').length).toBe(0);
    expect(wrapper.find('video').length).toBe(1);
    expect(wrapper.find('video').prop('data-interactable')).toEqual(undefined);
    expect(wrapper.find('video').prop('loop')).toEqual(true);
    expect(wrapper.find('video').prop('muted')).toEqual(true);
    expect(wrapper.find('video').prop('controls')).toEqual(false);
    expect(wrapper.find('video').prop('width')).toEqual(720);
    expect(wrapper.find('video').prop('src')).toEqual(videoSrc.small);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
