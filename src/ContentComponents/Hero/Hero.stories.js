/* eslint-disable import/no-unresolved */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Hero } from "./";
// import heroSVG from "../../../conf/storybook/images/hero-headline.svg";

const defaultImgSrc = {
  imageDesktop: "https://picsum.photos/645/640",
  imageTablet: "https://picsum.photos/516/512",
  imageMobile: "https://picsum.photos/378/375"
};

const fullImgSrc = {
  imageDesktop: "https://picsum.photos/1200/516",
  imageTablet: "https://picsum.photos/1024/516",
  imageMobile: "https://picsum.photos/375/553"
};

const defaultPrimaryCTA = {
  text: "Optional CTA",
  link: "https://osilife.com/"
};

const defaultSecondaryCTA = {
  text: "Text Link CTA",
  link: "https://osilife.com/"
};

const videoSrc = {
  large:
    "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4",
  medium:
    "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4",
  small:
    "https://upload.wikimedia.org/wikipedia/commons/transcoded/e/eb/Wood_cleaving_-_2016.webm/Wood_cleaving_-_2016.webm.480p.vp9.webm"
};

const headline2Text =
  "Optional body subtitle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

storiesOf("Content Components/Hero", module)
  .addDecorator(withSmartKnobs())
  .add("w/Knobs", () => (
    <div className="sb-no-padding">
      <Hero
        presetLayout="50/50, Image Right"
        image={defaultImgSrc}
        imageAltText="Test Alt Text"
        headline1="Headline Line 1"
        headline2="Headline Line 2"
        primaryCTAText="Optional CTA"
        primaryCTALink={defaultPrimaryCTA.link}
        secondaryCTAText={defaultSecondaryCTA.text}
        secondaryCTALink={defaultSecondaryCTA.link}
      />
    </div>
  ));

storiesOf("Content Components/Hero", module)
  .add("50/50, Image Right", () => (
    <div className="sb-no-padding">
      <Hero
        presetLayout="50/50, Image Right"
        image={defaultImgSrc}
        imageAltText="Test Alt Text"
        headline1="Headline Line 1"
        headline2="Headline Line 2"
        primaryCTAText="Optional CTA"
        primaryCTALink={defaultPrimaryCTA.link}
        secondaryCTAText={defaultSecondaryCTA.text}
        secondaryCTALink={defaultSecondaryCTA.link}
      />
    </div>
  ))
  .add("50/50, Image Left", () => (
    <div className="sb-no-padding">
      <Hero
        presetLayout="50/50, Image Left"
        image={defaultImgSrc}
        imageAltText="Test Alt Text"
        headline1="Headline Line 1"
        headline2="Headline Line 2"
        primaryCTAText="Optional CTA"
        primaryCTALink={defaultPrimaryCTA.link}
        secondaryCTAText={defaultSecondaryCTA.text}
        secondaryCTALink={defaultSecondaryCTA.link}
      />
    </div>
  ))
  .add("Full Width, Text Left", () => (
    <div className="sb-no-padding">
      <Hero
        presetLayout="Full Width, Text Left"
        image={fullImgSrc}
        imageAltText="Test Alt Text"
        headline1="Headline Line 1"
        headline2="Headline Line 2"
        primaryCTAText="Optional CTA"
        primaryCTALink={defaultPrimaryCTA.link}
        secondaryCTAText={defaultSecondaryCTA.text}
        secondaryCTALink={defaultSecondaryCTA.link}
      />
    </div>
  ))
  .add("Full Width, Text Center", () => (
    <div className="sb-no-padding">
      <Hero
        presetLayout="Full Width, Text Center"
        image={fullImgSrc}
        imageAltText="Test Alt Text"
        headline1="Headline Line 1"
        bodySubtitle={headline2Text}
        primaryCTAText="Optional CTA"
        primaryCTALink={defaultPrimaryCTA.link}
        wave
      />
    </div>
  ))
  // .add("Full Width, Headline Artwork", () => (
  //   <div className="sb-no-padding">
  //     <Hero
  //       presetLayout="Full Width, Headline Artwork"
  //       headlineArtworkDesktop={heroSVG}
  //       headlineArtworkMobile={heroSVG}
  //       image={fullImgSrc}
  //       imageAltText="Test Alt Text"
  //       headline1=""
  //       bodySubtitle={headline2Text}
  //       primaryCTAText="Optional CTA"
  //       primaryCTALink={defaultPrimaryCTA.link}
  //       secondaryCTAText={defaultSecondaryCTA.text}
  //       secondaryCTALink={defaultSecondaryCTA.link}
  //     />
  //   </div>
  // ))
  .add("Full Width, Text Center Video", () => (
    <div className="sb-no-padding">
      <Hero
        presetLayout="Full Width, Text Center"
        image={fullImgSrc}
        imageAltText="Test Alt Text"
        headline1="Headline Line 1"
        headline2="Headline Line 2"
        primaryCTAText="Optional CTA"
        primaryCTALink={defaultPrimaryCTA.link}
        secondaryCTAText={defaultSecondaryCTA.text}
        secondaryCTALink={defaultSecondaryCTA.link}
        video={videoSrc}
      />
    </div>
  ));
