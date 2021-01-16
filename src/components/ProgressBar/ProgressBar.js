import React from 'react';
import './ProgressBar.scss';
import PropTypes from 'prop-types';

const ProgressBar = ({ progress, progressComplete }) => {
  const percentRange =
    progress > progressComplete ? 100 : (progress / progressComplete) * 100;

  const PercentageBar = () => (
    // render current the filled range of progress bar along its width
    <div
      role="progressbar"
      aria-label="progress bar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax={progressComplete}
      className="percentage-bar"
      style={{ width: `${percentRange}%` }}
    />
  );

  const PercentageBarContainer = () => (
    // render available progress bar’s limit
    <div className="percentage-bar-container">
      <PercentageBar />
    </div>
  );

  return (
    // pass the percentageRange state to other components
    <div className="progress-bar">
      <PercentageBarContainer />
    </div>
  );
};

ProgressBar.defaultProps = {};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  progressComplete: PropTypes.number.isRequired,
};

export default ProgressBar;
