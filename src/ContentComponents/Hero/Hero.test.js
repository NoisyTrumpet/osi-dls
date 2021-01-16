import React from "react";
import { render } from "@testing-library/react";
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
  toHaveAttribute
} from "@testing-library/jest-dom/matchers";
import { Hero } from "./";
// import { HallmarkCrown } from '../../assets/svgs';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
  toHaveAttribute
});

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
  textColor: "primary",
  link: "https://osilife.com/",
  color: "brand-white",
  style: "primary"
};

const defaultSecondaryCTA = {
  text: "Text Link CTA",
  link: "https://osilife.com/",
  color: "brand-white",
  style: "text-link"
};

const videoSrc = {
  large:
    "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4",
  medium:
    "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c4/Physicsworks.ogv/Physicsworks.ogv.240p.vp9.webm",
  small:
    "https://upload.wikimedia.org/wikipedia/commons/transcoded/e/eb/Wood_cleaving_-_2016.webm/Wood_cleaving_-_2016.webm.480p.vp9.webm",
  override:
    "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4"
};

// const headline2Text =
//   "Optional body subtitle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

describe("<Hero />", () => {
  test("should render with correct classes", () => {
    const { container, rerender } = render(
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
    );
    // Main Default Hero Classes
    expect(container.firstChild).toHaveClass("hero hero50");
    // Main Default Content Classes
    expect(container.firstChild.firstChild).toHaveClass(
      "content background-color-primary center"
    );
    // Testing for tint class
    rerender(
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
    );
    expect(container.firstChild.firstChild).toHaveClass(
      "content tint align-center top-center"
    );
    //  Testing isLeft
    rerender(
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
    );
    expect(container.firstChild).toHaveClass("hero hero-full hero-full-left");
    // Testing Wave
    rerender(
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
        wave
      />
    );
    expect(container.firstChild.lastChild).toHaveClass("hero-wave");
    // Testing Body Subtitle Max width class
    rerender(
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
      />
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass("max");
    //  Test video class
    rerender(
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
        wave={false}
        video={videoSrc}
      />
    );

    expect(container.firstChild.lastChild.firstChild).toHaveClass(
      "video-player"
    );
    expect(container.firstChild.lastChild.firstChild).toHaveAttribute(
      "src",
      videoSrc.large
    );
    // Testing CTA Classes
    rerender(
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
    );
    expect(
      container.firstChild.firstChild.firstChild.lastChild.firstChild
    ).toHaveClass("ctaButton");
    // Testing SVG render
    // rerender(
    //   <Hero
    //     presetLayout="Full Width, Headline Artwork"
    //     headlineArtworkDesktop={HallmarkCrown.toString()}
    //     headlineArtworkMobile={HallmarkCrown.toString()}
    //     image={fullImgSrc}
    //     imageAltText="Test Alt Text"
    //     headline1=""
    //     bodySubtitle={headline2Text}
    //     primaryCTAText="Optional CTA"
    //     primaryCTALink={defaultPrimaryCTA.link}
    //     secondaryCTAText={defaultSecondaryCTA.text}
    //     secondaryCTALink={defaultSecondaryCTA.link}
    //   />,
    // );

    // expect(container.firstChild).toHaveClass('no-sub');
  });
});
