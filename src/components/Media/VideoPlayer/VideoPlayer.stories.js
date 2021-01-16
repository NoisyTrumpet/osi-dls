import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { object, boolean } from "@storybook/addon-knobs";
import { VideoPlayer } from "../VideoPlayer";

const parameters = {
  component: VideoPlayer,
  componentSubtitle:
    "Utilize <VideoPlayer /> to embed video content in a document",
  jest: ["VideoPlayer"]
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

storiesOf("components/Media/VideoPlayer", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["isDecoration", "mute"] }))
  .add("Default (No Poster)", () => (
    <VideoPlayer
      videoSrc={object("videoSrc", { ...videoSrc })}
      trackSrc="https://raw.githubusercontent.com/spektraldevelopment/spektralvideo/master/video/bigbuckbunny/bigbuckbunny.vtt"
      width={720}
      mute={boolean("mute", false)}
    />
  ))
  .add("Default (with Poster)", () => (
    <VideoPlayer
      videoSrc={object("videoSrc", { ...videoSrc })}
      trackSrc="https://raw.githubusercontent.com/spektraldevelopment/spektralvideo/master/video/bigbuckbunny/bigbuckbunny.vtt"
      poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hallmark_logo.svg/1200px-Hallmark_logo.svg.png"
      width={720}
      mute={boolean("mute", false)}
    />
  ))
  .add("Decoration", () => (
    <VideoPlayer
      isDecoration
      videoSrc={object("videoSrc", { ...videoSrc })}
      trackSrc="https://raw.githubusercontent.com/spektraldevelopment/spektralvideo/master/video/bigbuckbunny/bigbuckbunny.vtt"
      width={480}
    />
  ));

storiesOf("components/Media/VideoPlayer", module)
  .addParameters(parameters)
  .add("Multiple Videos", () => (
    <div>
      Video 1
      <VideoPlayer
        videoSrc={{ override: videoSrc.large }}
        trackSrc="https://raw.githubusercontent.com/spektraldevelopment/spektralvideo/master/video/bigbuckbunny/bigbuckbunny.vtt"
        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hallmark_logo.svg/1200px-Hallmark_logo.svg.png"
        width={360}
      />
      <br />
      Decoration 1
      <VideoPlayer
        isDecoration
        videoSrc={{ override: videoSrc.large }}
        trackSrc="https://raw.githubusercontent.com/spektraldevelopment/spektralvideo/master/video/bigbuckbunny/bigbuckbunny.vtt"
        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hallmark_logo.svg/1200px-Hallmark_logo.svg.png"
        width={360}
      />
      <br />
      Video 2
      <VideoPlayer
        videoSrc={{ override: videoSrc.large }}
        trackSrc="https://raw.githubusercontent.com/spektraldevelopment/spektralvideo/master/video/bigbuckbunny/bigbuckbunny.vtt"
        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hallmark_logo.svg/1200px-Hallmark_logo.svg.png"
        width={360}
      />
      <br />
      Decoration 2
      <VideoPlayer
        isDecoration
        videoSrc={{ override: videoSrc.large }}
        trackSrc="https://raw.githubusercontent.com/spektraldevelopment/spektralvideo/master/video/bigbuckbunny/bigbuckbunny.vtt"
        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hallmark_logo.svg/1200px-Hallmark_logo.svg.png"
        width={360}
      />
      <br />
      Video 3
      <VideoPlayer
        videoSrc={{ override: videoSrc.large }}
        trackSrc="https://raw.githubusercontent.com/spektraldevelopment/spektralvideo/master/video/bigbuckbunny/bigbuckbunny.vtt"
        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hallmark_logo.svg/1200px-Hallmark_logo.svg.png"
        width={360}
      />
      <br />
      Video 4
      <VideoPlayer
        videoSrc={{ override: videoSrc.large }}
        trackSrc="https://raw.githubusercontent.com/spektraldevelopment/spektralvideo/master/video/bigbuckbunny/bigbuckbunny.vtt"
        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hallmark_logo.svg/1200px-Hallmark_logo.svg.png"
        width={360}
      />
      <br />
      Video 5
      <VideoPlayer
        videoSrc={{ override: videoSrc.large }}
        trackSrc="https://raw.githubusercontent.com/spektraldevelopment/spektralvideo/master/video/bigbuckbunny/bigbuckbunny.vtt"
        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hallmark_logo.svg/1200px-Hallmark_logo.svg.png"
        width={360}
      />
    </div>
  ));
