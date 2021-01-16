import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import './Hero.scss';
import classNames from 'classnames';
import { InlineSVG } from '../../components/InlineSVG';
import { Image } from '../../components/Image';
import { Wave } from '../../components/Wave';
import { VideoPlayer } from '../../components/Media/VideoPlayer';
import CTA from './Fragments/CTA';
import Headline from './Fragments/Headline';
import { Typography } from '../../components/Typography';

const Hero = ({
  // layout
  presetLayout,
  layout,
  isAlt,
  isLeft,
  // Healine
  headlineArtworkDesktop,
  headlineArtworkMobile,
  headline1,
  headline2,
  headline3,
  headlineFontStyle,
  headlineFontColor,
  // Body
  bodySubtitle,
  bodySubtitleWidth,
  // Text
  textAlign,
  textPlacementDesktop,
  textPlacementMobile,
  textShadow,
  textBackgroundColor,
  // CTA - Primary
  primaryCTAText,
  primaryCTALink,
  primaryCTATextColor,
  primaryCTAColor,
  primaryCTAStyle,
  // CTA - Secondary
  secondaryCTAText,
  secondaryCTALink,
  secondaryCTATextColor,
  secondaryCTAColor,
  secondaryCTAStyle,
  // media
  image,
  imageAltText,
  video,
  // wave
  wave,
  waveColorTop,
  waveColorBottom,
  // Misc
  tint,
  bottomPadding,
}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 767px)' });

  const presetLayoutDetails = {
    '50/50, Image Right': {
      layout: layout || '50/50',
      bodySubtitleWidth: bodySubtitleWidth || false,
      headlineFontColor: headlineFontColor || 'brand-white',
      headlineFontStyle: headlineFontStyle || 'h1',
      textBackgroundColor: textBackgroundColor || 'primary',
      primaryCTATextColor: primaryCTATextColor || 'primary',
      primaryCTAColor: primaryCTAColor || 'brand-white',
      primaryCTAStyle: primaryCTAStyle || 'secondary',
      secondaryCTATextColor: secondaryCTATextColor || 'brand-white',
      secondaryCTAColor: secondaryCTAColor || 'brand-white',
      secondaryCTAStyle: secondaryCTAStyle || 'text-link',
      textShadow: textShadow || false,
      textAlign: textAlign || 'Center',
      textPlacementDesktop: textPlacementDesktop || 'Centered',
      textPlacementMobile: textPlacementMobile || 'Center',
      isAlt: isAlt || false,
      tint: tint || false,
      isLeft: isLeft || false,
    },
    '50/50, Image Left': {
      layout: layout || '50/50',
      bodySubtitleWidth: bodySubtitleWidth || false,
      headlineFontColor: headlineFontColor || 'primary',
      headlineFontStyle: headlineFontStyle || 'h1',
      textBackgroundColor: textBackgroundColor || 'pastel-blue',
      primaryCTATextColor: primaryCTATextColor || 'brand-white',
      primaryCTAColor: primaryCTAColor || 'primary',
      primaryCTAStyle: primaryCTAStyle || 'primary',
      secondaryCTATextColor: secondaryCTATextColor || 'text-link',
      secondaryCTAColor: secondaryCTAColor || 'brand-white',
      secondaryCTAStyle: secondaryCTAStyle || 'text-link',
      textShadow: textShadow || false,
      textAlign: textAlign || 'Center',
      textPlacementDesktop: textPlacementDesktop || 'Centered',
      textPlacementMobile: textPlacementMobile || 'Center',
      isAlt: isAlt || true,
      tint: tint || false,
      isLeft: isLeft || true,
    },
    'Full Width, Text Left': {
      layout: layout || 'Full',
      bodySubtitleWidth: bodySubtitleWidth || false,
      headlineFontColor: headlineFontColor || 'brand-white',
      headlineFontStyle: headlineFontStyle || 'h1',
      textBackgroundColor: textBackgroundColor || 'brand-transparent',
      primaryCTATextColor: primaryCTATextColor || 'primary',
      primaryCTAColor: primaryCTAColor || 'brand-white',
      primaryCTAStyle: primaryCTAStyle || 'secondary',
      secondaryCTATextColor: secondaryCTATextColor || 'brand-white',
      secondaryCTAColor: secondaryCTAColor || 'brand-white',
      secondaryCTAStyle: secondaryCTAStyle || 'text-link',
      textShadow: textShadow || true,
      textAlign: textAlign || 'Center',
      textPlacementDesktop: textPlacementDesktop || 'Centered',
      textPlacementMobile: textPlacementMobile || 'Top',
      tint: tint || true,
      isLeft: isLeft || true,
    },
    'Full Width, Text Center': {
      layout: layout || 'Full',
      bodySubtitleWidth: bodySubtitleWidth || true,
      headlineFontColor: headlineFontColor || 'brand-white',
      headlineFontStyle: headlineFontStyle || 'h1',
      textBackgroundColor: textBackgroundColor || 'primary',
      primaryCTATextColor: primaryCTATextColor || 'primary',
      primaryCTAColor: primaryCTAColor || 'brand-white',
      primaryCTAStyle: primaryCTAStyle || 'secondary',
      secondaryCTATextColor: secondaryCTATextColor || 'brand-white',
      secondaryCTAColor: secondaryCTAColor || 'brand-white',
      secondaryCTAStyle: secondaryCTAStyle || 'text-link',
      textShadow: textShadow || true,
      textAlign: textAlign || 'Center',
      textPlacementDesktop: textPlacementDesktop || 'Centered',
      textPlacementMobile: textPlacementMobile || 'Center',
      tint: tint || true,
      isLeft: isLeft || false,
    },
    'Full Width, Headline Artwork': {
      layout: layout || 'Full',
      bodySubtitleWidth: bodySubtitleWidth || false,
      headlineFontColor: headlineFontColor || 'brand-white',
      headlineFontStyle: headlineFontStyle || 'h1',
      textBackgroundColor: textBackgroundColor || 'brand-transparent',
      primaryCTATextColor: primaryCTATextColor || 'primary',
      primaryCTAColor: primaryCTAColor || 'brand-white',
      primaryCTAStyle: primaryCTAStyle || 'secondary',
      secondaryCTATextColor: secondaryCTATextColor || 'brand-white',
      secondaryCTAColor: secondaryCTAColor || 'brand-white',
      secondaryCTAStyle: secondaryCTAStyle || 'text-link',
      textShadow: textShadow || true,
      textAlign: textAlign || 'Center',
      textPlacementDesktop: textPlacementDesktop || 'Centered',
      textPlacementMobile: textPlacementMobile || 'Center',
      tint: tint || true,
      isLeft: isLeft || false,
    },
  };

  const classes = classNames(
    'hero',
    { hero50: presetLayoutDetails[presetLayout].layout === '50/50' },
    {
      'hero-full': presetLayoutDetails[presetLayout].layout === 'Full',
    },
    {
      'hero-full-left':
        presetLayoutDetails[presetLayout].layout === 'Full' &&
        presetLayoutDetails[presetLayout].isLeft,
    },
    {
      'hero50-Alt':
        presetLayoutDetails[presetLayout].layout === '50/50' &&
        presetLayoutDetails[presetLayout].isAlt,
    },
    { paddingSmall: bottomPadding === 'Small' },
    { paddingLarge: bottomPadding === 'Large' },
    { 'no-sub': bodySubtitle },
  );
  const imageClasses = classNames(
    'hero-image',
    { image50: presetLayoutDetails[presetLayout].layout === '50/50' },
    { imageFull: presetLayoutDetails[presetLayout].layout === 'Full' },
    {
      image50Alt:
        presetLayoutDetails[presetLayout].layout === '50/50' &&
        presetLayoutDetails[presetLayout].isAlt,
    },
  );
  const contentClasses = classNames(
    'content',
    { 'text-shadow': presetLayoutDetails[presetLayout].textShadow },
    presetLayoutDetails[presetLayout].tint
      ? 'tint'
      : `background-color-${presetLayoutDetails[presetLayout].textBackgroundColor}`,
    { 'align-left': presetLayoutDetails[presetLayout].textAlign === 'Left' },
    {
      'align-center': presetLayoutDetails[presetLayout].textAlign === 'Center',
    },
    {
      'top-left':
        presetLayoutDetails[presetLayout].textPlacementDesktop === 'Top-Left' &&
        isDesktop,
    },
    {
      'top-center':
        (presetLayoutDetails[presetLayout].textPlacementDesktop ===
          'Top-center' &&
          isDesktop) ||
        presetLayoutDetails[presetLayout].textPlacementMobile === 'Top',
    },
    {
      'top-right':
        presetLayoutDetails[presetLayout].textPlacementDesktop ===
          'Top-right' && isDesktop,
    },
    {
      'center-left':
        presetLayoutDetails[presetLayout].textPlacementDesktop ===
          'Center-left' && isDesktop,
    },
    {
      center:
        (presetLayoutDetails[presetLayout].textPlacementDesktop ===
          'Centered' &&
          isDesktop) ||
        (presetLayoutDetails[presetLayout].textPlacementMobile === 'Center' &&
          !isDesktop),
    },
    {
      'center-right':
        presetLayoutDetails[presetLayout].textPlacementDesktop ===
          'Center-right' && isDesktop,
    },
    {
      'bottom-left':
        presetLayoutDetails[presetLayout].textPlacementDesktop ===
          'Bottom-left' && isDesktop,
    },
    {
      'bottom-center':
        (presetLayoutDetails[presetLayout].textPlacementDesktop ===
          'Bottom-center' &&
          isDesktop) ||
        presetLayoutDetails[presetLayout].textPlacementMobile === 'Bottom',
    },
    {
      'bottom-right':
        presetLayoutDetails[presetLayout].textPlacementDesktop ===
          'Bottom-right' && isDesktop,
    },
  );

  const ctaClasses = classNames('cta-wrapper');
  return (
    <section className={classes}>
      <div className={contentClasses}>
        <div
          className={`typoWrapper ${presetLayoutDetails[presetLayout]
            .bodySubtitleWidth && 'max'}`}
        >
          {headline1 === '' &&
            headlineArtworkDesktop &&
            headlineArtworkMobile &&
            (!isDesktop ? (
              <InlineSVG
                path={headlineArtworkMobile}
                className="inline-svg"
                title={imageAltText}
              />
            ) : (
              <InlineSVG
                path={headlineArtworkDesktop}
                className="inline-svg"
                title={imageAltText}
              />
            ))}
          {headline1 && (
            <Headline
              text1={headline1}
              text2={headline2}
              text3={headline3}
              color={presetLayoutDetails[presetLayout].headlineFontColor}
              headlineTag={presetLayoutDetails[presetLayout].headlineFontStyle}
            />
          )}
          {bodySubtitle && (
            <Typography
              variant="body-medium"
              addClass="body-sub"
              color={presetLayoutDetails[presetLayout].headlineFontColor}
            >
              {bodySubtitle}
            </Typography>
          )}
          <div className={ctaClasses}>
            {primaryCTAText && primaryCTALink && (
              <CTA
                text={primaryCTAText}
                textColor={
                  presetLayoutDetails[presetLayout].primaryCTATextColor
                }
                link={primaryCTALink}
                color={presetLayoutDetails[presetLayout].primaryCTAColor}
                style={presetLayoutDetails[presetLayout].primaryCTAStyle}
              />
            )}
            {secondaryCTAText && secondaryCTALink && (
              <CTA
                text={secondaryCTAText}
                textColor={
                  presetLayoutDetails[presetLayout].secondaryCTATextColor
                }
                link={secondaryCTALink}
                color={presetLayoutDetails[presetLayout].secondaryCTAColor}
                style={presetLayoutDetails[presetLayout].secondaryCTAStyle}
              />
            )}
          </div>
        </div>
      </div>
      <div className={imageClasses}>
        {video ? (
          <VideoPlayer isDecoration videoSrc={video} />
        ) : (
          <Image src={image.imageDesktop} alt={imageAltText}>
            <Image.Source
              media="(max-width:767px)"
              srcSet={image.imageMobile}
            />
            <Image.Source
              media="(max-width:1024px)"
              srcSet={image.imageTablet}
            />
          </Image>
        )}
      </div>
      {wave && (
        <div className="hero-wave">
          <Wave colorTop={waveColorTop} colorBottom={waveColorBottom} />
        </div>
      )}
    </section>
  );
};

Hero.defaultProps = {
  wave: false,
  waveColorTop: 'brand-transparent',
  waveColorBottom: 'brand-white',
  bottomPadding: 'None',
};

Hero.propTypes = {
  layout: PropTypes.oneOf(['50/50', 'Full']),
  presetLayout: PropTypes.oneOf([
    '50/50, Image Right',
    '50/50, Image Left',
    'Full Width, Text Left',
    'Full Width, Text Center',
    'Full Width, Headline Artwork',
  ]).isRequired,
  isAlt: PropTypes.bool,
  isLeft: PropTypes.bool,
  headlineArtworkDesktop: PropTypes.string,
  headlineArtworkMobile: PropTypes.string,
  headline1: PropTypes.string.isRequired,
  headline2: PropTypes.string,
  headline3: PropTypes.string,
  headlineFontStyle: PropTypes.oneOf(['h1', 'h2']),
  headlineFontColor: PropTypes.oneOf(['brand-white', 'gray5', 'primary']),
  bodySubtitle: PropTypes.string,
  bodySubtitleWidth: PropTypes.bool,
  textAlign: PropTypes.oneOf(['Left', 'Center']),
  textPlacementDesktop: PropTypes.oneOf([
    'Top-Left',
    'Top-center',
    'Top-right',
    'Center-left',
    'Centered',
    'Center-right',
    'Bottom-left',
    'Bottom-center',
    'Bottom-right',
  ]),
  textPlacementMobile: PropTypes.oneOf(['Top', 'Center', 'Bottom']),
  textShadow: PropTypes.bool,
  textBackgroundColor: PropTypes.oneOf([
    'primary',
    'primary1',
    'gray3',
    'pastel-blue',
    'brand-transparent',
  ]),
  primaryCTAText: PropTypes.string,
  primaryCTALink: PropTypes.string,
  primaryCTATextColor: PropTypes.oneOf(['primary', 'brand-white']),
  primaryCTAColor: PropTypes.string,
  primaryCTAStyle: PropTypes.oneOf(['primary', 'secondary', 'text-link']),
  secondaryCTAText: PropTypes.string,
  secondaryCTALink: PropTypes.string,
  secondaryCTATextColor: PropTypes.oneOf([
    'primary',
    'brand-white',
    'text-link',
  ]),
  secondaryCTAColor: PropTypes.string,
  secondaryCTAStyle: PropTypes.oneOf(['primary', 'secondary', 'text-link']),
  image: PropTypes.shape({
    imageDesktop: PropTypes.string,
    imageTablet: PropTypes.string,
    imageMobile: PropTypes.string,
  }).isRequired,
  imageAltText: PropTypes.string.isRequired,
  tint: PropTypes.bool,
  bottomPadding: PropTypes.oneOf(['None', 'Small', 'Large']),
  wave: PropTypes.bool,
  waveColorTop: PropTypes.string,
  waveColorBottom: PropTypes.string,
  video: PropTypes.shape({
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
    override: PropTypes.string,
  }),
};

export default Hero;
