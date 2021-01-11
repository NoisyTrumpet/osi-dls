import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
} from '@testing-library/jest-dom/matchers';
import { Button } from './';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
});

describe('Button', () => {
  test('renders Button component', () => {
    const { container } = render(<Button>Label</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should have a class of "btn"', () => {
    render(<Button>Label</Button>);
    expect(screen.getByText('Label').closest('button')).toHaveClass('btn');
  });

  test('renders a label within the button', () => {
    const { container, getByText } = render(<Button>Label</Button>);
    expect(getByText('Label')).toBeTruthy();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="btn btn-primary"
        type="button"
      >
        
        <span
          class="typography typography-cta color-brand-white"
        >
          Label
        </span>
        
      </button>
    `);
  });

  test('calls "onClick" prop on button click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button click={onClick}>Label</Button>);

    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
