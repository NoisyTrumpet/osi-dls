import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load'; // https://www.npmjs.com/package/react-lazy-load
import classNames from 'classnames';
import ImageSource from './ImageSource';
import './Image.scss';

const Image = ({
  src,
  dataSrc,
  alt,
  className,
  addClass,
  children,
  pictureClass,
  ariaHidden,
  lazyLoad,
  lazyOffsetVertical,
  lazyOffsetHorizontal,
}) => {
  const classes = classNames(
    className || 'image',
    addClass,
  );

  const imageComponent = (
    <picture className={pictureClass}>
      {children}
      <img data-src={dataSrc} src={src} alt={alt} className={classes} aria-hidden={ariaHidden} />
    </picture>
  );

  return (
    lazyLoad ? <LazyLoad className="lazy-image-container" debounce={false} offsetHorizontal={lazyOffsetHorizontal} offsetVertical={lazyOffsetVertical}>{imageComponent}</LazyLoad> : <>{imageComponent}</>
  );
};

Image.Source = ImageSource;

Image.defaultProps = {
  lazyLoad: true,
  lazyOffsetVertical: 128,
  lazyOffsetHorizontal: 128,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dataSrc: PropTypes.string,
  className: PropTypes.string,
  addClass: PropTypes.string,
  pictureClass: PropTypes.string,
  ariaHidden: PropTypes.string,
  /** Flag to determine if image should be lazily loaded (Gets wrapped with https://www.npmjs.com/package/react-lazy-load) */
  lazyLoad: PropTypes.bool,
  /** https://www.npmjs.com/package/react-lazy-load#offsetvertical */
  lazyOffsetVertical: PropTypes.number,
  /** https://www.npmjs.com/package/react-lazy-load#offsethorizontal */
  lazyOffsetHorizontal: PropTypes.number,
  children: (props, propName, componentName) => {
    let error;
    const prop = props[propName];
    const requiredChildType = 'ImageSource';
    React.Children.forEach(prop, (child) => {
      // type.name seems to work for both Class and Functional components
      if (child.type.name !== requiredChildType) {
        error = new Error(`\`${componentName}\` only accepts children of type \`${requiredChildType}\`. Child of type ${child.type.name} was found.`);
      }
    });
    return error;
  },
};

export default Image;
