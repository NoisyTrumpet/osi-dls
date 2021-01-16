
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
} from '@testing-library/jest-dom/matchers';
import { Formik, Form } from 'formik';
import { Range } from './';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
});

describe('Range', () => {
  test('renders Range component', () => {
    const defaultValue = '1';
    const domId = 'range-id';
    const label = 'Range Label'
    const { container, rerender } = render(
      <Formik initialValues={{ 'test-name': defaultValue }}>
        <Form>
          <Range
            domId={domId}
            name="test-name"
            label={label}
            tickCount={2}
          />
        </Form>
      </Formik>);
    expect(container.querySelector('.input-range-container')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(container.querySelector('input[type=range]')).toBeInTheDocument();
    expect(container.querySelector('input[type=range]').value).toBe(defaultValue);
    expect(container.querySelector('#range-id')).toBeInTheDocument();
    expect(container.querySelectorAll('input[type=range]').length).toBe(1);
    expect(container.querySelectorAll('.input-range-slider-background').length).toBe(1);
    expect(container.querySelectorAll('.input-range-tick').length).toBe(2);
    rerender(
      <Formik initialValues={{ 'test-name': defaultValue }}>
        <Form>
          <Range
            domId={domId}
            name="test-name"
            tickCount={5}
          />
        </Form>
      </Formik>
    );
    expect(container.querySelectorAll('.input-range-tick').length).toBe(5);
  });

  test('renders with value label"', () => {
    const domId = 'range-id';
    const valueArray = ['one', 'two', 'three'];
    const { container } = render(
      <Formik initialValues={{ 'test-name': '0' }}>
        <Form>
          <Range
            domId={domId}
            name="range-name"
            range={valueArray}
            showValueInLabel
            tickCount={3}
          />
        </Form>
      </Formik>
    );
    expect(screen.getByText(valueArray[0])).toBeInTheDocument();
    expect(container.querySelectorAll('.input-range-tick').length).toBe(3);
  });

  test('renders with formik"', () => {
    const defaultValue = '55';
    const onClick = jest.fn();
    const { container, getByTestId } = render(
      <Formik initialValues={{ 'test-name': defaultValue }}>
        <Form onSubmit={onClick}>
          <Range
            domId="test-id"
            name="test-name"
          />
          <button type="submit" data-testid="submit-button">Submit</button>
        </Form>
      </Formik>);
    const input = container.querySelector('input[type=range]');
    expect(container.firstChild).toMatchSnapshot();
    expect(input).toBeInTheDocument();
    expect(input.value).toBe(defaultValue);
    fireEvent.change(input, { target: { value: '0' } })
    expect(input.value).toBe('0');
    fireEvent.click(getByTestId('submit-button'));
    expect(onClick).toHaveBeenCalled();
  });


});
