import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import storybookTheme from "./theme";

import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from "@storybook/addon-knobs";
import { withTests } from '@storybook/addon-jest';

import results from '../../.jest-test-results.json';

import './../../src/styles/reset.scss';
import './../../src/styles/storybook/storybook.scss';
// import "./fonts/Beam-New-HMK/Beam-New-HMK.css";
// import "./fonts/IBM-Plex/css/ibm-plex.css";
import "./fonts/icons/icomoon/style.css";

addParameters({
  options: {
    theme: storybookTheme
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

// Adds knob addon panel
addDecorator(withKnobs);

// Adds Jest testing results addon
addDecorator(withTests({ results }));

// Adds A11y accessibility addon
addDecorator(withA11y)

const req = require.context("./../../src", true, /\.stories\.js$/)

const loadStories = () => {
  // Loads Overview Tab first
  // require('../../src/Overview/Overview.stories');
  req.keys().forEach(req);
};


configure(loadStories, module);
