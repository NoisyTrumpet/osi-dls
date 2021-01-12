import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { Image } from './';

const parameters = {
  component: Image,
  componentSubtitle: 'The <Image/> tag defines a <img> tag with optional sources. This component does not render children.',
  jest: ['Image'],
};

storiesOf('components/Image', module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ['onClick', 'lazyLoad'] }))
  .add('Default', (() => <Image src="https://www.noisytrumpet.com/wp-content/uploads/2021/01/osi.png" alt="OSI-LIFE" />));

storiesOf('components/Image', module)
  .addParameters(parameters)
  .add('Mulitple Sources (Responsive)', () => (
    <Image
      src="https://www.w3schools.com/tags/img_pink_flowers.jpg"
      alt="Flowers"
    >
      <Image.Source media="(max-width:700px)" srcSet="https://www.w3schools.com/tags/img_orange_flowers.jpg" />
      <Image.Source media="(max-width:900px)" srcSet="https://www.w3schools.com/tags/img_white_flower.jpg" />
    </Image>
  ));

storiesOf('components/Image', module)
  .addParameters(parameters)
  .add('Lazy Loading (on by default)', (() => (
    <>
      <div style={{ height: '600px' }}>
        <Image src="https://www.noisytrumpet.com/wp-content/uploads/2021/01/osi.png" alt="Image 1" />
      </div>
      <div style={{ height: '600px' }}>
        <Image src="https://www.noisytrumpet.com/wp-content/uploads/2021/01/osi.png" alt="Image 2" />
      </div>
      <div style={{ height: '600px' }}>
        <Image src="https://www.noisytrumpet.com/wp-content/uploads/2021/01/osi.png" alt="Image 3" />
      </div>
      <div style={{ height: '600px' }}>
        <Image src="https://www.noisytrumpet.com/wp-content/uploads/2021/01/osi.png" alt="Image 4" />
      </div>
    </>
  )));
