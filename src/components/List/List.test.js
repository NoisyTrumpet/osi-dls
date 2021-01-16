import React from 'react';
import { render } from '@testing-library/react';
import {
  toBeInTheDocument,
  toContainHTML,
} from '@testing-library/jest-dom/matchers';
import { List } from './';

expect.extend({ toBeInTheDocument, toContainHTML });

describe('<List />', () => {
  test('should renders without props ', () => {
    const list = (
      <List>
        <List.Item>
          <span>Text</span>
        </List.Item>
        <List.Item>
          <span>Text</span>
        </List.Item>
        <List.Item>
          <span>Text</span>
        </List.Item>
      </List>
    );

    const { container } = render(list);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).not.toBeNull();
    expect(container).toMatchSnapshot();
  });

  test('should contain list of ordered items ', () => {
    const list = (
      <List ordered>
        <List.Item>
          <span>Text</span>
        </List.Item>
        <List.Item>
          <span>Text</span>
        </List.Item>
        <List.Item>
          <span>Text</span>
        </List.Item>
      </List>
    );

    const { container } = render(list);
    expect(container.firstChild).toContainHTML('<ol class="">');
    expect(container).toMatchSnapshot();
  });
});
