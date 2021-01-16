import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LikeButtons.scss';
import classNames from 'classnames';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';

const LikeButtons = ({
  domId,
  addClass,
  likeCount,
  likeText, // Screenreader text
  dislikeText, // Screenreader text
  isDisabled,
}) => {
  const classes = classNames('like-wrapper', addClass);
  const [isLike, setLike] = useState(false);
  const [isDislike, setDislike] = useState(false);

  const updateCount = () => {
    // API request placeholder here
    // Some things to consider:
    // 1. Are guests allowed to like/dislike?
    // 2. If so, do we store their response in a cookie?
    // 3. Are we storing if a logged in user has liked/disliked something? Likely yes
  };

  const handleLike = () => {
    setLike(true);
    setDislike(false);
    updateCount();
  };

  const handleDislike = () => {
    setLike(false);
    setDislike(true);
    updateCount();
  };

  // TODO: Update endpoints for like/dislike counts
  return (
    <div className={classes}>
      <IconButton
        id={`like-${domId}`}
        role="button"
        disabled={isDisabled}
        icon="like-like-bold"
        click={() => handleLike()}
        ariaPressed={isLike}
      >
        {likeText}
      </IconButton>
      <div id={`likeCount-${domId}`}>
        <Typography variant="srt">{`like count for ${domId}`}</Typography>
        <Typography addClass={classNames({ active: isLike })} variant="helper">
          {likeCount.likes}
        </Typography>
      </div>
      <IconButton
        id={`dislike-${domId}`}
        role="button"
        disabled={isDisabled}
        icon="like-dislike-bold"
        click={() => handleDislike()}
        ariaPressed={isDislike}
      >
        {dislikeText}
      </IconButton>
      <div id={`dislikeCount-${domId}`}>
        <Typography variant="srt">{`dislike count for ${domId}`}</Typography>
        <Typography
          addClass={classNames({ active: isDislike })}
          variant="helper"
        >
          {likeCount.dislikes}
        </Typography>
      </div>
    </div>
  );
};

LikeButtons.defaultProps = {
  likeCount: {
    likes: 0,
    dislikes: 0,
  },
};

LikeButtons.propTypes = {
  domId: PropTypes.string.isRequired,
  likeCount: PropTypes.shape({
    likes: PropTypes.number,
    dislikes: PropTypes.number,
  }),
  likeText: PropTypes.string.isRequired,
  dislikeText: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default LikeButtons;
