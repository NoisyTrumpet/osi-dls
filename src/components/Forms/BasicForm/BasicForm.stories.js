import React from 'react';
import { storiesOf } from '@storybook/react';
import { BasicForm } from './';

const BasicFormParameters = {
  component: BasicForm,
  componentSubtitle: 'Utilize <BasicForm /> to present forms',
  jest: ['BasicForm'],
};

storiesOf('Structures|Forms/Basic Form', module)
  .addParameters(BasicFormParameters)
  .add('Default', (() => (
    <div>
      <BasicForm />
    </div>
  )));
