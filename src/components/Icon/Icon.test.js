import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
} from '@testing-library/jest-dom/matchers';
import { Icon } from './';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
});

describe('<Icon />', () => {
  test('should render', () => {
    const { container } = render(<Icon name="achievement" />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render with correct icon, color and size classes', () => {
    render(<Icon name="achievement" size={24} color="primary" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon-achievement');
    expect(screen.getByTestId('icon')).toHaveClass('icon-24');
    expect(screen.getByTestId('icon')).toHaveClass('icon-primary');
  });

  test('should render with correct error and disabled states', () => {
    render(<Icon name="achievement" error disabled />);
    expect(screen.getByTestId('icon')).toHaveClass('error');
    expect(screen.getByTestId('icon')).toHaveClass('disabled');
  });

  test('should render default badge, correct class, correct color, correct count', () => {
    const { rerender } = render(<Icon name="cart-cartempty" badgeCount={1} />);
    expect(screen.getByText('1').closest('div')).toBeInTheDocument();
    rerender(<Icon name="cart-cartempty" badgeCount={1} />);
    expect(screen.getByTestId('icon')).toHaveClass('badge');
    expect(screen.getByTestId('icon').firstChild).toHaveStyle({
      backgroundColor: 'rgb(96, 64, 153);',
    });
    rerender(<Icon name="cart-cartempty" badgeCount={27} />);
    expect(screen.getByText('27').closest('div')).toBeInTheDocument();
    rerender(<Icon badgeCount={0} name="achievement" />);
    expect(screen.getByTestId('icon')).not.toHaveClass('badge');
  });
});
