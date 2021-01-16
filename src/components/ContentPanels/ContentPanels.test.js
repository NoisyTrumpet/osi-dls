import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
} from '@testing-library/jest-dom/matchers';
import { ContentPanels } from './';

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute,
});

describe('ContentPanels', () => {
  test('renders invalid child, prompts error message ', () => {
    const { container } = render(<ContentPanels><ContentPanels.Panel id="panel-0">div</ContentPanels.Panel></ContentPanels>);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders 3 panels component', () => {
    const onClick = jest.fn();
    const PanelExample = () => {
      const [panel, showPanel] = React.useState(0);
      return (
        <ContentPanels showPanel={panel} panelVisible={onClick}>
          <ContentPanels.Panel id="panel-0">
            <button onClick={() => showPanel(1)} aria-controls="panel-1" type="button">button</button>
          </ContentPanels.Panel>
          <ContentPanels.Panel id="panel-1">
            <button onClick={() => showPanel(2)} aria-controls="panel-2" type="button">button</button>
          </ContentPanels.Panel>
          <ContentPanels.Panel id="panel-2">
            <button onClick={() => showPanel(0)} aria-controls="panel-0" type="button">button</button>
          </ContentPanels.Panel>
        </ContentPanels>
      );
    };
    // render component
    const { container } = render(<PanelExample />);
    // first panel should be visible
    expect(onClick).toHaveBeenCalledTimes(1);
    // test container div
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('content-panels');
    // test panel count
    expect(container.querySelectorAll('.content-panel').length).toBe(3);
    // test trigger count
    expect(container.querySelectorAll('button[aria-controls]').length).toBe(3);

    // test panel tab index and aria attributes
    expect(container.querySelector('#panel-0')).not.toHaveAttribute('tabindex');
    expect(container.querySelector('#panel-1')).toHaveAttribute('tabindex', '-1');
    expect(container.querySelector('#panel-2')).toHaveAttribute('tabindex', '-1');
    fireEvent.click(container.querySelector('[aria-controls="panel-1"]'));
    expect(onClick).toHaveBeenCalledTimes(2);
    expect(container.querySelector('#panel-0')).toHaveAttribute('tabindex', '-1');
    expect(container.querySelector('#panel-1')).not.toHaveAttribute('tabindex');
    expect(container.querySelector('#panel-2')).toHaveAttribute('tabindex', '-1');
    fireEvent.click(container.querySelector('[aria-controls="panel-2"]'));
    expect(onClick).toHaveBeenCalledTimes(3);
    expect(container.querySelector('#panel-0')).toHaveAttribute('tabindex', '-1');
    expect(container.querySelector('#panel-1')).toHaveAttribute('tabindex', '-1');
    expect(container.querySelector('#panel-2')).not.toHaveAttribute('tabindex');
    fireEvent.click(container.querySelector('[aria-controls="panel-0"]'));
    expect(onClick).toHaveBeenCalledTimes(4);
    expect(container.querySelector('#panel-0')).not.toHaveAttribute('tabindex');
    expect(container.querySelector('#panel-1')).toHaveAttribute('tabindex', '-1');
    expect(container.querySelector('#panel-2')).toHaveAttribute('tabindex', '-1');
  });
});
