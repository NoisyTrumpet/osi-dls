import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom/extend-expect';
import { Licensing } from './';

expect.extend({
  toBeInTheDocument,
});

const BvSLogo =
  '../../conf/storybook/images/batman-vs-superman-color_pdp@1x.png';
const DCLogo = '../../conf/storybook/images/dc-comics_pdp@1x.png';

const logos = [
  {
    url: BvSLogo,
    alt: 'Batman v Superman',
  },
  {
    url: DCLogo,
    alt: 'DC Comics',
  },
];

const textToRender = 'BATMAN V SUPERMAN: DAWN OF JUSTICE';

describe('<Licensing />', () => {
  it('Should render', () => {
    const { container } = render(
      <Licensing logos={logos} text={textToRender} />,
    );
    screen.debug();
    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByText(textToRender)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
