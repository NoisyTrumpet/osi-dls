import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { IconButton } from './';

expect.extend({ toBeInTheDocument });

describe('IconButton', () => {
  test('should render', () => {
    const { container } = render(<IconButton icon="achievement" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
