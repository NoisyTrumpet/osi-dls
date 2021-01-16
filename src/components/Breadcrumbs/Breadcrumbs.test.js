import '@testing-library/jest-dom/extend-expect'; // grants us all jest-dom methods
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from './';

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

describe('Breadcrumbs component', () => {
  test('should render the correct crumbItems', () => {
    const { rerender } = render(<Breadcrumbs breadcrumbs={breadcrumbsData} />);

    // did we render correct # of crumbs
    const crumbListItems = screen.getAllByRole('listitem');
    expect(crumbListItems.length).toEqual(breadcrumbsData.length);

    // did each anchor wind up with the right hrefs
    const crumbAnchors = screen.getAllByRole('link');
    crumbAnchors.forEach((link, index) => {
      expect(link.getAttribute('href')).toEqual(breadcrumbsData[index].to);
    });

    // does every crumb title wind up on the page
    breadcrumbsData.forEach((crumb) => {
      expect(screen.getByText(crumb.title)).toBeInTheDocument();
    });

    // when rerendered with no crumb items, do all crumbs disappear
    rerender(<Breadcrumbs breadcrumbs={[]} />);
    const nonExistantCrumbs = screen.queryAllByRole('listitem');
    expect(nonExistantCrumbs.length).toEqual(0);
  });

  test('accepts a custom aria label for the nav', () => {
    render(
      <Breadcrumbs
        breadcrumbs={breadcrumbsData}
        ariaLabel="definitelyNotReal"
      />,
    );

    // simple check to make sure crumbs still render if we pass ariaLabel
    const crumbItems = screen.getAllByRole('listitem');
    expect(crumbItems.length).toEqual(breadcrumbsData.length);

    const navigation = screen.getByLabelText('definitelyNotReal');
    expect(navigation).toBeInTheDocument();
  });

  test('matches previous snapshot', () => {
    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbsData} />);
    expect(container).toMatchSnapshot();
  });
});
