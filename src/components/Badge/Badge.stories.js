import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Badge } from './';

const parameters = {
  component: Badge,
  componentSubtitle: 'Utilize <Badge /> to present a notification badge',
  jest: ['Badge'],
};

storiesOf('components/Badge', module)
  .addParameters(parameters)
  .addDecorator(
    withSmartKnobs({ ignoreProps: [] }),
  )
  .add('Default', () => <Badge count={1} />);
