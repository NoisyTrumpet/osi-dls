import React from 'react';
import {
  render,
  fireEvent, 
  cleanup,
} from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
  toBeVisible,
} from '@testing-library/jest-dom/matchers';

import { DialogExample, ExposedTriggerExample } from './Dialog.example'

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
  toBeVisible,
});

describe('<DialogExample />', () => {
  test('renders Dialog component', () => {
    const { container, getAllByText, getByText } = render(
      <DialogExample
        accentIcon={{ name: 'achievement-bold' }}
        type="modal"
      />
    );

    expect(getAllByText(/Dialog Trigger/i)).toHaveLength(5);
    expect(getAllByText('Dialog Window')).toHaveLength(1);
    expect(getByText('Close Dialog Window')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(cleanup);
});

describe('<FeatureModalExample />', () => {
  test('renders Feature Modal component', () => {
    const { container, getAllByText, getByText } = render(
      <ExposedTriggerExample
        type="feature-modal"
        accentIcon={{ name: 'achievement-bold' }}
      />
    );

    expect(getAllByText('Dialog Window')).toHaveLength(2);
    expect(getByText('Close Dialog Window')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('opens and closes Dialog Window', () => {
    const { getByTestId } = render(
      <ExposedTriggerExample
        type="feature-modal"
        accentIcon={{ name: 'achievement-bold' }}
      />
    );

    const featureTrigger = getByTestId('featureTrigger');
    expect(featureTrigger).toBeInTheDocument();

    const modal = getByTestId('modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveAttribute('data-open', 'false');

    fireEvent.click(featureTrigger);
    expect(getByTestId('modal')).toHaveAttribute('data-open', 'true');

    const closeModal = getByTestId('modal').getElementsByClassName('dialog-close');
    expect(closeModal[0]).toBeInTheDocument();

    fireEvent.click(closeModal[0]);
    expect(getByTestId('modal')).toHaveAttribute('data-open', 'false');
  });

  test('hides Feature Modal Exposed Trigger', () => {
    const { getByTestId } = render(
      <ExposedTriggerExample
        type="feature-modal"
        accentIcon={{ name: 'achievement-bold' }}
      />
    );

    const featureTrigger = getByTestId('featureTrigger');
    expect(featureTrigger).toBeInTheDocument();

    fireEvent.click(getByTestId('closeExposedTrigger'));
    expect(featureTrigger).not.toBeInTheDocument();
  });

  afterEach(cleanup);
});
