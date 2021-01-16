import React from 'react';
import { render } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveAttribute,
  toHaveTextContent,
} from '@testing-library/jest-dom/matchers';
import { DataLayer } from './';

// init for tests
import './testScripts/initScript';

expect.extend({
  toBeInTheDocument,
  toHaveAttribute,
  toHaveTextContent,
});

const exampleObj = `{ cart: { productId: "12345" }}`;

describe('<DataLayer />', () => {
  test('should render', () => {
    const { container } = render(<DataLayer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders properly using the dataKey and dataValue props', () => {
    render(<DataLayer dataKey="testKey" dataValue="testValue" domId="example" />);

    expect(document.getElementById('example')).toHaveAttribute('type');

    expect(document.getElementById('example')).toHaveTextContent('Object.assign(window.dataLayer, {"testKey":"testValue"});');
  });

  test('renders properly with the dataObj prop', () => {
    render(<DataLayer dataObj={exampleObj} domId="example2" />);

    expect(document.getElementById('example2')).toHaveAttribute('type');

    expect(document.getElementById('example2')).toHaveTextContent('Object.assign(window.dataLayer, { cart: { productId: "12345" }});');
  });

  test('renders properly with the depth prop', () => {
    render(<DataLayer dataKey="exampleDepth" dataValue="value with depth" depth="page.pageInfo" domId="example3" />);

    expect(document.getElementById('example3')).toHaveTextContent('Object.assign(window.dataLayer.page.pageInfo, {"exampleDepth":"value with depth"});');
  });

  test('renders properly when pushing to array', () => {
    render(<DataLayer depth="modal" dataKey="event" dataArray={'{ "eventInfo": { "eventName": "Find a store", "eventAction": "Show More" }}'} domId="example4" />);

    expect(document.getElementById('example4')).toHaveTextContent('window.dataLayer.modal.event.push({ "eventInfo": { "eventName": "Find a store", "eventAction": "Show More" }});');
  });

  test('renders properly when adding campaign ID to Promo Banner property', () => {
    render(<DataLayer dataKey="promoBanners" dataValue="shp_mf_brws_ed_all_cards_1" domId="example5" />);

    expect(document.getElementById('example5')).toHaveTextContent('window.dataLayer.promoBanners = window.dataLayer.promoBanners + " | " + "shp_mf_brws_ed_all_cards_1";');
  });
});
