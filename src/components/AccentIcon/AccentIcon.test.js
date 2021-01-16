import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
} from '@testing-library/jest-dom/matchers';
import { AccentIcon } from './';

// have to pass a dummy SVG because the test has problems with the default SVG
// it's only an issue in the test. it works fine in the component itself
const svg = '<svg class="test-svg"></svg>';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
});

describe('<AccentIcon />', () => {
  test('renders', () => {
    const { container } = render(<AccentIcon accent={svg} icon="achievement" iconColor="brand-purple" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('accent SVG renders', () => {
    render(<AccentIcon accent={svg} icon="achievement" iconColor="brand-purple" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('icon renders', () => {
    render(<AccentIcon accent={svg} icon="achievement" iconColor="brand-purple" />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('icon renders with supplied accentColor "brand-purple"', () => {
    render(<AccentIcon accent={svg} icon="achievement" iconColor="brand-purple" accentColor="brand-purple" />);
    expect(screen.getByTestId('icon')).toHaveClass("icon-brand-purple");
  });

  test('icon renders with supplied icon "achievement"', () => {
    render(<AccentIcon accent={svg} icon="achievement" iconColor="brand-purple" />);
    expect(screen.getByTestId('icon')).toHaveClass("icon-achievement");
  });
});
