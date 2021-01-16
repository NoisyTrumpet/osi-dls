import React from 'react';
import { render } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
  toHaveAttribute,
} from '@testing-library/jest-dom/matchers';
import { Tabs } from '.';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
  toHaveAttribute,
});

describe('<Tabs />', () => {
  test('should render with correct classes', () => {
    const { container } = render(
      <Tabs />,
    );
    expect(container.firstChild).toHaveClass('section-tabs');
  });
});
