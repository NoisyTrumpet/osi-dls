/* eslint jsx-a11y/media-has-caption: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconButton } from '../../IconButton';
import { Typography } from '../../Typography';
import AudioPlayerSource from './AudioPlayerSource';
import './AudioPlayer.scss';

const AudioPlayer = ({ addClass, children }) => {
  const audioRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [circleProgress, setCircleProgress] = React.useState(0);
  const [progressAnimation, setProgressAnimation] = React.useState(null);

  const classes = classNames(
    'audio-player',
    addClass,
  );

  // Audio Actions
  const togglePlayback = () => { setPlaying(!playing); };
  const playAudio = () => { audioRef.current.play(); };
  const pauseAudio = () => { audioRef.current.pause(); };

  // Audio Event Handlers
  const handleEndedAudio = React.useCallback(() => {
    setPlaying(false);
    setCircleProgress(0);
  }, []);

  React.useEffect(() => {
    audioRef.current.addEventListener('ended', handleEndedAudio);
    return () => {
      audioRef.current.removeEventListener('ended', handleEndedAudio);
    };
  }, [handleEndedAudio]);

  // Animations
  const performAnimation = () => {
    if (audioRef.current && audioRef.current.duration) {
      setProgressAnimation(requestAnimationFrame(performAnimation));
      const percent = audioRef.current.currentTime / audioRef.current.duration;
      setCircleProgress(percent);
    }
  };
  const startAnimation = () => { requestAnimationFrame(performAnimation); };
  const stopAnimation = () => { cancelAnimationFrame(progressAnimation); };

  // 'playing' React hook
  React.useEffect(() => {
    if (playing) {
      playAudio();
      startAnimation();
    } else {
      pauseAudio();
      stopAnimation();
    }
  }, [playing]);

  // AudioPlayer Progress Circle
  const radius = 20;
  const stroke = 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - circleProgress * circumference;
  const ProgressCircle = (
    <svg
      alt=""
      role="img"
      focusable="false"
      aria-hidden="true"
      height={radius * 2}
      width={radius * 2}
    >
      <title>Audio Progress Circle</title>
      <circle
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={radius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );

  // Typography and Icon Button Screen reader text
  const buttonActionText = `${playing ? 'Pause' : 'Play'} Audio`;
  const screenReaderText = `${playing ? 'Pause Audio' : `${Math.floor(circleProgress * 100)}% played, press play to continue`}`;

  return (
    <div className={classes}>
      <audio ref={audioRef}>{children}</audio>
      <div className="audio-player__button-container">
        {ProgressCircle}
        <IconButton
          icon={playing ? 'pausesmall-bold' : 'playsmall-bold'}
          variant="tiny"
          click={togglePlayback}
          srtAriaLive="polite"
        >
          {screenReaderText}
        </IconButton>
      </div>
      <Typography variant="body-medium">{buttonActionText}</Typography>
    </div>
  );
};

AudioPlayer.Source = AudioPlayerSource;

AudioPlayer.defaultProps = {};

AudioPlayer.propTypes = {
  children: (props, propName, componentName) => {
    let error;
    const prop = props[propName];
    const requiredChildType = 'AudioPlayerSource';
    React.Children.forEach(prop, (child) => {
      // type.name seems to work for both Class and Functional components
      if (child.type.name !== requiredChildType) {
        error = new Error(`\`${componentName}\` only accepts children of type \`${requiredChildType}\`. Child of type ${child.type.name} was found.`);
      }
    });
    return error;
  },
  addClass: PropTypes.string,
};

export default AudioPlayer;
