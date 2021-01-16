import React from 'react';
import { render } from '@testing-library/react';
import { Formik, Form } from 'formik';
import { SegmentedControl } from './';

const segments = [
  { name: 'apple', value: 'brands-apple-bold' },
  { name: 'google', value: 'brands-google-bold' },
  { name: 'calendar', value: 'calendar-calendar-bold' },
  { name: 'card', value: 'card-front-bold' }
];
const defaultSelected = 2;

describe('<Segmented Control />', () => {
  test('renders', () => {
    const { container } = render(
    <Formik>
      <Form>
        <SegmentedControl name="example" segments={segments} defaultSelected={defaultSelected} />
      </Form>
    </Formik>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
