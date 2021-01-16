import React from 'react';
import PropTypes from 'prop-types';
import TabItem from './Fragments/TabItem';
import './Tabs.scss';

const keys = {
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46,
  enter: 13,
  space: 32
};

const Tabs = ({
  children,
  ariaLabel,
  backgroundSVG,
}) => {
  const sectionRef = React.useRef(null);
  const tablistRef = React.useRef(null);
  const [selectedTab, setSelectedTab] = React.useState(0); // first tab is selected by default, as per comps

  // focus on selectd tab
  React.useEffect(() => {
    if (sectionRef.current) {
      const tab = sectionRef.current.querySelectorAll('[role="tab"]')[selectedTab];
      if (tab) {
        tab.focus();
      }
    }
  }, [selectedTab]);

  const switchTabOnArrowPress = (event) => {
    // Add or subtract depending on key pressed
    const direction = {
      37: -1,
      38: -1,
      39: 1,
      40: 1
    };
    const directionValue = direction[event.keyCode];
    const targetIndex = event.target.parentNode.getAttribute('data-index');
    if (directionValue && targetIndex) {
      const indexToFocus = +targetIndex + +directionValue;
      const tabArray = sectionRef.current.querySelectorAll('[role="tab"]');
      if (indexToFocus < 0) {
        tabArray[tabArray.length - 1].focus();
      } else if (indexToFocus >= tabArray.length) {
        tabArray[0].focus();
      } else {
        tabArray[indexToFocus].focus();
      }
    };
  };

  const determineOrientation = (event) => {
    const key = event.keyCode;
    const vertical = tablistRef.current.getAttribute('aria-orientation') === 'vertical';
    let proceed = false;
    if (vertical) {
      if (key === keys.up || key === keys.down) {
        event.preventDefault();
        proceed = true;
      };
    }
    else {
      if (key === keys.left || key === keys.right) {
        proceed = true;
      };
    };

    if (proceed) {
      switchTabOnArrowPress(event);
    };
  };

  // Handle keydown on tabs
  const keydownEventListener = (event) => {
    const key = event.keyCode;
    switch (key) {
      case keys.end:
        event.preventDefault();
        // Activate last tab
        if (sectionRef.current) {
          const tabs = sectionRef.current.querySelectorAll('[role="tab"]');
          tabs[tabs.length - 1].focus();
        }
        break;
      case keys.home:
        event.preventDefault();
        // Activate first tab
        if (sectionRef.current) {
          sectionRef.current.querySelectorAll('[role="tab"]')[0].focus();
        }
        break;
      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
      default:
        break;
    };
  };

  // Handle keyup on tabs
  const keyupEventListener = (event) => {
    const key = event.keyCode;
    switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
      default:
        break;
    };
  };
  return (
    <section
      className="section-tabs"
      ref={sectionRef}
    >
      <div
        className="tablist"
        role="tablist"
        aria-label={ariaLabel}
        ref={tablistRef}
      >
        {
          React.Children.map(children, (child, index) => (
            React.cloneElement(child, {
              selected: selectedTab === index,
              sharedSVG: backgroundSVG,
              index,
              onClick: () => setSelectedTab(index),
              onKeyDown: keydownEventListener,
              onKeyUp: keyupEventListener,
            })
          ))
        }
      </div>
      {
        React.Children.map(children, (child, index) => (<div
          tabIndex="0"
          role="tabpanel"
          id={`${child.props.id}-tab`}
          key={child.props.id}
          aria-labelledby={child.props.id}
          hidden={index === selectedTab ? undefined : "hidden"}
          className="tabpanel"
        >
          {child.props.children}
        </div>
        ))
      }
    </section>
  );
};

Tabs.Item = TabItem;

Tabs.defaultProps = {};

Tabs.propTypes = {
  children: PropTypes.node,
  ariaLabel: PropTypes.string.isRequired,
  backgroundSVG: PropTypes.string,
};

export default Tabs;
