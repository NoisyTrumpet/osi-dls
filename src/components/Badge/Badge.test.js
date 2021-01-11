import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
  toHaveAttribute,
} from '@testing-library/jest-dom/matchers';
import { Badge } from './';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
  toHaveAttribute,
});

describe('<Badge />', () => {
  // Renders
  test('renders', () => {
    const { container } = render(<Badge count={1} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  // Correct Class
  test('has correct class and color', () => {
    const { rerender } = render(<Badge count={3} />);
    expect(screen.getByText('3').closest('div')).toHaveClass('badge');
    rerender(<Badge count={4} color="accentA" />);
    expect(screen.getByText('4').closest('div')).toHaveStyle({
      backgroundColor: 'rgb(255, 221, 117);',
    });
  });
  // Does not render if less than 1
  test('does not render if less than 1', () => {
    const { container } = render(<Badge count={0} />);
    expect(container.firstChild).not.toBeInTheDocument();
  });
});
