import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { canUseDOM } from '../../util';
import './Collapse.scss';

const Collapse = ({
  isOpen,
  children,
  previewContent,
  trigger,
  isTriggerFocused,
  variant,
  addClass,
}) => {
  const collapseRef = useRef();
  const [collapseState, setCollapseState] = useState(!isOpen);

  const setCollapseHeight = () => {
    const collapseHeight = variant === 'fade-preview' ? 250 : 0;
    if(collapseRef.current){
      collapseRef.current.style.maxHeight = collapseState ? `${collapseHeight}px` : `${collapseRef.current.scrollHeight}px`;
    }
  };
  const debounce = (fn, ms) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this);
      }, ms);
    };
  };
  const debouncedHandleResize = debounce(setCollapseHeight, 250); // 250ms wait time to fire resize

  useEffect(() => { // for componentDidUpdate on collapseState change
    setCollapseHeight();
    if (canUseDOM()) {
      window.addEventListener('resize', debouncedHandleResize);
    }
    return () => {
      if (canUseDOM()) {
        window.removeEventListener('resize', debouncedHandleResize);
      }
    };
  }, [collapseState]);
  useEffect(() => { // Control collapse state using the isOpen prop
    setCollapseState(!isOpen);
    // Matching timing function from css to control the overflow visible property
    if (isOpen) {
      setTimeout(() => { collapseRef.current.classList.remove('expanding'); }, 240);
    }
  }, [isOpen]);

  const classes = classNames(
    'collapse-container',
    variant,
    !isOpen && 'collapsed',
    isTriggerFocused && 'focus',
    addClass,
  );
  const contentClasses = classNames(
    'collapse-content',
    isOpen && 'expanding',
  );
  const collapsePreviewSection = previewContent && <div className="collapse-preview">{previewContent}</div>;

  return (
    <div className={classes}>
      {trigger}
      {collapsePreviewSection}
      <div className={contentClasses} ref={collapseRef}>
        {children}
      </div>
    </div>
  );
};

Collapse.defaultProps = {
  variant: 'default',
  isOpen: false,
  isTriggerFocused: false,
};

Collapse.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  previewContent: PropTypes.node,
  trigger: PropTypes.node,
  isTriggerFocused: PropTypes.bool,
  variant: PropTypes.oneOf([
    'fade-preview',
    'default',
  ]),
  addClass: PropTypes.string,
};

export default Collapse;
