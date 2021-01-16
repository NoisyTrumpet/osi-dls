import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { canUseDOM } from '../../../util';
import './VideoPlayer.scss';

const VideoPlayer = ({
  videoSrc,
  trackSrc,
  width,
  poster,
  preload,
  mute,
  fallbackContent,
  isDecoration,
  addClass,
}) => {
  const myRef = React.useRef(null);
  const baseClassName = 'video-player';
  const pausedByScrollAttributeName = 'data-paused-by-scroll'; // The <video /> data attribute for whether or not the element was paused by scrolling away

  const classes = classNames(baseClassName, addClass);

  const onScroll = () => {
    const video = myRef.current;
    const isVideoPlaying = !!(
      video.currentTime > 0 &&
      !video.paused &&
      !video.ended &&
      video.readyState > 2
    ); // https://stackoverflow.com/a/6647216/13158371

    const videoRect = video.getBoundingClientRect();
    const isVideoPartiallyVisible = () => {
      return (
        canUseDOM() &&
        videoRect.top < window.innerHeight &&
        videoRect.bottom >= 0
      );
    };
    const isVideoFullyVisible = () => {
      return (
        canUseDOM() &&
        videoRect.top >= 0 &&
        videoRect.bottom <= window.innerHeight
      );
    };

    // [If] video scrolls out of view, pause it
    // [else If] the video is fully in view, and was paused by scrolling away, play it
    if (!isVideoPartiallyVisible() && isVideoPlaying) {
      myRef.current.setAttribute(pausedByScrollAttributeName, true);
      myRef.current.pause();
    } else if (
      isVideoFullyVisible() &&
      video.getAttribute(pausedByScrollAttributeName) === 'true'
    ) {
      myRef.current.play();
    }
  };

  React.useEffect(() => {
    // This is for Safari browser to play after component loads.
    if (isDecoration) {
      myRef.current.play();
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('scroll', onScroll);
      }
    };
  }, []);

  const onPlay = () => {
    const video = myRef.current;
    const selector = `.${baseClassName}[data-interactable]`; // Video Components that are not used for decoration
    if (typeof document !== 'undefined') {
      document.querySelectorAll(selector).forEach((el) => {
        if (video !== el) {
          el.pause();
        }
      });
      document.addEventListener('scroll', onScroll);
    }
    video.setAttribute(pausedByScrollAttributeName, false);
  };

  const onPause = () => {
    // Remove scroll Listener if pause event was triggered by anything other than scrolling away
    if (
      typeof document !== 'undefined' &&
      !(myRef.current.getAttribute(pausedByScrollAttributeName) === 'true')
    ) {
      document.removeEventListener('scroll', onScroll);
    }
  };

  const onEnded = () => {
    // Remove scroll Listener if video ended playback
    myRef.current.setAttribute(pausedByScrollAttributeName, false);
    if (typeof document !== 'undefined') {
      document.removeEventListener('scroll', onScroll);
    }
  };

  const closedCaptionsTrack = (
    <track
      default
      kind="captions"
      srcLang="en"
      // If mute is true then we wont need the trackSrc. This is just making sure to remove
      // any trackSrc if supplied with a true mute prop
      src={mute ? '' : trackSrc}
    />
  );

  // Breakpoints utilized by the useMediaQuery functions below.
  const breakpoints = {
    desktop: '(min-width: 1024px)',
    tablet: '(min-width: 768px)',
  };

  // The react-responsive useMediaQuery function takes a breakpoint
  // and returns true if the window size falls into the specified width.
  const desktop = useMediaQuery({ query: breakpoints.desktop });
  const tablet = useMediaQuery({ query: breakpoints.tablet });

  /**
   * pickSrc() returns the correct videoSrc based on screen resolution.
   * If useMediaQuery fails to return true, it will try to return a
   * valid source (from smallest to largest)
   */
  const pickSrc = () => {
    switch (true) {
      // Corercing the string or lack thereof contained in videoSrc.override
      // into a boolean here to use in the case switch.
      case Boolean(videoSrc.override):
        return videoSrc.override;
      case desktop:
        return videoSrc.large;
      case tablet:
        return videoSrc.medium;
      default:
        return videoSrc.small || videoSrc.medium || videoSrc.large;
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      ref={myRef}
      className={classes}
      src={pickSrc()}
      crossOrigin="anonymous"
      controls={!isDecoration}
      controlslist="nodownload"
      poster={poster}
      width={width}
      muted={mute || isDecoration}
      preload={preload}
      autoPlay={isDecoration}
      loop={isDecoration}
      playsInline={!isDecoration}
      data-interactable={isDecoration ? undefined : true}
      onPlay={isDecoration ? null : onPlay}
      onEnded={isDecoration ? null : onEnded}
      onPause={isDecoration ? null : onPause}
    >
      {!isDecoration && closedCaptionsTrack}
      {fallbackContent}
    </video>
  );
};

VideoPlayer.defaultProps = {
  poster: '',
  trackSrc: '',
  mute: false,
  fallbackContent: 'Your browser does not support the video tag.',
  preload: 'metadata',
  isDecoration: false,
};

VideoPlayer.propTypes = {
  videoSrc: PropTypes.shape({
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
    override: PropTypes.string,
  }).isRequired,
  trackSrc: PropTypes.string,
  width: PropTypes.number,
  poster: PropTypes.string,
  addClass: PropTypes.string,
  mute: PropTypes.bool,
  /** fallbackContent will only be displayed in browsers
   * that do not support the `<video/>` element. */
  fallbackContent: PropTypes.node,
  preload: PropTypes.string,
  isDecoration: PropTypes.bool,
};

export default VideoPlayer;
