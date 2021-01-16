import React, { useState, useEffect, useRef } from 'react';
import './Accordion.scss';
// import PropTypes from 'prop-types';
import AccordionSection from './AccordionSection';
import AccordionContext from './Accordion.context';

const Accordion = ({ children }) => {
  const myRef = useRef(null); // https://reactjs.org/docs/hooks-reference.html#useref
  const [expandedAccordion, setExpandedAccordion] = useState(null); // https://reactjs.org/docs/hooks-reference.html#usestate

  useEffect(() => {
    const accordion = myRef.current;
    if (!accordion) { return; }
    const triggers = Array.prototype.slice.call(accordion.querySelectorAll('.accordion-trigger'));

    accordion.addEventListener('keydown', (event) => {
      const { target } = event;
      const key = event.which.toString();
      // 33 = Page Up, 34 = Page Down
      const ctrlModifier = (event.ctrlKey && key.match(/33|34/));
      // Is this coming from an accordion header?
      if (target.classList.contains('accordion-trigger')) {
        // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
        // 38 = Up, 40 = Down
        if (key.match(/38|40/) || ctrlModifier) {
          const index = triggers.indexOf(target);
          const direction = (key.match(/34|40/)) ? 1 : -1;
          const { length } = triggers;
          const newIndex = (index + length + direction) % length;
          triggers[newIndex].focus();
          event.preventDefault();
        } else if (key.match(/35|36/)) {
          // 35 = End, 36 = Home keyboard operations
          switch (key) {
            // Go to first accordion
            case '36':
              triggers[0].focus();
              break;
            // Go to last accordion
            case '35':
              triggers[triggers.length - 1].focus();
              break;
            default:
              break;
          }
          event.preventDefault();
        }
      }
    });

    accordion.querySelectorAll('.accordion-trigger').forEach((trigger) => {
      trigger.addEventListener('focus', () => {
        accordion.classList.add('focus');
      });
      trigger.addEventListener('blur', () => {
        accordion.classList.remove('focus');
      });
    });
  }, []);

  const handleClick = (event) => {
    const { target } = event;
    // if target is toggle-able
    if (!target.classList.contains('accordion-category-link') && target.classList.contains('accordion-trigger')) {
      event.preventDefault();
      // close the open accordion if not the target
      if (expandedAccordion && expandedAccordion !== target) {
        expandedAccordion.setAttribute('aria-expanded', 'false');
        const El = myRef.current.querySelector(`#${expandedAccordion.getAttribute('aria-controls')}`);
        El.style.maxHeight = '0px';
        El.classList.remove('accordion-expanded');
      }
      // Toggle the targeted accordion
      if (target.getAttribute('aria-expanded') == 'true') { // eslint-disable-line eqeqeq
        target.setAttribute('aria-expanded', 'false');
        const El = myRef.current.querySelector(`#${target.getAttribute('aria-controls')}`);
        El.style.maxHeight = '0px';
        El.classList.remove('accordion-expanded');
        setExpandedAccordion(null);
      } else {
        target.setAttribute('aria-expanded', 'true');
        const El = myRef.current.querySelector(`#${target.getAttribute('aria-controls')}`);
        El.style.maxHeight = `${El.scrollHeight}px`;
        El.classList.add('accordion-expanded');
        setExpandedAccordion(target);
      }
    }
  };

  return (
    <div ref={myRef} className="accordion" role="presentation" onClick={handleClick}>
      <AccordionContext.Provider value={expandedAccordion}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

Accordion.defaultProps = {};

Accordion.propTypes = {
  children: (props, propName, componentName) => {
    let error;
    const prop = props[propName];
    const requiredChildType = ['AccordionSection', 'MainNavSection'];
    React.Children.forEach(prop, (child) => {
      // type.name seems to work for both Class and Functional components
      if (!requiredChildType.includes(child.type.name)) {
        error = new Error(`\`${componentName}\` only accepts children of type \`${requiredChildType}\`. Child of type ${child.type.name} was found.`);
      }
    });
    return error;
  },
};

// Enables JSX dot notation - https://reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type
Accordion.Section = AccordionSection;

export default Accordion;
