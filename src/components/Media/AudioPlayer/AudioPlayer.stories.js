import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { AudioPlayer } from "../AudioPlayer";

const parameters = {
  component: AudioPlayer,
  componentSubtitle: "The <AudioPlayer /> tag defines an Audio Player.",
  jest: ["AudioPlayer"]
};

storiesOf("components/Media/AudioPlayer", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["children"] }))
  .add("MP3 Audio", () => (
    <>
      {/* http://soundbible.com/2030-Daydreaming.html */}
      <AudioPlayer>
        <AudioPlayer.Source src="http://soundbible.com/mp3/Tinkle-Lisa_Redfern-1916445296.mp3" />
      </AudioPlayer>
    </>
  ))
  .add("WAV Audio", () => (
    <>
      {/* http://soundbible.com/1782-Tyrannosaurus-Rex-.html */}
      <AudioPlayer>
        <AudioPlayer.Source
          src="http://soundbible.com/wav/Tyrannosaurus%20Rex%20-SoundBible.com-45786848.wav"
          type="audio/wav"
        />
      </AudioPlayer>
    </>
  ));
