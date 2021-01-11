import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { select, boolean } from '@storybook/addon-knobs';
import { Button } from './';
import iconArray from '../Icon/helpers/getIconArray';

const parameters = {
  component: Button,
  componentSubtitle: 'The <Button /> tag defines a clickable button',
  jest: ['Button'],
};

const optionalIconArray = ['', ...iconArray];

storiesOf('components/Button', module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ['disabled', 'iconLeft', 'iconRight'] }))
  .add('Default', (() => (
    <Button
      disabled={boolean('disabled', false)}
      iconLeft={select('iconLeft', optionalIconArray, '')}
      iconRight={select('iconRight', optionalIconArray, '')}
    >
      Label
    </Button>
  )));
