import React from 'react';
import { render } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveAttribute,
  toHaveTextContent
} from '@testing-library/jest-dom/matchers';
import { Script } from './';

const resourceUrl1 = "https://service.force.com/embeddedservice/5.0/esw.min.js";

const testInlineScript = "alert('Inline Script as Text')";

expect.extend({
  toBeInTheDocument,
  toHaveAttribute,
  toHaveTextContent
});

describe('<Script />', () => {
  test('renders', () => {
    const { container } = render(<Script />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders properly using the url prop', () => {
    render(<Script url={resourceUrl1} domId="example" />);

    expect(document.getElementById('example')).toHaveAttribute('src');
  });

  test('renders properly using the text prop', () => {
    render(<Script text={testInlineScript} domId="example2" />);

    expect(document.getElementById('example2')).toHaveTextContent(testInlineScript);
  });
});
