import React from 'react';
import { render } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
} from '@testing-library/jest-dom/matchers';
import { BasicForm } from './';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveStyle,
});

describe('<BasicForm />', () => {
  test('should render', () => {
    const { container } = render(<BasicForm />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
