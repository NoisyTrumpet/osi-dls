import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
} from '@testing-library/jest-dom/matchers';
import ContentPanel from './ContentPanel';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
});

describe('ContentPanels', () => {
  test('renders ContentPanels component', () => {
    const { container, rerender } = render(<ContentPanel id="test-panel" />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('content-panel');
    expect(container.firstChild).toHaveAttribute('id', 'test-panel');
    rerender(<ContentPanel id="re-test-panel"><button type="button">btn</button></ContentPanel>)
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('content-panel');
    expect(container.firstChild).toHaveAttribute('id', 're-test-panel');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
