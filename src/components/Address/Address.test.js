import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { Address } from './';
import '@testing-library/jest-dom';

expect.extend({
  toBeInTheDocument,
});

const store = {
  title: "Trudy's Hallmark Shop",
  address1: 'Barton Creek Square',
  address2: '2901 S Capitol of Texas Highway',
  address3: 'Ste D10',
  city: 'Austin',
  state: 'TX',
  zip: '78756',
};

describe('<Address />', () => {
  test('should render content ', () => {
    const { container, rerender } = render(
      <Address
        title={store.title}
        address1={store.address1}
        address2={store.address2}
        address3={store.address3}
        city={store.city}
        state={store.state}
        zip={store.zip}
      />,
    );
    expect(screen.getByText(store.title)).toBeInTheDocument();
    expect(screen.getByText(store.address1)).toBeInTheDocument();
    expect(screen.getByText(store.address2)).toBeInTheDocument();
    expect(screen.getByText(store.address3)).toBeInTheDocument();
    expect(screen.getByTestId('address-title')).not.toHaveClass("address-title-bold");

    rerender(
      <Address
        title={store.title}
        address1={store.address1}
        address2={store.address2}
        address3={store.address3}
        city={store.city}
        state={store.state}
        zip={store.zip}
        isShortAddress
        isPreferredStore
      />,
    );
    expect(screen.getByText(store.title)).toBeInTheDocument();
    expect(screen.getByText(store.address1)).toBeInTheDocument();
    expect(screen.getByText(store.address2)).toBeInTheDocument();
    expect(screen.getByText(store.address3)).toBeInTheDocument();
    expect(screen.getByTestId('address-title')).toHaveClass("address-title-bold");
    expect(container).toMatchSnapshot();
  });

  test('test "onClick" prop', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Address
        title={store.title}
        address1={store.address1}
        address2={store.address2}
        address3={store.address3}
        city={store.city}
        state={store.state}
        zip={store.zip}
        onClick={onClick}
        isPreferredStore
      />,
    );
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  test('test address format', () => {
    const { rerender } = render(
      <Address
        title={store.title}
        city={store.city}
        state={store.state}
        zip={store.zip}
      />,
    );
    expect(screen.queryByText(store.address1)).toBeNull();
    expect(screen.queryByText(store.address2)).toBeNull();
    expect(screen.queryByText(store.address3)).toBeNull();
    rerender(
      <Address
        title={store.title}
        address1={store.address1}
        city={store.city}
        state={store.state}
        zip={store.zip}
      />,
    );
    expect(screen.queryByText(store.address1)).toBeInTheDocument();
    expect(screen.queryByText(store.address2)).toBeNull();
    expect(screen.queryByText(store.address3)).toBeNull();

    rerender(
      <Address
        title={store.title}
        address1={store.address1}
        address2={store.address2}
        city={store.city}
        state={store.state}
        zip={store.zip}
      />,
    );
    expect(screen.getByText(store.address1)).toBeInTheDocument();
    expect(screen.getByText(store.address2)).toBeInTheDocument();
    expect(screen.queryByText(store.address3)).toBeNull();

  })
  test('test city state zip format', () => {
    const { rerender } = render(
      <Address
        title={store.title}
        address1={store.address1}
        address2={store.address2}
        address3={store.address3}
        city={store.city}
        state={store.state}
        zip={store.zip}
      />,
    );
    expect(screen.getByText(`${store.city}, ${store.state} ${store.zip}`)).toBeInTheDocument();
    rerender(
      <Address
        title={store.title}
        address1={store.address1}
        address2={store.address2}
        address3={store.address3}
        city={store.city}
        state={store.state}
      />,
    )
    expect(screen.getByText(`${store.city}, ${store.state}`)).toBeInTheDocument();
    rerender(
      <Address
        title={store.title}
        address1={store.address1}
        address2={store.address2}
        address3={store.address3}
        city={store.city}
        zip={store.zip}
      />,
    )
    expect(screen.getByText(`${store.city}, ${store.zip}`)).toBeInTheDocument();
    rerender(
      <Address
        title={store.title}
        address1={store.address1}
        address2={store.address2}
        address3={store.address3}
        state={store.state}
        zip={store.zip}
      />,
    )
    expect(screen.getByText(`${store.state} ${store.zip}`)).toBeInTheDocument();
    rerender(
      <Address
        title={store.title}
        address1={store.address1}
        address2={store.address2}
        address3={store.address3}
        city={store.city}
      />,
    )
    expect(screen.getByText(`${store.city}`)).toBeInTheDocument();
    rerender(
      <Address
        title={store.title}
        address1={store.address1}
        address2={store.address2}
        address3={store.address3}
        state={store.state}
      />,
    )
    expect(screen.getByText(`${store.state}`)).toBeInTheDocument();
    rerender(
      <Address
        title={store.title}
        address1={store.address1}
        address2={store.address2}
        address3={store.address3}
        zip={store.zip}
      />,
    )
    expect(screen.getByText(`${store.zip}`)).toBeInTheDocument();
  });
});
