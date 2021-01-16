import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
  toHaveAttribute,
} from '@testing-library/jest-dom/matchers';
import { InfoBadge } from './';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
  toHaveAttribute,
});

describe('<InfoBadge />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<InfoBadge preset="success" info="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  // Correct Class
  test('has correct class and color', () => {
    const { rerender } = render(<InfoBadge preset="success" info="test" />);
    expect(screen.getByText('test').closest('div')).toHaveClass('info-badge');
    rerender(<InfoBadge preset="success" info="test" />);
    expect(screen.getByText('test').closest('div')).toHaveStyle({
      color: 'rgb(44, 134, 54);',
    });
  });
});
