import React from 'react';
import { storiesOf } from '@storybook/react';
import { InlineSVG } from './';

import { LogoHoriz } from '../../assets/svg';

const storyTitle = 'components/InlineSVG'; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const InlineSVGParameters = {
  component: InlineSVG,
  componentSubtitle: 'Utilize <InlineSVG /> to present inline SVG images',
  jest: ['InlineSVG'],
};

storiesOf(storyTitle, module)
  .addParameters(InlineSVGParameters)
  .add('Default', () => (
    <InlineSVG
      path={`${LogoHoriz}`}
      title="OSI-Life Default Logo"
      description="OSI-Life Default Logo"
      role="img"
      focus={false}
      className="storybook-inlinesvg"
    />
  ));
