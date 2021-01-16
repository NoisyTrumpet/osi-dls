import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { debounce, trapFocus, scrollElement, canUseDOM } from '../../util'
import ContentPanel from './ContentPanel/ContentPanel';
import './ContentPanels.scss';

const ContentPanels = ({
  addClass,
  appendEl, // append an element to trapFocus in utils.js
  children,
  disableTrapFocus, // disable trapFocus in utils.js
  panelVisible,
  prependEl, // prepend an element to trapFocus in utils.js
  responsiveHeight,
  showPanel,
  testId,
}) => {
  const myRef = React.useRef(null);
  const classes = classNames(
    'content-panels',
    addClass,
  );

  const handleScroll = (contentPanelsContainer) => {
    debounce(
      scrollElement(
        contentPanelsContainer,
        contentPanelsContainer
          .getBoundingClientRect()
          .width * showPanel,
        'scrollLeft',
        500
      ),
      100
    );
  }

  const setPanelsHeight = (container, el) => {
    container.style.removeProperty('height');
    setTimeout( // wait for dialog to appear to obtain accurate height
      container.setAttribute('style', `height: ${el.offsetHeight + 16}px`),
      300
    );
  };

  const getPanel = (container) => {
    const contentPanels = container.querySelectorAll('.content-panel');
    contentPanels.forEach((el, index) => {
      const queryTriggerSelector = contentPanels[index - 1]?.querySelector(`[aria-controls="${el.getAttribute('id')}"]`);
      if (index === showPanel) {
        el.removeAttribute('tabindex');
        if (responsiveHeight) {setPanelsHeight(container, el);}
        if ((index > 0) && queryTriggerSelector) { queryTriggerSelector.setAttribute('aria-expanded', true); }
      } else {
        el.setAttribute('tabindex', -1);
        if ((index > 0) && queryTriggerSelector) {
          queryTriggerSelector.setAttribute('aria-expanded', false);
        }
      }
    });

    return contentPanels.length > showPanel ? contentPanels[showPanel] : null;
  };

  React.useEffect(() => {
    const handleResize = () => {
      const contentPanelsContainer = myRef.current;
      handleScroll(contentPanelsContainer)
    };

    if (canUseDOM()) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (canUseDOM()) {
        window.removeEventListener('resize', handleResize);
      }
    };
  });

  React.useEffect(() => {
    const contentPanelsContainer = myRef.current;
    handleScroll(contentPanelsContainer);
    const panel = getPanel(contentPanelsContainer);
    if (panel && !disableTrapFocus) { trapFocus(panel, prependEl, appendEl); }
    if (panelVisible) { panelVisible(showPanel, panel); }
  }, [showPanel]);

  return (
    <div className={classes} ref={myRef} data-testid={testId}>{children}</div>
  );
};

ContentPanels.Panel = ContentPanel;

ContentPanels.defaultProps = {
  showPanel: 0,
};

ContentPanels.propTypes = {
  addClass: PropTypes.string,
  appendEl: PropTypes.string, // appendEl="button.dialog-close"
  children: (props, propName, componentName) => {
    let error;
    const prop = props[propName];
    const requiredChildType = ['ContentPanel', 'QuestionPages'];
    React.Children.forEach(prop, (child) => {
      // type.name seems to work for both Class and Functional components
      if (!requiredChildType.includes(child.type.name)) {
        error = new Error(`\`${componentName}\` only accepts children of type \`${requiredChildType}\`. Child of type ${child.type.name} was found.`);
      }
    });
    return error;
  },
  disableTrapFocus: PropTypes.bool,
  prependEl: PropTypes.string,
  panelVisible: PropTypes.func, // callback function to show which panel is visible
  responsiveHeight: PropTypes.bool,
  showPanel: PropTypes.number,
  testId: PropTypes.string,
};
export default ContentPanels;
