import React from 'react';
import PropTypes from 'prop-types';
import './ContentCard.scss';
import classNames from 'classnames';
import { Typography } from '../Typography';
import { Image } from '../Image';
import ImageSource from '../Image/ImageSource';

const Picture = ({ cardImage }) => (
  <Image
    src={cardImage && cardImage.size.desktop}
    alt={cardImage && cardImage.alt}
    pictureClass="card-asset"
  >
    <ImageSource media="(max-width:1024px)" srcSet={cardImage && cardImage.size.tablet} />
    <ImageSource media="(max-width:767px)" srcSet={cardImage && cardImage.size.mobile} />
  </Image>
);

Picture.defaultProps = {};

Picture.propTypes = {
  cardImage: PropTypes.shape({
    alt: PropTypes.string,
    size: PropTypes.shape({
      mobile: PropTypes.string,
      tablet: PropTypes.string,
      desktop: PropTypes.string,
    }),
  }),
};

const Video = () => {
  // Placeholder until we receive comps to support
};

const ContentCard = ({
  grid,
  type,
  theme,
  cardData,
  addClass,
}) => {
  const {
    title,
    copy,
    href,
    image,
  } = cardData;

  const classes = classNames(
    'content-card',
    addClass,
    theme,
    {
      'media-card': type === 'media',
      'video-card': type === 'video',
    },
  );
  return (
    <div className={classes} data-grid={grid} data-type={type} data-theme={theme}>
      <a className="card-container" href={href && href.url} target={href && href.target} rel={href && href.rel}>
        <div className="card-icon" aria-hidden="true">
          {/* Placeholder until we receive comps to support */}
        </div>
        {type === 'media' && <Picture cardImage={image} />}
        {type === 'video' && <Video />}
        <div className="card-content">
          {title
            && (
            <h2 className="card-title">
              {title.title1
                && <Typography variant="eyebrow">{title.title1}</Typography>}
              {title.title2
                && <Typography variant="eyebrow">{title.title2}</Typography>}
              {title.title3
                && <Typography variant="eyebrow">{title.title3}</Typography>}
            </h2>
            )}
          {copy
            && (
            <p className="card-copy">
              {copy.copy1
                && <Typography variant="body">{copy.copy1}</Typography>}
              {copy.copy2
                && <Typography variant="body">{copy.copy2}</Typography>}
              {copy.copy3
                && <Typography variant="body">{copy.copy3}</Typography>}
            </p>
            )}
        </div>
      </a>
    </div>
  );
};

ContentCard.defaultProps = {
  type: 'media',
  theme: 'vertical',
};

ContentCard.propTypes = {
  grid: PropTypes.string,
  type: PropTypes.oneOf([
    'media',
    'video',
  ]),
  theme: PropTypes.oneOf([
    'vertical',
    'horizontal',
  ]),
  addClass: PropTypes.string,
  cardData: PropTypes.shape({
    title: PropTypes.shape({
      title1: PropTypes.string,
      title2: PropTypes.string,
      title3: PropTypes.string,
    }),
    copy: PropTypes.shape({
      copy1: PropTypes.string,
      copy2: PropTypes.string,
      copy3: PropTypes.string,
    }),
    href: PropTypes.shape({
      url: PropTypes.string,
      target: PropTypes.string,
      rel: PropTypes.string,
    }),
    image: PropTypes.shape({
      alt: PropTypes.string,
      size: PropTypes.shape({
        mobile: PropTypes.string,
        tablet: PropTypes.string,
        desktop: PropTypes.string,
      }),
    }),
  }),
};

export default ContentCard;
