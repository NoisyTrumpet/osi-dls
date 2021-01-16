import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { Toast } from './';

expect.extend({ toBeInTheDocument });

describe('Toast', () => {
  test('should render', () => {
    const { container } = render(<Toast />);
    expect(screen.getByTestId('dialog-toast')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
