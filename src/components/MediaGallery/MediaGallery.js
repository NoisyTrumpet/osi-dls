import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '../Carousel';
import { Typography } from '../Typography';
import { List } from '../List';
import { IconButton } from '../IconButton';
import './MediaGallery.scss';

const MediaGallery = ({ children, id }) => {
  const [currentItemIndex, setCurrentItemIndex] = React.useState(0);
  const arrowIDs = {
    next: `${id}-next`,
    prev: `${id}-prev`,
  };

  const handleNewItemShown = (index) => {
    setCurrentItemIndex(index);
  };

  return (
    <div className="media-gallery" id={id}>
      <Carousel enableRewindLooping disableDragging onNewItemVisible={handleNewItemShown} arrows={{ next: `#${arrowIDs.next}`, prev: `#${arrowIDs.prev}` }}>
        {children}
      </Carousel>
      <div className="media-gallery__nav">
        <div className="slide-counter">
          <Typography variant="breadcrumb">{`${currentItemIndex + 1} / ${React.Children.count(children)}`}</Typography>
        </div>
        <div className="carousel__controls-container">
          <List addClass="carousel__controls" horizontal>
            <List.Item>
              <IconButton variant="circular" icon="arrows-tailleft-bold" addClass="carousel__controls-prev" id={arrowIDs.prev}>Previous</IconButton>
            </List.Item>
            <List.Item>
              <IconButton variant="circular" icon="arrows-tailright-bold" addClass="carousel__controls-next" id={arrowIDs.next}>Next</IconButton>
            </List.Item>
          </List>
        </div>
      </div>
    </div>
  );
};

MediaGallery.propTypes = {
  /** MediaGallery items */
  children: PropTypes.node,
  /** Required for arrow buttons to work properly */
  id: PropTypes.string.isRequired,
};

export default MediaGallery;
