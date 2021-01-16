import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
} from '@testing-library/jest-dom/matchers';
import { TagList } from './';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
});

const tagItems = [
  { name: 'camel', url: '/camel' },
  { name: 'friendship', url: '/friendship' },
  { name: 'funny', url: '/funny' },
  { name: 'glossy', url: '/glossy' },
  { name: 'green', url: '/green' },
  { name: 'shoebox', url: '/shoebox' },
  { name: 'sign-and-send', url: '/send' },
  { name: 'zinger', url: '/zinger' },
];

describe('TagList', () => {
  // Tests whether the TagList has rendered with the correct tags names & urls
  test('renders', () => {
    const { container } = render(
      <TagList items={tagItems} variant="textlink" />,
    );
    expect(container).toMatchSnapshot();
  });

  // Tests whether the TagList has the correct classes
  test('has the correct classes', () => {
    const { rerender } = render(<TagList items={tagItems} variant="button" />);
    expect(screen.getByText(tagItems[0].name).closest('ul')).toHaveClass(
      'taglist list-horizontal',
    );
    rerender(<TagList items={tagItems} variant="textlink" />);
    expect(screen.getByText(tagItems[0].name).closest('ul')).toHaveClass(
      'taglist list-horizontal',
    );
    rerender(<TagList items={tagItems} variant={null} />);
    expect(screen.getByText(tagItems[0].name).closest('ul')).toHaveClass(
      'taglist list-horizontal',
    );
  });

  // Tests whether the TagList has the correct number of tag items
  test('has the correct number of tag items, correct links, correct names, correct number of buttons, and no tag items.', () => {
    const { rerender } = render(<TagList items={tagItems} />);

    // did we render correct # of tags
    const crumbListItems = screen.getAllByRole('listitem');
    expect(crumbListItems.length).toEqual(tagItems.length);

    // did each anchor wind up with the right hrefs
    const crumbAnchors = screen.getAllByRole('link');
    crumbAnchors.forEach((link, index) => {
      expect(link.getAttribute('href')).toEqual(tagItems[index].url);
    });

    // did we render correct # of tags
    rerender(<TagList items={tagItems} variant="button" />);
    const crumbButtonListItems = screen.getAllByRole('listitem');
    expect(crumbButtonListItems.length).toEqual(tagItems.length);

    // does every crumb title wind up on the page
    tagItems.forEach((crumb) => {
      expect(screen.getByText(crumb.name)).toBeInTheDocument();
    });

    // Renders correct number of buttons
    rerender(<TagList items={tagItems} variant="button" />);
    const buttonVariant = screen.queryAllByRole('button');
    expect(buttonVariant.length).toEqual(tagItems.length);

    // when rerendered with no tag items, do all tags disappear
    rerender(<TagList variant="textlink" />);
    const nonExistantTags = screen.queryAllByRole('listitem');
    expect(nonExistantTags.length).toEqual(0);

    // when rerendered with no tag items, do all tags disappear
    rerender(<TagList items={[]} variant="button" />);
    const nonExistantButtonTags = screen.queryAllByRole('button');
    expect(nonExistantButtonTags.length).toEqual(0);
  });

  // Test calls onCLick Event
  test('calls "onClick" prop on button click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <TagList
        items={[{ name: 'camel', url: '#', click: onClick }]}
        variant="button"
      />,
    );
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  // Test whether the TagList has the correct items
  test('has the correct tag items', () => {
    const { container, getByText } = render(<TagList items={tagItems} />);
    expect(getByText(tagItems[0].name)).toBeTruthy();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <ul
        class="taglist list-horizontal"
      >
        <li
          class="list-item"
        >
          <a
            class="btn btn-quick-action-deactivated"
            href="/camel"
          >
            <span
              class="typography typography-cta-tertiary"
            >
              camel
            </span>
          </a>
        </li>
        <li
          class="list-item"
        >
          <a
            class="btn btn-quick-action-deactivated"
            href="/friendship"
          >
            <span
              class="typography typography-cta-tertiary"
            >
              friendship
            </span>
          </a>
        </li>
        <li
          class="list-item"
        >
          <a
            class="btn btn-quick-action-deactivated"
            href="/funny"
          >
            <span
              class="typography typography-cta-tertiary"
            >
              funny
            </span>
          </a>
        </li>
        <li
          class="list-item"
        >
          <a
            class="btn btn-quick-action-deactivated"
            href="/glossy"
          >
            <span
              class="typography typography-cta-tertiary"
            >
              glossy
            </span>
          </a>
        </li>
        <li
          class="list-item"
        >
          <a
            class="btn btn-quick-action-deactivated"
            href="/green"
          >
            <span
              class="typography typography-cta-tertiary"
            >
              green
            </span>
          </a>
        </li>
        <li
          class="list-item"
        >
          <a
            class="btn btn-quick-action-deactivated"
            href="/shoebox"
          >
            <span
              class="typography typography-cta-tertiary"
            >
              shoebox
            </span>
          </a>
        </li>
        <li
          class="list-item"
        >
          <a
            class="btn btn-quick-action-deactivated"
            href="/send"
          >
            <span
              class="typography typography-cta-tertiary"
            >
              sign-and-send
            </span>
          </a>
        </li>
        <li
          class="list-item"
        >
          <a
            class="btn btn-quick-action-deactivated"
            href="/zinger"
          >
            <span
              class="typography typography-cta-tertiary"
            >
              zinger
            </span>
          </a>
        </li>
      </ul>
    `);
  });
});
