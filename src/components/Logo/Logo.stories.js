import React from 'react';
// import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { Logo } from './';


storiesOf('components/Logo', module)
  .addDecorator(withSmartKnobs())
  .add('With Knobs', () => 
      <Logo 
        variant="regular" 
        title="Logo Title" 
        description="Logo Description" 
      />
  );

storiesOf('components/Logo', module)
  .add('Regular', () => 
      <Logo 
        variant="regular" 
        title="Logo Title" 
        description="Logo Description" 
      />
  );

storiesOf('components/Logo', module)
  .add('Horizontal', () => 
      <Logo 
        variant="horizontal" 
        title="Logo Title" 
        description="Logo Description" 
      />
  );

storiesOf('components/Logo', module)
  .add('Mark', () => 
      <Logo 
        variant="mark" 
        title="Logo Title" 
        description="Logo Description" 
      />
  );