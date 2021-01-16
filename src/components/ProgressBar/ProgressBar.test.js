import React from 'react';
import { render, screen } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom/matchers';
import { ProgressBar } from './';

expect.extend({
  toHaveStyle,
});

describe('<ProgressBar />', () => {
  test('correctly renders progress in percentage-bar width', () => {
    render(<ProgressBar progress={250} progressComplete={1000} />);
    expect(screen.getByRole('progressbar')).toHaveStyle(`
      width: 25%;
    `);
  });

  test('correctly renders completed progress bar', () => {
    render(<ProgressBar progress={5} progressComplete={1} />);
    expect(screen.getByRole('progressbar')).toHaveStyle(`
      width: 100%;
    `);
  });

  test('correctly renders zero progress', () => {
    const { container } = render(
      <ProgressBar progress={0} progressComplete={10} />,
    );
    expect(screen.getByRole('progressbar')).toHaveStyle(`
      width: 0%;
    `);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with invalid value ("0") for progressComplete', () => {
    const { container } = render(
      <ProgressBar progress={5} progressComplete={0} />,
    );
    expect(screen.getByRole('progressbar')).toHaveStyle(`
      width: 100%;
    `);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders successfully', () => {
    const { container } = render(
      <ProgressBar progress={1} progressComplete={10} />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="progress-bar"
      >
        <div
          class="percentage-bar-container"
        >
          <div
            aria-label="progress bar"
            aria-valuemax="10"
            aria-valuemin="0"
            aria-valuenow="1"
            class="percentage-bar"
            role="progressbar"
            style="width: 10%;"
          />
        </div>
      </div>
    `);
  });
});
