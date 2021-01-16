import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GliderJS from './GliderJS/glider';
import { List } from '../List';
import './Carousel.scss';
import { canUseDOM } from '../../util';

/**
 * A configurable carousel that utilizes Glider.js (https://nickpiscitelli.github.io/Glider.js/)
 */
const Carousel = ({
  children,
  addClass,
  slidesToShow,
  dots,
  arrows,
  scrollLockDelay,
  duration,
  itemWidth,
  enableRewindLooping,
  disableDragging,
  enableScrollLock,
  onNewItemVisible,
  squared,
}) => {
  const carouselRef = useRef(null);
  const gliderRef = useRef(null);
  const [loaded, setLoaded] = useState(false); // Flagged true after GliderJS inits
  const gliderQuerySelector = '.glider';

  const classes = classNames(
    'carousel',
    { 'carousel-square': squared }, // 1:1 Aspect ratio
    addClass,
  );

  // Options for GliderJS (https://nickpiscitelli.github.io/Glider.js/)
  const createOptionsObject = () => ({
    // configurable options
    rewind: enableRewindLooping,
    draggable: !disableDragging,
    scrollLock: enableScrollLock,
    slidesToShow: itemWidth ? 'auto' : slidesToShow,
    itemWidth,
    // 'undefined' is glider.js's default value for exactWidth
    exactWidth: itemWidth ? true : undefined,
    scrollLockDelay,
    duration,
  });

  // Called whenever a slide is visible
  const itemVisible = (event) => {
    if (onNewItemVisible) {
      const itemIndex = event.detail.slide;
      onNewItemVisible(itemIndex);
    }
  };

  // Called whenever a slide is hidden
  const itemHidden = (e) => {
    const slideIndex = e.detail.slide;
    const hiddenSlide = carouselRef.current.querySelectorAll('.glider-slide')[slideIndex];
    // Assumes there is only 1 video per slide
    if (hiddenSlide.querySelector('video')) {
      const video = hiddenSlide.querySelector('video');
      video.pause();
    }
  };

  // On mount, init GliderJS and add event listeners (when window is not undefined)
  useEffect(() => {
    if (canUseDOM() && !gliderRef.current) {
      GliderJS(); // Runs GliderJS code found in src/components/Carousel/GliderJS/glider.js
      const carousel = carouselRef.current;
      gliderRef.current = new Glider(carousel.querySelector(gliderQuerySelector), { // eslint-disable-line
        ...createOptionsObject(),
        /** Selectors */
        dots,
        arrows,
        /** Do not change */
        skipTrack: true,
        resizeLock: true,
      });
      carousel.querySelector(gliderQuerySelector).addEventListener('glider-slide-hidden', itemHidden);
      carousel.querySelector(gliderQuerySelector).addEventListener('glider-slide-visible', itemVisible);
      setLoaded(true);
    }
    return () => {
      const carousel = carouselRef.current;
      carousel.querySelector(gliderQuerySelector).removeEventListener('glider-slide-hidden', itemHidden);
      carousel.querySelector(gliderQuerySelector).removeEventListener('glider-slide-visible', itemVisible);
      gliderRef.current.destroy();
    };
  }, [window]);

  return (
    <div ref={carouselRef} className={classes}>
      <div className="glider carousel__track-container">
        <List addClass="carousel__track glider-track">
          {React.Children.map(children, (child) => (<List.Item>{loaded && child}</List.Item>))}
        </List>
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  slidesToShow: 1,
  scrollLockDelay: 100,
  duration: 0.5,
};

Carousel.propTypes = {
  /** Carousel items */
  children: PropTypes.node,
  /** Class to append to <Carousel />  */
  addClass: PropTypes.string,
  /** Callback function when a new item is visible */
  onNewItemVisible: PropTypes.func,
  /** The number of items to show at once.
    * Set the 'itemWidth; prop instead if you prefer to show items based off their width. */
  slidesToShow: PropTypes.number,
  /** If true, the Carousel ignores dragging with the mouse */
  disableDragging: PropTypes.bool,
  /** When scrollLock is set, this is the delay in milliseconds to wait before the scroll happens */
  scrollLockDelay: PropTypes.number,
  /** If true, Carousel will scroll to the beginning/end when it's respective endpoint is reached */
  enableRewindLooping: PropTypes.bool,
  /** If true, Carousel will scroll to the nearest slide after any scroll interactions */
  enableScrollLock: PropTypes.bool,
  /** If true, Carousel will be have a 1:1 aspect ratio */
  squared: PropTypes.bool,
  /** An aggravator used to control animation speed. Higher is slower. */
  duration: PropTypes.number,
  /** Setting this prop will cause the 'slidesToShow' prop to be ignored. */
  itemWidth: PropTypes.number || PropTypes.func,
  /** An HTML selector containing the dot container */
  dots: PropTypes.string,
  /** An HTML selector for the arrow buttons */
  arrows: PropTypes.exact({
    prev: PropTypes.string,
    next: PropTypes.string,
  }),
};

export default Carousel;
