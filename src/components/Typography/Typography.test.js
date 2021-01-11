import React from 'react';
import { render } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toBeEmptyDOMElement,
  toHaveTextContent,
} from '@testing-library/jest-dom/matchers';
import { Typography } from './';
import TypographyComponents from './Typography.components';
import '@testing-library/jest-dom/extend-expect';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toBeEmptyDOMElement,
  toHaveTextContent,
});

describe('<Typography />', () => {
  test('should not render when no props are provided', () => {
    const { container } = render(<Typography />);
    expect(container.firstChild).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should not render when an invalid prop is provided', () => {
    const { container } = render(
      <Typography fake-prop="fake-typography-prop" />,
    );
    expect(container.firstChild).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should not render when "variant" is provided an invalid variant', () => {
    const { container } = render(<Typography variant="fake-typography-prop" />);
    expect(container.firstChild).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

describe.each(Typography.variants)(
  '<Typography /> variant "% s"',
  (variant) => {
    const { defaultTag, className } = TypographyComponents[variant];

    const expectComponentToRenderWithClass = (container, classToRenderWith) => {
      expect(container).toBeInTheDocument();
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveClass(classToRenderWith);
      expect(container.querySelector(defaultTag)).toBeInTheDocument();
    };

    test('should render with no text', () => {
      const { container } = render(<Typography variant={variant} />);
      expectComponentToRenderWithClass(container, className);
      expect(container.firstChild).toBeEmptyDOMElement();
      expect(container).toMatchSnapshot();
    });

    test('should render with text', () => {
      const { container } = render(
        <Typography variant={variant}>{variant}</Typography>,
      );
      expectComponentToRenderWithClass(container, className);
      expect(container.firstChild).toHaveTextContent(variant);
      expect(container).toMatchSnapshot();
    });

    test('should render with color prop passed', () => {
      const { container } = render(
        <Typography variant={variant} color="white">
          {variant}
        </Typography>,
      );
      expectComponentToRenderWithClass(container, `${className} color-white`);
      expect(container.firstChild).toHaveTextContent(variant);
      expect(container).toMatchSnapshot();
    });
  },
);
