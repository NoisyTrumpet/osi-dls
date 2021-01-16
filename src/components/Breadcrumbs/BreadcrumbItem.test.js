import '@testing-library/jest-dom/extend-expect'; // grants us all jest-dom methods
import React from 'react';
import { render, screen } from '@testing-library/react';
import BreadcrumbItem from './BreadcrumbItem';

const breadcrumbsData = [
  {
    title: 'Page1',
    to: '#somewhere',
  },
  {
    title: 'Page2',
    to: '#somewhereElse',
  },
  {
    title: 'Page3',
    to: '#finalDestination',
  },
];

describe('BreadcrumbItems component', () => {
  test('should render the correct title', () => {
    const { rerender } = render(
      <BreadcrumbItem title={breadcrumbsData[0].title} />,
    );

    expect(screen.getByText(breadcrumbsData[0].title)).toBeInTheDocument();

    rerender(<BreadcrumbItem title={breadcrumbsData[1].title} />);
    expect(screen.getByText(breadcrumbsData[1].title)).toBeInTheDocument();
    expect(screen.queryByText(breadcrumbsData[0].title)).toBeNull();
  });

  test('should render an anchor with the right target', () => {
    const { rerender } = render(
      <BreadcrumbItem
        title={breadcrumbsData[0].title}
        to={breadcrumbsData[0].to}
        target="_blank"
      />,
    );

    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');

    rerender(
      <BreadcrumbItem
        title={breadcrumbsData[0].title}
        to={breadcrumbsData[0].to}
      />,
    );
    expect(screen.getByRole('link')).not.toHaveAttribute('target');
  });

  test('should render an anchor with the right rel', () => {
    const { rerender } = render(
      <BreadcrumbItem
        title={breadcrumbsData[0].title}
        to={breadcrumbsData[0].to}
        target="_blank"
        rel="noopener"
      />,
    );

    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener');

    rerender(
      <BreadcrumbItem
        title={breadcrumbsData[0].title}
        to={breadcrumbsData[0].to}
        target="_blank"
      />,
    );
    expect(screen.getByRole('link')).not.toHaveAttribute('rel');
  });

  test('matches previous snapshot', () => {
    const { container } = render(
      <BreadcrumbItem
        title={breadcrumbsData[0].title}
        to={breadcrumbsData[0].to}
        target="_blank"
        rel="noopener"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
